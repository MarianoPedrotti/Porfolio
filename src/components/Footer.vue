<template>
  <footer id="contact" class="py-5 mt-5 bg-light border-top">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center">
          <h3 class="fw-bold mb-3 text-black">¿Tienes un proyecto en mente?</h3>
          <p class="text-muted mb-4">
            Envíame un mensaje y hablemos sobre cómo puedo ayudarte en el Backend.
          </p>

          <form @submit.prevent="sendEmail" class="text-start mb-5 shadow-sm p-4 bg-white rounded">
            <div class="mb-3">
              <label for="name" class="form-label small fw-bold">Nombre</label>
              <input type="text" v-model="formData.name" class="form-control form-control-sm" id="name" required placeholder="Tu nombre">
            </div>
            <div class="mb-3">
              <label for="email" class="form-label small fw-bold">Email</label>
              <input type="email" v-model="formData.email" class="form-control form-control-sm" id="email" required placeholder="nombre@ejemplo.com">
            </div>
            <div class="mb-3">
              <label for="message" class="form-label small fw-bold">Mensaje</label>
              <textarea v-model="formData.message" class="form-control form-control-sm" id="message" rows="3" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-sm w-100" :disabled="isSending">
              {{ isSending ? 'Enviando...' : 'Enviar Mensaje' }}
            </button>
          </form>

          <div class="d-flex justify-content-center gap-4 mb-4">
            <a href="https://github.com/MarianoPedrotti" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="contact-link" 
               title="Ver GitHub">
              <i class="bi bi-github fs-3"></i>
            </a>

            <a href="https://www.linkedin.com/in/mariano-pedrotti43" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="contact-link" 
               title="Conectar en LinkedIn">
              <i class="bi bi-linkedin fs-3"></i>
            </a>
          </div>

          <p class="small text-secondary mb-0">© {{ currentYear }} Mariano Pedrotti</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const currentYear = new Date().getFullYear();
const isSending = ref(false);

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const sendEmail = async () => {
  isSending.value = true;
  try {
    // Usando tus credenciales actuales
    await emailjs.send(
      'service_zeldt7v', 
      'template_xuuzdt8', 
      formData.value, 
      'm_UAn-Ijsdormo6iB'
    );
    alert('¡Mensaje enviado con éxito! Te contactaré pronto.');
    formData.value = { name: '', email: '', message: '' }; 
  } catch (error) {
    alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
    console.error(error);
  } finally {
    isSending.value = false;
  }
};
</script>

<style scoped>
.contact-link { 
  color: #6c757d; 
  transition: 0.3s; 
  text-decoration: none;
}
.contact-link:hover { 
  color: #0d6efd; 
  transform: translateY(-3px); 
  display: inline-block; 
}
.form-control:focus { 
  border-color: #0d6efd; 
  box-shadow: none; 
}
</style>