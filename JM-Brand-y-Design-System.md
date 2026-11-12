# Juan Manuel Villarruel — Brand y Design System ("Edición JM")

Documento para Claude Code. Objetivo: construir un Design System reutilizable (tokens, componentes, patrones y documentación) a partir del sitio personal ya diseñado, y mantener coherencia en todas las páginas futuras (home, landing del workshop y las que vengan).

Idioma de todo el copy: español rioplatense (voseo). Código y nombres de componentes en inglés.

---

## 1. Qué hay que construir

1. **Tokens** de color, tipografía, espaciado, bordes, sombras, movimiento y breakpoints, como variables CSS y como configuración de Tailwind (si el proyecto la usa).
2. **Librería de componentes** en React/Next.js (TypeScript), accesibles por defecto, con las variantes descriptas en la sección 7.
3. **Página de documentación** (`/design-system`) con cada token y componente renderizado, sus variantes, estados (hover, focus, activo, deshabilitado) y reglas de uso.
4. **Guía de voz y copy** (sección 3) incluida en la documentación, con ejemplos correctos e incorrectos.
5. **Refactor opcional**: reemplazar en `home` y `/workshop` los estilos sueltos por los componentes del sistema, sin cambiar el aspecto visual.

Fuentes de verdad en el proyecto (`ai-website-cloner-template/`):
- `src/components/sites/juanma/site.css`: todos los estilos actuales, bajo el scope `.jm`.
- `src/app/page.tsx`: home. `src/app/workshop/page.tsx`: landing del workshop.
- `src/components/sites/juanma/behavior.ts`: comportamiento (string con JS vanilla). Conviene migrarlo a hooks/componentes React.
- `src/app/layout.tsx`: carga de fuentes.
- Vista previa estática: `juanma-preview.html` y `juanma-workshop-preview.html`.

---

## 2. Marca

**Quién es.** Juan Manuel Villarruel. Co-founder de Faro Estudio Creativo (Buenos Aires). Estratega de marketing digital, performance y comunicación. Trabaja con empresas B2B y B2C, agencias y marcas.

**Posicionamiento.** Go-to-market, growth, paid media y marketing de resultados para empresas B2B, ecommerce y marcas. No se presenta solo como "el de las pautas" ni como "el experto en IA". La IA atraviesa los contenidos pero nunca es la protagonista; el protagonista es el negocio, las personas y las marcas.

**Tesis.** La inteligencia artificial no cambia solamente las herramientas: acelera cambios que ya venían ocurriendo en consumidores, marcas y comunicación. El contenido interpreta esos cambios en lugar de repetir tendencias.

**Concepto visual: "Edición JM".** El sitio funciona como un diario de estrategia: papel frío, tinta negra, un único color de señal (lima), bordes duros, sombras desplazadas, etiquetas en monoespaciada, folios de sección ("§ 01", "pág. 2"), ticker de temas y secciones con nombres editoriales ("Portada · Nota principal", "Cartas de lectores", "Clasificados", "Entrevista"). Debe sentirse distinto de los sitios genéricos generados con plantillas de IA: sin gradientes suaves, sin tarjetas redondeadas con sombras difusas, sin paleta violeta/azul.

**Personalidad.** Profesional, reflexivo, conversacional, curioso, humano. Nunca soberbio, nunca vendehumo, nunca excesivamente académico.

---

## 3. Voz y reglas de copy

### Cómo escribe
Como una columna de opinión o un periodista especializado, no como un creador de contenido. Prefiere desarrollar ideas antes que lanzar frases, una buena observación antes que una frase viral, una tesis antes que una opinión. El lector tiene que terminar pensando "nunca lo había visto así", no "qué buena frase".

### Estructura de un artículo
1. Observación concreta (reunión, conversación con cliente, noticia, frase). Nunca inventar una anécdota.
2. Desarrollo: conectar la observación con un cambio más profundo.
3. Contexto: estudios solo como respaldo de una idea, nunca como protagonistas, y nunca abriendo un párrafo con "Según…". Evitar depender siempre de PwC, Deloitte y McKinsey; alternar con Gartner, Forrester, Accenture, Nielsen, Ipsos, Kantar, Think with Google, HubSpot Research, HBR, MIT Sloan, eMarketer, BCG.
4. Conclusión que abre una conversación nueva, sin repetir lo dicho.

### Prohibido
- Antítesis "No es A, es B", "No se trata de…", "No hablamos de…, hablamos de…", "No vengo a…". Solo de forma excepcional.
- Muletillas de IA: "En un mundo donde…", "Hoy más que nunca…", "El futuro ya llegó", "No es casualidad", "Sin dudas", "Está claro que", "Es evidente que", "La clave está en…".
- Formato influencer: una línea por párrafo. Los párrafos desarrollan UNA idea en 3 a 6 líneas.
- Frases motivacionales, poesía, dramatización, exceso de preguntas, grandilocuencia, recursos de TED Talk.
- Personificaciones vacías ("el mercado habla", "la tecnología nos pide").
- Fragmentos de una palabra como párrafo, enumeraciones separadas por punto en vez de coma, abuso del guión largo, pseudo-poesía con saltos de línea.
- Jerga técnica aplicada a contextos humanos.
- Repetir el mismo recurso retórico más de dos veces por texto.

### Para la interfaz (microcopy)
Directo y concreto, con verbos de acción: "Reservar mi lugar →", "Pedí tu diagnóstico", "Ver resultados en ads". Sin promesas de resultados garantizados. Los datos siempre con fuente y período. Cuando un dato no está confirmado se marca con el patrón "pendiente" (sección 7.9), nunca se inventa.

### Checklist antes de entregar un texto
¿Hay frases que suenan bien pero no dicen nada? ¿Hay ideas encadenadas sin relación lógica? ¿Se repite un recurso retórico más de dos veces? ¿La conclusión avanza o solo repite? ¿Hay algún fragmento suelto que exista solo para dramatizar?

---

## 4. Tokens de diseño

### 4.1 Color

| Token | Valor | Uso |
|---|---|---|
| `--ink` | `#0c0c0c` | Texto, bordes, fondos oscuros, sombras |
| `--paper` | `#f2f1ec` | Fondo general |
| `--paper-2` | `#e7e6de` | Hover y superficies secundarias |
| `--signal` | `#c6ff00` | Único color de acento: botones, marcador, estados activos |
| `--muted` | `#57564e` | Texto secundario sobre papel (contraste mayor a 4,5:1) |
| `--text-soft` | `#2c2c28` | Párrafos largos |
| `--surface` | `#ffffff` | Tarjetas, formularios, paneles |
| `--surface-dark` | `#141412` | Panel oscuro dentro de secciones oscuras |
| `--line-dark` | `#3a3a36` | Divisores sobre fondo oscuro |
| `--muted-on-dark` | `#a9a89f` | Texto secundario sobre fondo oscuro |
| `--todo` | `#ffd23f` | Solo para datos pendientes (borde punteado) |
| `--placeholder-border` | `#6b6a62` | Bordes de espacios vacíos (contraste de borde 3:1 o más) |
| `--error` | `#a1260a` | Mensajes de error |

Reglas: el lima nunca se usa como color de texto sobre papel (no tiene contraste); sí sobre fondo negro. Texto lima sobre negro y negro sobre lima son las dos combinaciones de acento permitidas. Fondo de página: papel con una textura de ruido SVG estática de muy baja opacidad (alrededor de 5%); no usar overlays fijos con blend modes.

Imágenes: la foto de Juan Manuel va tratada en duotono lima/negro con trama de puntos (efecto de impresión), dentro de un marco con borde de 2 px y sombra desplazada.

### 4.2 Tipografía

- **Títulos (h1, h2, h3), logo, cifras grandes, nombres de marca**: JetBrains Mono SemiBold (600).
- **Párrafos y UI de lectura**: General Sans (Regular 400, Medium 500, SemiBold 600). General Sans se carga desde Fontshare (`https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap`); como respaldo y para vistas previas se usa DM Sans.
- **Etiquetas, folios, ticker, notas, datos técnicos**: JetBrains Mono Medium (500), 12 px, MAYÚSCULAS, tracking 0,10 a 0,14 em.
- Tamaño mínimo absoluto: 12 px. Nada por debajo.
- Evitar pesos 700 y 800: el máximo es 600.

| Rol | Tamaño | Interlínea | Tracking |
|---|---|---|---|
| h1 | `clamp(30px, 4.4vw, 58px)` (móvil `clamp(26px, 7.4vw, 40px)`) | 1,08 | −0,04 em |
| h2 | `clamp(26px, 3.4vw, 44px)` (móvil `clamp(23px, 6.4vw, 32px)`) | 1,12 | −0,04 em |
| h3 | 20 a 34 px según contexto | 1,2 | −0,02 a −0,035 em |
| Cuerpo | 16 px | 1,65 | 0 |
| Lead / deck | `clamp(17px, 1.5vw, 20px)` | 1,6 | 0, ancho máximo 44 em |
| Etiqueta mono | 12 px | 1,4 | 0,1 a 0,14 em |
| Cifra grande (casos) | `clamp(44px, 5vw, 70px)`; la primera tarjeta hasta 124 px | 1,0 | −0,06 em |

Énfasis dentro de texto: `<b>` con subrayado de marcador lima (gradiente que cubre el 38% inferior). En titulares, `mark.mk`: marcador lima completo que se "pinta" al entrar en pantalla.

### 4.3 Espaciado y layout

- Contenedor `.wrap`: ancho máximo 1240 px, padding lateral 28 px (18 px en móvil).
- Secciones: padding vertical 96 px (menos en móvil).
- Grilla de cabecera de sección: 8/4 columnas con 56 px de separación; en móvil, una columna.
- Breakpoints: móvil hasta 900 px; el índice lateral aparece desde 1380 px.
- Áreas táctiles de al menos 44 × 44 px.

### 4.4 Bordes, sombras y forma

- Borde estándar 2 px `--ink`. Separadores finos 1 px con 25% de opacidad.
- Sin radio de borde (esquinas rectas) en todo el sistema.
- Sombras duras desplazadas, sin desenfoque: botones 5 px, tarjetas y paneles 8 a 10 px, en `--ink` (o `--signal` sobre fondos oscuros).
- Interacción del botón: hover `translate(-2px,-2px)` con sombra 7 px; activo `translate(4px,4px)` con sombra 1 px.

### 4.5 Movimiento

- Aparición al hacer scroll (`reveal`, `stag` para escalonado), contadores animados, marcador lima que se pinta, línea de tiempo del método que se llena con el scroll, palabra rotativa en el hero, cursor propio solo con mouse.
- Ticker de temas (48 s) y carrusel de recomendaciones en dos filas con direcciones opuestas (60 s y 125 s).
- Obligatorio: respetar `prefers-reduced-motion` (sin animaciones, carrusel desplazable a mano), botón global "Pausar animaciones" y pausa automática al pasar el mouse o enfocar.
- Todo lo que depende de JS se activa con la clase `.js`; sin JS la página debe verse completa y legible.

### 4.6 Foco y accesibilidad (reglas del sistema)

- Foco visible: contorno 3 px `--ink`, offset 3 px, más anillo de 6 px `--signal`. Sobre fondos oscuros se invierte (contorno lima, anillo negro). Nunca usar `all: unset` sin restituir el foco.
- Contraste mínimo WCAG 2.1 AA. Estructura semántica: enlace "Saltar al contenido", `main`, `nav` con `aria-label`, jerarquía de títulos sin saltos.
- Elementos fuera de pantalla (nav oculta, CTA fija) con `visibility: hidden` para que no reciban foco.
- Diálogos con `<dialog>` nativo, `aria-labelledby`, foco que vuelve al disparador, Escape y flechas.
- Resultados dinámicos (calculadora) en `role="status"` con `aria-live="polite"`.
- Acordeón (FAQ) con `aria-expanded`, `aria-controls` y panel `inert` cuando está cerrado; sin JS queda abierto.

---

## 5. Iconografía e imagen

No usar iconos decorativos ni ilustraciones genéricas. Los símbolos son tipográficos: flechas (→ ↗ ↑), ✓ en cuadrado lima, ✕, ✦ como separador del ticker, + y − en el acordeón. Capturas de dashboards y recomendaciones de LinkedIn se muestran como imágenes reales dentro de tarjetas con borde y sombra, con `alt` vacío cuando el texto equivalente está disponible en otro lugar.

---

## 6. Plantillas de página

**Home (`/`)** en este orden: barra de utilidades (fecha, número de edición, botón de pausar animaciones), ticker, cabecera de diario con el nombre, hero con foto, franja de plataformas (Meta, Google, LinkedIn, TikTok), franja de marcas, Frentes (tres pestañas: Paid media, Growth B2B, Go-to-market), problema, Mesa de control (calculadora de embudo), Diagnóstico (cinco áreas), Casos (fondo oscuro), Cartas de lectores (carrusel de 15 recomendaciones, clientes primero), Método, Perfil, Contacto (oferta), "es para vos / no es para vos", Preguntas, cierre y pie.

**Landing de workshop (`/workshop`)**: cabecera mínima fija, hero con "ticket" de datos (fecha, lugar, duración, cupo, precio), contexto del país con tres cifras y fuente, programa en bloques con pausa, "qué te llevás" (fondo oscuro), "es para vos si / no es para vos si", quién lo da, formulario de inscripción que arma un mensaje de WhatsApp (o mail si no hay número), preguntas frecuentes y pie.

---

## 7. Catálogo de componentes

Cada componente debe tener variantes, estados y documentación. Los nombres de clase actuales van entre paréntesis.

1. **Button** (`.btn`): primario lima con borde y sombra; `ghost` (subrayado, sin caja); `sm`; `light` (sobre fondo oscuro); `dark-btn`. Siempre alto mínimo de 44 px.
2. **Pill / NavCTA** (`.pill`, `.navcta`): botón compacto negro con texto papel, hover lima. Asegurar que ningún estilo de enlace le pise el fondo.
3. **Folio** (`.folio`): encabezado de sección con borde superior de 3 px, "§ 01", nombre de sección, línea flexible y número de página.
4. **SectionHead** (`.sec-head`): título (h2) a la izquierda y nota (`.note`, borde izquierdo de 3 px) a la derecha.
5. **Kicker** (`.kicker`): etiqueta mono con raya de 34 px a la izquierda.
6. **Tabs** (`.tabs`): lista vertical y panel, navegación con flechas (incluye arriba y abajo), roles `tablist/tab/tabpanel`.
7. **Card de caso** (`.dcard`): etiqueta, tag con borde lima, cifra grande, titular y descripción; sobre fondo oscuro.
8. **Stat / Ticket / StatBlock**: cifras con fuente (`.ws-stats`), ticket de datos con filas dt/dd (`.ticket`).
9. **Placeholder "pendiente"** (`mark.todo`): fondo amarillo `--todo` con borde punteado y tipografía mono. Es la única forma permitida de dejar un dato sin confirmar.
10. **Carrusel de recomendaciones** (`.recs`, `.rrow`, `.rcard`): dos filas con etiqueta, botón por tarjeta que abre el lector, pausa y duplicado `aria-hidden` para el bucle.
11. **Reader dialog** (`.rdlg`): diálogo nativo con nombre, cargo, relación, fecha, texto completo, anterior/siguiente y enlace a LinkedIn.
12. **Calculadora de embudo** (`.funnel`): campos numéricos, barras de conversión, costos y frase de interpretación; calcula en el navegador.
13. **Accordion / FAQ** (`.q`): con numeración "P.1", signo + / −.
14. **Línea de pasos** (`.steps`, `.ostep`, `.ws-prog`): numerados, con línea que se llena con el scroll en el método.
15. **Duo** (`.duo`): dos columnas "es para vos / no es para vos" con marcadores + y −.
16. **Form** (`.ws-form`): labels visibles en mono, inputs con borde de 2 px y fondo papel, select, textarea, casilla de consentimiento, mensaje de estado con `aria-live`, validación nativa más mensaje de error.
17. **Nav**: barra compacta que aparece al hacer scroll (en móvil siempre visible), menú hamburguesa, barra de progreso lima, índice lateral numerado (solo escritorio), CTA fija (en móvil, barra inferior que aparece al subir).
18. **Ticker** (`.ticker`) y **Marquee**: con pausa global y por interacción.
19. **Strip de marcas / plataformas** (`.brands`, `.plats`, `.bl`): rejilla de recuadros con borde de 2 px; los logos pendientes usan recuadro punteado.
20. **Portrait** (`.portrait`, `.photo`): foto duotono con marco y sombra, y sticker rotado opcional.

---

## 8. Contenido y datos que el sistema debe poder mostrar

Datos con respaldo del portfolio de paid media y de fuentes públicas. Si algo no está confirmado, se usa el placeholder `todo`.

- **Casos en ads:** Twisted Dough (ecommerce, Meta): ROAS 5,25 con más de USD 97K invertidos y más de USD 510K en valor de conversión, 2021–2023. Tetra Pak (B2B, LinkedIn): más de 15 campañas activas (7 en Andina, 8 en Cono Sur), más de USD 27K invertidos. Cliente automotriz: más de 15K leads con más de USD 100K invertidos, 2022–2025. Print a Lot (ecommerce): más de 1K ventas y 4M de personas alcanzadas.
- **Datos excluidos a propósito** por inconsistencias detectadas en el portfolio: el segundo registro de Twisted Dough (ROAS 2 con USD 10K), las estadísticas idénticas de Chaia y BLIND, y "+16k impresiones" de Percom (son 16 millones).
- **Contexto del país (workshop):** consumo masivo −2,7% acumulado enero–septiembre 2026 (Scentia), inflación de septiembre 1,9% (INDEC), 57% de las pymes que usan IA no mide su impacto (Di Tella y Fundar; muestra de pymes industriales y de software).
- **Recomendaciones de LinkedIn:** 15 en total, mostradas en dos grupos: clientes primero y compañeros de equipo y colegas después.
- **Workshop:** presencial, Río Gallegos, 4 horas con pausa, cupo de 30 personas, $30.000 por persona. Fecha y lugar pendientes. Bloques: cómo te encuentra hoy un cliente; publicidad con presupuesto chico; IA para ahorrar tiempo; tu plan de 30 días.
- **Pendientes de Juan Manuel:** brochure, logos de empresas, lista de empresas que puede nombrar públicamente, años de experiencia, número de WhatsApp, enlace de agenda y historia personal.

---

## 9. Qué evitar (anti-patrones del sistema)

Esquinas redondeadas, sombras difusas, gradientes de fondo, paletas azul/violeta, iconos decorativos, fotos de stock, tarjetas flotantes con glassmorphism, animaciones que no se puedan pausar, texto menor a 12 px, pesos 700/800, cifras sin fuente, resultados presentados como garantizados, y cualquier texto que repita las fórmulas prohibidas de la sección 3.

---

## 10. Entregables esperados de Claude Code

1. `design-tokens.css` (variables) y, si corresponde, extensión de Tailwind.
2. Carpeta `components/ui/` con los componentes de la sección 7, tipados, con props documentadas y accesibilidad resuelta.
3. Ruta `/design-system` con la documentación viva.
4. Migración de la lógica de `behavior.ts` a hooks y componentes React, sin cambiar el comportamiento.
5. Checklist final de verificación: contraste AA, navegación completa por teclado, vista móvil (390 px) y escritorio (1440 px), `prefers-reduced-motion`, página usable sin JavaScript, y build y lint sin errores.
