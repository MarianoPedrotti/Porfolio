<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const open = ref(false)
const toggle = ref<HTMLButtonElement>()
const cvUrl = '/cv/Mariano-Pedrotti-CV.pdf'
const links = [
  { label: 'Inicio', hash: '' },
  { label: 'Proyectos', hash: '#projects' },
  { label: 'Contacto', hash: '#contact' },
]
function closeWithEscape() {
  if (open.value) { open.value = false; toggle.value?.focus() }
}
watch(() => route.fullPath, () => { open.value = false })
</script>

<template>
  <header class="site-header" @keydown.esc="closeWithEscape">
    <nav class="site-container navigation" aria-label="Navegación principal">
      <RouterLink class="brand" to="/" @click="open = false">Mariano Pedrotti<span aria-hidden="true">.</span></RouterLink>
      <button ref="toggle" class="btn btn-outline-primary menu-toggle" :aria-expanded="open" aria-controls="primary-navigation" @click="open = !open">{{ open ? 'Cerrar' : 'Menú' }}</button>
      <ul id="primary-navigation" class="nav-links" :class="{ 'is-open': open }">
        <li v-for="link in links" :key="link.label">
          <RouterLink :to="{ name: 'home', hash: link.hash }" :aria-current="route.name === 'home' && route.hash === link.hash ? 'location' : undefined" @click="open = false">{{ link.label }}</RouterLink>
        </li>
        <li><a :href="cvUrl" download @click="open = false">Descargar CV</a></li>
      </ul>
    </nav>
  </header>
</template>
