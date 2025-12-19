<template>
  <section id="projects" class="mb-5">
    <h3 class="fw-bold mb-4">Proyectos Destacados</h3>

    <div class="row g-4">
      <div class="col-md-6" v-for="project in projects" :key="project.title">
        <div class="card h-100 shadow-sm border-1 project-card">
          
          <router-link :to="project.route" class="project-image-link">
            <img 
              :src="project.imageURL" 
              class="card-img-top project-image" 
              :alt="'Captura de ' + project.title"
            >
          </router-link>

          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="card-title mb-1">{{ project.title }}</h5>
              <a :href="project.link" target="_blank" class="btn btn-sm btn-outline-secondary">
                <i class="bi bi-github"></i> Código
              </a>
            </div>
            
            <p class="text-muted small mb-2">{{ project.stack }}</p>
            <p class="card-text">{{ project.description }}</p>
            
            <router-link :to="project.route" class="btn btn-sm btn-primary mt-2">
                Ver Detalles
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-card {
  transition: transform 0.3s ease;
}
.project-card:hover {
  transform: translateY(-5px); /* Efecto de elevación al pasar el mouse */
}
.project-image {
  width: 100%;
  height: 200px; /* Altura fija para uniformidad */
  object-fit: cover; /* Asegura que la imagen cubra el área sin distorsionarse */
  border-bottom: 1px solid #eee;
}
.project-image-link {
    display: block;
    overflow: hidden;
}
</style>


<script setup>
import { projectsData } from '../data/projetData'

// Reutilizamos los datos desde `projectsData` para mantener una sola fuente de verdad
const projects = projectsData
</script>