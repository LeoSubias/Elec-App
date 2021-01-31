<template>
  <div class="login d-flex justify-content-center align-items-center" :style="'height:'+haut+'px'">
    <div class="">
      <div class="container p-5">
        <div class="row">
          <div class="card w-30rem shadow ">
            <div class="card-body">
              <h5 class="card-title">Connextion</h5>
              <form>
                <div class="form-group row">
                  <label for="inputEmail3" class="col-form-label">User Name</label>
                  <input type="text" v-model="user.userName" class="form-control" id="inputEmail3" placeholder="User name">
                </div>
                <div class="form-group row">
                  <label for="inputPassword3"  class=" col-form-label">Password</label>
                  <input type="password" v-model="user.mdp" class="form-control" id="inputPassword3" placeholder="Password">
                </div>
                <div class="form-group row  d-flex justify-content-center">
                  <div class="col-sm-10 pt-3">
                    <div class="row">
                      <div class="col-sm-3">
                        <div class="btn-sm btn btn-primary" @click="Validlogin()">Validez</div>
                      </div>
                      <div class="col-sm-3">
                        <router-link class="btn-sm btn btn-primary" to="/">Home</router-link>
                      </div>
                      <div class="col-sm-3">
                        <router-link class="btn-sm btn btn-primary" to="/newUser">Register</router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store/index'
export default {
  name: 'Login',
  props: {
    connectValue:{
      required:true,
      type:Boolean
    },
  },
  data() {
    return {
      larg:null,
      haut:null,
      user: {
        nom: null,
        prenom: null,
        userName: null,
        mdp: null,
      },
    }
  },
  /*sockets: {
    connect: function () {
      console.log('socket connected')
    },
    customEmit: function (data) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },*/
  mounted() {
    console.log(this.$parent)
    this.larg = (window.innerWidth);
    this.haut = (window.innerHeight);
    console.log("Cette fenêtre fait " + this.larg + " de large et "+ this.haut+" de haut");
    console.log(this.$parent)
    console.log(this.connect)
    console.log(this.$data)


  },
  watch: {
    /*input_two: function (val) {
      this.$emit('update:secondValue', val)
    }*/
  },
  methods: {

    connectFrom: function (){
      this.$parent.connect = true
      console.log(this.$parent.connect)
    },
    /*emitEventChanged () {
      this.$emit('CustomEventInputChanged', this.conection.login);
    },*/
    // --> Valid login
    Validlogin: function (){
      store.state.user.some(val =>{
        if(this.user.userName === val.userName){
          console.log('ok UserName')
          if(this.user.mdp === val.mdp){
            console.log('ok Mot de passe')
            this.$parent.connect = true
            this.connectFrom()
          }else{
            console.log('Not found  Mot de passe')
          }
        }
        else{
          console.log('Not found  Mot de passe')
        }
      })

      /*if(this.user.userName != null){
        if (this.user.mdp!= null){
          this.$ref.conection.login = true
        }
        this.$ref.conection.login = false
      }*/
    },
    // --> Login
    Login: function (){
      /*if(this.login = true){

      }*/
    },
     /*test: function async (){

    },
    getNumber1: function async() {
      this.larg = (document.body.clientWidth);
      return this.larg;
    },
    large: function (){
      return this.haut;
    },

    getNumber2: function async() {
      this.haut = (document.body.clientHeight);
      return this.haut;
    },
    async fonctionAsynchrone3() {
      const value1 = await this.larg;
      const value2 = await this.haut;
      console.log(value1 + value2)
      return value1 + value2;
    }*/
  },


}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.w-30rem {
  width: 30rem;
  background: #212122;
}
.login{
  background: #19191a;
}


</style>
