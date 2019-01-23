<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe625;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe639;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">{{ this.city }}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'HomeHeader',
    computed: {
      ...mapState(['city']),
      ...mapGetters(['doubleCity'])
    }
  }
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/iconfont/varibles.styl'
  .header
    line-height: $headerHeight
    height: $headerHeight
    display: flex
    background: #00bcd4
    color: #ffffff

    .header-left
      width: 40px
      height: 100%
      float: right
      text-align: center
    .header-input
      flex: 1
      line-height: 34px
      height: 34px
      background: #ffffff
      border-radius: .1rem
      margin-top: 5px
      margin-bottom: 5px
      color: #cccccc
      padding-left: .2px
      span
        padding-left .2rem
    .header-right
      color: #ffffff
      padding-left: 11px
      padding-right: 11px
      float: right
      .arrow-icon
        margin-left: -4.5px
</style>
