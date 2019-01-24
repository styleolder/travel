<template>
  <div class="container" @click="handleGallaryClick">
    <div class="warpper">
      <div class="swipered">
        <swiper :options="swiperOption" :not-next-tick="notNextTick">
          <swiper-slide v-for="(slide, index) in swiperList" :key="index">
            <img class="swiper-img"
                 :src="slide"/>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonGallary',
  props: {
    swiperList: {
      type: Array,
      default () {
        return ['http://img1.qunarzz.com/sight/p0/1508/2f/63044142960f8e34ee0de574d4d5d917.water.jpg_r_800x800_83304c15.jpg',
          'http://img1.qunarzz.com/sight/p0/1508/3f/efb3d6aa5bbcc540d41945e2d9b2ab55.water.jpg_r_800x800_1e9dac60.jpg'
        ]
      }
    }
  },
  data () {
    return {
      notNextTick: true,
      swiperOption: {
        autoplay: 3000,
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('handleGallaryClick')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .container
    display: flex
    z-index: 99
    position: fixed
    flex-direction: column
    justify-content: center
    left: 0
    top: 0
    right: 0
    bottom: 0
    background: #000
    .warpper
      height: 0
      padding-bottom: 66.5%
      overflow: hidden
      .swiper-img
        width: 100%
      .swiper-pagination
        color: #fff
        position: fixed
        bottom: .48rem
        line-height: .8rem
        font-size: .24rem
</style>
