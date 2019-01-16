<template>
  <div class="header">
    <router-link to='/' tag="span">
      <div class="index-back iconfont">&#xe625;</div>
    </router-link>
    <h1 class="header-title">城市选择</h1>
  </div>
</template>
<script>
  export default {
    name: 'CityHeader'
  }
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/iconfont/varibles.styl'
  .header
    background: #00bcd4
    position:relative
    line-height: $headerHeight
    height: $headerHeight
    text-align: center
    color: #ffffff
    overflow: hidden
    .index-back
      display: inline-block
      position: absolute
      font-size: 16px;
      width: .8rem
      left: 0
      top: 0
    .header-title
      margin:0 1rem
      font-size: .32rem;
</style>
