<template>
  <div class="newUser">
    <p>Hello world New User </p>
  </div>
</template>

<script>
export default {
  name: 'NewUser',
  props: {
  },
  data() {
    return {
      user: {
        nom: null,
        prenom: null,
        userName: null,
        mdp: null,
      }
    }
  },
  mounted() {
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
