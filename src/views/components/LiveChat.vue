<template>
  <div class="liveChat">
    <Nav/>
    <div class="container">
      <div class="d-flex justify-content-center align-items-center">
        <div class="chatZone">
          <div v-for="m in JsonMessage" v-bind:key="m.id">
            <p>
              {{m.user}} : {{m.text}}
            </p>
          </div>
        </div>
      </div>
      <div class="card d-flex justify-content-center">
        <form class="card">
          <div class="row">
            <div class="col-md-3 form-group pt-3">
              <label for="exampleInputEmail1">UserName</label>
              <input type="text" class="form-control" v-model="utilisateur.userName" id="exampleInputEmail1" placeholder="Enter UserName">
            </div>
            <div class="form-group col-md-9 pt-3 pb-3">
              <textarea  v-model="messages" class="form-control" id="exampleFormControlTextarea1" v-on:keyup.enter="sendMessages(), messages= null "  placeholder="Enter tour message" rows="2"></textarea>
            </div>
          </div>
          <button type="submit" @click="sendMessages()" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from 'axios'
import axios from 'axios'
import Nav from '@/views/components/SousComponents/Nav'
export default {
  name: 'LiveChat',
  props: {},
  components: {
    /*Home,Login,*/
    Nav,
  },
  data() {
    return {
      something: [
        'hello', 'world'
      ],
      join: false,
      texts:[],
      infos:null,
      messages:null,
      JsonMessage:null,
      utilisateur: [
        {userName: null},
        {send: null},
        {message: null},
        {info:null},
      ],
    }
  },
  mounted() {
    /*axios.get('http://localhost:3000/messages').then(response => (
        console.log(response),
        this.infos = response.data
    )).catch(error => console.log(error))*/
    /*const props = {
      base_url: '/api/store',
      search_url: '/api/entity/search',
      cors_url: 'http://localhost',
      oper_url: '/api'
    };*/

    const GetRequestMessages = async () => {
      try {
        const resp = await axios.get('http://192.168.1.18:3000/messages');
        //console.log(resp.data);
        this.JsonMessage = resp.data
        console.log(this.JsonMessage)
        if (resp.status == 200) {
          console.log(resp.status);
        }
        return resp.data;
      }catch (err){
        console.log(err);
      }
    }

    GetRequestMessages();

    /*const updatedPost = {
      "firstName": "Aryana",
      "lastName": "Thilakumara",
      "subjectID": 1,
      "id": 6
    };
    const sendPostRequest = async () => {
      try {
        const resp = await axios.post('http://192.168.1.18:3000/users', updatedPost);
        console.log(resp.data);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };
    sendPostRequest();*/


  },
  created() {
    /*this.$socket.emit('getAllOnline', '123213')*/
  },
  watch: {
    /*'JsonMessage':((val, oldVal) => {
      oldVal.some(val =>{
        val[val.id] != oldVal[]
          }
      )
      if(oldVal.id != val.id) {
         val = oldVal;
      }
      console.log('JsonMessage : ==> ',val, oldVal);
    })*/
  },
  methods: {
    sendMessages: function() {
      /*const array = []
       array.push({
        user: this.utilisateur.userName,
        text: this.messages,
      })
      console.log(array)*/
      axios.post('http://192.168.1.18:3000/messages', {user: this.utilisateur.userName,text: this.messages, }).then(response => (
          console.log(response),
          this.GetRequestMessage()

          //this.messages = response.data
      )).catch(error => console.log(error))

    },
    GetRequestMessage: function(){

      //const number = this.JsonMessage.id

      //const filter = '?_start=25&_end=70';

      axios.get('http://192.168.1.18:3000/messages').then(response => (
          console.log(response),
          this.JsonMessage = response.data
          //this.messages = response.data
      )).catch(error => console.log(error))
    },
    /*clickButton: function (data) {

    },*/
    /*sendTo: function (message) {
      console.log(message)
     this.texts.push(message)
      console.log(this.texts)
      return message = null;
    },
    getAllOnline(tokenFromServer) {
      console.log('getAllOnline', tokenFromServer);
    },
    connect() {
      console.log('socket connected')
    },
    customEmit(val) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)', val)
    },
    users: function (users) {
      this.$set('users', users);
    },
    joined: function () {
      this.$set('join', true)
    },
    messages: function (data) {
      this.$set('messages', data);
    },
    onmessage: function (data) {
      this.messages.push(data);
    },
    adduser: function (user) {
      this.users.push(user);
    },*/
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.chatZone{
  width: 900px;
  height: 500px;
  overflow: auto;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #F1F1F1;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background:rgba(255, 255, 255, 0.2);
}


</style>
