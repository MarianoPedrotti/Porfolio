# Auditoría de privacidad previa a publicación

## Resultado

**Publicación y commit bloqueados.** Se retiraron 35 recursos originales y los enlaces
de los tres repositorios cuestionados. Nueve derivados aprobados reemplazan originales;
siete capturas quedan retiradas hasta disponer de una recaptura segura. Se conserva el
diseño de Etapas 2/2.1 y no se modificó ningún repositorio externo.
Este informe no contiene datos personales extraídos ni valores de credenciales.

## Inventario completo de public/

Se inspeccionaron visualmente 39 imágenes y se leyó el SVG: 40 recursos originales.
Quedan 26 archivos después de retirar 35 recursos originales e incorporar nueve derivados
saneados. La inspección de imágenes
cubre el contenido visible; no es una certificación forense de metadatos o contenido oculto.
Activo significa referenciado por el frontend o por el favicon, no que esté autorizado.
Todo archivo de `public/` se publica aunque no tenga referencias.

### Raíz y foto

| Ruta relativa a public/ | Uso | Revisión |
| --- | --- | --- |
| LogoPestaña.png | Activo | Icono, sin datos personales visibles |
| vite.svg | Sin uso | Recurso de plantilla innecesario; sin scripts ni enlaces externos ejecutables |
| imagen/fotoPortafolio.jpg | Activo | Foto personal aprobada en el diseño; sin texto sensible visible |

### imagen/sistema-Gestion/

| Archivo | Uso | Revisión |
| --- | --- | --- |
| cliente.png | Sin uso; eliminado | Tabla con datos de contacto; eliminación autorizada |
| DetallePresupuest01.png | Activo | Tabla vacía |
| DetallePresupuesto2.png | Sustituido; original eliminado | Reemplazado por derivado saneado aprobado |
| Home.png | Activo | Navegación, sin registros |
| Producto.png | Sin uso; eliminado | Productos, precios y stock; eliminación autorizada tras verificar referencias |
| Tablas.png | Sustituido; original eliminado | Reemplazado por derivado saneado aprobado |
| ValidacionTransaccion.png | Sustituido; original eliminado | Reemplazado por derivado saneado aprobado |
| presentacion.png | Activo | Navegación, sin registros |
| presupuesto.png | Activo | Formulario sin cliente ni líneas cargadas |
| principal.png | Sin uso | Navegación, sin registros; candidato a limpieza |
| producto2.png | Sin uso; eliminado | Producto, precio y stock; eliminación autorizada tras verificar referencias |
| producto3.png | Sustituido; original eliminado | Reemplazado por derivado saneado aprobado |
| productosAgregados.png | Sustituido; original eliminado | Reemplazado por derivado saneado aprobado |

### imagen/CopiaRappi/

| Archivo | Uso | Revisión |
| --- | --- | --- |
| perfilDriver.png | Sin uso; eliminado | Perfil con datos de cuenta; eliminación autorizada |
| Captura de pantalla 2025-12-16 151336.png | Sin uso; eliminado | Datos de registro; eliminación autorizada |
| formularioLogin.png | Activo | Formulario vacío |
| inicioLogueado.png | Sin uso; eliminado | Información de sesión; eliminación autorizada |
| perfilDriver2.png | Retirado; pendiente de recaptura | No se publica derivado de calidad media |
| perfilUser2.png | Sustituido; original eliminado | Reemplazado por derivado saneado aprobado |
| perfilVendors (2).png | Sin uso; eliminado | Información de sesión; eliminación autorizada |
| perfilVendors.png | Sustituido; original eliminado | Reemplazado por derivado saneado aprobado |
| PerfilVendors2.png | Sustituido; original eliminado | Reemplazado por derivado saneado aprobado |
| Tablas.jpg | Activo | Esquema sin registros; nombres de campos de autenticación, no valores de credenciales |

### imagen/AriumX/

| Archivo | Uso | Revisión |
| --- | --- | --- |
| ChatGPT Image 14 jun 2025, 10_18_26.png | Sin uso | Logo alternativo, sin datos personales visibles |
| HistorialTransacciones.png | Retirado; pendiente de recaptura | No se publica derivado de calidad media |
| Logeado.png | Activo | Estado de sesión sin nombre visible |
| LoginFormulario.png | Activo | Formulario vacío |
| RegistroFormulario.png | Activo | Formulario vacío |
| TransaccionExitosa.png | Retirado; pendiente de recaptura | No se publica derivado de calidad media |
| ValidacionSaldo.png | Retirado; pendiente de recaptura | No se publica derivado de calidad media |
| VistaMonedas.png | Retirado; pendiente de recaptura | No se publica derivado de calidad media |
| VistaVenta-Compra.png | Retirado; pendiente de recaptura | No se publica derivado de calidad media |
| eliminarTransaccion.png | Sustituido; original eliminado | Reemplazado por derivado saneado aprobado |
| logo.png | Activo | Logo, sin datos personales visibles |
| logo_SOlo.PNG | Sin uso | Logo alternativo, sin datos personales visibles |
| principal.png | Activo | Formulario sin datos visibles |
| seleccionTransaccion.png | Retirado; pendiente de recaptura | No se publica derivado de calidad media |

### Recursos saneados incorporados

| Ruta relativa a public/ | Origen de revisión | Estado |
| --- | --- | --- |
| imagen/sistema-Gestion/detalle-presupuesto-saneado.png | Detalle de presupuesto | Incorporado y referenciado |
| imagen/sistema-Gestion/diagrama-entidades-saneado.png | Diagrama de entidades | Incorporado y referenciado |
| imagen/sistema-Gestion/validacion-presupuesto-saneado.png | Validación de presupuesto | Incorporado y referenciado |
| imagen/sistema-Gestion/gestion-productos-saneado.png | Gestión de productos | Incorporado y referenciado |
| imagen/sistema-Gestion/presupuesto-lineas-saneado.png | Líneas de presupuesto | Incorporado y referenciado |
| imagen/CopiaRappi/usuario-saneado.png | Vista de usuario | Incorporado y referenciado |
| imagen/CopiaRappi/vendor-saneado.png | Panel de vendedor | Incorporado y referenciado |
| imagen/CopiaRappi/vendor-compacto-saneado.png | Panel compacto de vendedor | Incorporado y referenciado |
| imagen/AriumX/eliminacion-transacciones-saneado.png | Confirmación de eliminación | Incorporado y referenciado |

No se identificaron tokens o contraseñas legibles en las imágenes revisadas.
Un campo de contraseña enmascarado no se interpreta como contraseña recuperada.
Los importes y nombres no se atribuyen a clientes reales sin evidencia; tampoco
se consideran ficticios automáticamente. La resolución aplicada a las 16 capturas
queda registrada en la sección de derivados; no quedan originales bajo revisión en
el árbol publicable.

## Eliminaciones y referencias

- `public/imagen/sistema-Gestion/cliente.png`
- `public/imagen/CopiaRappi/perfilDriver.png`
- `public/imagen/CopiaRappi/Captura de pantalla 2025-12-16 151336.png`
- `public/imagen/CopiaRappi/inicioLogueado.png`
- `public/imagen/CopiaRappi/perfilVendors (2).png`
- `public/imagen/sistema-Gestion/Producto.png`
- `public/imagen/sistema-Gestion/producto2.png`

No hay referencias activas a estos nombres en componentes, datos, estilos,
HTML, scripts o configuración. No se necesita reemplazo y no cambia el diseño.
Se repitió la búsqueda antes del segundo retiro: las únicas menciones a los tres
nombres adicionales estaban en este informe, no en referencias activas.
Se repitió la búsqueda antes del tercer retiro: `Producto.png` y `producto2.png`
solo aparecían en este informe. Los 12 recursos retirados en Etapa 1 no reaparecieron;
con estos siete fueron 19 retirados antes de Etapa 2.2.

En Etapa 2.2 se eliminaron los 16 originales bajo revisión. Nueve se sustituyeron por
los recursos saneados del inventario anterior; siete quedan fuera de `public/` y sin
referencias hasta su recaptura: `perfilDriver2.png`, `HistorialTransacciones.png`,
`seleccionTransaccion.png`, `TransaccionExitosa.png`, `ValidacionSaldo.png`,
`VistaMonedas.png` y `VistaVenta-Compra.png`. En total, 35 recursos originales quedan
retirados del árbol publicable. No se copiaron originales a otra carpeta versionada.

## Repositorios públicos enlazados

Se consultaron metadatos públicos sin autenticación y se inspeccionaron snapshots
en clones bare temporales, sin ejecutar código, instalar dependencias ni probar credenciales.
Los enlaces corresponden a los proyectos esperados según estructura y fuentes.
No se revisó todo el historial Git, otras ramas ni el contenido completo de binarios.
Las dependencias vendorizadas y lockfiles se excluyeron del análisis de patrones.

| Repositorio | Propiedad / rama inspeccionada | Snapshot | Resultado |
| --- | --- | --- | --- |
| MarianoPedrotti/SistemaPresupuesto | Cuenta del propietario / master | 5d4ba944c40274e1c43135d3fa9b944d5152efe2 | Público. 46 archivos de texto examinados. Conexiones con autenticación integrada e identificadores locales; no se detectó contraseña embebida en las conexiones revisadas. |
| MarianoPedrotti/ExchangeAriumX | Cuenta del propietario / main | 04bc7d8f66e1c74fb6dee129e74e26d7d855aeef | Público. 244 archivos de texto examinados; 775 dependencias/lockfiles excluidos, 476 binarios y 6 archivos grandes sin inspección de contenido. Configuración local y artefactos de IDE/build; revisión no aprobada. |
| Fer-H-1984/CopiaRappi | Cuenta de tercero / portfolio-final | 87ff192dbd2d6537ae1e3cfb74965d5c1242b0ed | Público. 160 archivos de texto examinados; 2 lockfiles excluidos y 1 binario sin inspección. Contraseña literal de base de datos y datos de cuentas fijos; revisión no aprobada. |

Hallazgos técnicos, sin reproducir valores:

- **SistemaPresupuesto:** `App.config`, `Properties/Settings.settings` y
  `Properties/Settings.Designer.cs` contienen conexiones e identificadores locales.
  Las conexiones comprobadas utilizan autenticación integrada de Windows.
  Coincidencias SQL incluyen instrucciones de aplicación, no prueban un volcado de datos.
- **AriumX:** conexiones en `Final/Final/appsettings.json` y en dos prototipos
  bajo `BackenQueNo/`, también copiadas a `bin/`. Las comprobadas usan autenticación
  integrada. Se publican `.vs/.../CodeChunks.db`, `SemanticSymbols.db`, `.suo`,
  `.csproj.user`, binarios y artefactos de build. El contenido de las bases de índices
  no se certificó; pueden conservar código o información local. Requiere saneamiento
  específico en ese repositorio antes de aprobar el enlace.
- **CopiaRappi:** `src/app.module.ts:29` asigna una contraseña literal a la conexión
  de base de datos; el host configurado es loopback. No se conoce su vigencia o reutilización.
  `copiaRappi-frontend/src/views/AdminView.vue:41-43` incluye correos en una lista fija.
  El carácter ficticio y autorización de esos datos no se ha acreditado.

No se detectaron claves privadas ni tokens de proveedor con los patrones usados en
los textos examinados; esto no garantiza ausencia de secretos en historial o binarios.
No se modificó ningún repositorio externo. Se retiraron las tres propiedades `link`
de los datos de proyectos; los componentes existentes omiten automáticamente esos enlaces.
Las tarjetas, descripciones, imágenes y páginas de detalle se conservan. El enlace al
perfil personal de GitHub permanece: no es un enlace directo a esos repositorios.
Retirar un enlace no sanea el repositorio público ni impide descubrirlo por otros medios.
Que un repositorio sea público o pertenezca al propietario no certifica la privacidad
de sus datos. La cuenta de tercero requiere además confirmar autorización de publicación.

## Exposición actual

Se enviaron exclusivamente solicitudes HTTP `HEAD`, sin descargar, guardar ni
redistribuir cuerpos. El alias de producción y un deployment anterior respondieron
`200 image/png` para los recursos de las siguientes categorías:

| Alcance comprobado | Estado observado | Interpretación |
| --- | --- | --- |
| 16 originales bajo revisión | Accesibles en ambos endpoints | Siguen publicados en los artefactos actuales; en la rama local ya fueron sustituidos o retirados. |
| 7 recursos retirados antes de Etapa 2.2 | Accesibles en ambos endpoints | Permanecen en deployments previos aunque ya no están en el árbol local. |
| Alias de producción y deployment anterior comprobados | 23 de 23 rutas respondieron imagen | La rama local no modifica artefactos, aliases, cachés ni deployments existentes. |

No se observó una credencial legible en esas imágenes. La procedencia de los datos P/C/I
no está confirmada, por lo que no se puede declarar que sean reales ni inocuos. Si se
confirma un dato personal no autorizado o una credencial real, el hotfix mínimo propuesto
es independiente del rediseño: retirar o sustituir exclusivamente el recurso afectado,
generar un artefacto limpio, desplegarlo con autorización y comprobar por `HEAD` que la
ruta ya no devuelva una imagen. No se ejecutó ni se programó ese hotfix.

La eliminación de `public/` y el build limpio excluyen los recursos del próximo artefacto,
pero no alteran la versión publicada. El fallback SPA puede responder `200` HTML; por eso
la comprobación posterior debe validar `Content-Type`, no solo el estado. Otros deployments,
descargas, caches e historial Git pueden persistir. Invalidarlos, restringirlos o modificar
historial requiere autorización separada.

## Validación y cierre

- `npm ci` completado con el lockfile existente y `npm audit` sin vulnerabilidades.
- Build con Vite: salida regenerada y comprobación de ausencia de los 35 recursos retirados
  tanto en public/ como en dist/. El build incluye `vue-tsc -b`.
- 21 imágenes activas presentes, casing exacto y respuestas de tipo imagen.
- Confirmada ausencia de enlaces directos a los tres repositorios retirados en el DOM
  de las siete rutas y cinco anchos probados; se conservan las tres tarjetas secundarias.
- Playwright/axe: 35 combinaciones de rutas y anchos, sin overflow ni infracciones
  detectadas en las reglas aplicadas; teclado, anclas, estados inexistentes y galerías
  con imágenes decodificadas correctos.
- EmailJS interceptado: éxito/error simulados, sin envíos reales.
- Sin errores JavaScript; no se generaron nuevas capturas de pantalla en esta auditoría.
- Informe de pruebas sin datos personales: `portfolio-privacy-qa.json` en el temporal de OpenCode.
- `npm run build` (con chequeo TypeScript) y `git diff --check` correctos en Etapa 2.2.
- La regresión final confirmó los 35 recursos retirados fuera de `public/` y `dist/`,
  21 imágenes activas correctas y ausencia de enlaces a los tres repositorios retirados.
- Sin cambios en Hero, OptiGest, estilos, dependencias, main ni historial durante este retiro.
- **Sin commit, push, merge o despliegue:** quedan decisiones de privacidad y autorización.

## Plan de tratamiento original (pre-derivados)

### Criterios

- **P — personal:** nombre o dato que pueda identificar a una persona. Riesgo alto
  cuando aparece vinculado a una operación; no se presupone consentimiento.
- **I — interno:** equipo/servidor, claves de registros o números de pedidos.
  Riesgo medio de correlación o exposición de infraestructura.
- **C — comercial/financiero:** precios, stock, cantidades, saldos, fechas y movimientos.
  Riesgo medio; alto si se vincula con una persona. No son automáticamente datos reales,
  pero el propietario no puede acreditar que sean ficticios o publicables.
- **D — interfaz/demostración no identificativa:** etiquetas, formularios vacíos,
  botones, nombres de monedas y esquema sin filas. Riesgo bajo; se pueden conservar
  sin presentar valores de operaciones como si estuvieran autorizados.
- **Credenciales:** no se observaron contraseñas legibles ni tokens en las 28 imágenes
  activas. Los nombres de campos `password` del diagrama no son credenciales.

Las siguientes rutas son relativas a `public/imagen/`. Cada fila corresponde a una
imagen distinta, aunque alguna tenga más de una referencia en el sitio.

| Archivo | Tipo / riesgo | Acción propuesta para conservar su utilidad |
| --- | --- | --- |
| sistema-Gestion/DetallePresupuesto2.png | I + C / medio | Sustituir por copia con redacción opaca de IDs, nombres de productos, cantidades, precios y totales de todas las filas; conservar encabezados, buscador y estructura de tabla. |
| sistema-Gestion/Tablas.png | I / medio | Recortar físicamente a las entidades y relaciones, eliminando pestañas, explorador y nombre del servidor. Exportar una imagen nueva aplanada. |
| sistema-Gestion/ValidacionTransaccion.png | P + C / alto | Redactar selector de cliente, fecha, valores de productos y total; conservar el mensaje de validación y los botones. La redacción debe abarcar los valores de fondo visibles alrededor del diálogo. |
| sistema-Gestion/producto3.png | C / medio | Redactar valores de nombre, precio y stock del formulario y de todas las filas. Conservar etiquetas y acciones CRUD. |
| sistema-Gestion/productosAgregados.png | P + C / alto | Redactar cliente, fecha, productos, cantidades e importes, incluido total. Mantener estructura de presupuesto, cabeceras y controles. |
| CopiaRappi/perfilUser2.png | P / medio | Redactar únicamente el nombre dentro del saludo en una copia aplanada. Mantener búsqueda y estado de pedidos. Usar esa misma copia en tarjeta y detalle. |
| CopiaRappi/perfilDriver2.png | I + C / medio | Redactar identificadores e importes de cada orden; conservar estados y disposición de la lista. |
| CopiaRappi/perfilVendors.png | I + C / medio | Redactar nombre/precio del producto, identificador del pedido, cantidades e importes de reportes; conservar formulario, acciones y etiquetas de reportes. |
| CopiaRappi/PerfilVendors2.png | I + C / medio | Redactar identificador y valores de pedido/reporte. Mantener formulario vacío y controles de gestión del negocio. |
| AriumX/HistorialTransacciones.png | C / medio | Redactar fechas, cantidades, cotizaciones y totales de todas las filas; conservar columnas, moneda, tipo de operación y selección. |
| AriumX/seleccionTransaccion.png | C / medio | Misma redacción del historial en todas las filas, manteniendo casillas seleccionadas y acción de eliminación. |
| AriumX/eliminarTransaccion.png | C / medio | Redactar todos los valores financieros y fechas visibles detrás del diálogo; conservar confirmación y controles. Recortar barra del navegador. |
| AriumX/TransaccionExitosa.png | C / medio | Redactar cantidad, cotización, total y saldos; conservar moneda, tipo de operación y mensaje de éxito. Recortar barra del navegador. |
| AriumX/ValidacionSaldo.png | C / medio | Redactar cantidad, cotización, total y saldos; conservar mensaje de saldo insuficiente y estructura del formulario. |
| AriumX/VistaMonedas.png | C / medio | Redactar los valores de cantidad, cotización, total y saldos, aunque algunos sean cero; conservar selector de moneda y acciones. |
| AriumX/VistaVenta-Compra.png | C / medio | Redactar cantidad, cotización, total y saldos; mantener formulario y acciones de compra/venta. |

**Total histórico: 16 imágenes activas propuestas para tratamiento.** No se proponen reemplazos
por screenshots de otros sistemas ni números inventados presentados como originales.
Si una copia redactada pierde utilidad, la alternativa es una captura nueva tomada
en un entorno de prueba con datos sintéticos aprobados y rotulada como demostración.
Si ninguna alternativa queda aprobada, excluir la imagen correspondiente y conservar
el texto funcional, previa aprobación de ese cambio.

### Activas sin tratamiento propuesto por contenido visible

Las otras 12 imágenes activas son: `fotoPortafolio.jpg` (foto personal aprobada),
`sistema-Gestion/presentacion.png`, `Home.png`, `presupuesto.png`,
`DetallePresupuest01.png`; `AriumX/logo.png`, `principal.png`, `RegistroFormulario.png`,
`LoginFormulario.png`, `Logeado.png`; `CopiaRappi/formularioLogin.png` y `Tablas.jpg`.
Las rutas abreviadas pertenecen al último directorio indicado. El favicon se revisó
por separado. No se propone redactar etiquetas de campos o esquemas sin registros.

### Técnica y aprobación de derivados

1. Conservar los originales fuera de cualquier carpeta publicable, solo después de
   autorizar su traslado; no añadir copias privadas al repositorio.
2. Preparar derivados con nombres nuevos, inicialmente fuera de `public/` y `dist/`.
3. Reemplazar los píxeles de cada región con un relleno sólido totalmente opaco;
   cubrir también bordes y caracteres parcialmente visibles. No usar blur,
   pixelado, transparencia, overlays CSS ni capas que conserven los píxeles debajo.
4. Para recortes, descartar los píxeles exteriores físicamente. Exportar un raster
   nuevo sin capas, EXIF/XMP, miniaturas ni comentarios heredados.
5. Inspeccionar visualmente y mediante OCR cada derivado, incluyendo fondo de diálogos,
   barra del navegador y áreas repetidas. No volcar el texto original a logs.
6. Obtener aprobación de los derivados antes de cambiar referencias o moverlos a `public/`.
7. Retirar de public/ los originales de cada copia aprobada: ocultar solo el enlace
   no evita acceso directo. Verificar artefacto limpio y URLs de los originales.

Este plan documenta el estado previo a Etapa 2.2. Los 16 originales ya no están en
`public/`, `dist/` ni en referencias activas; la siguiente sección registra los derivados
creados y el resultado aplicado.

## Derivados saneados para revision

Se volvieron a inspeccionar visualmente las 16 capturas antes de generar copias nuevas.
No se modificaron aplicaciones ni bases de datos, por lo que no se crearon capturas
nuevas. Nueve derivados aprobaron la revisión final y se copiaron a `public/` con los
nombres del inventario de recursos saneados. Sus fuentes de revisión permanecen fuera
del repositorio en `C:\Users\Pc\AppData\Local\Temp\opencode\portfolio-sanitized-review\`.
La galeria de ese directorio carga exclusivamente derivados, nunca los originales.

Clasificacion aplicada:

- **P:** dato potencialmente personal.
- **C:** informacion comercial o financiera cuya procedencia no fue confirmada.
- **I:** identificador interno o dato de infraestructura sin autorizacion de publicacion.
- **T:** interfaz tecnica de demostracion, como etiquetas, formularios vacios, categorias
  o ceros de control que no identifican una persona ni prueban una operacion.

Un numero aislado no se clasifica como sensible por ser numerico. Cuando aparece en
una transaccion, inventario, saldo o pedido con procedencia no confirmada, su publicacion
queda pendiente de autorizacion. No se detectaron contrasenas legibles ni tokens en estas
capturas; los nombres de campos de autenticacion no son credenciales.

| Archivo original | Riesgo detectado, sin valores | Tecnica aplicada | Archivo derivado | Calidad y funcion conservada | Resultado Etapa 2.2 |
| --- | --- | --- | --- | --- | --- |
| `sistema-Gestion/DetallePresupuesto2.png` | C + I en consulta y lineas | Vaciado opaco por celda; conserva cabeceras y buscador | `01-sistema-detalle-presupuesto-review.png` | Alta: consulta y estructura de tabla | Incorporado |
| `sistema-Gestion/Tablas.png` | I en interfaz de herramienta | Recorte fisico de barras e identificador | `02-sistema-tablas-cropped-review.png` | Alta: entidades y relaciones legibles | Incorporado |
| `sistema-Gestion/ValidacionTransaccion.png` | P + C en selector y lineas | Vaciado opaco de campos expuestos; modal preservado | `03-sistema-validacion-review.png` | Alta: validacion y aviso visibles | Incorporado |
| `sistema-Gestion/producto3.png` | C en inventario | Vaciado opaco de formulario y celdas | `04-sistema-productos-review.png` | Alta: CRUD, etiquetas y tabla | Incorporado |
| `sistema-Gestion/productosAgregados.png` | P + C en selector, lineas y total | Vaciado opaco de campos y tabla | `05-sistema-presupuesto-agregado-review.png` | Alta: carga de presupuesto y acciones | Incorporado |
| `CopiaRappi/perfilUser2.png` | P en saludo | Saludo generico sobre fondo opaco aplanado | `06-rappi-usuario-review.png` | Alta: busqueda y estado sin identificacion | Incorporado |
| `CopiaRappi/perfilDriver2.png` | I + C en ordenes | Vaciado opaco de lineas de orden | `07-rappi-driver-review.png` | Media: conserva vista, pierde detalle central | Retirado; recaptura |
| `CopiaRappi/perfilVendors.png` | C + I en producto parcial y pedido | Recorte fisico y vaciado opaco de identificador | `08-rappi-vendor-wide-review.png` | Alta: formulario, control tecnico y soporte | Incorporado |
| `CopiaRappi/PerfilVendors2.png` | I en pedido | Vaciado opaco de linea de pedido; se conserva T | `09-rappi-vendor-compact-review.png` | Alta: perfil, productos, pedido y soporte | Incorporado |
| `AriumX/HistorialTransacciones.png` | C en fechas y operaciones | Vaciado opaco por celda; conserva moneda y tipo | `10-ariumx-historial-review.png` | Media: estructura sin ejemplos seguros | Retirado; recaptura |
| `AriumX/seleccionTransaccion.png` | C en filas seleccionables | Vaciado opaco por celda; conserva seleccion y accion | `11-ariumx-seleccion-review.png` | Media: demuestra seleccion, no contenido | Retirado; recaptura |
| `AriumX/eliminarTransaccion.png` | C bajo dialogo de confirmacion | Recorte fisico de barra y vaciado opaco de celdas | `12-ariumx-eliminacion-review.png` | Alta: confirmacion sin operacion expuesta | Incorporado |
| `AriumX/TransaccionExitosa.png` | C en importe y saldos | Recorte fisico y vaciado opaco de campo y metricas | `13-ariumx-exito-review.png` | Media: confirma flujo, no cifras | Retirado; recaptura |
| `AriumX/ValidacionSaldo.png` | C en importe y saldos | Recorte fisico y vaciado opaco de campo y metricas | `14-ariumx-saldo-review.png` | Media: valida el error, con contexto reducido | Retirado; recaptura |
| `AriumX/VistaMonedas.png` | C en cotizacion y saldos | Vaciado opaco de campo y metricas | `15-ariumx-monedas-review.png` | Media: estructura clara, falta demostracion segura | Retirado; recaptura |
| `AriumX/VistaVenta-Compra.png` | C en cotizacion y saldos | Vaciado opaco de campo y metricas | `16-ariumx-compra-venta-review.png` | Media: estructura clara, falta demostracion segura | Retirado; recaptura |

Se crearon 16 derivados aplanados. Se incorporaron nueve y no se inventaron operaciones
ni se presentaron datos sinteticos como datos reales. Los siete derivados de calidad media
no se publican; la alternativa futura es una nueva captura de un entorno de prueba con
datos sinteticos aprobados y rotulada internamente como demostracion. Si no puede obtenerse,
la imagen queda retirada.

Los recortes descartan pixeles fisicamente. Las demas redacciones son rectangulos solidos
opacos y sin transparencia, blur, pixelado ni capas CSS. Cada PNG se codifico desde un
bitmap nuevo, sin capas, EXIF, XMP, comentarios ni miniaturas heredadas. Solo quedan
etiquetas PNG estandar de resolucion/color generadas por el codificador. La revision visual
confirmo que las modificaciones son opacas. Tesseract no esta instalado: una revisión OCR
independiente sigue siendo recomendable antes de publicar, pero no se detectó un hallazgo
adicional durante la revisión visual final.

## Condiciones para restaurar enlaces

| Repositorio | Correcciones y comprobaciones previas |
| --- | --- |
| SistemaPresupuesto | Externalizar o neutralizar identificadores de conexión locales; revisar SQL y configuración, confirmar ausencia de datos privados y autorización. La autenticación integrada no implica una contraseña expuesta. |
| ExchangeAriumX | Retirar del árbol publicable `.vs`, índices locales, archivos de usuario y artefactos de build; revisar su contenido e historial por posible información retenida; neutralizar configuración local y volver a auditar. Cualquier actuación sobre historial requiere autorización separada. |
| CopiaRappi | Quitar la contraseña literal de configuración; evaluar rotación si es real o reutilizada, sin probarla. Externalizar secretos; anonimizar o sustituir los datos fijos de cuentas y revisar historial. Obtener confirmación del responsable de la cuenta de tercero. |

Para todos: auditar un SHA concreto ya saneado, confirmar el enlace correcto y la
autorización, y recién entonces restaurar `link`. No se ejecutó ninguna corrección
en repositorios externos. La retirada local no resuelve su exposición actual.

## Decisiones restantes

- Para los siete casos retirados, aportar o aprobar capturas de demostracion seguras;
  si no son posibles, mantener su exclusion de cada galeria.
- Los nueve recursos saneados pueden revisarse en el Preview antes de autorizar commit
  y publicacion. Los originales ya no estan en el arbol publicable.
- Los enlaces pueden permanecer retirados hasta completar su saneamiento externo.
- La remediacion de produccion, deployments antiguos e historial es independiente
  y sigue sin ejecutarse. No se hara commit, push, merge ni despliegue en esta etapa.
