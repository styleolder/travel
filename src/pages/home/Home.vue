<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-bordertop></home-bordertop>
    <home-recommend></home-recommend>
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

export default {
  name: 'Home',
  components: {
    HomeWeeked,
    HomeBordertop,
    HomeRecommend,
    HomeIcons,
    HomeHeader,
    HomeSwiper
  }
}
</script>
