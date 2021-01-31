<template>
  <div id="app">
    <transition name="fade">
      <router-view>
      </router-view>
    </transition>
<!--    <Home v-if="connect === true"/>
    <Login v-if="connect === false"/>-->


<!--    <Login/>
  <HelloWorld/>-->
<!--<div id="nav">
      <div class="sidenav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/login">login</router-link>
        <router-link to="/newUser">NewUser</router-link>
      </div>
    </div>-->
<!--    <div  v-bind:title="post.title + ' par ' + post.author.name">
    </div>-->

  </div>
</template>

<script>
/*import Login from "@/views/components/Login";
import Home from "@/views/Home"*/
export default {
  name: 'app',
  components: {
    /*Home,Login,*/
  },
  data() {
    return {
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
  },

}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css';
/*@import './assets/style.scss';*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background: #19191a;
}
.m-10{
  margin: 10px;
}
</style>
