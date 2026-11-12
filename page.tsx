import "@/components/sites/juanma/site.css";
import { Behavior } from "@/components/sites/juanma/Interactive";

const WHATSAPP = ""; // ej: "https://wa.me/549XXXXXXXXXX"
const AGENDA = ""; // ej: link de Calendly o Google Calendar
const MAIL = "mailto:juannmanuelvillarruel@gmail.com?subject=Diagn%C3%B3stico%20de%20crecimiento";

const faq = [
  { q: "¿Qué es go-to-market y cuándo lo necesito?", a: "Es el plan para llevar una oferta al mercado: a quién le vendés, con qué mensaje y por qué canales. Conviene tenerlo al lanzar algo, al entrar a un mercado o cuando el crecimiento se estanca." },
  { q: "¿En qué plataformas hacés pauta?", a: "Meta, Google, LinkedIn y TikTok. La elección depende de dónde está tu cliente y de cuánto tarda en comprar." },
  { q: "¿De quién son las cuentas publicitarias?", a: "Tuyas. Tenés acceso de auditor desde el primer día, con reporte semanal y un dashboard para ver en qué se invierte cada peso." },
  { q: "¿Hacés la ejecución o solo la estrategia?", a: "Las dos cosas. Defino la estrategia y opero los canales, o coordino a tu equipo y a tus proveedores." },
  { q: "¿Sirve para una pyme o un emprendimiento?", a: "Sí. Primero se ordena lo que ya existe y después se escala con criterio, sin gastar de más." },
  { q: "¿Garantizás resultados?", a: "No, y desconfiaría de quien lo haga. Te doy un diagnóstico claro y decisiones basadas en tus números." },
  { q: "¿Cuánto cuesta trabajar juntos?", a: "Depende del alcance. Lo definimos después del diagnóstico, con una propuesta concreta." },
];

const recs: { g: string; n: string; r: string; d: string; rel: string; lang: string | null; h: number; p: string[] }[] = [
  { g: "c", n: "Macarena Gaete Litvak", r: "Communications Manager, Tetra Pak Southern Cone", d: "12 jun 2026", rel: "Fue mi cliente", lang: null, h: 626, p: ["Tuve la oportunidad de trabajar con Juan y su valor va mucho más allá de la ejecución digital. Su presencia y cercanía con el cliente generan confianza y aseguran un seguimiento riguroso en cada etapa de los proyectos. Sobre todo, destaca por aportar una mirada estratégica sólida, con un nivel de análisis que permite tomar decisiones informadas y orientadas a resultados.", "Uno de los aspectos que más destaco de su trabajo —y que, como cliente, realmente marca la diferencia— es su capacidad de entender lo que necesitamos y traducirlo en soluciones relevantes, bien pensadas y bien ejecutadas.", "Me enorgullece haberlo visto crecer como profesional y desarrollar las aptitudes que hoy lo consolidan como un partner estratégico para cualquier desafío en el ámbito digital."] },
  { g: "c", n: "María Delfina Reyes Rapretti", r: "Marketing Coordinator", d: "18 feb 2026", rel: "Fue mi cliente", lang: null, h: 596, p: ["Recomiendo totalmente a Juan Manuel por su excelente gestión como estratega de Paid Media. Trabajar con él durante este último año ha sido una experiencia de aprendizaje mutuo y crecimiento constante.", "Lo que más destaco de Juan es su visión estratégica y su proactividad: nos ayudó a escalar nuestra presencia digital y su habilidad para pivotar y ajustar la estrategia en tiempo real fue fundamental para optimizar nuestro presupuesto. Siempre estuvo dispuesto a resolver dudas y a liderar las reuniones necesarias para dar 'volantazos' cuando el mercado lo exigía.", "Un gran profesional y un aliado estratégico para cualquier empresa."] },
  { g: "c", n: "Yosselynn Pinto Lugo", r: "LATAM Marketing & PR Communication", d: "13 feb 2026", rel: "Fue mi cliente", lang: null, h: 491, p: ["Juan Manuel ha desarrollado una experiencia profesional sobresaliente en marketing digital y paid media gracias a su visión y profesionalismo, en la cual nos acompañó en el desarrollo de tácticas de crecimiento, contenido y rendimiento. Cuenta con un gran enfoque analítico, siendo capaz de integrar data, creatividad y tendencias digitales con objetivos de negocio. Durante el desarrollo de proyectos conjuntos demostró un compromiso continuo con la calidad y la entrega de resultados, adaptandose a los desafíos y procesos propios del cliente. Lo recomiendo ampliamente, tanto por su habilidad estratégica y por su calidad humana."] },
  { g: "c", n: "Valeria Pipet", r: "Diseñadora de identidades visuales", d: "9 ene 2026", rel: "Yo fui su cliente", lang: null, h: 464, p: ["Tuve la oportunidad de trabajar con Juan Manuel en diversos proyectos, donde estuvo a cargo del manejo de anuncios para distintos clientes. Puedo destacar su creatividad, capacidad resolutiva y rapidez para encontrar soluciones alineadas con los objetivos y expectativas del cliente.", "Es una persona muy comprometida con su trabajo, con gran predisposición para la comunicación, tanto con el equipo como con los clientes, lo que hace que el proceso sea claro y fluido."] },
  { g: "t", n: "Marisol Laudani Avendaño", r: "Ejecutiva de cuentas SR", d: "7 ene 2026", rel: "Mismo equipo", lang: null, h: 494, p: ["Trabajar con Juan fue una experiencia muy positiva. Más allá de las tareas diarias, siempre hubo una mirada puesta en el vínculo humano, entendiendo que detrás de cada rol hay personas con realidades y desafíos propios. Esto permitió construir una relación basada en el entendimiento y la empatía.", "Además, gracias a su enfoque y profesionalismo, pude comprender cómo una pauta digital bien implementada resulta clave para el crecimiento de un negocio y cómo, en conjunto con una gestión estratégica de la comunicación, es posible alcanzar objetivos integrales y de impacto 360."] },
  { g: "t", n: "Florencia Ferreiro", r: "Internal & External Communications Specialist", d: "2 ene 2026", rel: "Mismo equipo", lang: null, h: 281, p: ["Tengo la suerte de trabajar con Juan y considero que es un excelente profesional, comprometido con sus clientes y sobre todo buena persona. Excelente creador de estrategias de mkt y llevándolas a cabo."] },
  { g: "c", n: "Gabriela Avila Perez", r: "MBA, Comunicación Estratégica", d: "30 dic 2025", rel: "Fue mi cliente", lang: null, h: 281, p: ["Juanma es un gran team leader, muy proactivo en su trabajo, y siempre dispuesto a resolver dudas, ajustar en la marcha, y hacer un cambio - con excelencia - si es necesario."] },
  { g: "t", n: "Angeles Degano", r: "Marketing LATAM, Laboratorios Ysonut", d: "30 dic 2025", rel: "Trabajamos juntos desde empresas distintas", lang: null, h: 491, p: ["Trabajar con Juanma desde el lado cliente desde Ysonut ha sido una experiencia muy positiva. Como líder de Paid Media, se destaca por su enfoque estratégico, su claridad para comunicar y su capacidad de optimizar campañas con foco real en resultados.", "Más allá de lo técnico, destaco su predisposición, responsabilidad y la tranquilidad que transmite al gestionar cuentas exigentes. Se nota el compromiso y el conocimiento profundo del canal. Súper recomendable para cualquier marca que busque performance y profesionalismo."] },
  { g: "t", n: "Barbara Florena", r: "Directora de cuentas, McCann Buenos Aires", d: "30 dic 2025", rel: "Mismo equipo", lang: null, h: 258, p: ["Gran profesional, con fuerte conocimiento en Paid Media. Pero más allá de su gran conocimiento laboral, gran compañero, siempre dispuesto a ayudar y colaborar."] },
  { g: "t", n: "Victoria Passadore", r: "Brand & Communication Strategy", d: "29 dic 2025", rel: "Mismo equipo", lang: null, h: 254, p: ["10/10! JM no solo es un excelente profesional, comprometido y proactivo, también es una gran persona que trabaja y actúa desde el corazón."] },
  { g: "t", n: "Guadalupe Gort", r: "Community Manager", d: "29 dic 2025", rel: "Mismo equipo", lang: null, h: 307, p: ["Una gran experiencia trabajar con él. Cada objetivo que se propone lo cumple. Aprendí mucho perteneciendo al mismo grupo de trabajo. Excelente trato siempre. Responsable y comprometido en cada proyecto, al máximo."] },
  { g: "t", n: "Marina Figoli", r: "Dirección de Cuentas y Proyectos, Tab Tab Social Media Agency", d: "27 dic 2025", rel: "Mismo equipo", lang: "en", h: 333, p: ["I work with Juan Manuel as a freelance member of the Paid Media team and truly value his strategic mindset and results-driven approach. He goes beyond execution, understands the business behind the campaigns, and works end-to-end with a strong data focus. A reliable professional and a great person to any team."] },
  { g: "t", n: "Victoria Carrano", r: "Communications & Business Development", d: "26 dic 2025", rel: "Mismo equipo", lang: null, h: 359, p: ["Juan combina calidez y carisma, con un sólido criterio profesional. Su enfoque estratégico, capacidad de optimización y clara orientación al negocio le permiten escalar campañas de manera rentable y sostenible. Un perfil ideal para equipos que buscan alto rendimiento en performance. Fue un placer haber trabajado juntos."] },
  { g: "t", n: "Octavio Brehm", r: "Design Director, UX/UI Designer", d: "26 dic 2025", rel: "Mismo equipo", lang: null, h: 389, p: ["Tuve la oportunidad de trabajar con Juan Manuel y puedo destacar su compromiso, responsabilidad y excelente actitud profesional. Es una persona proactiva, orientada a resultados y con gran capacidad para trabajar en equipo. Siempre demuestra disposición para aprender, aportar ideas y enfrentar nuevos desafíos con una actitud positiva. Sin duda, Juan Manuel es un profesional confiable y un gran aporte para cualquier equipo u organización."] },
  { g: "t", n: "Paula Bossi", r: "Lic. en Comunicación Social", d: "26 dic 2025", rel: "Mismo equipo", lang: null, h: 333, p: ["Juan no solo es un excelente profesional, dedicado y responsable, es una gran persona. Un líder positivo dentro del equipo, creativo y altamente calificado.", "Tuve la oportunidad de compartir diferentes proyectos con él y siempre es un gusto trabajar juntos. Ojalá pronto volvamos a coincidir. 💙"] },
];
const RECW = 766;
const LINKEDIN = "https://www.linkedin.com/in/juannvillarruel/details/recommendations/?detailScreenTabIndex=0";

const fmt = (n: number, d = 1) => n.toLocaleString("es-AR", { maximumFractionDigits: d });
const F = { visits: 5000, leads: 250, opps: 60, sales: 15, spend: 300000 };
const r1 = (F.leads / F.visits) * 100, r2 = (F.opps / F.leads) * 100, r3 = (F.sales / F.opps) * 100;


const topics = ["Paid media", "Meta Ads", "Google Ads", "LinkedIn Ads", "TikTok Ads", "Go-to-market", "Growth B2B", "Performance", "Branding", "Comunicación", "AI Visibility", "Publicidad digital", "Comportamiento del consumidor", "Posicionamiento", "Creatividad", "Estrategia"];
const rail = [["frentes", "Frentes"], ["embudo", "Embudo"], ["diagnostico", "Diagnóstico"], ["casos", "Casos"], ["recomendaciones", "Cartas"], ["metodo", "Método"], ["contacto", "Clasificados"], ["faq", "Entrevista"]];

function Folio({ n, label, page }: { n: string; label: string; page?: string }) {
  return (
    <div className="folio" aria-hidden="true">
      <span>§ {n}</span>
      <span>{label}</span>
      <i />
      {page ? <span>{page}</span> : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="jm">
      <a className="skip" href="#main">Saltar al contenido</a>
      <Behavior />
      <div className="progress" />
      <a className="sticky-cta" href="#contacto">Pedí tu diagnóstico →</a>


      <header className="nav">
        <nav className="wrap" aria-label="Principal">
          <a className="logo" href="#">JM<span>Villarruel</span></a>
          <button className="menu" aria-label="Abrir menú" aria-expanded="false" aria-controls="navlinks">Menú</button>
          <ul className="navlinks" id="navlinks">
            <li><a href="#frentes">Frentes</a></li>
            <li><a href="#casos">Casos</a></li>
            <li><a href="#recomendaciones">Cartas</a></li>
            <li><a href="#diagnostico">Diagnóstico</a></li>
            <li><a href="#metodo">Método</a></li>
            <li><a href="#faq">Preguntas</a></li>
            <li><a className="navcta" href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <div className="masthead">
        <div className="util">
          <div className="wrap">
            <span>Buenos Aires · <b data-today>Edición de hoy</b></span>
            <span>Edición Nº <b data-doy>1</b> · Marketing, growth y comunicación</span>
            <button type="button" className="motion-toggle" aria-pressed="false" data-motion>Pausar animaciones</button>
          </div>
        </div>
        <div className="ticker" aria-hidden="true">
          <div className="tk">
            {[0, 1].map((c) => (
              <ul key={c}>{topics.map((t) => <li key={t}>{t}</li>)}</ul>
            ))}
          </div>
        </div>
        <div className="wrap">
          <a className="plate" href="#">Juan Manuel Villarruel</a>
          <div className="plate-sub">
            <span>Estrategia · Performance · Posicionamiento</span>
            <nav aria-label="Secciones"><ul>
              <li><a href="#frentes">Frentes</a></li>
              <li><a href="#casos">Casos</a></li>
              <li><a href="#recomendaciones">Cartas</a></li>
              <li><a href="#diagnostico">Diagnóstico</a></li>
              <li><a href="#faq">Preguntas</a></li>
              <li><a className="pill" href="#contacto">Contacto</a></li>
            </ul></nav>
          </div>
        </div>
      </div>

      <main id="main" tabIndex={-1}>
      <section className="wrap hero">
        <div className="h-main reveal">
          <p className="kicker">Portada · Nota principal</p>
          <h1>Antes de invertir más en ads, conviene saber <mark className="mk">qué frena el crecimiento.</mark></h1>
          <p className="deck">
            Paid media, go-to-market y growth para empresas <b>B2B</b>, ecommerce y marcas. Pauta en Meta, Google, TikTok y LinkedIn, medida <b>hasta la venta</b>.
          </p>
          <div className="btns">
            <a className="btn" href="#contacto">Pedí tu diagnóstico de crecimiento →</a>
            <a className="btn ghost" href="#casos">Ver resultados en ads</a>
          </div>
        </div>
        <aside className="h-side reveal">
          <figure className="portrait">
            <div className="photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/sites/juanma/foto-juan-manuel.jpg" alt="Juan Manuel Villarruel sonriendo, con los brazos cruzados, en una oficina" width={800} height={800} />
            </div>
            <figcaption>Fig. 01 — Juan Manuel Villarruel, Buenos Aires.</figcaption>
          </figure>
          <dl className="facts">
            <div><dt>Foco</dt><dd>B2B + B2C</dd></div>
            <div><dt>Alcance</dt><dd>Digital y tradicional</dd></div>
            <div><dt>Experiencia</dt><dd><span data-count="10" data-suf="+ años">10+ años</span> <mark className="todo">completar</mark></dd></div>
          </dl>
        </aside>
      </section>

      <section className="brands plats" aria-label="Plataformas de pauta">
        <div className="wrap">
          <p className="mono">Plataformas que opero</p>
          <ul className="bl four">
            <li className="b-name">Meta Ads</li>
            <li className="b-name">Google Ads</li>
            <li className="b-name">LinkedIn Ads</li>
            <li className="b-name">TikTok Ads</li>
          </ul>
        </div>
      </section>

      <section className="brands" aria-label="Marcas con las que trabajé">
        <div className="wrap">
          <p className="mono">Marcas con las que trabajé</p>
          <ul className="bl">
            <li className="b-name">Tetra Pak</li>
            <li className="b-name">Laboratorios Ysonut</li>
            <li className="b-slot"><mark className="todo">logo pendiente</mark></li>
            <li className="b-slot"><mark className="todo">logo pendiente</mark></li>
            <li className="b-slot"><mark className="todo">logo pendiente</mark></li>
            <li className="b-slot"><mark className="todo">logo pendiente</mark></li>
          </ul>
        </div>
      </section>

      <section id="frentes" data-sec>
        <div className="wrap">
          <Folio n="01" label="Frentes de trabajo" page="pág. 2" />
          <div className="sec-head reveal">
            <div>
              <h2>Crecer pide ordenar tres cosas: a quién le vendés, cómo llegás y qué medís.</h2>
            </div>
            <p className="note">Según el momento de la empresa, empiezo por uno de estos frentes.</p>
          </div>

          <div className="tabs reveal" data-tabs data-active="eco">
            <div className="tablist" role="tablist" aria-label="Frente de trabajo">
              <button role="tab" id="tab-eco" aria-controls="panel-eco" tabIndex={0} aria-selected="true" className="tab active" data-tab="eco"><span className="tn">01</span><span className="tt">Paid media<small>Meta, Google, TikTok, LinkedIn</small></span></button>
              <button role="tab" id="tab-b2b" aria-controls="panel-b2b" tabIndex={-1} aria-selected="false" className="tab" data-tab="b2b"><span className="tn">02</span><span className="tt">Growth B2B<small>Leads y pipeline</small></span></button>
              <button role="tab" id="tab-med" aria-controls="panel-med" tabIndex={-1} aria-selected="false" className="tab" data-tab="med"><span className="tn">03</span><span className="tt">Go-to-market<small>Lanzar y posicionar</small></span></button>
            </div>
            <div className="panels">
              <div className="panel active" data-panel="eco" role="tabpanel" id="panel-eco" aria-labelledby="tab-eco">
                <div>
                  <span className="mono">Paid media · Pauta y performance</span>
                  <h3>Pauta que se mide en ventas, no en clics.</h3>
                  <p>Estrategia y gestión de campañas en Meta, Google, TikTok y LinkedIn para ecommerce, servicios y B2B. Cada peso se asigna según margen y resultado.</p>
                  <a className="btn sm" href="#contacto">Quiero revisar mi pauta →</a>
                </div>
                <ul>
                  <li><b>Qué mido</b>ROAS, costo por lead y por venta</li>
                  <li><b>Entregable</b>Cuentas bien armadas, reporte semanal y dashboard</li>
                </ul>
              </div>
              <div className="panel" data-panel="b2b" role="tabpanel" id="panel-b2b" aria-labelledby="tab-b2b">
                <div>
                  <span className="mono">Growth B2B · Demanda y pipeline</span>
                  <h3>Un pipeline que el equipo comercial quiere trabajar.</h3>
                  <p>En B2B no todo lead vale lo mismo. Campañas en LinkedIn y Google conectadas con ventas, medidas hasta la oportunidad y el cierre.</p>
                  <a className="btn sm" href="#contacto">Quiero hacer crecer mi pipeline →</a>
                </div>
                <ul>
                  <li><b>Qué mido</b>Leads calificados, oportunidades y cierre</li>
                  <li><b>Entregable</b>Embudo medido de punta a punta</li>
                </ul>
              </div>
              <div className="panel" data-panel="med" role="tabpanel" id="panel-med" aria-labelledby="tab-med">
                <div>
                  <span className="mono">Go-to-market · Estrategia y lanzamiento</span>
                  <h3>Salir al mercado con un plan que el equipo pueda ejecutar.</h3>
                  <p>Defino cliente ideal, propuesta de valor y mensaje, y armo un plan de 90 días con responsables y métricas.</p>
                  <a className="btn sm" href="#contacto">Quiero ordenar mi go-to-market →</a>
                </div>
                <ul>
                  <li><b>Qué defino</b>Cliente ideal, propuesta de valor y mensaje</li>
                  <li><b>Entregable</b>Plan de 90 días con métricas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="problem">
        <div className="wrap reveal">
          <Folio n="02" label="Editorial" page="pág. 3" />
          <div className="sec-head">
            <div>
              <h2>Se puede hacer mucho marketing y crecer poco.</h2>
            </div>
            <p className="note">Ocurre cuando cada área mira su propio tablero y nadie ve el recorrido completo.</p>
          </div>
          <p className="lead">Las preguntas que importan quedan abiertas. <b>¿A quién le estamos vendiendo? ¿Qué canal trae clientes que se quedan? ¿En qué parte del embudo se frena el crecimiento?</b></p>
        </div>
      </section>

      <section id="embudo" data-sec style={{ paddingTop: 0 }}>
        <div className="wrap reveal">
          <Folio n="03" label="Mesa de control" page="pág. 4" />
          <div className="funnel" data-funnel>
            <div className="f-intro">
              <span className="mono">Herramienta gratuita</span>
              <h2>Probá cómo se ve tu embudo.</h2>
              <p>Cargá los números de un mes típico y mirá dónde se frena. Los valores iniciales son un ejemplo y no se envían a ningún lado.</p>
            </div>
            <div className="f-card">
              <div className="f-grid" role="group" aria-label="Datos de tu embudo mensual">
                <label>Visitas<input id="f-visits" type="number" inputMode="numeric" min="0" defaultValue={F.visits} /></label>
                <label>Leads<input id="f-leads" type="number" inputMode="numeric" min="0" defaultValue={F.leads} /></label>
                <label>Oportunidades<input id="f-opps" type="number" inputMode="numeric" min="0" defaultValue={F.opps} /></label>
                <label>Ventas<input id="f-sales" type="number" inputMode="numeric" min="0" defaultValue={F.sales} /></label>
                <label className="wide">Inversión mensual en marketing <small>(opcional)</small><input id="f-spend" type="number" inputMode="numeric" min="0" defaultValue={F.spend} /></label>
              </div>
              <div className="f-out" role="status" aria-live="polite">
                {[
                  ["r1", "Visita → lead", r1],
                  ["r2", "Lead → oportunidad", r2],
                  ["r3", "Oportunidad → venta", r3],
                ].map(([k, l, v]) => (
                  <div className="f-row" key={k as string}>
                    <span>{l}</span>
                    <div className="f-bar"><i id={`b-${k}`} className={`fb-${k}`} style={{ width: `${Math.min(v as number, 100)}%` }} /></div>
                    <b id={`o-${k}`}>{fmt(v as number)}%</b>
                  </div>
                ))}
                <div className="f-cost">
                  <div><span>Costo por lead</span><b id="o-cpl">{fmt(F.spend / F.leads, 0)}</b></div>
                  <div><span>Costo por venta</span><b id="o-cac">{fmt(F.spend / F.sales, 0)}</b></div>
                  <div><span>Visita → venta</span><b id="o-all">{fmt((F.sales / F.visits) * 100, 2)}%</b></div>
                </div>
                <p className="f-insight" id="o-insight">Mejorar una sola etapa un 10% llevaría tus ventas de {fmt(F.sales)} a {fmt(F.sales * 1.1)} por mes.</p>
                <a className="btn sm" href="#contacto">Quiero revisar mi embudo con vos →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="diagnostico" data-sec style={{ paddingTop: 0 }}>
        <div className="wrap reveal">
          <Folio n="04" label="Qué diagnostico" page="pág. 5" />
          <div className="sec-head">
            <div><h2>Antes de planificar, un diagnóstico del crecimiento.</h2></div>
            <p className="note">Cinco áreas que definen si podés crecer más con lo que ya tenés.</p>
          </div>
          <div className="five stag">
            {[
              ["Mercado y propuesta", "Cliente ideal, problema y diferencial."],
              ["Embudo y conversión", "Del primer contacto a la venta, y dónde se frena."],
              ["Pauta, canales y mensaje", "Qué aporta cada plataforma, cuánto cuesta cada resultado y si el mensaje acompaña."],
              ["Medición y datos", "Tracking, CRM y atribución confiables."],
              ["Ritmo de crecimiento", "Qué escalar, qué cortar y qué probar."],
            ].map(([t, d], i) => (
              <div key={t} className="fv"><span className="n">0{i + 1}</span><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark" id="casos" data-sec>
        <div className="wrap reveal">
          <Folio n="05" label="Notas de tapa" page="pág. 6" />
          <div className="sec-head">
            <div><h2>Resultados en pauta y performance.</h2></div>
            <p className="note">Datos tomados de las cuentas publicitarias, con el período indicado en cada caso.</p>
          </div>
          <div className="dcards stag">
            {[
              ["Ecommerce · Meta Ads", "Ventas", "5,25x", "ROAS con más de USD 97K invertidos", "Twisted Dough. Más de USD 510K en valor de conversión. Always on 2021–2023."],
              ["B2B · LinkedIn Ads", "Pipeline", "+15", "Campañas activas de performance B2B", "Tetra Pak: Andina (7) y Cono Sur (8). Más de USD 27K de inversión."],
              ["Automotriz · Leads", "Leads", "+15K", "Leads generados en tres años", "Always on 2022–2025 con más de USD 100K de inversión."],
              ["Ecommerce · Alcance y venta", "Ecommerce", "+1K", "Ventas y 4M de personas alcanzadas", "Print a Lot, insumos y máquinas 3D. Always on desde 2022."],
            ].map(([k, tag, n, t, d]) => (
              <article className="dcard" key={k}>
                <div className="dtop"><span className="mono">{k}</span><span className="tag">{tag}</span></div>
                <div className="big">{n}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
          <p className="small foot">También: cliente B2B de soluciones tecnológicas (2019–2025), 3K leads y más de 58K clics. Codini (electrodomésticos), más de 2.500 carritos generados. Los resultados dependen del mercado y la inversión.</p>
        </div>
      </section>

      <section className="recs-sec" id="recomendaciones" data-sec>
        <div className="wrap reveal">
          <Folio n="06" label="Cartas de lectores" page="pág. 7" />
          <div className="sec-head">
            <div><h2>Lo que dicen quienes trabajaron conmigo.</h2></div>
            <p className="note">{recs.length} recomendaciones públicas de mi perfil de LinkedIn.</p>
          </div>
          <div className="recs-actions">
            <a className="btn" href={LINKEDIN} target="_blank" rel="noopener noreferrer">Verlas en LinkedIn ↗</a>
            <button className="recs-toggle" type="button" aria-pressed="false" data-recs-toggle>Pausar movimiento</button>
          </div>
        </div>
        <div className="recs" data-recs role="region" aria-label="Recomendaciones de LinkedIn en movimiento">
          {[
            { g: "c", cls: "", copies: 3, label: "Clientes", sub: "Recomendaciones de quienes fueron mis clientes o me tuvieron como cliente" },
            { g: "t", cls: "rev", copies: 2, label: "Compañeros de equipo y colegas", sub: "Personas con las que compartí equipo o proyectos" },
          ].map((row) => {
            const list = recs.map((x, i) => ({ x, i })).filter(({ x }) => x.g === row.g);
            return (
              <div className={`rrow ${row.cls} g-${row.g}`} key={row.g} style={{ ["--n" as string]: row.copies }}>
                <p className="rlabel wrap"><b>{row.label}</b><span>{list.length} · {row.sub}</span></p>
                <ul className="rtrack">
                  {Array.from({ length: row.copies }, (_, copy) =>
                    list.map(({ x, i }) => (
                      <li className="rcard" key={`${copy}-${i}`} aria-hidden={copy ? "true" : undefined} data-i={i}>
                        {copy ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={`/sites/juanma/rec/rec-${String(i + 1).padStart(2, "0")}.webp`} alt="" width={RECW} height={x.h} loading="lazy" decoding="async" />
                        ) : (
                          <button type="button" className="rbtn" data-open={i} aria-haspopup="dialog" aria-label={`Leer la recomendación de ${x.n} en tamaño grande`}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={`/sites/juanma/rec/rec-${String(i + 1).padStart(2, "0")}.webp`} alt="" width={RECW} height={x.h} loading="lazy" decoding="async" />
                            <span className="rzoom" aria-hidden="true">Leer completa ↗</span>
                          </button>
                        )}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            );
          })}
        </div>
        <div id="rec-data" hidden>
          {[...recs.map((x, i) => ({ x, i })).filter(({ x }) => x.g === "c"), ...recs.map((x, i) => ({ x, i })).filter(({ x }) => x.g === "t")].map(({ x, i }) => (
            <article key={i} data-rec={i} data-name={x.n} data-role={x.r} data-rel={`${x.rel} · ${x.d}`} data-group={x.g === "c" ? "Clientes" : "Compañeros de equipo y colegas"} lang={x.lang ?? undefined}>
              {x.p.map((t, k) => <p key={k}>{t}</p>)}
            </article>
          ))}
        </div>
        <dialog className="rdlg" aria-labelledby="rdlg-t">
          <div className="rdlg-in">
            <button type="button" className="rdlg-x" data-rdlg-close>Cerrar ✕</button>
            <p className="mono" id="rdlg-g" />
            <h3 id="rdlg-t" />
            <p className="rdlg-role" id="rdlg-role" />
            <p className="rdlg-rel" id="rdlg-rel" />
            <div className="rdlg-body" id="rdlg-body" />
            <div className="rdlg-nav">
              <button type="button" data-rdlg-prev>← Anterior</button>
              <span id="rdlg-n" aria-live="polite" />
              <button type="button" data-rdlg-next>Siguiente →</button>
            </div>
            <a className="rdlg-li" href={LINKEDIN} target="_blank" rel="noopener noreferrer">Ver todas en LinkedIn ↗</a>
          </div>
        </dialog>
      </section>

      <section id="metodo" data-sec>
        <div className="wrap reveal">
          <Folio n="07" label="El sistema" page="pág. 8" />
          <div className="metodo">
            <div className="m-left">
              <h2>Menos acciones sueltas y más sistema de crecimiento.</h2>
              <p className="lead">Cada acción responde a una hipótesis y se evalúa con datos.</p>
            </div>
            <div className="steps" data-steps>
              {[
                ["Diagnosticar", "Mercado, embudo, canales y datos."],
                ["Definir el go-to-market", "Cliente, propuesta, mensaje y canales."],
                ["Construir la estructura", "Campañas de pauta, contenido y CRM alineados al embudo."],
                ["Operar con ritmo", "Ciclos cortos de prueba, con decisiones basadas en datos."],
                ["Medir y ajustar", "La IA detecta patrones más rápido. La estrategia la define una persona."],
              ].map(([t, d], i) => (
                <div className="step" key={t}><span className="n">0{i + 1}</span><div><h3>{t}</h3><p>{d}</p></div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="whyme">
        <div className="wrap reveal">
          <Folio n="08" label="Perfil" page="pág. 9" />
          <div className="why">
            <figure className="portrait">
              <div className="photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/sites/juanma/foto-juan-manuel.jpg" alt="Juan Manuel Villarruel sonriendo, con los brazos cruzados, en una oficina" width={800} height={800} loading="lazy" />
              </div>
              <span className="sticker">Estrategia + ejecución</span>
            </figure>
            <div>
              <h2>Estrategia senior, de la idea a la ejecución.</h2>
              <p className="lead">Quien define la estrategia es quien supervisa la ejecución.</p>
              <div className="grid22 stag">
                <div><strong data-count="10" data-suf="+">10+</strong><span>años en marketing <mark className="todo">completar</mark></span></div>
                <div><strong>B2B + B2C</strong><span>ambos mundos</span></div>
                <div><strong>Digital + tradicional</strong><span>medios integrados</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" data-sec>
        <div className="wrap reveal">
          <Folio n="09" label="Clasificados" page="pág. 10" />
          <div className="offer">
            <div className="o-main">
              <span className="mono">La oferta</span>
              <h2>Pedí tu diagnóstico de crecimiento.</h2>
              <p>Te devuelvo dónde se frena el crecimiento, qué datos faltan y qué haría primero.</p>
              <div className="o-btns">
                <a className="btn light" href={MAIL}>Pedir el diagnóstico →</a>
                <button type="button" className="btn copy" data-copy="juannmanuelvillarruel@gmail.com">Copiar mi mail</button>
                {WHATSAPP ? <a className="btn copy" href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a> : <span className="btn-ph"><mark className="todo">WhatsApp: pendiente</mark></span>}
                {AGENDA ? <a className="btn copy" href={AGENDA} target="_blank" rel="noopener noreferrer">Agendar una llamada</a> : <span className="btn-ph"><mark className="todo">Agenda: pendiente</mark></span>}
              </div>
              <p className="small2">juannmanuelvillarruel@gmail.com</p>
            </div>
            <div className="o-steps stag">
              {[
                ["Me contás tu situación", "Qué vendés, a quién y con qué objetivo."],
                ["Reviso tu embudo", "Propuesta, canales, CRM y datos."],
                ["Recibís un diagnóstico claro", "Qué frena el crecimiento y qué hacer primero."],
                ["Si hay fit, armamos el plan", "Sin presión."],
              ].map(([t, d], i) => (
                <div className="ostep" key={t}><i>{i + 1}</i><div><b>{t}</b><span>{d}</span></div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap reveal">
          <div className="duo rev">
            <div className="a">
              <h3>Es para vos si</h3>
              <ul>
                <li>Querés crecer y no sabés por dónde empezar</li>
                <li>Vendés B2B, servicios o ecommerce</li>
                <li>Te importa la calidad, no solo el volumen</li>
              </ul>
            </div>
            <div className="b">
              <h3>No es para vos si</h3>
              <ul>
                <li>Buscás likes o seguidores sin un objetivo de negocio</li>
                <li>No querés mirar datos ni conectar marketing con ventas</li>
                <li>Esperás resultados garantizados o inmediatos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" data-sec style={{ paddingTop: 20 }}>
        <div className="wrap reveal">
          <Folio n="10" label="Entrevista" page="pág. 11" />
          <div className="faq">
            <div>
              <h2>Dudas antes de escribirme.</h2>
              
            </div>
            <div>
              {faq.map((it, qi) => (
                <div key={it.q} className="q">
                  <button aria-expanded="false" aria-controls={`faq-a-${qi}`} id={`faq-q-${qi}`}><span>{it.q}</span><span aria-hidden="true">+</span></button>
                  <div className="a" id={`faq-a-${qi}`} role="region" aria-labelledby={`faq-q-${qi}`}><div>{it.a}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="final">
        <div className="wrap">
          <span className="mono">Cierre de edición</span>
          <h2>Pedí el diagnóstico y empecemos por lo que frena.</h2>
                    <a className="btn dark-btn" href={MAIL}>Pedir el diagnóstico →</a>
          <p className="small">Escribime a juannmanuelvillarruel@gmail.com · Sin traspasos a juniors</p>
        </div>
      </section>
      </main>
      <footer>
        <div className="wrap">
          <span>Impreso en Buenos Aires · © Juan Manuel Villarruel · Faro Estudio Creativo</span>
          <a href="#">Volver a la portada ↑</a>
        </div>
      </footer>
      <nav className="rail" aria-label="Índice de la edición">
        <ol>
          {rail.map(([id, l], i) => (
            <li key={id}><a href={`#${id}`} data-rail={id}><b>0{i + 1}</b><span>{l}</span></a></li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
