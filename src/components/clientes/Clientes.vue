<template>
  <div id="clientes">
    <SectionTitulo @showModal="showModal"/>
    <ModalAdicionarCliente @showModal="showModal"/>
    <SectionClientes v-for="(cliente, i) in clientes" :key="i" :cliente="cliente"/>
  </div>
</template>

<script setup>
  import SectionTitulo from './partials/SectionTitulo.vue';
  import ModalAdicionarCliente from './modals/ModalAdicionarCliente.vue'
  import SectionClientes from './partials/SectionClientes.vue';

  import { storeToRefs } from 'pinia';
  import { useFormStore } from '../../store/form';

  const form = useFormStore();

  const { clientes } = storeToRefs(form)
  
  const showModal = () => {
    document.querySelector('section.modal').classList.toggle('mostrar')
  }
</script>

<style scoped>
#clientes {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: var(--cor-fundo-tela);
}
</style>
