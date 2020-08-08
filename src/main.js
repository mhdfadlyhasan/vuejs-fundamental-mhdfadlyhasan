import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router'
import VueYouTubeEmbed from 'vue-youtube-embed'
import axios from 'axios'
Vue.use(axios)
Vue.use(VueYouTubeEmbed)

Vue.use(VueRouter)
Vue.config.productionTip = true

import Search from './components/Search.vue'
import About from './components/About.vue'
import Home from './components/Home.vue'

const routes = [
  {path: '/link/:video_link',name:'GetCaption',component: Search},
  {path: '/About',name:'About',component: About},
  {path: '/',name:'Home',component: Home},
]
const router = new VueRouter({
  routes: routes,
  mode:'history'
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
