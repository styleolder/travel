<template>
  <Upload action="//jsonplaceholder.typicode.com/posts/" :on-success="HandlerSuccess">
    <Button icon="ios-cloud-upload-outline">Upload files</Button>
  </Upload>
</template>
<script>
  export default {
    name: 'LoginUpload',
    methods: {
      HandlerSuccess () {
        this.$Message.info('上传成功')
      }
    }
  }
</script>
