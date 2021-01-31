import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    connect: false,
    message: null,
    user:[
      {nom:'admin', userName: 'admin', mdp:'admin'},
    ],
  },
  mutations:{
  },
  actions: {
  }
})