<template>
  <div>
    <p>login</p>
    <p>userName: {{ userName }}</p>
    <p>getCity: {{ cityVersion }}</p>
    <button @click="handleCityClick">点击我</button>
    <p>{{ appversion }}</p>
    <button @click="handleSetNameClick">点击我</button>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Login',
  beforeRouteEnter (to, from, next) {
    console.log(to.name)
    console.log(from.name)
    next(vm => {
      console.log(vm)
    })
  },
  computed: {
    ...mapState({
      userName: state => state.user.userName,
      appversion: state => state.appversion
    }),
    cityVersion () {
      return this.$store.state.city
    }
  },
  methods: {
    ...mapMutations([
      'loginSetCity',
      'SET_USER_NAME'
    ]),
    ...mapActions([
      'updateUserName'
    ]),
    handleCityClick () {
      // this.$store.commit(
      //   'loginChangeCity',
      //   {
      //     cityname: '自定义'
      //   }
      // )
      this.$store.commit('loginChangeCity', {
        cityname: '自定义'
      })
      this.loginSetCity()
      // this.$store.commit('loginSetCity')
      this.SET_USER_NAME('vue-cource')
    },
    handleSetNameClick () {
      this.updateUserName()
    }
  }
}
</script>
