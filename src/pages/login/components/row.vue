<template>
  <div>
    <Layout>
      <Row :gutter="10">
        <i-col span="8">123</i-col>
        <i-col span="8">123</i-col>
        <i-col span="8">123</i-col>
      </Row>
      <Row :gutter="10">
        <i-col span="8">123</i-col>
        <i-col span="8">123</i-col>
        <i-col span="8">123</i-col>
      </Row>
    </Layout>
  </div>
</template>
<script>
  export default {
    name: 'LoginRow'
  }
</script>
<style lang="stylus" scoped>
  .ivu-col {
    background-clip content-box
    margin-top 20px
    height  40px
  }
</style>
