import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import Maska from 'maska'

createApp(App)
.use(Maska)
.use(createPinia())
.mount('#app')
