<template>
  <div class="container">
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1508/c5/a017645d82ab89f271fdfb1bd6ecc2e0.water.jpg_600x330_370cb642.jpg">
      <div class="banner-info">
        <div class="banner-imgswipericon">
          <span class="banner-imgswipericon-icon iconfont">&#xe7b3;</span>
          <span class="banner-imgswipericon-number">16</span>
        </div>
        <div class="banner-img-title">秦岭野生动物园(AAAA景区)</div>
      </div>
      <router-link tag="a" class="banner-back" to="/">
        <span class="banner-icon iconfont">&#xe625;</span>
      </router-link>
    </div>
    <common-gallary v-show="showGallary" @handleGallaryClick="handleGallaryClick"></common-gallary>
  </div>
</template>
<script>
  import CommonGallary from '@/common/gallary/Gallary'
  export default {
    name: 'DetailBanner',
    components: {
      CommonGallary
    },
    data () {
      return {
        showGallary: false
      }
    },
    methods: {
      handleBannerClick () {
        this.showGallary = !this.showGallary
      },
      handleGallaryClick () {
        this.showGallary = !this.showGallary
      }
    }

  }
</script>
<style lang="stylus" scoped>
  .banner
    overflow: hidden
    height: 0
    padding-bottom: 55%
    position: relative
    .banner-img
      width: 100%
    .banner-back
      height: .72rem;
      display: inline-block
      width: .72rem;
      line-height: .72rem
      position: absolute
      left: .1rem
      top: .1rem
      background-color: #000
      opacity: 0.5
      text-align: center
      border-radius: 50%
      .banner-icon
        color: #fff
        font-size: .36rem
    .banner-info
      position: absolute
      left: 0
      right: 0
      bottom: 0
      .banner-img-title
        color: #fff
        font-size: .36rem
        line-height: 1.2
        display: inline-block
        position: absolute
        left: .2rem
        bottom : .32rem
        z-index: 1
        text-shadow: 0 1px 2px rgba(0,0,0,0.70)
      .banner-imgswipericon
        position: absolute
        left: .2rem
        bottom : .8rem
        width: 1.2rem
        height: .4rem
        background: rgba(0, 0, 0, .5)
        border-radius: .2rem
        font-size: .24rem
        color: #fff
        line-height: .4rem
        text-align: center
        .banner-imgswipericon-icon
          font-size: .24rem
        .banner-imgswipericon-number
          margin-left: .05rem
    .banner-info::after
      position: absolute
      left: 0
      bottom: 0
      content: " "
      width: 100%
      min-height: .6rem
      background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));
</style>
