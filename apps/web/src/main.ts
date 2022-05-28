import urql, { type ClientOptions } from '@urql/vue'
import { createApp } from 'vue'
import App from './App.vue'
import { urqlOptions } from './urql-client'
import './index.css'

const app = createApp(App)
app.use(urql, urqlOptions)
app.mount('#app')
