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
          <login-upload></login-upload>
          <div class="form-wrapper">
            <FormGroup :list="formList"></FormGroup>
          </div>
        </content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  import LoginTable from './table'
  import LoginUpload from './upload'
  import FormGroup from './formgroup'

  export default {
    name: 'LoginLayout',
    components: {
      LoginTable,
      LoginUpload,
      FormGroup
    },
    data() {
      return {
        collapsed: false,
        formList: [
          {
            name: 'name',
            type: 'i-input',
            value: '',
            label: '姓名',
            rule: [{
               required: true, message: 'The name cannot be empty', trigger: 'blur'
            }]
          },
           {
            name: 'i-Switch',
            type: 'i-switch',
            value: true,
            label: '在职'
          },
          {
            name: 'range',
            type: 'slider',
            value: [10, 40],
            range: true,
            label: '范围'
          },
          {
            name: 'RadioGroup ',
            type: 'RadioGroup',
            style: 'button',
            value: 1,
            label: '学历',
            children: {
              type: 'Radio',
              name: 'Radio',
              list: [
                {
                  label: 1,
                  title: '大专'
                },
                {
                  label: 2,
                  title: '本科'
                },
                {
                  label: 3,
                  title: '研究生'
                }
              ]
            }
          },
          {
            name: 'i-select',
            type: 'i-select',
            children: {
              name: 'option',
              type: 'i-option',
              list: [
                {
                  value: 'man',
                  title: '男'
                },
                {
                  value: 'woman',
                  title: '女'
                }
              ]
              }
          }
        ]
      }
    },
    computed: {
      triggerClasses() {
        return [
          'trigger-icon',
          this.collapsed ? 'rotate' : ''
        ]
      }
    },
    methods: {
      handleSiderClick() {
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
