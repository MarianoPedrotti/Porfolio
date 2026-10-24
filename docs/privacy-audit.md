# Auditoría de recursos y enlaces

## Criterio confirmado

El propietario confirmó que los nombres, importes, productos, IDs, movimientos y
datos visibles en las capturas de SistemaPresupuesto, AriumX y App Rappi son
ficticios y pertenecen a flujos de demostración. Las capturas de OptiGest proceden
de un entorno local con datos de prueba.

Esta confirmación autoriza tratar esos datos visibles como contenido de demostración;
no autoriza por sí sola credenciales, tokens, claves o secretos técnicos que puedan
seguir siendo funcionales. Los secretos técnicos se evalúan de forma independiente.

No se identificaron credenciales, tokens o contraseñas legibles en las capturas que
se conservan. Los campos de contraseña enmascarados y los nombres de columnas no se
consideran credenciales recuperadas.

## Recursos seleccionados

La revisión visual final prioriza la calidad explicativa del portfolio. Se restauraron
14 originales desde la revisión anterior en sus rutas históricas, sin duplicarlos en
otra carpeta versionada. Los originales seleccionados muestran flujos completos de
gestión, compra/venta, historial, validación y roles de usuario mejor que sus derivados.

| Proyecto | Originales activos | Derivados activos | Decisión |
| --- | --- | --- | --- |
| SistemaPresupuesto | `DetallePresupuesto2.png`, `ValidacionTransaccion.png`, `producto3.png`, `productosAgregados.png` | `diagrama-entidades-saneado.png` | Se conservan los flujos originales. El derivado del diagrama ofrece un encuadre más claro que la captura completa. |
| AriumX | `HistorialTransacciones.png`, `seleccionTransaccion.png`, `eliminarTransaccion.png`, `TransaccionExitosa.png`, `ValidacionSaldo.png`, `VistaMonedas.png`, `VistaVenta-Compra.png` | Ninguno | Se restauran las vistas del mercado y las transacciones para explicar el caso completo. |
| App Rappi | `perfilUser2.png`, `perfilDriver2.png`, `PerfilVendors2.png` | `vendor-saneado.png` | Se recuperan los roles de usuario y repartidor. El derivado amplio de vendedor mantiene mejor composición que la captura original equivalente. |

Los dos originales no seleccionados de la revisión final, `sistema-Gestion/Tablas.png`
y `CopiaRappi/perfilVendors.png`, quedan fuera de `public/` por ser redundantes frente a
los derivados activos. No existen referencias activas a ellos.

## Recursos retirados

Se mantienen retirados 21 recursos históricos sin valor funcional actual, duplicados o
de calidad inferior. No hay referencias activas a estos nombres en componentes, datos,
estilos, HTML, scripts o configuración.

```text
/CvMarianoPedrotti.pdf
/Mariano-Pedrotti-2026-BackendDeveloper.pdf
/MarianoPedrotti-2026-BackendDeveloper.pdf
/imagen/AriumX/CamposLLenos.png
/imagen/CopiaRappi/formularioRegistroDriver.png
/imagen/CopiaRappi/formularioRegistroUser.png
/imagen/CopiaRappi/formularioRegistroVendors.png
/imagen/CopiaRappi/inicio.png
/imagen/CopiaRappi/perfilDriver3.png
/imagen/CopiaRappi/perfilUser.png
/imagen/sistema-Gestion/Cliente2.png
/imagen/sistema-Gestion/alguna-validacion.png
/imagen/sistema-Gestion/cliente.png
/imagen/CopiaRappi/perfilDriver.png
/imagen/CopiaRappi/Captura de pantalla 2025-12-16 151336.png
/imagen/CopiaRappi/inicioLogueado.png
/imagen/CopiaRappi/perfilVendors (2).png
/imagen/sistema-Gestion/Producto.png
/imagen/sistema-Gestion/producto2.png
/imagen/sistema-Gestion/Tablas.png
/imagen/CopiaRappi/perfilVendors.png
```

Todo archivo dentro de `public/` se distribuye aunque no tenga referencias. La
verificación posterior debe comprobar tanto referencias como ausencia física de los
recursos retirados.

## Repositorios externos

La revisión estática anterior se realizó sobre snapshots públicos, sin ejecutar código,
instalar dependencias, modificar repositorios externos ni probar credenciales. No cubre
historiales completos, otras ramas, lockfiles o binarios no inspeccionados.

| Repositorio | Resultado de revisión | Estado en el portfolio |
| --- | --- | --- |
| `MarianoPedrotti/SistemaPresupuesto` | No se confirmó una contraseña embebida en las conexiones de texto revisadas; utilizan autenticación integrada y referencias locales. | Enlace restaurado al repositorio del propietario. |
| `MarianoPedrotti/ExchangeAriumX` | No se confirmó una credencial literal en la configuración de texto revisada. El repositorio contiene artefactos locales de IDE/build que siguen siendo una deuda de saneamiento. | Enlace restaurado al repositorio del propietario bajo el criterio confirmado de ausencia de secreto técnico detectado. |
| `Fer-H-1984/CopiaRappi` | Se confirmó una contraseña literal de configuración potencialmente funcional en el código de un tercero. No se reprodujo ni se muestra su valor. | Sin enlace mientras el responsable no la retire, rote si corresponde y confirme autorización de publicación. |

El repositorio tercero no se modificó. Si queda saneado y se autoriza su uso, el enlace
debe dirigirse a `Fer-H-1984/CopiaRappi` y atribuir explícitamente a su titular; no se
debe presentar como repositorio propio.

## Límites y estado de publicación

La evaluación visual no certifica metadatos ocultos ni revisa de forma forense los
archivos de imagen. La confirmación del propietario cubre el contenido de demostración
visible, no el historial Git, deployments anteriores ni secretos externos.

El commit de estos ajustes actualiza exclusivamente el Preview asociado a
`feat/portfolio-redesign`. `main` y el deployment de Production permanecen sin cambios.

## Validación local

- `npm ci` y `npm audit` finalizaron sin vulnerabilidades.
- `npm run build` completó `vue-tsc -b` y el build de Vite correctamente.
- `git diff --check` no detectó errores de espacios.
- Las 28 imágenes referenciadas existen con casing correcto, decodifican y responden como
  `image/*` desde el build local.
- Los 21 recursos retirados no existen en `public/` ni en `dist/` y no tienen referencias
  activas.
- Playwright y axe validaron siete rutas en 320, 375, 768, 1024 y 1440 px: 35
  combinaciones sin overflow, errores JavaScript ni infracciones WCAG A/AA y 2.1 AA
  aplicadas.
- La prueba confirmó los dos enlaces propios, la ausencia del enlace a CopiaRappi, las
  tres tarjetas secundarias, navegación por teclado, anclas y el formulario interceptado
  sin envíos reales.
- La validación se ejecutó localmente antes del commit y del Preview; no incluye merge ni
  promoción a Production.
