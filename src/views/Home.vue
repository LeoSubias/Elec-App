<template>
  <div id="home">
    <Login v-if="connect === false"/>
    <Nav v-if="connect === true"/>
<!--    <Nav name="Home" :handleClick="shareMe"/>-->

<!--    <HelloWorld v-if="connectTo === true"/> v-if="connectTo === false" -->
<!--    <LiveChat/>-->
    <Profile v-if="connect === true"/>


  </div>
</template>

<script>
//import HelloWorld from '@/views/components/HelloWorld.vue'
import Login from '@/views/components/Login.vue'
import Nav from '@/views/components/SousComponents/Nav'
//import LiveChat from '@/views/components/LiveChat'
//import Store from '@/store/index'
import Profile from '@/views/components/Profile'

export default {
  name: 'Home',
  components: {
    //HelloWorld,
    Login,
    Nav,
    //LiveChat,
    Profile,
  },
  props: {
  },
  data() {
    return {
      connect: false,
      infos:null,
      messages:null,
    }
  },
  watch:{
    /*connectTo:function (oldval, newVal){
      console.log(oldval, newVal)
    }*/
    /*'connectTo1': {
      handler(newValue, oldValue) { // some function
        console.log(newValue,oldValue )

         },
        deep: true
      }*/
  },
  mounted() {
    console.log(this.connect)

    /*console.log(this.connectTo);
    console.log(this.connection.login);*/
  },
  methods: {
    shareMe: function() {
      //write your logic
      console.log("share");
    },
    shareMe2: function(){
      console.log('test n1 ')
    },
  },

}
</script>
<style scoped>
#home{
  padding-top:30px
}
</style>


