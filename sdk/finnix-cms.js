/*!
 * Finnix CMS — SDK público (sin dependencias).
 *
 * Uso en cualquier sitio:
 *   <script src="https://centro.finnix.com.ar/sdk/finnix-cms.js" data-site="finnix" defer></script>
 *
 *   <h1 data-cms="hero_titulo">Texto por defecto</h1>        → texto / html
 *   <img data-cms="hero_imagen" src="fallback.png">          → imagen (src)
 *   <a data-cms="cta_link" href="#">Botón</a>                 → link (href)
 *   <a data-cms="whatsapp" data-cms-attr="href">…</a>         → valor en un atributo
 *   <div data-cms="faq"><template>                            → lista (repite el template)
 *      <details><summary data-cms-item="pregunta"></summary><p data-cms-item="respuesta"></p></details>
 *   </template></div>
 *   <div data-cms-posts data-limit="6"></div>                 → listado del blog
 *   <article data-cms-post></article>                          → post según ?slug=
 *
 * Si el CMS no responde o un campo está vacío, queda el HTML original.
 */
(function () {
  'use strict';
  var PROJECT = 'finnix-crm';
  var KEY = 'AIzaSyCgpZnHLfdoMu3YuCvQvJUnVWONpI3g2LU';
  var BASE = window.FINNIX_CMS_BASE || 'https://firestore.googleapis.com/v1/projects/' + PROJECT + '/databases/(default)/documents';

  function val(v) {
    if (!v) return null;
    if ('stringValue' in v) return v.stringValue;
    if ('integerValue' in v) return Number(v.integerValue);
    if ('doubleValue' in v) return v.doubleValue;
    if ('booleanValue' in v) return v.booleanValue;
    if ('timestampValue' in v) return v.timestampValue;
    if ('nullValue' in v) return null;
    if ('arrayValue' in v) return (v.arrayValue.values || []).map(val);
    if ('mapValue' in v) return obj(v.mapValue.fields);
    return null;
  }
  function obj(fields) {
    var o = {};
    for (var k in fields || {}) o[k] = val(fields[k]);
    return o;
  }
  function doc(d) {
    var o = obj(d.fields);
    o.id = d.name.split('/').pop();
    return o;
  }

  function coleccion(path) {
    var out = [];
    function page(token) {
      var url = BASE + '/' + path + '?pageSize=300&key=' + KEY + (token ? '&pageToken=' + token : '');
      return fetch(url).then(function (r) {
        if (!r.ok) throw new Error('CMS ' + r.status);
        return r.json();
      }).then(function (j) {
        (j.documents || []).forEach(function (d) { out.push(doc(d)); });
        return j.nextPageToken ? page(j.nextPageToken) : out;
      });
    }
    return page();
  }

  function consulta(col, filtros) {
    var where = filtros.map(function (f) {
      return { fieldFilter: { field: { fieldPath: f[0] }, op: 'EQUAL', value: { stringValue: f[1] } } };
    });
    var body = { structuredQuery: { from: [{ collectionId: col }], where: where.length > 1 ? { compositeFilter: { op: 'AND', filters: where } } : where[0], limit: 500 } };
    return fetch(BASE + ':runQuery?key=' + KEY, { method: 'POST', body: JSON.stringify(body) })
      .then(function (r) { if (!r.ok) throw new Error('CMS ' + r.status); return r.json(); })
      .then(function (rows) { return rows.filter(function (x) { return x.document; }).map(function (x) { return doc(x.document); }); });
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function vacio(v) { return v == null || v === '' || (Array.isArray(v) && !v.length); }

  function aplicarCampo(el, c) {
    var v = c.valor;
    if (vacio(v)) return;
    var attr = el.getAttribute('data-cms-attr');
    if (attr) { el.setAttribute(attr, v); return; }
    switch (c.tipo) {
      case 'html': el.innerHTML = v; break;
      case 'imagen':
        if (el.tagName === 'IMG') el.src = v; else el.style.backgroundImage = 'url("' + v + '")';
        break;
      case 'link':
        if (el.tagName === 'A') el.href = v; else el.textContent = v;
        break;
      case 'lista':
        var tpl = el.querySelector('template');
        if (!tpl || !Array.isArray(v)) return;
        Array.prototype.slice.call(el.children).forEach(function (n) { if (n !== tpl) n.remove(); });
        v.forEach(function (item) {
          var frag = tpl.content.cloneNode(true);
          frag.querySelectorAll('[data-cms-item]').forEach(function (n) {
            var k = n.getAttribute('data-cms-item');
            if (item[k] == null) return;
            var a = n.getAttribute('data-cms-attr');
            if (a) n.setAttribute(a, item[k]); else n.textContent = item[k];
          });
          el.appendChild(frag);
        });
        break;
      default: el.textContent = v;
    }
  }

  function fecha(f) {
    if (!f) return '';
    try { return new Date(f).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' }); } catch (e) { return ''; }
  }

  function noEncontrado(el) {
    el.innerHTML = '<p class="fx-post-404">' + esc(el.getAttribute('data-404') || 'No encontramos esta nota.') + '</p>';
  }

  function pintarPosts(sitio) {
    var listas = document.querySelectorAll('[data-cms-posts]');
    var single = document.querySelector('[data-cms-post]');
    if (!listas.length && !single) return Promise.resolve();
    return consulta('cms_posts', [['sitio', sitio], ['estado', 'publicado']]).then(function (posts) {
      posts.sort(function (a, b) { return String(b.fecha || '').localeCompare(String(a.fecha || '')); });
      listas.forEach(function (el) {
        var lim = Number(el.getAttribute('data-limit')) || posts.length;
        var base = el.getAttribute('data-post-url') || 'blog.html';
        el.innerHTML = posts.slice(0, lim).map(function (p) {
          var href = base + '?slug=' + encodeURIComponent(p.slug);
          return '<article class="fx-post">' +
            (p.portada ? '<a href="' + esc(href) + '"><img class="fx-post-img" src="' + esc(p.portada) + '" alt="" loading="lazy"></a>' : '') +
            '<p class="fx-post-date">' + esc(fecha(p.fecha)) + '</p>' +
            '<h3 class="fx-post-title"><a href="' + esc(href) + '">' + esc(p.titulo) + '</a></h3>' +
            (p.resumen ? '<p class="fx-post-sum">' + esc(p.resumen) + '</p>' : '') +
            '</article>';
        }).join('') || el.innerHTML;
      });
      if (single) {
        var slug = new URLSearchParams(location.search).get('slug');
        var p = posts.filter(function (x) { return x.slug === slug; })[0];
        if (!p) { noEncontrado(single); return; }
        document.title = p.titulo + ' · ' + document.title;
        single.innerHTML =
          (p.portada ? '<img class="fx-post-cover" src="' + esc(p.portada) + '" alt="">' : '') +
          '<p class="fx-post-date">' + esc(fecha(p.fecha)) + '</p>' +
          '<h1 class="fx-post-h">' + esc(p.titulo) + '</h1>' +
          '<div class="fx-post-body">' + (p.cuerpo_html || '') + '</div>';
      }
    }, function (e) {
      if (single) noEncontrado(single);
      throw e;
    });
  }

  function cargar(sitio) {
    var campos = coleccion('cms_sites/' + sitio + '/campos').then(function (cs) {
      var map = {};
      cs.forEach(function (c) { map[c.id] = c; });
      document.querySelectorAll('[data-cms]').forEach(function (el) {
        var c = map[el.getAttribute('data-cms')];
        if (c) aplicarCampo(el, c);
      });
      document.documentElement.setAttribute('data-cms-ready', '');
      document.dispatchEvent(new CustomEvent('finnix-cms:ready', { detail: map }));
      return map;
    });
    return Promise.all([campos, pintarPosts(sitio)]).catch(function (e) {
      if (window.console) console.warn('[finnix-cms]', e.message);
    });
  }

  window.FinnixCMS = { coleccion: coleccion, consulta: consulta, cargar: cargar };

  var me = document.currentScript;
  var sitio = me && me.getAttribute('data-site');
  if (sitio) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { cargar(sitio); });
    else cargar(sitio);
  }
})();
