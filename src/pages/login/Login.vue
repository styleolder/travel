<template>
  <div>
    <p>login</p>
    <p>userName: {{ userName }}</p>
    <p>getCity: {{ cityVersion }}</p>
    <button @click="handleCityClick">点击我</button>
    <p>{{ appversion }}</p>
    <button @click="handleSetNameClick">点击我</button>
    <p></p>
    <input type="number" v-model.number="countVal">
    <button @click="handleChangCouter">点击修改countVal</button>
    <count-to :end-val="this.endVal" class="countclass" ref="getcount">
      <span v-show="endVal" slot="count-left">总金额: </span>
      <span v-show="endVal" slot="count-right">元</span>
    </count-to>
    <div class="split-pane-con">
      <split-pane v-model="paneLeftWidth"></split-pane>
    </div>
    用户名：<input type="text" v-model="username">
    密码：<input type="password" v-model="password">
    <button @click="handleUserLogin">登录</button>
    <LoginLayout class="login-layout"></LoginLayout>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import CountTo from '@/components/count-to'
import SplitPane from '@/components/split-pane'
import LoginLayout from './components/layout'
export default {
  name: 'Login',
  components: {
    CountTo,
    SplitPane,
    LoginLayout
  },
  data() {
    return {
      endVal: 0,
      countVal: 0,
      paneLeftWidth: 0.5,
      username: '',
      password: ''
    }
  },
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
      'updateUserName',
      'userlogin'
    ]),
    handleEnd (endVal) {
      console.log(endVal)
    },
    handleChangCouter () {
      this.endVal = this.countVal
      this.$refs.getcount.getCount()
      console.log(process.env.NODE_ENV)
      console.log(process.env.BASE_URL)
    },
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
    },
    handleUserLogin () {
      this.userlogin(this.username, this.password).then(() => {
        this.$router.push({
          name: 'Home'
        })
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/iconfont/varibles.styl'
  .countclass {
    font-size 24px
    color greenyellow
  }
  .split-pane-con {
    width  300px
    height 200px
    background-color #ffb436
  }
  .login-layout {
    width 100%
    height 600px
  }
</style>
