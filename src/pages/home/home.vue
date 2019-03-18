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
import { mapState } from 'vuex'
import { getindex } from '@/api/app'

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
    getHomeInfo() {
      getindex().then(res => {
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.swiperList = data.swiperList
            this.iconsList = data.iconsList
            this.recommendList = data.recommendList
            console.log(process.env.BaseUrl)
          }
        }
      )
    }
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
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/iconfont/varibles.styl'
</style>
