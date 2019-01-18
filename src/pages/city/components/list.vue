<template>
  <div class="list">
    <div class="list-host-city">
      <div class="list-hot-title list-title">
        热门城市
      </div>
      <ul class="list-desc">
        <router-link to='/' tag="li" class="list-host-li" v-for="(hotcity, index) in hotCities" :key="index">
          {{ hotcity.name }}
        </router-link>
      </ul>
    </div>
    <div class="list-order">
      <div class="list-order-title list-title">字母排序</div>
      <ul class="list-order-content list-desc">
        <li class="list-host-li" v-for="(item, index) in cities" :key="index" @click="returnList(index)">
          {{ index }}
        </li>
      </ul>
    </div>
    <div class="list-city" v-for="(item, index) in cities" :key="index">
      <div class="list-city-number list-title" :id="index">{{ index }}</div>
      <ul class="list-city-list list-desc">
        <router-link to='/' tag="li" class="list-host-li" v-for="(city, id) in item" :key="id">
          {{ city.name }}
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'CityList',
    props: {
      hotCities: {
        type: Array
      },
      cities: {
        type: Object
      }
    },
    methods: {
      returnList (id) {
        document.querySelector('#' + id).scrollIntoView(true)
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/iconfont/varibles.styl'
  .list
    background: #eaeaea
    overflow: hidden
    .list-host-city
      .list-desc
        margin-right -1px
    .list-city
      .list-desc
        margin-right -1px
    .list-desc
      background: #ffffff
      overflow: hidden
      .list-host-li
        float: left
        width: 33.33%
        text-align: center
        height: .9rem;
        line-height: .9rem;
        font-size: .28rem;
        display: inline-block
        border-bottom: .02rem solid #ddd;
        border-right: .02rem solid #ddd;
        margin-bottom: -1px
        box-sizing: border-box
        border-collapse: collapse
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
      .list-host-li::after
        clear: both
    .list-title
      font-size: .24rem;
      margin: .24rem .3rem;
      width: 100%
      height: .24rem
    .list-order
      .list-host-li
        width: 16.66%
        border-bottom: none
        border-right: none
        color: #212121
</style>
