<template>
  <div class="home">

    <Login/>
    <HelloWorld v-if="conection.login === true"/>
  </div>
</template>

<script>
import HelloWorld from '@/views/components/HelloWorld.vue'
import Login from '@/views/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Login
  },
  data() {
    return {
      conection: {
        login:false,
      }
    }
  },
}
</script>
