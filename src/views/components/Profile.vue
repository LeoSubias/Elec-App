<template>
  <div id="profile">
    <div class="main main-raised">
      <div class="container">
        <div class="row d-flex justify-content-center" v-if="user === null">
          <div class="card col-md-3 mt-3 m-10" v-for="u in users" :key="u.id" >
            <div>
              <img style="height: 120px; width: 100px;" src="../../../public/adorable_avatars_api.png" alt="Circle Image" class="pt-2 rounded-circle">
            </div>
            <div class="card-body">
              <h5 class="card-title">{{u.Nom}} {{u.PreNom}}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<!--              <button type="button" class="btn btn-sm btn-outline-secondary"  >Secondary</button>-->
              <ul class="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" @click="GetRequestUserId(u.id)" role="tab" data-toggle="tab">
                  <i class="material-icons">Profil {{u.PreNom}}</i>
                </a>
              </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-12 ml-auto mr-auto" v-else>
          <div class="profile pt-3">
            <div class="avatar">
              <img style="height: 120px; width: auto;" src="../../../public/adorable_avatars_api.png" alt="Circle Image" class="img-raised rounded-circle img-fluid">
            </div>
            <div class="name">
              <h3 class="title">{{user.Nom}} {{user.PreNom}}</h3>
            </div>
          </div>
        </div>
<!--        <div class="col-md-12 ml-auto mr-auto pb-4">
          <div class="profile-tabs">
            <ul class="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
              <li class="nav-item">
                <a class="nav-link active"  @click="GetUserId()" role="tab" data-toggle="tab">
                  <i class="material-icons">camera</i>
                  Studio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="GetRequestUserId()" role="tab" data-toggle="tab">
                  <i class="material-icons">palette</i>
                  Work
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link"  role="tab" data-toggle="tab">
                  <i class="material-icons">favorite</i>
                  Favorite
                </a>
              </li>
            </ul>
          </div>
        </div>-->
<!--        <div class="tab-content tab-space">
          <div class="tab-pane active text-center gallery" id="studio">
            <div class="row">
              <div class="col-md-6 ml-auto">
                <img style="height: 190px; width: auto;" src="https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83079913579babb9d2c94a5941b2e69d&auto=format&fit=crop&w=751&q=80" class="rounded">
                <img style="height: 190px; width: auto;" src="https://images.unsplash.com/photo-1528249227670-9ba48616014f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=66b8e7db17b83084f16fdeadfc93b95b&auto=format&fit=crop&w=357&q=80" class="rounded">
              </div>
              <div class="col-md-6 mr-auto">
                <img style="height: 190px; width: auto;" src="https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=72da2f550f8cbd0ec252ad6fb89c96b2&auto=format&fit=crop&w=334&q=80" class="rounded">
                <img style="height: 190px; width: auto;" src="https://images.unsplash.com/photo-1506667527953-22eca67dd919?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6326214b7ce18d74dde5e88db4a12dd5&auto=format&fit=crop&w=750&q=80" class="rounded">
              </div>
            </div>
          </div>
        </div>-->
      </div>

    </div>

  </div>
</template>

<script>
import ApiService from "../../ApiService";
import axios from "axios";
export default {
  name: 'Profile',
  props: {
  },
  data() {
    return {
      users:null,
      user:null,
    }
  },
  mounted() {
    const GetRequestUser = async () => {
      try {
        /*let response = await axios({
          method: 'get',
          url: `${props.base_url}/data${path}`,
          params, // 👈 use "params" here
          headers: {'session_id': key}
        });*/

        const resp = await axios.get('http://192.168.1.18:3000/users');
        //console.log(resp.data);
        this.users = resp.data
        console.log(this.users)
        if (resp.status == 200) {
          console.log(resp.status);
        }
        return resp.data;
      }catch (err){
        console.log(err);
      }
    }

    GetRequestUser();


  },
  methods: {
    GetUserId() {
      ApiService.httpQueryGetUserId({id:1}).then(res => {
        console.log(res);
        this.user = res;
        console.log(this.user);
      });
    },
    GetRequestUserId: function(val){

      //const number = 3

      //const filter = '?_start=25&_end=70';

      axios.get('http://192.168.1.18:3000/users/'+val).then(response => (
          console.log(response),
              this.user = response.data
          //this.messages = response.data
      )).catch(error => console.log(error))
    },
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css";
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css";
html *{
  -webkit-font-smoothing: antialiased;
}

.h6, h6 {
  font-size: .75rem !important;
  font-weight: 500;
  font-family: Roboto,Helvetica,Arial,sans-serif;
  line-height: 1.5em;
  text-transform: uppercase;
}

.name h6 {
  margin-top: 10px;
  margin-bottom: 10px;
}

.navbar {
  border: 0;
  border-radius: 3px;
  padding: .625rem 0;
  margin-bottom: 20px;
  color: #555;
  background-color: #fff!important;
  box-shadow: 0 4px 18px 0 rgba(0,0,0,.12), 0 7px 10px -5px rgba(0,0,0,.15) !important;
  z-index: 1000 !important;
  transition: all 150ms ease 0s;

}

.navbar.navbar-transparent {
  z-index: 1030;
  background-color: transparent!important;
  box-shadow: none !important;
  padding-top: 25px;
  color: #fff;
}

.navbar .navbar-brand {
  position: relative;
  color: inherit;
  height: 50px;
  font-size: 1.125rem;
  line-height: 30px;
  padding: .625rem 0;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
}

.navbar .navbar-nav .nav-item .nav-link:not(.btn) .material-icons {
  margin-top: -7px;
  top: 3px;
  position: relative;
  margin-right: 3px;
}

.navbar .navbar-nav .nav-item .nav-link .material-icons {
  font-size: 1.25rem;
  max-width: 24px;
  margin-top: -1.1em;
}

.navbar .navbar-nav .nav-item .nav-link .fa, .navbar .navbar-nav .nav-item .nav-link .material-icons {
  font-size: 1.25rem;
  max-width: 24px;
  margin-top: 0px;
}

.navbar .navbar-nav .nav-item .nav-link {
  position: relative;
  color: inherit;
  padding: .9375rem;
  font-weight: 400;
  font-size: 12px;
  border-radius: 3px;
  line-height: 20px;
}

a .material-icons {
  vertical-align: middle;
}

.fixed-top {
  position: fixed;
  z-index: 1030;
  left: 0;
  right: 0;
}

.profile-page .page-header {
  height: 380px;
  background-position:center;
}
.main-raised {
  margin: 0px 30px 0;
  border-radius: 6px;
  box-shadow: 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.2);
}

.main {
  background: #FFF;
  position: relative;
  z-index: 3;
}

.profile-page .profile {

  text-align: center;
}

.profile-page .profile img {
  max-width: 160px;
  width: 100%;
  margin: 0 auto;
  -webkit-transform: translate3d(0,-50%,0);
  -moz-transform: translate3d(0,-50%,0);
  -o-transform: translate3d(0,-50%,0);
  -ms-transform: translate3d(0,-50%,0);
  transform: translate3d(0,-50%,0);
}

.img-raised {
  box-shadow: 0 5px 15px -8px rgba(0,0,0,.24), 0 8px 10px -5px rgba(0,0,0,.2);
}

.rounded-circle {
  border-radius: 50%!important;
}

.img-fluid, .img-thumbnail {
  max-width: 100%;
  height: auto;
}

.title {
  margin-top: 30px;
  margin-bottom: 25px;
  min-height: 32px;
  color: #3C4858;
  font-weight: 700;
  font-family: "Roboto Slab","Times New Roman",serif;
}

.profile-page .description {
  margin: 1.071rem auto 0;
  max-width: 600px;
  color: #999;
  font-weight: 300;
}

p {
  font-size: 14px;
  margin: 0 0 10px;
}

.profile-page .profile-tabs {
  margin-top: 4.284rem;
}

.nav-pills, .nav-tabs {
  border: 0;
  border-radius: 3px;
  padding: 0 15px;
}

.nav .nav-item {
  position: relative;
  margin: 0 2px;
}

.nav-pills.nav-pills-icons .nav-item .nav-link {
  border-radius: 4px;
}

.nav-pills .nav-item .nav-link.active {
  color: #fff;
  background-color: #6c757d;
  box-shadow: 0 5px 20px 0 rgba(0,0,0,.2), 0 13px 24px -11px rgba(108, 117, 125, .6);
}

.nav-pills .nav-item .nav-link {
  line-height: 24px;
  font-size: 12px;
  font-weight: 500;
  min-width: 100px;
  color: #555;
  transition: all .3s;
  border-radius: 30px;
  padding: 10px 15px;
  text-align: center;
}

.nav-pills .nav-item .nav-link:not(.active):hover {
  background-color: rgba(200,200,200,.2);
}


.nav-pills .nav-item i {
  display: block;
  font-size: 16px;
}

.tab-space {
  padding: 20px 0 50px;
}

.profile-page .gallery {
  margin-top: 3.213rem;
  padding-bottom: 50px;
}

.profile-page .gallery img {
  width: 100%;
  margin-bottom: 2.142rem;
}

.profile-page .profile .name{
  margin-top: -80px;
}

img.rounded {
  border-radius: 6px!important;
}

.tab-content>.active {
  display: block;
}

/*buttons*/
.btn {
  position: relative;
  padding: 12px 30px;
  margin: .3125rem 1px;
  font-size: .75rem;
  font-weight: 400;
  line-height: 1.428571;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0;
  border: 0;
  border-radius: .2rem;
  outline: 0;
  transition: box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1);
  will-change: box-shadow,transform;
}

.btn.btn-just-icon {
  font-size: 20px;
  height: 41px;
  min-width: 41px;
  width: 41px;
  padding: 0;
  overflow: hidden;
  position: relative;
  line-height: 41px;
}

.btn.btn-just-icon fa{
  margin-top: 0;
  position: absolute;
  width: 100%;
  transform: none;
  left: 0;
  top: 0;
  height: 100%;
  line-height: 41px;
  font-size: 20px;
}
.btn.btn-link{
  background-color: transparent;
  color: #999;
}
/* footer */

footer{
  margin-top: 10px;
  color: #555;
  padding: 25px;
  font-weight: 300;

}
.footer p{
  margin-bottom: 0;
  font-size: 14px;
  margin: 0 0 10px;
  font-weight: 300;
}
footer p a{
  color: #555;
  font-weight: 400;
}

footer p a:hover {
  color: #9f26aa;
  text-decoration: none;
}


</style>
