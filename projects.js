// Centro de control Finnix — valores por defecto. Lo que se edita en
// /cms (Paneles del Centro) tiene prioridad; "Sincronizar con projects.js"
// suma lo nuevo de acá sin pisar lo que ya editaste.
// panel: ruta del login dentro del dominio (verificada en el código de cada repo).
// sinLogin: sitio público sin pantalla de ingreso (el botón dice "Abrir").
window.FINNIX_TEAM = "alevazquez3610-collabs-projects";
window.FINNIX_GH = "alevazquez3610-collab";

window.FINNIX_PROJECTS = [
  { id: "web",        name: "Finnix Web",            mono: "fx", color: "#5BA3E0", cat: "finnix", url: "https://www.finnix.com.ar",      panel: "/",       sinLogin: true, vercel: "finnix-ar",     repo: "finnix.ar",     desc: "Sitio institucional y landing principal." },
  { id: "app",        name: "Finnix App",            mono: "ap", color: "#1a5c9e", cat: "finnix", url: "https://app.finnix.com.ar",      panel: "/login",  vercel: "finnix-app",    repo: "finnix-app",    desc: "Aplicación para clientes." },
  { id: "crm",        name: "CRM Finnix",            mono: "cr", color: "#6d28d9", cat: "finnix", url: "https://crm.finnix.com.ar",      panel: "/",       vercel: "crm-finnix",    repo: "crm-finnix",    desc: "Gestión de clientes, leads y seguimiento. El login está en la raíz." },
  { id: "kit",        name: "Kit Finnix",            mono: "kt", color: "#0ea5e9", cat: "finnix", url: "https://kit.finnix.com.ar",      panel: "/",       sinLogin: true, vercel: "kitfinnix",     repo: "kitfinnix",     desc: "Venta de facturación electrónica con CAE y QR." },
  { id: "panel",      name: "Finnix Panel",          mono: "pn", color: "#334155", cat: "finnix", url: "https://finnix-panel.vercel.app", panel: "/",      vercel: "finnix-panel",  repo: null,            desc: "CRM anterior del estudio contable." },
  { id: "crm-legacy", name: "Finnix CRM (v1)",       mono: "c1", color: "#64748B", cat: "finnix", url: "https://finnix-crm.vercel.app",  panel: "/",       vercel: "finnix-crm",    repo: "finnix-crm",    desc: "Versión anterior del CRM." },
  { id: "market",     name: "Minimarket.OS",         mono: "mk", color: "#1f8a52", cat: "os",     url: "https://market.finnix.com.ar",   panel: "/",       vercel: "minimarket-os", repo: "Minimarket.OS", desc: "Sistema de gestión para minimercados. Landing en /landing.html." },
  { id: "urban",      name: "Urban OS",              mono: "ub", color: "#f59e0b", cat: "os",     url: "https://urbanos.finnix.com.ar",  panel: "/",       vercel: "urban-os",      repo: "urban-os",      desc: "Sistema de gestión para indumentaria. Landing en /landing.html." },
  { id: "vant",       name: "Vant OS",               mono: "vt", color: "#e11d48", cat: "os",     url: "https://vantos-alpha.vercel.app", panel: "/login", vercel: "vant.os",       repo: "vant-os",       desc: "Control de inventario y ventas (alpha)." },
  { id: "resto",      name: "Resto.OS",              mono: "rs", color: "#ea580c", cat: "os",     url: null,                             panel: "/",       vercel: null,            repo: "Resto.os",      desc: "Sistema para gastronomía (sin deploy)." },
  { id: "calc-ecom",  name: "Calculadora Ecommerce", mono: "ce", color: "#14b8a6", cat: "tools",  url: "https://calculadora-ecommerce-wheat.vercel.app", panel: "/", sinLogin: true, vercel: "calculadora-ecommerce", repo: "calculadora-ecommerce", desc: "Costos, comisiones y márgenes de ecommerce." },
  { id: "calc-may",   name: "Calculadora Mayorista", mono: "cm", color: "#8b5cf6", cat: "tools",  url: "https://calculadora-mayorista-pi.vercel.app",    panel: "/", sinLogin: true, vercel: "calculadora-mayorista", repo: "calculadora-mayorista", desc: "Precios y márgenes mayoristas." },
];

// Accesos a consolas y herramientas externas, agrupados.
window.FINNIX_GRUPOS = ["Comunicación", "Negocio", "Métricas", "Desarrollo"];
window.FINNIX_CONSOLES = [
  { id: "whatsapp_web",      grupo: "Comunicación", name: "WhatsApp Web",       mono: "wa", color: "#25D366", url: "https://web.whatsapp.com" },
  { id: "whatsapp_business", grupo: "Comunicación", name: "WhatsApp Business",  mono: "wb", color: "#128C7E", url: "https://business.facebook.com/latest/inbox" },
  { id: "monday",            grupo: "Comunicación", name: "monday.com",         mono: "md", color: "#FF3D57", url: "https://auth.monday.com/login" },
  { id: "gmail",             grupo: "Comunicación", name: "Gmail",              mono: "gm", color: "#EA4335", url: "https://mail.google.com" },
  { id: "mercadopago",       grupo: "Negocio",      name: "Mercado Pago",       mono: "mp", color: "#009EE3", url: "https://www.mercadopago.com.ar/home" },
  { id: "arca",              grupo: "Negocio",      name: "ARCA (clave fiscal)", mono: "ar", color: "#0b4f8a", url: "https://auth.afip.gob.ar/contribuyente_/login.xhtml" },
  { id: "metricas",          grupo: "Métricas",     name: "Métricas Finnix",    mono: "kp", color: "#5BA3E0", url: "/metricas/" },
  { id: "analytics_vercel",  grupo: "Métricas",     name: "Analytics Vercel",   mono: "an", color: "#10b981", url: "https://vercel.com/alevazquez3610-collabs-projects/~/analytics" },
  { id: "search_console",    grupo: "Métricas",     name: "Search Console",     mono: "sc", color: "#4285F4", url: "https://search.google.com/search-console?resource_id=sc-domain:finnix.com.ar" },
  { id: "vercel",            grupo: "Desarrollo",   name: "Vercel",             mono: "▲",  color: "#000000", url: "https://vercel.com/alevazquez3610-collabs-projects" },
  { id: "github",            grupo: "Desarrollo",   name: "GitHub",             mono: "gh", color: "#24292f", url: "https://github.com/alevazquez3610-collab?tab=repositories" },
  { id: "firebase",          grupo: "Desarrollo",   name: "Firebase",           mono: "fb", color: "#f59e0b", url: "https://console.firebase.google.com/project/finnix-crm/overview" },
  { id: "google_cloud",      grupo: "Desarrollo",   name: "Google Cloud",       mono: "gc", color: "#34A853", url: "https://console.cloud.google.com/home/dashboard?project=finnix-crm" },
  { id: "ai_studio",         grupo: "Desarrollo",   name: "AI Studio",          mono: "ai", color: "#4285F4", url: "https://aistudio.google.com/apps" },
  { id: "dns_finnix_com_ar", grupo: "Desarrollo",   name: "DNS finnix.com.ar",  mono: "dn", color: "#1a5c9e", url: "https://vercel.com/alevazquez3610-collabs-projects/~/domains/finnix.com.ar" },
];
