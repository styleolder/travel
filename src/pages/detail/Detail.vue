<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-content></detail-content>
  </div>
</template>
<script>
import DetailBanner from './compinents/banner'
import DetailHeader from './compinents/header'
import DetailContent from './compinents/content'

export default {
  name: 'Detail',
  components: {
    DetailContent,
    DetailHeader,
    DetailBanner
  }
}
</script>
