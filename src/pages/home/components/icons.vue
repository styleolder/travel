<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="icons in page" :key="icons.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="icons.imgUrl">
          </div>
          <div class="icon-keywords">{{ icons.keywords }}</div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeIcons',
    props: ['iconsList'],
    data () {
      return {
        notNextTick: true,
        swiperOption: {
          pagination: '.swiper-pagination'
        }
      }
    },
    computed: {
      pages () {
        const pages = []
        this.iconsList.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
    overflow: hidden

  .icons
    height: 0
    padding-bottom: 50%

    .icon
      width: 25%
      height: 0
      margin-top: .1rem
      float: left
      overflow: hidden
      padding-bottom: 70px
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
