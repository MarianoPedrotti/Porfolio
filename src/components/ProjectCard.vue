<script setup lang="ts">
import type { Project } from '../types/projec'
defineProps<{ project: Project }>()
</script>

<template>
  <article class="panel project-card">
    <img v-if="project.imageURL" :src="project.imageURL" :alt="'Presentación de ' + project.title" class="project-cover" loading="lazy" decoding="async" />
    <div class="project-card-body">
      <h3>{{ project.title }}</h3>
      <p>{{ project.summary }}</p>
      <p class="muted small">{{ project.stack }}</p>
      <div class="actions mt-auto">
        <RouterLink :to="project.route" class="btn btn-outline-primary" :aria-label="'Ver detalle de ' + project.title">Ver detalle</RouterLink>
        <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer" :aria-label="'Repositorio de ' + project.title + ' (nueva pestaña)'">Código <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </article>
</template>
