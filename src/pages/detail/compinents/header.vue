<template>
  <div class="container">
    <router-link tag="div" class="header-abs" to="/" v-show="showAbs">
        <div class="back-home header-abs-back iconfont">&#xe625;</div>
    </router-link>
    <div class="header-info" v-show="!showAbs" :style="opacityStyle">
      <router-link tag="div" class="header-icon" to="/">
         <div class="back-home header-info-back iconfont">&#xe625;</div>
      </router-link>
      <span class="header-title">秦岭野生动物园</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DetailHeader',
    data () {
      return {
        showAbs: true,
        scrollTop: '',
        opacityStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleScoll () {
        this.scrollTop = document.documentElement.scrollTop
        if (this.scrollTop >= 60) {
          let opacity = this.scrollTop / 140
          opacity = opacity > 1 ? 1 : opacity
          this.opacityStyle = { opacity: opacity }
          this.showAbs = false
        } else {
          this.showAbs = true
        }
      }
    },
    activated () {
      window.addEventListener('scroll', this.handleScoll)
    }
  }
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/iconfont/varibles.styl'
  .header-abs
    position: fixed
    top: .1rem
    left: .1rem
    line-height: .72rem
    height: .72rem
    width: .72rem
    text-align: center
    background: #000
    opacity: 0.5
    border-radius: .36rem;
    .header-abs-back
      font-size: .36rem
      color: #fff
  .header-info
    line-height: $headerHeight
    height: $headerHeight
    display: flex
    background: #00bcd4
    color: #ffffff
    position: fixed
    text-align: center
    top:0
    left: 0
    right: 0
    z-index: 99
    .header-icon
      display: inline-block
      width: .8rem
      position: absolute
      left: 0
      top: 0
      font-size: .36rem
    .header-title
      text-align: center
      margin: 0 1rem
      flex: 1
      font-size: .32rem
</style>
