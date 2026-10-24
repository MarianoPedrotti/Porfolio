# Etapa 2: rediseño profesional

## Base y alcance

Rama: `feat/portfolio-redesign`, desde `89c1aa40fcfd2625550de6463254c98454857a28`.
Vue 3, TypeScript, Vite y Bootstrap se conservan; sin nuevas dependencias de aplicación.
`vercel.json`, los slugs anteriores y los recursos retirados en Etapa 1 se conservan.
El CV sigue sin mostrarse: los documentos externos no se incorporaron al sitio.

## Diseño y componentes

- Tokens en `src/style.css`: azul noche, superficies opacas, dorado para acciones y azul claro para enlaces.
- Header sticky, disclosure móvil con Escape, foco y navegación por teclado.
- Home: Hero → OptiGest → proyectos secundarios → tecnologías/formación → contacto.
- `ProjectCard.vue`: tarjetas de proyectos desde una fuente de datos tipada.
- `MediaGallery.vue`: figuras estáticas, imágenes completas y enlaces a tamaño original; sin autoplay.
- `ProjectDetail.vue`: cabecera, secciones opcionales del caso, galería y acciones.
- EmailJS conserva servicio, plantilla y clave pública; feedback persistente con región viva.
- Bootstrap CSS permanece. Se eliminan imports de JS e iconos sin uso tras retirar los carruseles; no se cambian paquetes.

## Evidencia y límites de OptiGest

Fuente: información confirmada por el propietario en la solicitud de Etapa 2.
Se publica: negocio real, uso en producción, ASP.NET Core, Entity Framework Core,
SQL Server, Vue 3, TypeScript, clientes, productos, vehículos, ventas, financiación,
cuotas, pagos y cuenta corriente.

No se publica nombre del cliente, métricas, operaciones, URLs de producción,
repositorios ni imágenes. La existencia de un repositorio público no certifica
ausencia de datos sensibles; la revisión específica queda pendiente.
El detalle textual `/proyectos/optigest` es navegable y completo sin galería.

Material futuro, sujeto a aprobación explícita:
- Captura de clientes con datos de demostración.
- Catálogo de productos y vehículos sin precios o identificadores comerciales reales.
- Flujo de venta financiada y cuotas con datos ficticios claramente identificados como demo.
- Registro de pagos y cuenta corriente sin información de clientes reales.
- URLs frontend/backend y revisión de contenido antes de habilitar enlaces.

Las imágenes de proyectos secundarios son las referencias conservadas en Etapa 1;
no se incorporaron imágenes nuevas ni se reutilizaron para OptiGest.

## Validación local

- `npm ci`, `npm run build` (incluye `vue-tsc -b`), `npm audit`, `git diff --check`.
- Chromium/Playwright y axe instalados en la carpeta temporal de OpenCode, fuera del proyecto.
- 7 rutas × 5 anchos (320, 375, 768, 1024, 1440): inicio, cuatro proyectos,
  slug inexistente y ruta inexistente. Un `main`, un `h1`, sin overflow horizontal.
- Análisis axe WCAG 2 A/AA y 2.1 AA sin infracciones detectadas en esa matriz.
  No constituye certificación completa: falta revisión humana con lector de pantalla.
- Menú por teclado, Escape, cierre y foco; anclas de proyectos/contacto desde otra ruta.
- EmailJS interceptado: validación vacía, éxito, error y preservación del mensaje.
  Ningún envío real.
- 21 imágenes activas después de Etapa 2.2: existencia, casing exacto, decodificación y HTTP `image/*`.
- 35 recursos originales retirados: ausentes de `public/`, `dist/` y sin respuesta binaria en Preview local.
- Repositorios de Presupuestos, AriumX, Rappi y perfil GitHub: HTTP 200.
  LinkedIn: HTTP 999 (bloqueo de automatización), URL conservada.
- Capturas y reporte en `C:\Users\Pc\AppData\Local\Temp\opencode\`:
  `portfolio-desktop.png`, `portfolio-mobile.png`, `portfolio-optigest.png`, `portfolio-qa.json`.

## Antes del PR

Revisar capturas y contenido, teclado/lector de pantalla en dispositivos reales,
Safari/Firefox, y la autorización de material futuro de OptiGest.
Los enlaces LinkedIn pueden bloquear verificaciones automatizadas.
Las pruebas de rutas se ejecutan contra Vite Preview; la comprobación de Vercel
requiere un Preview posterior autorizado. No hubo push, commit, merge ni despliegue.
Los metadatos sociales son globales: sin SSR/prerender ni imagen social nueva.

## Etapa 2.1: posicionamiento y caso técnico

- Hero: `Backend Developer .NET` como único h1; Full Stack como capacidad complementaria.
- OptiGest: problema, análisis, backend, frontend, funcionalidades, reglas de financiación,
  pruebas y producción. Fuente: información técnica confirmada por el propietario en Etapa 2.1.
- Financiación sobre saldo pendiente y pago de cuotas por importe exacto; sin afirmar
  pagos parciales, garantías transaccionales globales ni abandono completo de Excel.
- El nombre del cliente y los recursos pendientes siguen sin publicarse.
- La estructura existente admite una lista opcional de funcionalidades; sin nuevos componentes.
- Rappi: diagnóstico en contextos independientes de Chromium a 1440 y 375 px.
  HTTP 200, `naturalWidth=1331`, imagen completa antes y después de scroll.
  No se reprodujo el fallo reportado y no se alteró `ProjectCard.vue`.
  El proceso anterior no esperaba la decodificación; eso permite una captura prematura,
  pero no demuestra que haya sido la causa de aquella imagen ausente.
  Las nuevas capturas recorren las imágenes y esperan `decode()` antes de capturar.
- Build y TypeScript correctos; matriz de 35 combinaciones sin overflow ni infracciones
  axe detectadas. Teclado, anclas, rutas inválidas, recursos y formulario simulado aprobados.
- Capturas: `portfolio-21-desktop.png`, `portfolio-21-mobile.png`,
  `portfolio-21-optigest.png`, `portfolio-21-optigest-mobile.png`.
  Reporte: `portfolio-21-qa.json`. Ubicación: carpeta temporal de OpenCode indicada arriba.
- Enlaces GitHub: HTTP 200. LinkedIn: HTTP 999; requiere comprobación manual.

## Etapa 2.2: cierre de privacidad

- Nueve derivados aplanados y revisados sustituyen las capturas aprobadas; los originales
  dejaron de formar parte del árbol publicable.
- Siete capturas con información comercial no verificada se retiraron de las galerías hasta
  disponer de una recaptura segura de demostración.
- Las galerías mantienen flujos no vacíos, navegación y carga diferida de imágenes.
- Los enlaces a repositorios secundarios permanecen retirados hasta su saneamiento externo.
- Validación final: `npm ci`, build con TypeScript, `npm audit` sin vulnerabilidades,
  `git diff --check` y matriz Playwright/axe de 35 combinaciones correctas.

## Revisión posterior de recursos

- El propietario confirmó que el contenido visible de SistemaPresupuesto, AriumX y App
  Rappi es demostrativo y ficticio; los secretos técnicos continúan siendo un criterio
  independiente.
- Se restauraron 14 capturas originales seleccionadas por su valor explicativo y se
  mantuvieron dos derivados cuando ofrecen un encuadre superior.
- Se restauraron los enlaces de SistemaPresupuesto y ExchangeAriumX tras no confirmar
  credenciales técnicas literales en la revisión estática disponible.
- App Rappi conserva su galería, pero su repositorio de tercero no se enlaza mientras
  exista una contraseña literal de configuración sin remediar.
- La selección pasó build con TypeScript, `npm audit`, `git diff --check` y matriz
  Playwright/axe de 35 combinaciones. El detalle está en `docs/privacy-audit.md`.
