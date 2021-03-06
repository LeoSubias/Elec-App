import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {
    "<MUTATION_PREFIX><EVENT_NAME>"() {
      // do something
    }
  },
  actions: {
    "<ACTION_PREFIX><EVENT_NAME>"() {
      // do something
    }
  }
})

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:8080',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  },
  //options: { path: "/my-app/" } //Optional options
}))


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
