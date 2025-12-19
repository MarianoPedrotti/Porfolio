<template>
  <div class="container my-5">
    <button v-if="project" @click="goBack" class="btn btn-outline-secondary mb-4 shadow-sm">
      <i class="bi bi-arrow-left"></i> Volver a Proyectos
    </button>

    <div v-if="project" class="row animate__animated animate__fadeIn">
      <div class="col-lg-12">
        
        <h1 class="display-4 fw-bold mb-2 text-primary">{{ project.title }}</h1>
        <p class="lead text-primary mb-4 fw-semibold">{{ project.stack }}</p>

        <div class="mb-4 shadow-lg rounded overflow-hidden border">
            <img :src="project.imageURL" :alt="'Captura de ' + project.title" class="img-fluid project-header-image">
        </div>

        <p class="fs-5 text-white mb-5">{{ project.description }}</p>

        <hr class="my-5">
        
        <h3 class="fw-bold mb-4 border-bottom pb-2"><i class="bi bi-cpu me-2"></i>Presentación y Flujo de Trabajo</h3>

        <div class="row g-5">
          <div class="col-12" v-for="(item, index) in project.gallery" :key="index">
            <div class="card shadow-sm border-0 overflow-hidden bg-light">
              <div class="row g-0">
                
                <div class="col-md-7">
                  <div :id="'carousel-' + index" class="carousel slide bg-dark" data-bs-ride="carousel">
                    
                    <div v-if="item.screenshots.length > 1" class="carousel-indicators">
                      <button 
                        v-for="(_, sIndex) in item.screenshots" :key="sIndex" 
                        type="button" 
                        :data-bs-target="'#carousel-' + index" 
                        :data-bs-slide-to="sIndex" 
                        :class="{ active: sIndex === 0 }" 
                        ::aria-current="sIndex === 0 ? 'page' : undefined" 
                        :aria-label="'Slide ' + (sIndex + 1)">
                      </button>
                    </div>

                    <div class="carousel-inner">
                      <div 
                        v-for="(screenshot, sIndex) in item.screenshots" :key="sIndex" 
                        class="carousel-item" 
                        :class="{ active: sIndex === 0 }"
                      >
                        <img :src="screenshot.imageURL" class="d-block w-100 gallery-carousel-image" :alt="screenshot.altText || 'Captura de pantalla'">
                      </div>
                    </div>

                    <template v-if="item.screenshots.length > 1">
                      <button class="carousel-control-prev" type="button" :data-bs-target="'#carousel-' + index" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Anterior</span>
                      </button>
                      <button class="carousel-control-next" type="button" :data-bs-target="'#carousel-' + index" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Siguiente</span>
                      </button>
                    </template>
                  </div>
                </div>

                <div class="col-md-5 d-flex align-items-center">
                  <div class="card-body py-4 px-4">
                    <h5 class="card-title text-primary fw-bold">
                      <span class="badge bg-primary me-2">{{ index + 1 }}</span>
                      Funcionalidad
                    </h5>
                    <p class="card-text fs-6 text-muted">{{ item.description }}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        
        <hr class="my-5">

        <div class="d-flex flex-wrap gap-3 mb-5">
          <a :href="project.link" target="_blank" class="btn btn-dark btn-lg px-4">
            <i class="bi bi-github me-2"></i> Ver Código Fuente
          </a>
          <button @click="goBack" class="btn btn-outline-secondary btn-lg px-4">
            Volver a la Lista
          </button>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-5">
      <div class="spinner-border text-primary mb-3" role="status"></div>
      <h3>Proyecto no encontrado</h3>
      <router-link to="/" class="btn btn-primary mt-3">Volver al inicio</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { projectsData } from '../data/projetData'; 
import type { Project } from '../types/projec'; 

const route = useRoute();
const router = useRouter();
const project = ref<Project | null>(null);

const fetchProjectDetails = () => {
  const slug = route.params.slug as string; 
  const foundProject = projectsData.find(p => p.slug === slug);
  
  if (foundProject) {
    project.value = foundProject;
  } else {
    router.replace({ name: 'NotFound' });
  }
};

const goBack = () => {
  router.back(); 
};

onMounted(fetchProjectDetails);
</script>

<style scoped>
/* IMAGEN DE ENCABEZADO (BANNER) */
.project-header-image {
    width: 100%;
    max-height: 410px; /* Ajustado para que tus imágenes 1024x1024 no se corten demasiado */
    object-fit: cover;
    display: block;
}

/* IMÁGENES DENTRO DEL CARRUSEL */
.gallery-carousel-image {
    width: 100%;
    height: 450px; /* Altura fija para mantener uniformidad en la galería */
    object-fit: cover; /* Clave para que tus fotos cuadradas llenen el rectángulo */
    display: block;
}

/* Estilo para los controles del carrusel para que resalten sobre imágenes claras */
.carousel-control-prev-icon,
.carousel-control-next-icon {
    filter: drop-shadow(0px 0px 3px rgba(0,0,0,0.8));
}

/* RESPONSIVE */
@media (max-width: 768px) {
    .project-header-image {
        max-height: 300px;
    }
    .gallery-carousel-image {
        height: 280px; /* Altura reducida para móviles */
    }
    .card-body {
        text-align: center;
    }
}
</style>