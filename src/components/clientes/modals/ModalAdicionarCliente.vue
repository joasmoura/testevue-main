<!-- HTML -->
<template>
  <section class="modal">
    <!-- Background -->
    <div class="background"></div>
    <!-- Quadro -->
    <div class="quadro">
      <!-- Título -->
      <div class="titulo">
        <div class="texto">
          <h2><span>Novo</span></h2>
          <h2>CLIENTE</h2>
        </div>
        <button type="button" @click="close">Fechar</button>
      </div>
      <!-- Nome -->
      <label>Nome <span>*</span></label>
      <div class="input cinza">
        <input type="text" autocomplete="false" spellcheck="false" placeholder="Digite aqui..." v-model="form.name">
      </div>
      <!-- Whatsapp -->
      <label>Whatsapp <span>*</span></label>
      <div class="input cinza">
        <input type="tel" autocomplete="false" spellcheck="false" v-maska="'(##) #####-####'" placeholder="(99) 99999-9999" v-model="form.whatsapp">
      </div>
      <button type="button" class="principal" @click="save()">Salvar Cliente</button>
    </div>
  </section>
</template>

<!-- JS -->
<script setup>
  import { mapActions } from 'pinia';
  import { reactive } from 'vue';
  import { useFormStore } from '../../../store/form';

  const emit = defineEmits(['showModal'])
  const store = mapActions(useFormStore, ['add'])

  const form = reactive({
    name: null,
    whatsapp: null
  })

  const close = () => {
   emit('showModal')
  }

  const save = () => {
    if (!form.name && !form.whatsapp) {
      alert('Os campos de nome e whatsapp são obrigatórios!')
    } else {
      store.add({...form})
      close()
      form.name = null
      form.whatsapp = null
    }
  }
</script>

<!-- CSS -->
<style scoped>
section.modal {
  z-index: 10;
}
/* Label */
.quadro label {
  margin: 20px 0 10px 0;
}
/* Linha */
input.endereco {
  margin: 10px 0 0 0;
}
/* Data */
.quadro .data #seletorCalendario {
  position: absolute;
  top: 70px;
  left: -10px;
}
button.principal {
  margin: 20px 0 0 0;
}
/* Responsivo */
@media screen and (max-width: 1000px) {
}
</style>
