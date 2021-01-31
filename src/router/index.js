import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/components/Login'
import NewUser from '../views/components/NewUser'
import About from '../views/About'
import LiveChat from '../views/components/LiveChat'
import Profile from '../views/components/Profile'

Vue.use(VueRouter)

// Pense a changer en :to="$route.name = Home"

const routes = [
  {
    path: '/', name: 'Home', component: Home,
    children: [
      {path: '/login', name: 'Login', component: Login},
      {path: '/newUser', name: 'NewUser', component: NewUser},
      {path: '/profile', name: 'Profile', component: Profile},

    ]
  },
  {
    path: '/liveChat', name: 'LiveChat', component: LiveChat},
  {
    path: '/about', name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
