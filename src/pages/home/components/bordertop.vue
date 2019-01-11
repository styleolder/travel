<template>
  <ul class="recommend-title">
    <li class="recommend-title-li recommend-title-left">
      <span class="iconfont">&#xe645;</span>
      定位失败
    </li>
    <li class="recommend-title-li recommend-title-right">
      <span class="iconfont">&#xe634;</span>
      必游榜单
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'HomeBordertop'
  }
</script>
<style lang="stylus" scoped>
  .recommend-title
    border-top: 1px solid #cccccc
    position: relative

    .recommend-title-li
      display: inline-block
      line-height: 1rem
      height: 1rem
      text-align: center

      span
        margin-right .05rem
        color: #616161

    .recommend-title-left
      width: 50%
      float: left

    .recommend-title-right:before
      top: 0;
      width: 1px;
      height: 100%;
      left 50%
      background #cccccc
      content: '';
      position: absolute;

    .recommend-title-right
      width: 50%
</style>
