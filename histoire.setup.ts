import { defineSetupVue3 } from '@histoire/plugin-vue'
import { createPinia } from 'pinia'
import './src/assets/styles/main.css'

export const setupVue3 = defineSetupVue3(({ app }) => {
  app.use(createPinia())
})
