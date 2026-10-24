<template>
  <section class="hero section-space" aria-labelledby="hero-title">
    <div>
      <p class="eyebrow">Mariano Pedrotti</p>
      <h1 id="hero-title">Backend Developer <span class="gold">.NET</span></h1>
      <p class="hero-specialty">Desarrollo Full Stack con Vue 3 y TypeScript</p>
      <p class="lead">Desarrollo backend con C#, ASP.NET Core y SQL Server, y aplicaciones web que resuelven necesidades reales de gestión.</p>
      <p class="muted">Técnico Universitario en Programación — UTN San Francisco.</p>
      <div class="actions">
        <RouterLink :to="{ name: 'home', hash: '#projects' }" class="btn btn-primary">Conocer mis proyectos <span aria-hidden="true">↗</span></RouterLink>
        <RouterLink :to="{ name: 'home', hash: '#contact' }" class="btn btn-outline-primary">Contactar</RouterLink>
      </div>
    </div>
    <div class="portrait-frame"><img src="/imagen/fotoPortafolio.jpg" alt="Mariano Pedrotti" class="portrait" fetchpriority="high" /></div>
  </section>
</template>
