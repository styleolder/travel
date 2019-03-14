<template>
  <div>
    <Form ref="formGroup" v-if="Object.keys(valueList).length" :label-width="labelWidth" :model="valueList"
          :rules="rules">
      <form-item
        v-for="(item, index) in list"
        :key="`${_uid}_${index}`"
        :label="item.label"
        label-postion="left"
        :prop="item.name"
        :error="errList[item.name]"
        @click.native="hadlerFocus(item.name)"
      >
        <component :is="item.type" :range="item.range" v-model="valueList[item.name]" :type="item.style">
          {{ valueList[item.name] }}
          <template v-if="item.children">
            <component
              v-for="(child,i) in item.children.list"
              :is="item.children.type"
              :key="`${_uid}_${i}`"
              :value="child.value"
              :label="child.label"
            >
              {{ child.title}}
            </component>
          </template>
        </component>
      </form-item>
      <form-item>
        <i-button @click="hadlerSubmit" type="primary">提交</i-button>
        <i-button @click="hadlerReset">重置</i-button>
      </form-item>
    </Form>
  </div>
</template>

<script>
  import clonedeep from 'clonedeep'
  import {formgroup} from '@/api/app'

  export default {
    name: 'FormGroup',
    data() {
      return {
        initValue: {},
        rules: {},
        valueList: {},
        errList: {}
      }
    },
    props: {
      list: {
        type: Array,
        default: () => []
      },
      labelWidth: {
        type: Number,
        default: 100
      }
    },
    watch: {
      list() {
        this.setInitValue()
      }
    },
    methods: {
      setInitValue() {
        let initValue = {}
        let rules = {}
        let valueList = {}
        let errList = {}
        this.list.forEach(item => {
          rules[item.name] = item.rule
          valueList[item.name] = item.value
          initValue[item.name] = item.value
          errList[item.name] = ''
        })
        this.rules = rules
        this.valueList = valueList
        this.initValue = initValue
        this.errList = errList
      },
      hadlerReset() {
        this.valueList = clonedeep(this.initValue)
      },
      hadlerSubmit() {
        this.$refs.formGroup.validate(valid => {
          if (valid) {
            formgroup(this.valueList).then(res => {
              this.$Message.config({
                top: 500,
                duration: 3
              })
              this.$Message.success('通过验证')
            }).catch(err => {
              console.log(err)
              for (let key in err) {
                this.errList[key] = err[key]
              }
            })
          }
        })
      },
      hadlerFocus(name) {
        this.errList[name] = ''
      }
    },
    mounted() {
      this.setInitValue()
    }
  }
</script>
