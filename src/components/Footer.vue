<script setup lang="ts">
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
const isSending = ref(false)
const feedback = ref('')
const failed = ref(false)
const formData = ref({ name: '', email: '', message: '' })
async function sendEmail() {
  if (isSending.value) return
  failed.value = false
  feedback.value = ''
  const payload = {
    name: formData.value.name.trim(),
    email: formData.value.email.trim(),
    message: formData.value.message.trim(),
  }
  if (!payload.name || !payload.email || !payload.message) {
    failed.value = true
    feedback.value = 'Completá todos los campos con contenido antes de enviar.'
    return
  }
  isSending.value = true
  feedback.value = 'Enviando tu mensaje…'
  try {
    await emailjs.send('service_zeldt7v', 'template_xuuzdt8', payload, 'm_UAn-Ijsdormo6iB')
    feedback.value = 'Tu mensaje se envió correctamente. Gracias por contactarme.'
    formData.value = { name: '', email: '', message: '' }
  } catch {
    failed.value = true
    feedback.value = 'No se pudo enviar el mensaje. Tus datos siguen en el formulario; intentá nuevamente o usá el enlace de correo.'
  } finally {
    isSending.value = false
  }
}
</script>

<template>
  <section id="contact" class="contact-section section-space" aria-labelledby="contact-title" tabindex="-1">
    <div class="site-container contact-grid">
      <div>
        <p class="eyebrow">Contacto</p><h2 id="contact-title">Conversemos.</h2>
        <p class="lead">¿Una oportunidad laboral o un proyecto de desarrollo?</p>
        <p class="muted">Podés escribirme sobre el contexto y lo que necesitás desarrollar.</p>
        <a class="email-link" href="mailto:marianopedrotti43@gmail.com">marianopedrotti43@gmail.com</a>
        <div class="actions">
          <a href="https://github.com/MarianoPedrotti" target="_blank" rel="noopener noreferrer">GitHub <span class="visually-hidden">(nueva pestaña)</span>↗</a>
          <a href="https://www.linkedin.com/in/mariano-pedrotti43" target="_blank" rel="noopener noreferrer">LinkedIn <span class="visually-hidden">(nueva pestaña)</span>↗</a>
        </div>
      </div>
      <form class="panel contact-form" @submit.prevent="sendEmail" :aria-busy="isSending">
        <p class="small muted">Todos los campos son obligatorios.</p>
        <div class="mb-3"><label for="name" class="form-label">Nombre</label><input id="name" v-model="formData.name" class="form-control" name="name" autocomplete="name" maxlength="120" required :readonly="isSending" /></div>
        <div class="mb-3"><label for="email" class="form-label">Correo electrónico</label><input id="email" v-model="formData.email" class="form-control" name="email" type="email" autocomplete="email" maxlength="254" required :readonly="isSending" /></div>
        <div class="mb-3"><label for="message" class="form-label">Mensaje</label><textarea id="message" v-model="formData.message" class="form-control" name="message" rows="5" maxlength="5000" required :readonly="isSending"></textarea></div>
        <button class="btn btn-primary" type="submit" :disabled="isSending">{{ isSending ? 'Enviando…' : 'Enviar mensaje' }}</button>
        <p class="form-feedback mb-0" :class="{ 'error-text': failed }" role="status" aria-live="polite" aria-atomic="true">{{ feedback }}</p>
      </form>
    </div>
  </section>
  <footer class="site-container site-footer"><p>© {{ new Date().getFullYear() }} Mariano Pedrotti</p><RouterLink to="/">Volver al inicio ↑</RouterLink></footer>
</template>
