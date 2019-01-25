<template>
  <div class="container">
    <div v-for="(item, index) in list" :key="index" class="detail-info">
      <div class="detail-title border-bottom">
        <span class="iconfont detail-icon">&#xe65b;</span>
          {{ item.title }}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-content :list="item.children"></detail-content>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DetailContent',
    props: {
      list: Array
    }
  }
</script>
<style lang="stylus" scoped>
  .detail-title
    line-height: .8rem
    font-size: .26rem
    padding: 0 .2rem
  .item-children
    padding: 0 .36rem
</style>
