<template>
  <div class="wrapper">
    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
      <swiper-slide v-for="slide in swiperList" :key="slide.id">
        <img class="swiper-img" :src="slide.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      notNextTick: true,
      swiperOption: {
        autoplay: 3000,
        pagination: '.swiper-pagination'

      },
      swiperList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/31/da037478f37cf202.jpg_750x200_fe28d396.jpg'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1609/47/0cfdc871ac183702.jpg_750x200_f6896acd.jpg'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/f1/e57bc93226317102.jpg_750x200_9ab37bd0.jpg'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg'
      }, {
        id: '005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/fe/ca8ed7adc3ff9f02.jpg_750x200_49735140.jpg'
      }, {
        id: '006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/a8/cb43c4ac6c215d02.jpg_750x200_83dee994.jpg'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #ffffff !important
  .wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 26.7%
    .swiper-img
      width: 100%
</style>
