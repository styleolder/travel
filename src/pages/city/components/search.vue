<template>
  <div class="warpper">
    <div class="search">
        <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名称或拼音">
    </div>
    <div class="search-content" v-show="keyword">
      <ul>
        <li class="search-content-desc" v-for="(item , index) in list" :key="index" @click="handleCityClick(item.name)">
          {{ item.name }}
        </li>
      </ul>
      <li class="search-content-desc search-content-care" v-show="hasNoDate">没有找到匹配数据</li>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'CitySearch',
    props: {
      cities: {
        type: Object
      }
    },
    data () {
      return {
        keyword: '',
        list: [],
        timer: null
      }
    },
    computed: {
      hasNoDate () {
        return !this.list.length
      }
    },
    methods: {
      handleCityClick (cityname) {
        this.$store.dispatch('changeCity', cityname)
        this.$router.push('/')
      }
    },
    watch: {
      keyword () {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyword) {
          this.list = []
          return
        }
        this.timer = setTimeout(() => {
          const result = []
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keyword) > -1 ||
                value.name.indexOf(this.keyword) > -1
              ) {
                result.push(value)
              }
            })
          }
          this.list = result
        }, 100)
      }
    }
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
  .search-content
    top:1.6rem
    background: #ffffff
    overflow: hidden
    .search-content-desc
      line-height: .62rem
      padding-left .2rem
      padding-top: .1rem
    .search-content-care
      font-size: .32rem
      font-weight: bold
      color: red
      line-height: .82rem
</style>
