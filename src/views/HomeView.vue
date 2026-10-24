<script setup lang="ts">
import Hero from '../components/Hero.vue'
import Projects from '../components/Projects.vue'
</script>

<template>
  <Hero />
  <Projects />
  <section class="section-space" aria-labelledby="background-title">
    <p class="eyebrow">Base técnica</p><h2 id="background-title">Tecnologías y formación</h2>
    <div class="background-grid">
      <div class="panel"><h3>Backend y datos</h3><ul class="tag-list"><li>C#</li><li>ASP.NET Core</li><li>Entity Framework Core</li><li>SQL Server</li></ul></div>
      <div class="panel"><h3>Frontend</h3><ul class="tag-list"><li>Vue 3</li><li>TypeScript</li><li>Bootstrap</li></ul></div>
      <div class="panel"><h3>Formación universitaria</h3><p>UTN · Facultad Regional San Francisco</p><p class="muted mb-0">Egresado el 22 de octubre de 2026.</p></div>
    </div>
  </section>
</template>
