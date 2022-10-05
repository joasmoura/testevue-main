import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    clientes: []
  }),
  actions: {
    add (form) {
      this.clientes.push(form)
    }
  }
})