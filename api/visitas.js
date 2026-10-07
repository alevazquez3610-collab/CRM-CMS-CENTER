// Visitas de los sitios (Vercel Web Analytics) para /metricas.
// Solo responde a un super_admin del CRM: valida el ID token de Firebase con
// Auth y lee su rol en /crm_users/{uid} con ese mismo token (las reglas le
// dejan leer su propio doc). El token de Vercel vive en la variable de
// entorno VERCEL_TOKEN del proyecto finnix-centro y nunca llega al navegador.
const KEY = 'AIzaSyCgpZnHLfdoMu3YuCvQvJUnVWONpI3g2LU';
const FIREBASE_PROJECT = 'finnix-crm';
const TEAM = 'team_3MqbRUB5GWXF8RuIJMkNngr9';
const TEAM_SLUG = 'alevazquez3610-collabs-projects';
const ORIGEN = 'https://centro.finnix.com.ar/';

const SITIOS = [
  { nombre: 'finnix.com.ar',          proyecto: 'finnix-ar',             id: 'prj_WjOMPvfAPYNISVP3iTMLYcJj61Jq' },
  { nombre: 'Finnix App',             proyecto: 'finnix-app',            id: 'prj_g6QJsvVj3lAwW2Miup9O1IaddGiG' },
  { nombre: 'Kit Finnix',             proyecto: 'kitfinnix',             id: 'prj_Dya88zLc5ioyT97M4GSLEHq9h01W' },
  { nombre: 'Minimarket.OS',          proyecto: 'minimarket-os',         id: 'prj_FKiL0mVTIF7MysNCrdCazOSdQKk5' },
  { nombre: 'Urban OS',               proyecto: 'urban-os',              id: 'prj_N2bYYiNwKMDQGgMSmXRQasauoFc4' },
  { nombre: 'Calculadora Ecommerce',  proyecto: 'calculadora-ecommerce', id: 'prj_AU2aScoqdGbNJoPa63imOJXzgICH' },
  { nombre: 'Calculadora Mayorista',  proyecto: 'calculadora-mayorista', id: 'prj_qe2PIh70IAxiufBfRRnBFHmAj3Ub' },
];

async function rolDe(idToken, appCheck) {
  const r = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${KEY}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', Referer: ORIGEN },
    body: JSON.stringify({ idToken }),
  });
  if (!r.ok) return null;
  const uid = (await r.json()).users?.[0]?.localId;
  if (!uid) return null;
  const h = { Authorization: `Bearer ${idToken}`, Referer: ORIGEN };
  if (appCheck) h['X-Firebase-AppCheck'] = appCheck;
  const d = await fetch(`https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT}/databases/(default)/documents/crm_users/${uid}`, { headers: h });
  if (!d.ok) return null;
  return (await d.json()).fields?.rol?.stringValue || null;
}

async function contar(token, projectId, since, until) {
  const q = new URLSearchParams({ projectId, teamId: TEAM, since: new Date(since).toISOString(), until: new Date(until).toISOString() });
  const r = await fetch(`https://api.vercel.com/v1/query/web-analytics/visits/count?${q}`, { headers: { Authorization: `Bearer ${token}` } });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw Object.assign(new Error(j.error?.message || `Vercel ${r.status}`), { code: j.error?.code || String(r.status) });
  return { visitas: Number(j.data?.pageviews) || 0, visitantes: Number(j.data?.visitors) || 0 };
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  const idToken = String(req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!idToken) return res.status(401).json({ error: 'Falta la sesión.' });

  let rol = null;
  try { rol = await rolDe(idToken, req.headers['x-firebase-appcheck']); } catch { /* cae al 403 */ }
  if (rol !== 'super_admin') return res.status(403).json({ error: 'Solo super_admin.' });

  const token = process.env.VERCEL_TOKEN;
  if (!token) return res.status(200).json({ configurado: false });

  const ahora = Date.now(), dia = 864e5;
  const sitios = await Promise.all(SITIOS.map(async s => {
    const base = { nombre: s.nombre, proyecto: s.proyecto, panel: `https://vercel.com/${TEAM_SLUG}/${s.proyecto}/analytics` };
    try {
      const [d7, d30] = await Promise.all([contar(token, s.id, ahora - 7 * dia, ahora), contar(token, s.id, ahora - 30 * dia, ahora)]);
      return { ...base, d7, d30 };
    } catch (e) {
      return { ...base, error: e.code === 'web_analytics_not_enabled' ? 'apagado' : e.message };
    }
  }));
  return res.status(200).json({ configurado: true, actualizado: new Date(ahora).toISOString(), sitios });
};

module.exports.SITIOS = SITIOS;
