import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './plugins/store'
import firebase from './plugins/firebase'

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  firebase,
  render: h => h(App)
}).$mount('#app')
