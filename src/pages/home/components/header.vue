<template>
    <div class="header">
       <div class="header-left">
         <div class="iconfont back-icon">&#xe625;</div>
       </div>
       <div class="header-input">
         <span class="iconfont">&#xe639;</span>
         输入城市/景点/游玩主题
       </div>
       <div class="header-right">西安
          <span class="iconfont arrow-icon">&#xe6aa;</span>
       </div>
    </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
  .header
    line-height: 44px
    height: 44px
    display: flex
    background: #00bcd4
    color: #ffffff
    .header-left
      width: 40px
      height: 100%
      float: right
      .back-icon
        font-size: .4rem
        text-align: center
        padding-left: 10px
        padding-right: 10px
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
      padding-left: 11px
      padding-right: 11px
      float: right
      .arrow-icon
        margin-left: -4.5px
</style>
