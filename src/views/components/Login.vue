<template>
  <div class="login d-flex justify-content-center align-items-center" :style="'height:'+haut+'px'" >

  <div class=" ">

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
                  <button class="btn-sm btn btn-primary" name="Validez">Validez</button>
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
export default {
  name: 'Login',
  props: {
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
      conection: {
        login:false,
      }
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
  watch: {
  },
  methods: {
    clickButton: function () {
      // $socket is socket.io-client instance
      this.$socket.emit('emit_method')
    },
    // --> Valid login
    Validlogin: function (){
      if(this.user.userName != null){
        if (this.user.mdp!= null){
          this.$ref.conection.login = true
        }
        this.$ref.conection.login = false
      }
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
  mounted() {
    this.larg = (window.innerWidth);
    this.haut = (window.innerHeight);

    console.log("Cette fenêtre fait " + this.larg + " de large et "+ this.haut+" de haut");

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
