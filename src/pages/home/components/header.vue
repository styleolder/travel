<template>
    <div class="header">
       <div class="header-left">
         <div class="iconfont back-icon">&#xe625;</div>
       </div>
       <div class="header-input">
         <span class="iconfont">&#xe639;</span>
         输入城市/景点/游玩主题
       </div>
       <div class="header-right">城市
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
    line-height: .86rem
    display: flex
    background: #00bcd4
    color: #ffffff
    .header-left
      width: .68rem
      height: .86rem
      float: right
      .back-icon
        font-size: .4rem
        text-align: center
    .header-input
      flex: 1
      background: #ffffff
      border-radius: .1rem
      margin-top: .12rem
      line-height: .64rem
      margin-bottom: .12rem
      margin-left: .2rem
      margin-right: .2rem
      color: #cccccc
      padding-left: .2px
      span
        padding-left .2rem
    .header-right
      width: 1.24rem
      float: right
      .arrow-icon
        font-size: .3rem
        margin-left: -.05rem

</style>
