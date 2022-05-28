import urql, { type ClientOptions } from '@urql/vue'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const urqlOptions: ClientOptions = {
  url: 'http://localhost:3030/graphql',
}

const app = createApp(App)
app.use(urql, urqlOptions)
app.mount('#app')
