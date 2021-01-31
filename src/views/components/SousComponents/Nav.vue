<template>
  <div id="nav">
      <div class="navbar fixed-left">
        <div class="pt-3 p-3">
          <button type="button"  v-on:click="show = !show" class="btn btn-dark btn-circle btn-md"> <i class="fas fa-1x fa-bars"></i></button>
<!--          <a >class="nav-btn"
            <i class="fas fa-bars"></i>
          </a>-->
        </div>

        <transition name="slide-fade" :class="[show ? !show : 'd-none']">
          <ul  v-if="show" class="navbar-collapse rounded" >
            <li class="nav-item nav-link"> <router-link class="nav-item" to="/">Home</router-link></li>
            <li class="nav-item nav-link">  <router-link class="nav-item" to="/about">About</router-link></li>
            <li class="nav-item nav-link"> <router-link  class="nav-item" to="/liveChat">LiveChat</router-link></li>
            <li class="nav-item nav-link"> <router-link  class="nav-item" to="/profile">Profil</router-link></li>
            <li class="nav-item nav-link"> <router-link  class="nav-item" to="/register">Register</router-link></li>
          </ul>
        </transition>
<!--        <router-view/>-->
        <!--<router-link to="/login">login</router-link>-->
      </div>
  </div>
</template>

<script>

export default {
  name: 'Nav',
  props: {
  },
  data() {
    return {
      show:false,
    }
  },
  mounted() {
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fixed-left{

  /*width: 200px;*/
  float: left;
  z-index: 10;
}
.navbar-collapse{
  background: rgba(25, 25, 26, .5);
}
.nav-btn{
  background: #9c27b0;
  /*border-radius: 50%;*/
  width: 80px;
  height: auto;
}
.btn-dark{
  background:#19191a
}
/*.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to !* .fade-leave-active below version 2.1.8 *! {
  opacity: 0;
}*/
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>

