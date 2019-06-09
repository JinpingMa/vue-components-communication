import Vue from 'vue'
import './plugins/vuetify'

import App from './App.vue'
import router from '@router'
import '@components/globals'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

const eventBus = new Vue()

Object.defineProperty(Vue.prototype, '_EventBus', {value: eventBus})
