// Centro de control Finnix — editá esta lista para sumar/quitar proyectos.
// panel: ruta del login/panel dentro del dominio (ej. "/login", "/admin").
window.FINNIX_TEAM = "alevazquez3610-collabs-projects";
window.FINNIX_GH = "alevazquez3610-collab";

window.FINNIX_PROJECTS = [
  { id: "web",        name: "Finnix Web",            mono: "fx", color: "#5BA3E0", cat: "finnix",  url: "https://www.finnix.com.ar",   panel: "/",           vercel: "finnix-ar",             repo: "finnix.ar",             desc: "Sitio institucional y landing principal." },
  { id: "app",        name: "Finnix App",            mono: "ap", color: "#1a5c9e", cat: "finnix",  url: "https://app.finnix.com.ar",   panel: "/",           vercel: "finnix-app",            repo: "finnix-app",            desc: "Aplicación para clientes." },
  { id: "crm",        name: "CRM Finnix",            mono: "cr", color: "#6d28d9", cat: "finnix",  url: "https://crm.finnix.com.ar",   panel: "/",           vercel: "crm-finnix",            repo: "crm-finnix",            desc: "Gestión de clientes, leads y seguimiento." },
  { id: "kit",        name: "Kit Finnix",            mono: "kt", color: "#0ea5e9", cat: "finnix",  url: "https://kit.finnix.com.ar",   panel: "/",           vercel: "kitfinnix",             repo: "kitfinnix",             desc: "Kit de herramientas Finnix." },
  { id: "panel",      name: "Finnix Panel",          mono: "pn", color: "#334155", cat: "finnix",  url: "https://finnix-panel.vercel.app", panel: "/",       vercel: "finnix-panel",          repo: null,                    desc: "Panel de administración / portal." },
  { id: "crm-legacy", name: "Finnix CRM (v1)",       mono: "c1", color: "#64748B", cat: "finnix",  url: "https://finnix-crm.vercel.app",   panel: "/",       vercel: "finnix-crm",            repo: "finnix-crm",            desc: "Versión anterior del CRM." },
  { id: "market",     name: "Minimarket.OS",         mono: "mk", color: "#1f8a52", cat: "os",      url: "https://market.finnix.com.ar", panel: "/",          vercel: "minimarket-os",         repo: "Minimarket.OS",         desc: "Sistema de gestión para minimercados." },
  { id: "urban",      name: "Urban OS",              mono: "ub", color: "#f59e0b", cat: "os",      url: "https://urbanos.finnix.com.ar", panel: "/",         vercel: "urban-os",              repo: "urban-os",              desc: "Sistema de gestión Urban." },
  { id: "vant",       name: "Vant OS",               mono: "vt", color: "#e11d48", cat: "os",      url: "https://vantos-alpha.vercel.app", panel: "/",       vercel: "vant.os",               repo: "vant-os",               desc: "Sistema de gestión Vant (alpha)." },
  { id: "resto",      name: "Resto.OS",              mono: "rs", color: "#ea580c", cat: "os",      url: null,                          panel: "/",           vercel: null,                    repo: "Resto.os",              desc: "Sistema para gastronomía (sin deploy)." },
  { id: "calc-ecom",  name: "Calculadora Ecommerce", mono: "ce", color: "#14b8a6", cat: "tools",   url: "https://calculadora-ecommerce-wheat.vercel.app", panel: "/", vercel: "calculadora-ecommerce", repo: "calculadora-ecommerce", desc: "Costos, comisiones y márgenes de ecommerce." },
  { id: "calc-may",   name: "Calculadora Mayorista", mono: "cm", color: "#8b5cf6", cat: "tools",   url: "https://calculadora-mayorista-pi.vercel.app",    panel: "/", vercel: "calculadora-mayorista", repo: "calculadora-mayorista", desc: "Precios y márgenes mayoristas." },
];

// Accesos a consolas externas.
window.FINNIX_CONSOLES = [
  { name: "Vercel",           mono: "▲",  color: "#000000", url: "https://vercel.com/alevazquez3610-collabs-projects" },
  { name: "GitHub",           mono: "gh", color: "#24292f", url: "https://github.com/alevazquez3610-collab?tab=repositories" },
  { name: "AI Studio",        mono: "ai", color: "#4285F4", url: "https://aistudio.google.com/apps" },
  { name: "Firebase",        mono: "fb", color: "#f59e0b", url: "https://console.firebase.google.com/project/finnix-crm/overview" },
  { name: "DNS finnix.com.ar",mono: "dn", color: "#1a5c9e", url: "https://vercel.com/alevazquez3610-collabs-projects/~/domains/finnix.com.ar" },
  { name: "Search Console",   mono: "sc", color: "#4285F4", url: "https://search.google.com/search-console?resource_id=sc-domain:finnix.com.ar" },
  { name: "Analytics Vercel", mono: "an", color: "#10b981", url: "https://vercel.com/alevazquez3610-collabs-projects/~/analytics" },
];
