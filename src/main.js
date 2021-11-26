import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import Vuelidate from 'vuelidate'


createApp(App).mount('#app')
createApp(App).use(Vuelidate)

