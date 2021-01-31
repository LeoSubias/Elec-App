import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
//import ApiService from './ApiService'
import VueRouter from 'vue-router'
import axios from 'axios'
import Sass from '@/assets/style.sass'
import Fortawesome from '@fortawesome/fontawesome-free'

/*import Fs from '../chat'*/
// --> Import  <-- //


// -> Vue Use
Vue.use(Vuex)
//Vue.use(ApiService)
Vue.use(store)
Vue.use(VueRouter)
Vue.use(Sass)
Vue.use(Fortawesome)
Vue.use(axios)
/*Vue.use(Fs)*/

// --> fin Vue Use

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



/*fs.readFile('/jsonConfig/customer.json', 'urf8', (err, jsonString) =>{
      if(err){
        console.log("File read failled", err)
        return
      }
      /!*try{
        const customer = JSON.parse(jsonString);
        console.log("Customer address is :", customer.address)
          //"Customer address is: Infinity Loop Drive"
      }catch (err){
          console.log('error parsing Json string : ' ,err)
      }*!/
    try{
        const jsonString = fs.readdirSync('/jsonConfig/customer.json');
        const customer = JSON.parse(jsonString)
        console.log(customer.adress)
    }catch(err){
        console.log(err)
        return
    }

      console.log('File data:', jsonString)
    });*/

