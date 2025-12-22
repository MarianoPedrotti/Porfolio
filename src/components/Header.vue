<template>
  <div class="fixed-top d-flex justify-content-end p-3" >
    <nav class="d-flex gap-2">
      <button class="btn btn-outline-primary btn-sm" @click="scrollTo('projects')">Proyectos</button>
      <button class="btn btn-outline-primary btn-sm" @click="scrollTo('contact')">Contacto</button>
      <a href="/CvMarianoPedrotti.pdf" class="btn btn-primary btn-sm" download>Descargar CV</a>
    </nav>
  </div>
  
  <header class="mb-5"> 
    <div class="d-flex align-items-center gap-3" style="margin-bottom: 70px; margin-top: 1px;">
      <div>
        <h1 class="h3 m-0">Mariano Pedrotti</h1>
        <p class="h5 text-primary m-0 mt-2">Backend Developer</p>
        <p class="text-muted mb-0 mt-3">
          C# / .NET • Node.js / NestJS • SQL Server / PostgreSQL / Mongo DB• APIs
        </p>
      </div>
    </div>
    </header>
</template>

<script setup>
  
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

</script>

<style scoped>
.avatar {
  width: 74px;
  height: 74px;
  font-size: 1.3rem;
}
</style>