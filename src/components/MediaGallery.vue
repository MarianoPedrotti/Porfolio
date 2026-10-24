<script setup lang="ts">
import type { GalleryItem } from '../types/projec'
defineProps<{ items: GalleryItem[] }>()
</script>

<template>
  <section v-if="items.length" class="section-space" aria-labelledby="gallery-title">
    <h2 id="gallery-title">Funcionalidades en pantalla</h2>
    <article v-for="(item, index) in items" :key="index" class="gallery-group">
      <h3>Flujo {{ index + 1 }}</h3>
      <p class="reading-width muted">{{ item.description }}</p>
      <div class="gallery-grid">
        <figure v-for="image in item.screenshots" :key="image.imageURL" class="panel">
          <a :href="image.imageURL" target="_blank" rel="noopener noreferrer" :aria-label="'Abrir imagen completa: ' + (image.altText || 'captura del proyecto') + ' (nueva pestaña)'">
            <img :src="image.imageURL" :alt="image.altText || 'Captura del proyecto'" loading="lazy" decoding="async" />
          </a>
          <figcaption>{{ image.altText }} · Abrir imagen completa <span aria-hidden="true">↗</span></figcaption>
        </figure>
      </div>
    </article>
  </section>
</template>
