<template>
  <div class="swipered">
    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
      <swiper-slide v-for="slide in swiperList" :key="slide.id">
        <img class="swiper-img" :src="slide.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props: ['swiperList'],
    data () {
      return {
        notNextTick: true,
        swiperOption: {
          autoplay: 3000,
          pagination: '.swiper-pagination'
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .swipered >>> .swiper-pagination-bullet-active
    background: #ffffff !important

  .swipered >>> .swiper-img
    width: 100%

  .swiper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 26.7%
</style>
