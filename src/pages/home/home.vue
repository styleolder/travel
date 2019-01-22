<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconsList="iconsList"></home-icons>
    <home-bordertop></home-bordertop>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weeked></home-weeked>
  </div>
</template>
<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeBordertop from './components/bordertop'
import HomeRecommend from './components/recommend'
import HomeWeeked from './components/weeked'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeWeeked,
    HomeBordertop,
    HomeRecommend,
    HomeIcons,
    HomeHeader,
    HomeSwiper
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconsList: [],
      recommendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconsList = data.iconsList
        this.recommendList = data.recommendList
      }
    }
  },
  created () {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.getHomeInfo()
      this.lastCity = this.city
    }
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }
}
</script>
