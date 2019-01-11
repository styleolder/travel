<template>
  <div class="weeked">
    <div class="weeked-title">
      周末去哪儿
    </div>
    <div class="weeked-info">
      <div class="weeked-warpper">
        <img class="weeked-img"
             src="http://img1.qunarzz.com/sight/source/1812/4e/77bab696d56366.jpg_r_640x214_f86f2b40.jpg"/>
      </div>
      <div class="weeked-content">
        <p class="weeked-content-title">西安泡汤圣地</p>
        <span class="weeked-content-desc">解压之地，放松自己，来一段轻松的旅程。</span>
      </div>
    </div>
    <div class="weeked-info">
      <div class="weeked-warpper">
        <img class="weeked-img"
             src="http://img1.qunarzz.com/sight/source/1505/19/58f233e11df7ef.jpg_r_640x214_6b42c9fc.jpg"/>
      </div>
      <div class="weeked-content">
        <p class="weeked-content-title">西安必打卡</p>
        <span class="weeked-content-desc">寻长安梦，开启穿越的圆梦之旅</span>
      </div>
    </div>
    <div class="weeked-info">
      <div class="weeked-warpper">
        <img class="weeked-img"
             src="http://img1.qunarzz.com/sight/source/1811/63/808c022b285a2c.jpg_r_640x214_ad984479.jpg"/>
      </div>
      <div class="weeked-content">
        <p class="weeked-content-title">探寻文化古都</p>
        <span class="weeked-content-desc">一场时空穿越的旅行，探寻历史悠久的文化古都！寻觅历史留下的点点足迹，细细品味古人的伟大</span>
      </div>
    </div>
    <div class="weeked-info">
      <div class="weeked-warpper">
        <img class="weeked-img"
             src="http://img1.qunarzz.com/sight/source/1811/63/808c022b285a2c.jpg_r_640x214_ad984479.jpg"/>
      </div>
      <div class="weeked-content">
        <p class="weeked-content-title">探寻文化古都</p>
        <span class="weeked-content-desc">一场时空穿越的旅行，探寻历史悠久的文化古都！寻觅历史留下的点点足迹，细细品味古人的伟大</span>
      </div>
    </div>
    <div class="weeked-price-info">
      <span class="weeked-price-icon iconfont">&#xe656;</span>
      <div class="weeked-price-desc">
        <span class="weeked-price-desc-highlight">票面价</span>
        是指通过景区指定窗口售卖的纸质门票上标注的价格
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'HomeWeeked'
  }
</script>
<style lang="stylus" scoped>
  .weeked
    background: #EDEDED

  .weeked-price-info
    width: 100%
    margin-top: .1rem
    padding: .1rem
    background: #ffffff

    .weeked-price-icon
      width: 16px
      height: 16px
      padding-left .1rem
      float: left

    .weeked-price-desc
      margin-left: .48rem
      font-size: .28rem

      .weeked-price-desc-highlight
        font-weight: bold

  .weeked-info
    background: #ffffff
    margin-bottom: .1rem

    .weeked-warpper
      overflow: hidden
      height: 0
      padding-bottom: 37%

      .weeked-img
        width: 100%

  .weeked-title
    height .8rem
    line-height .8rem
    font-size: .36rem
    background: #EDEDED
    text-indent: .28rem

  .weeked-content
    padding 7px 10px 10px 10px

    .weeked-content-title
      overflow: hidden;
      padding-right: 1.4rem
      color: #212121
      font-size: .28rem
      line-height: .48rem
      white-space: nowrap
      text-overflow: ellipsis

    .weeked-content-desc
      display: inline-block
      width: 100%
      overflow: hidden;
      padding-right: 1.4rem;
      color: #616161;
      fontont-size: .24rem;
      line-height: .42rem;
      white-space: nowrap;
      text-overflow: ellipsis;
</style>
