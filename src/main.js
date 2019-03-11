// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'babel-polyfill'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
import '@/assets/styles/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'
import store from './store'
import iview from 'iview'
import 'iview/dist/styles/iview.css'

// if (process.env.NODE_ENV !== 'prod') require('@/mock')
// import Mock from '@/mock'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(iview)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
