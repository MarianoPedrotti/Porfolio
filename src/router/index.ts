import { createRouter, createWebHistory } from 'vue-router';
// ⚠️ Importa el componente donde se muestra la lista de proyectos (tu Landing Page o Home)
import HomeView from '../views/HomeView.vue'; 
// ⚠️ Importa el componente de detalle que creamos
import ProjectDetail from '../components/ProjectDetail.vue'; 

// 1. Define el array de rutas (Routes)
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView, // Ruta principal
  },
  
  // 2. RUTA DINÁMICA DE DETALLE
  {
    // El :slug captura el valor (ej: 'ariumx' o 'presupuesto')
    path: '/proyectos/:slug', 
    name: 'project-detail', // ¡Este nombre DEBE coincidir con el que usas en el router-link!
    component: ProjectDetail,
    // (Opcional) Puedes añadir props: true si quieres pasar el slug como prop al componente
  },

  // (Opcional) Ruta 404
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: () => import('../views/NotFound.vue') 
  }
];

// 3. Crea el router
const router = createRouter({
  // Historial basado en la API estándar del navegador (recomendado)
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;