<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    window.addEventListener('hashchange', () => {
        var currentPath = window.location.hash.slice(1) // 获取输入的路由
        if (this.$router.path !== currentPath) {
            this.$router.push(currentPath) // 动态跳转
        }
    }, false)
}
}
</script>
