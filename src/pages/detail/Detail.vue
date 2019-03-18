<template>
  <div class="detail">
    <div>{{ id }}</div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-content :list="categoryList"></detail-content>
  </div>
</template>
<script>
import DetailBanner from './compinents/banner'
import DetailHeader from './compinents/header'
import DetailContent from './compinents/content'
import { getdetail } from '@/api/app'
export default {
  name: 'Detail',
  props: {
    id: {
      type: String,
      default: '123456'
    }
  },
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
    getDetailList() {
      getdetail({id: this.$route.params.id})
        .then(res => {
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.categoryList = data.categoryList
          }
          }
        )
    }
  },
  mounted () {
    this.getDetailList()
  },
  beforeRouteLeave (to, form, next) {
      const leave = confirm('leave to this page')
      if (leave) {
        next()
      } else {
        next(false)
      }
  }
}
</script>
