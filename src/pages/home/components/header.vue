<template>
    <div class="header">
      <div class="header-left">返回</div>
       <div class="header-input">输入城市/景点/游玩主题/</div>
       <div class="header-right">城市</div>
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
      float: right
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
    .header-right
      width: 1.24rem
      float: right
      text-align: center
</style>
