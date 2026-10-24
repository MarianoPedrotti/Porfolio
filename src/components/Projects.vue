<script setup lang="ts">
import { projectsData } from '../data/projetData'
import ProjectCard from './ProjectCard.vue'
const featured = projectsData.find(project => project.featured)
const others = projectsData.filter(project => !project.featured)
</script>

<template>
  <section id="projects" class="section-space" aria-labelledby="projects-title" tabindex="-1">
    <p class="eyebrow">Del desarrollo al uso real</p>
    <h2 id="projects-title">Proyecto destacado</h2>
    <article v-if="featured" class="featured panel">
      <div>
        <p class="status-label">En producción</p>
        <h3>{{ featured.title }}</h3>
        <p class="lead">{{ featured.summary }}</p>
        <p class="muted">{{ featured.stack }}</p>
        <RouterLink :to="featured.route" class="btn btn-primary">Conocer OptiGest <span aria-hidden="true">↗</span></RouterLink>
      </div>
      <div class="feature-outline" aria-label="Alcance de OptiGest">
        <p class="eyebrow">Gestión comercial</p>
        <ul><li>Clientes, productos y vehículos</li><li>Ventas y financiación</li><li>Cuotas, pagos y cuenta corriente</li></ul>
        <p class="muted small mb-0">Una aplicación web para acompañar las operaciones del negocio.</p>
      </div>
    </article>
    <h2 class="subsection-title">Otros proyectos</h2>
    <div class="project-grid"><ProjectCard v-for="project in others" :key="project.slug" :project="project" /></div>
  </section>
</template>
