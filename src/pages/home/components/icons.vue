<template>
  <div class="icons">
    <div class="icon" v-for="icons in iconsList" :key="icons.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="icons.imgUrl">
        </div>
        <div class="icon-keywords" >{{ icons.keywords }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconsList: [{
        id: '001', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', keywords: '景点门票'
      }, {
        id: '002', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png', keywords: '文化古迹'
      }, {
        id: '003', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png', keywords: '演出'
      }, {
        id: '004', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png', keywords: '一日游'
      }, {
        id: '005', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png', keywords: '西安必游'
      }, {
        id: '006', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png', keywords: '动植物园'
      }, {
        id: '007', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/f6/e54fad3ea337b02.gif', keywords: '年终大促'
      }, {
        id: '008', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png', keywords: '兵马俑'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .icons
    overflow: hidden
    height:0
    padding-bottom: 50%
    .icon
      width: 25%
      height: 0
      margin-top: .1rem
      float: left
      padding-bottom: 70px
      overflow: hidden
      position: relative
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        height: 1.1rem
        width: 1.1rem
        margin 0 auto
        .icon-img-content
          height: 100%
          display: block
      .icon-keywords
        color: #212121;
        display: block
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height 14px
        height 14px
        margin-top .1rem
        font-size: 14px
        text-align: center
</style>
