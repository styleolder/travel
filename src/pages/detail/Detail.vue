<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-content :list="categoryList"></detail-content>
  </div>
</template>
<script>
import DetailBanner from './compinents/banner'
import DetailHeader from './compinents/header'
import DetailContent from './compinents/content'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailContent,
    DetailHeader,
    DetailBanner
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  methods: {
    getDetailList () {
      axios.get('/api/detail.json',{
        params: {
          id: this.$route.params.id
        }
      })
        .then(this.getDetailListSucc)
    },
    getDetailListSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.categoryList = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailList()
  }
}
</script>
