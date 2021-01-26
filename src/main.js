import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import Vuex from 'vuex'
import Render from './render'

Vue.use(Vuex)
Vue.use(Render)

/*export default new Vuex.Store({
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
})*/

Vue.config.productionTip = false

//Vue.use(VueSocketio, 'http://socketserver.com:1923');

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://socketserver.com:1923',
  /*vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  },*/
  //options: { path: "/my-app/" } //Optional options
}))
/*
new Vue({

  methods: {
    clickButton: function(val){
      // $socket is socket.io-client instance
      this.$socket.emit('emit_method', val);
    }
  }
})
*/


new Vue({
  sockets:{
    connect: function(){
      console.log('socket connected')
    },
    customEmit: function(){
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
