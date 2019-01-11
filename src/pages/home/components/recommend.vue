<template>
  <div class="recommend">
    <ul class="recommend-items">
      <div class="hot-title">
        <img class="hot-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">
        <span class="hot-title-left">本周热门榜单</span>
        <div class="hot-title-right">
          全部榜单
          <span class="hot-title-right-icon iconfont">&#xe664;</span>
        </div>
      </div>
      <li class="recommend-item" v-for="(recommend, index) in recommendList" :key="index">
        <img class="item-img" :src="recommend.imgUrl"/>
        <div class="item-info" :key="recommend.id">
          <div class="item-info-title">{{ recommend.title }}</div>
          <div class="item-info-comment">
            <span class="comment-starleve iconfont">&#xe60c;&#xe60c;&#xe60c;&#xe60c;&#xe60c;</span>
            <span class="comment-num">{{ recommend.commentnum }}条评论</span>
          </div>
          <div class="item-info-price">
              <span class="price-num">¥
                <em>{{ recommend.price }}</em>起</span>
            <span class="price-address">{{ recommend.address }}</span>
          </div>
          <div class="item-info-feature" v-if="recommend.desc">
            <div>
              {{ recommend.desc }}
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="recommend-more">
      查看所有产品
    </div>
  </div>
</template>
<script>
  export default {
    name: 'HomeRecommend',
    props: ['recommendList']
  }
</script>
<style lang="stylus" scoped>
  .recommend
    background #EDEDED
    width: 100%
    height: auto

  .recommend-more
    text-align: center
    background: #ffffff
    color: #00afc7
    padding: .2rem 0;
    font-size: .2rem;
    line-height: .4rem;

  .recommend-items
    padding-top: .28rem

    .recommend-item
      padding-left .28rem

    .hot-title
      padding-top .2rem
      padding-left .28rem
      padding-bottom .2rem
      background: #ffffff
      color: #212121
      line-height: .6rem
      height: .6rem
      position: relative

      .hot-title-img
        display: inline-block
        overflow: hidden
        vertical-align: top
        top: 0
        left: 0
        height: 15px
        width: 15px

      .hot-title-left
        font-size: .32rem
        margin-left .05rem
        line-height: 1

      .hot-title-right
        line-height: 1
        float: right
        right: .32rem
        position: absolute
        top: .34rem;
        font-size: .3125px
        color: #616161

  .recommend-item
    background #ffffff
    display: flex
    overflow: hidden
    border-bottom: 1px solid #EDEDED
    padding-top: .2rem
    padding-bottom: .2rem

    .item-img
      height: 100px
      width: 100px

    .item-info
      padding-left: .22rem
      overflow: hidden
      flex: 1

      .item-info-title
        margin-top: .26rem
        height: .44rem
        color: #212121
        font-size: .32rem
        line-height: .44rem

      .item-info-comment
        margin-top: .14rem
        height: .28rem
        position: relative
        ine-height .28rem
        font-size: .28rem

        .comment-starleve
          height: 11px
          color: #ffb436
          font-size: 8px;

        .comment-num
          position: absolute
          left: 2rem
          color: #616161
          float: left

      .item-info-price
        margin-top: .22rem;
        color: #616161;
        font-size: .24rem;
        line-height: .4rem;
        position: relative

        .price-num
          color: #ff8300;

          em
            font-size .45rem

        .price-address
          position: absolute
          right: .25rem
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 1rem

      .item-info-feature
        margin-top: .48rem;
        margin-right: .24rem;
        display: inline-block

        div
          background: #fff9f9;
          color: #f55;
          font-size: .24rem;
          line-height: .34rem;
</style>
