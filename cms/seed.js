// Estructura inicial del CMS. Se carga una sola vez desde el CMS
// ("Cargar estructura inicial") y después se edita desde la interfaz.
// Los valores de finnix.com.ar son el contenido actual de la web.

export const SITIOS = [
  { id: 'finnix',  nombre: 'finnix.com.ar',     dominio: 'https://www.finnix.com.ar',               orden: 1 },
  { id: 'market',  nombre: 'Minimarket.OS',     dominio: 'https://market.finnix.com.ar/landing.html',  orden: 2 },
  { id: 'urbanos', nombre: 'Urban OS',          dominio: 'https://urbanos.finnix.com.ar/landing.html', orden: 3 },
];

const c = (seccion, etiqueta, tipo, valor = '', extra = {}) => ({ seccion, etiqueta, tipo, valor, ...extra });

export const CAMPOS = {
  finnix: {
    hero_titulo:        c('Portada', 'Título principal', 'html', 'Tu información fiscal, contable y de e-commerce <em>en un solo lugar</em>'),
    hero_sub:           c('Portada', 'Bajada', 'textarea', 'Desde una liquidación simple de monotributo hasta operaciones en el exterior. La solución digital que tu negocio necesita hoy.'),
    slide_fiscal_titulo: c('Portada', 'Slide fiscal · título', 'html', 'Liquidá tus impuestos <em>sin sorpresas</em> a fin de mes'),
    slide_fiscal_sub:   c('Portada', 'Slide fiscal · bajada', 'textarea', 'Monotributo, IVA, IIBB o Ganancias — vencimientos bajo control y panel claro de tu situación impositiva.'),
    slide_ecom_titulo:  c('Portada', 'Slide e-commerce · título', 'html', 'Vendé online <em>sabiendo qué</em> te va a costar'),
    slide_ecom_sub:     c('Portada', 'Slide e-commerce · bajada', 'textarea', 'Diagnóstico, costos reales y estrategia de precio — sin terminar con deuda en ARCA que no viste venir.'),
    slide_os_titulo:    c('Portada', 'Slide terminal · título', 'html', 'Una terminal <em>hecha para</em> tu rubro'),
    slide_os_sub:       c('Portada', 'Slide terminal · bajada', 'textarea', 'Ventas, compras y proveedores bajo control en tiempo real — desde el celular o desde el local.'),

    sol_eye:            c('Soluciones', 'Antetítulo', 'texto', 'NUESTROS SERVICIOS'),
    sol_titulo:         c('Soluciones', 'Título', 'texto', 'Soluciones para tu negocio'),
    sol_sub:            c('Soluciones', 'Bajada', 'textarea', 'Seleccioná el segmento para conocer en detalle los paquetes, terminales y herramientas disponibles.'),

    planes_eye:         c('Planes', 'Antetítulo', 'texto', 'GESTIÓN FISCAL Y SISTEMAS'),
    planes_titulo:      c('Planes', 'Título', 'texto', 'Armá tu plan en dos pasos'),
    planes_sub:         c('Planes', 'Bajada', 'textarea', 'Primero elegís tu sistema de gestión según tu rubro. Después, si querés, sumás la liquidación de impuestos con tu propio contador.'),

    como_eye:           c('Cómo trabajamos', 'Antetítulo', 'texto', 'EL PROCESO'),
    como_titulo:        c('Cómo trabajamos', 'Título', 'texto', 'Cómo trabajamos'),

    nosotros_eye:       c('Nosotros', 'Antetítulo', 'texto', 'SOMOS FINNIX'),
    nosotros_titulo:    c('Nosotros', 'Título', 'html', 'Te acompañamos desde lo más simple <em>hasta lo más complejo.</em>'),
    nosotros_texto:     c('Nosotros', 'Texto', 'textarea', 'Consultoría contable, fiscal y digital para monotributistas, PyMEs y emprendedores de toda la Argentina. Te acompañamos desde lo más simple hasta lo más complejo, uniendo en un solo lugar lo que ninguna agencia junta: impuestos, contabilidad y tecnología.'),

    social_titulo:      c('Error común', 'Título', 'texto', 'El error más común: poner el precio a ojo y enterarte tarde de lo que debías en impuestos'),
    social_p1:          c('Error común', 'Párrafo 1', 'textarea', 'Por eso unimos en un solo lugar lo fiscal, lo contable y lo digital — para que tomes decisiones con números reales, no a ciegas.'),
    social_p2:          c('Error común', 'Párrafo 2', 'textarea', 'Lo que ninguna agencia de e-commerce te dice antes de abrir tu tienda, nosotros te lo decimos el día uno.'),

    faq_eye:            c('Preguntas frecuentes', 'Antetítulo', 'texto', 'DUDAS COMUNES'),
    faq_titulo:         c('Preguntas frecuentes', 'Título', 'texto', 'Preguntas frecuentes'),
    faq_sub:            c('Preguntas frecuentes', 'Bajada', 'textarea', 'Si no encontrás tu respuesta acá, escribinos directo por WhatsApp.'),
    faq:                c('Preguntas frecuentes', 'Preguntas', 'lista', [
      { pregunta: '¿En qué zona del país trabajan?', respuesta: 'La atención es 100% remota, así que trabajamos con negocios de toda la Argentina — desde el monotributo más simple hasta operaciones complejas.' },
      { pregunta: '¿Cuánto tardan en responder una consulta?', respuesta: 'Respondemos en menos de 24 horas, ya sea que nos escribas por el formulario de contacto o por WhatsApp.' },
      { pregunta: '¿Tengo que ser Responsable Inscripto para trabajar con ustedes?', respuesta: 'No. Acompañamos desde el monotributo más simple hasta Responsables Inscriptos, Sociedades (SRL/SA) y operaciones con el exterior.' },
      { pregunta: '¿Puedo empezar solo con lo fiscal y sumar sistemas o e-commerce más adelante?', respuesta: 'Sí. Cada solución se contrata de forma independiente — podés arrancar por lo fiscal y sumar una terminal .OS o consultoría de e-commerce cuando tu negocio lo necesite.' },
      { pregunta: '¿Qué pasa con la documentación que necesita firma de un contador matriculado?', respuesta: 'La derivamos a profesionales habilitados. Nuestros servicios de consultoría no sustituyen el dictamen de un Contador Público Matriculado.' },
      { pregunta: '¿Cómo empiezo?', respuesta: 'Completá el formulario de contacto o escribinos por WhatsApp y coordinamos un diagnóstico inicial sin compromiso.' },
    ], { item: ['pregunta', 'respuesta'] }),

    whatsapp:           c('Contacto', 'Número de WhatsApp (sin +)', 'texto', '5493718415249'),
  },
  market: {
    hero_eyebrow:  c('Portada', 'Antetítulo', 'texto', "🏪 código de barras · vencimientos · caja diaria"),
    hero_titulo:   c('Portada', 'Título principal', 'html', "El mostrador de tu comercio, <span class=\"accent\">ordenado.</span>"),
    hero_sub:      c('Portada', 'Bajada', 'textarea', "Escaneá el código, cobrá y calculá el vuelto en segundos. Vencimientos a 7 días y stock crítico, siempre a la vista."),
    demo_kicker:   c('Demo', 'Antetítulo', 'texto', "Probalo sin cuenta"),
    demo_titulo:   c('Demo', 'Título', 'texto', "Así se cobra en el mostrador"),
    demo_sub:      c('Demo', 'Bajada', 'textarea', "Escaneá uno de los códigos de ejemplo (o cargá un producto a mano) y mirá el vuelto calcularse solo."),
    features:      c('Funciones', 'Tarjetas', 'lista', [
      { icono: "🔎", titulo: "Código de barras", texto: "Escaneá el producto y se agrega solo al ticket — sin buscarlo a mano en una lista." },
      { icono: "⏰", titulo: "Vencimientos", texto: "Alerta de qué mercadería vence en los próximos 7 días, para armar una promo antes de perderla." },
      { icono: "🌗", titulo: "Turno día/noche", texto: "Separá la caja y las ventas por turno — quien abre y quien cierra queda registrado por separado." },
      { icono: "📈", titulo: "Punto de equilibrio", texto: "Un cálculo automático te muestra cuánto tenés que facturar este mes para cubrir tus costos fijos." },
      { icono: "📦", titulo: "Stock crítico", texto: "Vas viendo qué productos están por debajo de tu mínimo, antes de que se te acaben." },
      { icono: "📊", titulo: "Panel contador", texto: "Si lo vinculás con tu ficha fiscal, tu contador ve tus liquidaciones — nunca tus ventas ni tu stock." },
    ], { item: ['icono', 'titulo', 'texto'] }),
    cierre_titulo: c('Cierre', 'Título', 'texto', "Empezá cuando quieras"),
    cierre_sub:    c('Cierre', 'Bajada', 'textarea', "Activás tu cuenta hoy. Si más adelante querés que tu contador vea tus liquidaciones, lo conectás vos — nunca al revés."),
  },
  urbanos: {
    hero_eyebrow:  c('Portada', 'Antetítulo', 'texto', "👕 control de talles · punto de venta · whatsapp"),
    hero_titulo:   c('Portada', 'Título principal', 'html', "El sistema para vender ropa <span class=\"accent\">en el local y por chat.</span>"),
    hero_sub:      c('Portada', 'Bajada', 'textarea', "Mirá de un vistazo cuántos talles te quedan en el perchero, calculá tu margen por prenda y respondé consultas de WhatsApp sin escribir lo mismo mil veces."),
    demo_kicker:   c('Demo', 'Antetítulo', 'texto', "Probalo sin cuenta"),
    demo_titulo:   c('Demo', 'Título', 'texto', "La pantalla que tendrías en tu mostrador"),
    demo_sub:      c('Demo', 'Bajada', 'textarea', "Tocá un talle o una respuesta de WhatsApp para ver el flujo real, sin registrarte."),
    features:      c('Funciones', 'Tarjetas', 'lista', [
      { icono: "👕", titulo: "Stock por talle", texto: "Cargá cada producto con sus talles (S a XXL), precio de compra y venta, y controlá el stock en tiempo real." },
      { icono: "💬", titulo: "Bot de WhatsApp", texto: "Responde disponibilidad, talles, precio y envío automáticamente, sincronizado con tu catálogo real." },
      { icono: "💰", titulo: "Ventas y caja diaria", texto: "Registrá cada venta con su método de pago y cerrá la caja del día sin planillas sueltas." },
      { icono: "📉", titulo: "Punto de equilibrio", texto: "Vas viendo cuántas unidades necesitás vender este mes para cubrir tus costos fijos." },
      { icono: "👥", titulo: "Equipo", texto: "Invitá empleados y a tu contador con roles y permisos distintos — vos decidís quién ve qué." },
      { icono: "📊", titulo: "Panel contador", texto: "Si lo vinculás con tu ficha fiscal, tu contador ve tus liquidaciones — nunca tus ventas ni tu stock." },
    ], { item: ['icono', 'titulo', 'texto'] }),
    cierre_titulo: c('Cierre', 'Título', 'texto', "Empezá cuando quieras"),
    cierre_sub:    c('Cierre', 'Bajada', 'textarea', "Activás tu cuenta hoy. Si más adelante querés que tu contador vea tus liquidaciones, lo conectás vos — nunca al revés."),
  },
};
