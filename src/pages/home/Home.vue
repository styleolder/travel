<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-bordertop></home-bordertop>
    <home-recommend></home-recommend>

  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeBordertop from './components/bordertop'
import HomeRecommend from './components/recommend'

export default {
  name: 'Home',
  components: {
    HomeBordertop,
    HomeRecommend,
    HomeIcons,
    HomeHeader,
    HomeSwiper
  }
}
</script>
