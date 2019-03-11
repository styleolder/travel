<template>
  <div>
    <Layout class="layouy-wrapper">
      <Sider collapsible v-model="collapsed" breakpoint="md" hide-trigger>
        <Menu theme="dark" width="200px">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper"/>
              内容管理
            </template>
            <MenuItem name="1-1">文章管理</MenuItem>
            <MenuItem name="1-2">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people"/>
              用户管理
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats"/>
              统计分析
            </template>
            <MenuGroup title="使用">
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
          </Submenu>
        </Menu>
      </Sider>
      <Layout>
        <Header class="header-wrapper">
          <icon :class="triggerClasses" @click="handleSiderClick" type="md-menu" :size="32"></icon>
        </Header>
        <content class="content-wrapper">
          <card shadow bordered>card
            <router-view/>
          </card>
          <login-table></login-table>
        </content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import LoginTable from './table'
  export default {
    name: 'LoginLayout',
    components: {
      LoginTable
    },
    data () {
      return {
        collapsed: false
      }
    },
    computed: {
      triggerClasses () {
        return [
          'trigger-icon',
          this.collapsed ? 'rotate' : ''
        ]
      }
    },
    methods: {
      handleSiderClick () {
        this.collapsed = !this.collapsed
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .layouy-wrapper {
    height: 100%;

    .header-wrapper {
      background #ffffff
      box-shadow 0 1px 1px 1px rgba(0 0 0 0.1)
      padding-left 10px

      .trigger-icon {
        cursor: pointer
        transition transform 0.3s ease

        &.rotate {
          transform rotateZ(--90deg)
          transition transform 0.3s ease
        }
      }
    }

    .content-wrapper {
      padding 10px
      min-height calc(100vh - 84px)
    }
  }
</style>
