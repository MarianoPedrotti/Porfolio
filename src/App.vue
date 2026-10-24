<script setup lang="ts">
import { nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { projectsData } from './data/projetData'
const route = useRoute()
watch(() => route.fullPath, async () => {
  const project = projectsData.find(item => item.slug === route.params.slug)
  const title = route.name === 'home' ? 'Backend Developer .NET | Full Stack' : project?.title || 'Página no encontrada'
  document.title = `${title} — Mariano Pedrotti`
  await nextTick()
  const target = route.hash ? document.getElementById(route.hash.slice(1)) : document.querySelector<HTMLElement>('main h1')
  target?.setAttribute('tabindex', '-1')
  target?.focus({ preventScroll: true })
})
</script>

<template>
  <a class="skip-link" href="#main-content">Saltar al contenido</a>
  <Header />
  <main id="main-content" class="site-container" tabindex="-1"><RouterView /></main>
  <Footer />
</template>
