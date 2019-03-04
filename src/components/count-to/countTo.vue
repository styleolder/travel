<template>
  <div>
    <slot name="count-left"></slot><span ref="countNumber" :id="countToId"></span><slot name="count-right"></slot>
  </div>
</template>
<script>
import CountUp from 'countup'
export default {
  name: 'CountTo',
  data () {
    return {
      counter: {}
    }
  },
  props: {
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      require: true,
      type: Number
    },
    decimals: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 1
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  methods: {
    getCount () {
      return this.$refs.countNumber.innerText
    }
  },
  computed: {
    countToId () {
      return `countup_$(this._uid)`
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.counter = new CountUp(this.countToId, this.startVal, this.endVal, this.decimals, this.duration)
    })
    setTimeout(() => {
      this.counter.start()
    }, this.delay)
  },
  watch: {
    endVal (newVal, oldVal) {
      this.counter.update(newVal)
    }
  }
}
</script>
