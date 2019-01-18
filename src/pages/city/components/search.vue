<template>
  <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名称或拼音">
  </div>
</template>
<script>
  export default {
    name: 'CitySearch'
  }
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/iconfont/varibles.styl'
  .search
    background:#00bcd4
    height: .72rem
    padding: .01rem  .1rem
    .search-input
      background:#ffffff
      border-radius:5px
      text-align: center
      width: 100%
      height: .62rem
      padding 0 .1rem
      box-sizing: border-box
      line-height: .62rem
</style>
