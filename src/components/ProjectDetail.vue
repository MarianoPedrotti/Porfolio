<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projectsData } from '../data/projetData'
import MediaGallery from './MediaGallery.vue'
const route = useRoute()
const project = computed(() => projectsData.find(item => item.slug === route.params.slug))
</script>

<template>
  <div class="section-space">
    <RouterLink :to="{ name: 'home', hash: '#projects' }" class="back-link">← Volver a proyectos</RouterLink>
    <article v-if="project" :key="project.slug">
      <header class="case-header">
        <p class="eyebrow">{{ project.featured ? 'Caso de estudio · En producción' : 'Proyecto de desarrollo' }}</p>
        <h1>{{ project.title }}</h1>
        <p class="lead reading-width">{{ project.description }}</p>
        <p class="tech-line">{{ project.stack }}</p>
      </header>
      <div v-if="project.sections" class="case-sections">
        <section v-for="(section, index) in project.sections" :key="section.title" class="panel">
          <p class="eyebrow" aria-hidden="true">0{{ index + 1 }}</p>
          <h2>{{ section.title }}</h2><p>{{ section.text }}</p>
          <ul v-if="section.items?.length">
            <li v-for="item in section.items" :key="item">{{ item }}</li>
          </ul>
        </section>
      </div>
      <MediaGallery :items="project.gallery" />
      <div class="actions section-space">
        <a v-if="project.demoLink" :href="project.demoLink" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Ver demo en video <span class="visually-hidden">(nueva pestaña)</span>↗</a>
        <a v-if="project.link" :href="project.link" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Ver repositorio <span class="visually-hidden">(nueva pestaña)</span>↗</a>
        <RouterLink :to="{ name: 'home', hash: '#contact' }" class="btn btn-outline-primary">Contactar</RouterLink>
        <RouterLink :to="{ name: 'home', hash: '#projects' }">Explorar proyectos</RouterLink>
      </div>
    </article>
    <section v-else class="empty-state">
      <p class="eyebrow">Proyecto no disponible</p><h1>Proyecto no encontrado</h1>
      <p>El proyecto solicitado no está disponible. Podés explorar los proyectos desde el inicio.</p>
      <RouterLink :to="{ name: 'home', hash: '#projects' }" class="btn btn-primary">Ver proyectos</RouterLink>
    </section>
  </div>
</template>
