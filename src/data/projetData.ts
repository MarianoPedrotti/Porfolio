// src/data/projectsData.ts
import type { Project } from '../types/projec'; 

export const projectsData: Project[] = [
    {
      title: 'OptiGest — Sistema de Gestión Comercial',
      slug: 'optigest',
      featured: true,
      summary: 'Sistema de gestión comercial utilizado en producción que centraliza la administración de clientes, productos, vehículos y ventas, incorporando financiación, gestión de cuotas, seguimiento de pagos y cuenta corriente.',
      stack: 'ASP.NET Core · Entity Framework Core · SQL Server · Vue 3 · TypeScript',
      description: 'Sistema de gestión comercial utilizado en producción que centraliza la administración de clientes, productos, vehículos y ventas, incorporando financiación, gestión de cuotas, seguimiento de pagos y cuenta corriente.',
      route: { name: 'project-detail', params: { slug: 'optigest' } },
      sections: [
        { title: 'Problema de negocio', text: 'El negocio necesitaba centralizar procesos comerciales gestionados mediante planillas Excel y operaciones manuales, incluyendo ventas, financiación y seguimiento de pagos.' },
        { title: 'Análisis y diseño', text: 'Relevé requisitos funcionales y no funcionales, identifiqué reglas de negocio y modelé las entidades y sus relaciones. A partir de ese análisis seleccioné las tecnologías para implementar la solución.' },
        { title: 'Arquitectura backend', text: 'API REST con ASP.NET Core, DTO, controladores, servicios, repositorios e interfaces. Entity Framework Core y SQL Server para la persistencia; autenticación JWT y autorización por roles para el control de acceso.' },
        { title: 'Arquitectura frontend', text: 'Vue 3 y TypeScript, con Pinia para la gestión de estado. La aplicación se organiza en componentes reutilizables, vistas, servicios y stores.' },
        {
          title: 'Funcionalidades principales',
          text: 'El sistema reúne las operaciones comerciales y el seguimiento de las obligaciones de cada cliente:',
          items: [
            'Gestión de clientes.',
            'Gestión de productos y vehículos.',
            'Registro de ventas.',
            'Financiación de ventas de vehículos.',
            'Generación automática y administración de cuotas.',
            'Registro y seguimiento de pagos.',
            'Cuenta corriente de clientes.',
          ],
        },
        { title: 'Reglas de financiación y pagos', text: 'La financiación se calcula sobre el saldo pendiente. El sistema administra las cuotas y registra sus pagos. El pago de una cuota exige el importe exacto: no admite pagos parciales de cuotas.' },
        { title: 'Calidad y pruebas', text: 'Validé la aplicación con pruebas unitarias .NET, pruebas de integración con SQL Server, pruebas frontend y pruebas de extremo a extremo (E2E) con Playwright.' },
        { title: 'Despliegue y uso real', text: 'El sistema está desplegado y es utilizado en producción por el cliente. El trabajo abarca el análisis, el diseño, la implementación, las pruebas y el despliegue de una solución para necesidades reales.' },
      ],
      gallery: [
        {
          description: 'Administración de ventas con indicadores del período, filtros y listado de operaciones de demostración.',
          screenshots: [
            { imageURL: '/imagen/optigest/optigest-ventas.png', altText: 'Administración de ventas de demostración' },
          ],
        },
        {
          description: 'Administración de financiaciones de ventas de vehículos, con estado, cantidad de cuotas y saldo pendiente.',
          screenshots: [
            { imageURL: '/imagen/optigest/optigest-financiaciones.png', altText: 'Administración de financiaciones de vehículos de demostración' },
          ],
        },
        {
          description: 'Administración de cuotas de una financiación de vehículo, con vencimientos, montos, estado y acción de pago.',
          screenshots: [
            { imageURL: '/imagen/optigest/optigest-cuotas.png', altText: 'Administración de cuotas de una financiación de vehículo' },
          ],
        },
        {
          description: 'Estado de cuentas corrientes de clientes, con saldos, filtros y acceso al detalle.',
          screenshots: [
            { imageURL: '/imagen/optigest/optigest-cuentas-corrientes.png', altText: 'Listado de cuentas corrientes de demostración' },
          ],
        },
        {
          description: 'Detalle de movimientos de una cuenta corriente, con conceptos, importes debe y haber, y saldo.',
          screenshots: [
            { imageURL: '/imagen/optigest/optigest-movimientos-cuenta-corriente.png', altText: 'Detalle de movimientos de cuenta corriente de demostración' },
          ],
        },
      ],
    },
    
    {
      imageURL: '/imagen/sistema-Gestion/presentacion.png',
      title: 'Sistema de Gestión de Presupuesto y Stock',
      summary: 'Aplicación de escritorio para gestionar productos, presupuestos y stock con persistencia en SQL Server.',
      stack: 'C# .NET + SQL Server',
      description: `Sistema de gestión de presupuestos desarrollado en C#, con persistencia en SQL Server. Implementa módulos de clientes, productos y presupuestos, incorporando validaciones, manejo de transacciones y control de stock al confirmar operaciones.

El diseño modular permite una navegación centralizada y una clara separación de responsabilidades dentro de la aplicación.`,
      link: 'https://github.com/MarianoPedrotti/SistemaPresupuesto',
      slug: 'presupuesto',
      route: { name: 'project-detail', params: { slug: 'presupuesto' } },
      gallery: [
        {
            description: 'Vista inicial de la aplicación, con un menú centralizado que permite la navegación entre los distintos módulos del sistema. Las vistas se renderizan dentro de una ventana contenedora, garantizando consistencia visual y control del flujo de navegación.',
            screenshots: [
                { imageURL: '/imagen/sistema-Gestion/Home.png', altText: 'Dashboard Principal' }
            ]
        },
         {
            description: 'Módulo de gestión de productos, con formulario reutilizable para alta y modificación, listado de productos en DataGridView y selección de registros para precarga de datos. Incluye validaciones de campos y notificaciones visuales.',
            screenshots: [
                { imageURL: '/imagen/sistema-Gestion/producto3.png', altText: 'Gestión de productos' }
            ]
        },
        {
            description: 'Módulo de gestión de presupuestos, con manejo de estados de transacción. Los presupuestos pueden ser guardados y editados sin impactar el stock, y al momento de la confirmación se realiza la actualización del inventario. Implementa control de flujo y validaciones de negocio.',
            screenshots: [
                { imageURL: '/imagen/sistema-Gestion/presupuesto.png', altText: 'Gestion presupuesto' },
                { imageURL: '/imagen/sistema-Gestion/productosAgregados.png', altText: 'Detalle de presupuesto' },
                { imageURL: '/imagen/sistema-Gestion/ValidacionTransaccion.png', altText: 'Validación de transacción' }
            ]
        },{
            description: 'Módulo de gestión de presupuestos, con manejo de estados de transacción. Los presupuestos pueden ser guardados y editados sin impactar el stock, y al momento de la confirmación se realiza la actualización del inventario. Implementa control de flujo y validaciones de negocio.',
            screenshots: [
                { imageURL: '/imagen/sistema-Gestion/DetallePresupuest01.png', altText: 'Visualizacion Detalle Presupuesto' },
                { imageURL: '/imagen/sistema-Gestion/DetallePresupuesto2.png', altText: 'Detalle de presupuesto existente' }
            ]
        },{
            description: 'Diagrama entidad relación del sistema, que muestra las entidades principales y sus relaciones dentro de la base de datos.',
            screenshots: [
                { imageURL: '/imagen/sistema-Gestion/diagrama-entidades-saneado.png', altText: 'Diagrama entidad relación' },
            ]
        }
      ]
    },
    {
      imageURL: '/imagen/AriumX/logo.png', 
      title: 'Sistema de Gestión de Criptomonedas — AriumX',
      summary: 'Simulación de un mercado de criptomonedas con compra, venta e historial de transacciones.',
      stack: 'Vue 3 · ASP.NET Core · SQL Server',
      description: `Aplicación web fullstack orientada a la simulación de un mercado de criptomonedas.
El backend, desarrollado en C# (ASP.NET Core), expone una API REST con validaciones, lógica de transacciones y persistencia en SQL Server.
El frontend, construido con Vue 3, consume la API mediante Axios y gestiona el estado del usuario con Pinia, incluyendo persistencia en el navegador.

El sistema permite operaciones de compra y venta, visualización de cotizaciones y gestión del historial de transacciones.`,
      link: 'https://github.com/MarianoPedrotti/ExchangeAriumX',
      slug: 'ariumx',
      route: { name: 'project-detail', params: { slug: 'ariumx' } },
      
      gallery: [
        {
          description: 'Vista inicial de autenticación, con identidad visual de la aplicación (logo y nombre), formularios de login y registro, validaciones de datos y manejo de sesión del usuario desde el frontend.',
          screenshots: [ 
            { imageURL: '/imagen/AriumX/principal.png', altText: 'Vista de login' },
            { imageURL: '/imagen/AriumX/RegistroFormulario.png', altText: 'Vista de registro' },
            { imageURL: '/imagen/AriumX/LoginFormulario.png', altText: 'Validación de email' },
            { imageURL: '/imagen/AriumX/Logeado.png', altText: 'Una vez logueado' }
          ]
        },
        {
          description: 'Pantalla de mercado de criptomonedas, con visualización de datos actualizados y funcionalidades integradas de compra y venta. Incluye lógica de transacciones, validaciones de operaciones y sincronización del estado del usuario en el frontend.',
          screenshots: [
            { imageURL: '/imagen/AriumX/VistaVenta-Compra.png', altText: 'Mercado de criptomonedas' },
            { imageURL: '/imagen/AriumX/VistaMonedas.png', altText: 'Monedas disponibles' },
            { imageURL: '/imagen/AriumX/ValidacionSaldo.png', altText: 'Validación de saldo' },
            { imageURL: '/imagen/AriumX/TransaccionExitosa.png', altText: 'Transacción exitosa' },
          ],
        },
        {
          description: 'Módulo de transacciones, donde se visualiza el historial de operaciones realizadas por el usuario y se permite seleccionar registros para eliminarlos desde la interfaz.',
          // 🛑 CAMBIO: Ajustado a la nueva interfaz
          screenshots: [
            { imageURL: '/imagen/AriumX/HistorialTransacciones.png', altText: 'Historial de transacciones' },
            { imageURL: '/imagen/AriumX/seleccionTransaccion.png', altText: 'Selección de transacciones' },
            { imageURL: '/imagen/AriumX/eliminarTransaccion.png', altText: 'Confirmación de eliminación de transacciones' },
          ],
        },
      ]
    },
    {
      imageURL: '/imagen/CopiaRappi/perfilUser2.png',
      title: 'Aplicación tipo Rappi — App Rappi',
      summary: 'Aplicación de delivery con flujos diferenciados para usuarios, repartidores y vendedores.',
      stack: 'Vue + Nodejs + Nestjs + PostgreSQL + TypeScript + Postman',
      description: `Aplicación web fullstack orientada a la simulación de una plataforma de delivery.
El backend, desarrollado con NestJS sobre Node.js y TypeScript, implementa una API REST con validaciones y persistencia en PostgreSQL.
El frontend, construido con Vue, consume la API y permite la navegación y ejecución de flujos típicos de una aplicación de delivery. Los endpoints fueron testeados mediante Postman.`,
      slug: 'rappi',
      route: { name: 'project-detail', params: { slug: 'rappi' } },
      
      gallery: [
        {
          description: 'Pantalla de inicio de sesión, que permite la autenticación de usuarios según su rol, validando las credenciales y habilitando el acceso a las funcionalidades correspondientes dentro de la aplicación.',
          // 🛑 CAMBIO: Ajustado a la nueva interfaz
          screenshots: [
                       { imageURL: '/imagen/CopiaRappi/formularioLogin.png', altText: 'Formulario de Login' },
          ]
        }, {
          description: 'Vista principal del usuario, desde donde se permite la búsqueda de productos y tiendas, así como la gestión del perfil personal. Esta ventana centraliza las acciones principales del usuario dentro de la plataforma.',
          // 🛑 CAMBIO: Ajustado a la nueva interfaz
          screenshots: [
            { imageURL: '/imagen/CopiaRappi/perfilUser2.png', altText: 'Búsqueda de restaurantes' }
          ]
        },
        {
          description: 'Vista principal del repartidor, desde donde se visualizan los pedidos asignados y su estado.',
          // 🛑 CAMBIO: Ajustado a la nueva interfaz
          screenshots: [
            { imageURL: '/imagen/CopiaRappi/perfilDriver2.png', altText: 'Pedidos del repartidor' },
          ],
        }, {
          description: 'Vista principal del vendedor (vendor), que permite la gestión de productos, incluyendo la creación, desactivación y eliminación de los mismos. Además, ofrece acceso a la visualización de pedidos, junto con reportes y estadísticas para el seguimiento de la actividad del comercio.',
          // 🛑 CAMBIO: Ajustado a la nueva interfaz
          screenshots: [
            { imageURL: '/imagen/CopiaRappi/vendor-saneado.png', altText: 'Panel de vendedor' },
            { imageURL: '/imagen/CopiaRappi/PerfilVendors2.png', altText: 'Funciones del vendedor' }
          ]
        },
        {
          description: 'Diagrama entidad relación del sistema, que muestra las entidades principales y sus relaciones dentro de la base de datos.',
          // 🛑 CAMBIO: Ajustado a la nueva interfaz
          screenshots: [
            { imageURL: '/imagen/CopiaRappi/Tablas.jpg', altText: 'Digrama entidad relación' },
          ]
        },
        
      ]
    }
];
