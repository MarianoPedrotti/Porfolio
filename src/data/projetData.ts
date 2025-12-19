// src/data/projectsData.ts
import type { Project } from '../types/projec'; 

export const projectsData: Project[] = [
    
    {
      imageURL: '/imagen/sistema-Gestion/presentacion.png',
      title: 'Sistema de Gestión de Presupuesto y Stock',
      stack: 'C# .NET + SQL Server',
      description: `Sistema de gestión de presupuestos desarrollado en C#, con persistencia en SQL Server. Implementa módulos de clientes, productos y presupuestos, incorporando validaciones, manejo de transacciones y control de stock al confirmar operaciones.

El diseño modular permite una navegación centralizada y una clara separación de responsabilidades dentro de la aplicación.`,
      link: 'https://github.com/MarianoPedrotti/SistemaPresupuesto.git',
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
            description: 'Vista de gestión de clientes, que incluye un formulario de carga y edición, acciones mediante botones y una tabla (DataGridView) para la visualización de registros. Permite seleccionar un cliente desde la tabla para autocompletar el formulario, e incorpora validaciones de datos y mensajes de advertencia ante entradas incorrectas.',
            screenshots: [
                { imageURL: '/imagen/sistema-Gestion/Cliente2.png', altText: 'Abm cliente' },
                { imageURL: '/imagen/sistema-Gestion/alguna-validacion.png', altText: 'Validacion' }
            ]
        },
        {
            description: 'Módulo de gestión de productos, con formulario reutilizable para alta y modificación, listado de productos en DataGridView y selección de registros para precarga de datos. Incluye validaciones de campos y notificaciones visuales.',
            screenshots: [
                { imageURL: '/imagen/sistema-Gestion/producto3.png', altText: 'Abm producto' }
            ]
        },
        {
            description: 'Módulo de gestión de presupuestos, con manejo de estados de transacción. Los presupuestos pueden ser guardados y editados sin impactar el stock, y al momento de la confirmación se realiza la actualización del inventario. Implementa control de flujo y validaciones de negocio.',
            screenshots: [
                { imageURL: '/imagen/sistema-Gestion/presupuesto.png', altText: 'Gestion presupuesto' },
                { imageURL: '/imagen/sistema-Gestion/productosAgregados.png', altText: 'Detalle presupuesto' },
                {imageURL: '/imagen/sistema-Gestion/ValidacionTransaccion.png', altText: 'validacion Transaccion' }
            ]
        },{
            description: 'Módulo de gestión de presupuestos, con manejo de estados de transacción. Los presupuestos pueden ser guardados y editados sin impactar el stock, y al momento de la confirmación se realiza la actualización del inventario. Implementa control de flujo y validaciones de negocio.',
            screenshots: [
                { imageURL: '/imagen/sistema-Gestion/DetallePresupuest01.png', altText: 'Visualizacion Detalle Presupuesto' },
                { imageURL: '/imagen/sistema-Gestion/DetallePresupuesto2.png', altText: 'Detalle presupuesto existente' }
            ]
        },{
            description: 'Diagrama entidad relación del sistema, que muestra las entidades principales y sus relaciones dentro de la base de datos.',
            screenshots: [
                { imageURL: '/imagen/sistema-Gestion/Tablas.png', altText: 'Diagrama entidad relación' },
            ]
        }
      ]
    },
    {
      imageURL: '/imagen/AriumX/logo.png', 
      title: 'Sistema de Gestión de Criptomonedas — AriumX',
      stack: 'Vue + c# .NEt + SQL Server',
      description: `Aplicación web fullstack orientada a la simulación de un mercado de criptomonedas.
El backend, desarrollado en C# (ASP.NET Core), expone una API REST con validaciones, lógica de transacciones y persistencia en SQL Server.
El frontend, construido con Vue 3, consume la API mediante Axios y gestiona el estado del usuario con Pinia, incluyendo persistencia en el navegador.

El sistema permite operaciones de compra y venta, visualización de cotizaciones y gestión del historial de transacciones.`,
      link: 'https://github.com/MarianoPedrotti/ExchangeAriumX.git',
      slug: 'ariumx',
      route: { name: 'project-detail', params: { slug: 'ariumx' } },
      
      gallery: [
        {
          description: 'Vista inicial de autenticación, con identidad visual de la aplicación (logo y nombre), formularios de login y registro, validaciones de datos y manejo de sesión del usuario desde el frontend.',
          screenshots: [ 
            { imageURL: '/imagen/AriumX/principal.png', altText: 'Vista de login' },
            { imageURL: '/imagen/AriumX/RegistroFormulario.png', altText: 'Vista de registro' },
            { imageURL: '/imagen/AriumX/LoginFormulario.png', altText: 'Validación de email' },
            { imageURL: '/imagen/AriumX/CamposLLenos.png', altText: 'Relleno formulario' },
            { imageURL: '/imagen/AriumX/Logeado.png', altText: 'Una vez logueado' }
          ]
        },
        {
          description: 'Pantalla de mercado de criptomonedas, con visualización de datos actualizados y funcionalidades integradas de compra y venta. Incluye lógica de transacciones, validaciones de operaciones y sincronización del estado del usuario en el frontend',
          // 🛑 CAMBIO: Aunque sea una sola imagen, debe ir dentro del array screenshots
          screenshots: [
            { imageURL: '/imagen/AriumX/VistaVenta-Compra.png', altText: 'Mercado de Criptos' },
            { imageURL: '/imagen/AriumX/VistaMonedas.png', altText: 'Monedas' },
            { imageURL: '/imagen/AriumX/ValidacionSaldo.png', altText: 'Validacion Saldo' },
            { imageURL: '/imagen/AriumX/TransaccionExitosa.png', altText: 'Transaccion exitosa' }
          ]
        },
        {
          description: 'Módulo de transacciones, donde se visualiza el historial de operaciones realizadas por el usuario, incluyendo fecha, tipo de operación, criptomoneda, cantidad y valor total. Permite eliminar transacciones desde la interfaz.',
          // 🛑 CAMBIO: Ajustado a la nueva interfaz
          screenshots: [
            { imageURL: '/imagen/AriumX/HistorialTransacciones.png', altText: 'Panel de Transacción' },
            { imageURL: '/imagen/AriumX/seleccionTransaccion.png', altText: 'Seleccionar Transacción' },
            { imageURL: '/imagen/AriumX/eliminarTransaccion.png', altText: 'Eliminaxion exitosa'}
          ]
        },
      ]
    },
    {
      imageURL: '/imagen/CopiaRappi/inicio.png', 
      title: 'Aplicación tipo Rappi — App Rappi',
      stack: 'Vue + Nodejs + Nestjs + PostgreSQL + TypeScript + Postman',
      description: `Aplicación web fullstack orientada a la simulación de una plataforma de delivery.
El backend, desarrollado con NestJS sobre Node.js y TypeScript, implementa una API REST con validaciones y persistencia en PostgreSQL.
El frontend, construido con Vue, consume la API y permite la navegación y ejecución de flujos típicos de una aplicación de delivery. Los endpoints fueron testeados mediante Postman.`,
      link: 'https://github.com/Fer-H-1984/CopiaRappi/tree/portfolio-final',
      slug: 'rappi',
      route: { name: 'project-detail', params: { slug: 'rappi' } },
      
      gallery: [
        {
          description: 'Pantalla de inicio de la aplicación, que presenta la identidad visual del proyecto y las opciones de inicio de sesión y registro. Desde esta vista, el usuario puede acceder a los formularios correspondientes para autenticarse o crear una cuenta.',
          screenshots: [ 
            { imageURL: '/imagen/CopiaRappi/inicio.png', altText: 'Vista de principal' },
          ]
        },
        {
          description: 'Pantalla de registro, que permite la creación de cuentas para los distintos roles del sistema: usuarios, vendedores, repartidores y administradores. Cada formulario incluye validaciones de datos y control de errores antes del envío de la información. ',
          // 🛑 CAMBIO: Aunque sea una sola imagen, debe ir dentro del array screenshots
          screenshots: [
            { imageURL: '/imagen/CopiaRappi/formularioRegistroUser.png', altText: 'Formulario de Registro de Usuario' },
            { imageURL: '/imagen/CopiaRappi/formularioRegistroVendors.png', altText: 'Formulario de Registro de Vendedores' },
            { imageURL: '/imagen/CopiaRappi/formularioRegistroDriver.png', altText: 'Formulario de Registro de Conductores' }
          ]
        },
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
            { imageURL: '/imagen/CopiaRappi/perfilUser.png', altText: 'Ventana user' },
            { imageURL: '/imagen/CopiaRappi/perfilUser2.png', altText: 'Ventana user busqueda' }
          ]
        },
        {
          description: 'Vista principal del repartidor (driver), desde donde se pueden visualizar los pedidos asignados y su estado, así como gestionar la información de su perfil. Esta ventana centraliza las acciones del repartidor dentro de la plataforma.',
          // 🛑 CAMBIO: Ajustado a la nueva interfaz
          screenshots: [
            { imageURL: '/imagen/CopiaRappi/perfilDriver3.png', altText: 'Ventana Driver' },
            { imageURL: '/imagen/CopiaRappi/perfilDriver2.png', altText: 'Ventana Driver pedidos' }
          ]
        }, {
          description: 'Vista principal del vendedor (vendor), que permite la gestión de productos, incluyendo la creación, desactivación y eliminación de los mismos. Además, ofrece acceso a la visualización de pedidos, junto con reportes y estadísticas para el seguimiento de la actividad del comercio.',
          // 🛑 CAMBIO: Ajustado a la nueva interfaz
          screenshots: [
            { imageURL: '/imagen/CopiaRappi/perfilVendors.png', altText: 'Ventana Vendors' },
            { imageURL: '/imagen/CopiaRappi/perfilVendors2.png', altText: 'Ventana Vendors funcionalidades' }
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