<template>
  <div class="split-spne-warpper" ref="out">
    <div class="pane pane-left" :style="{ width:paneVal, paddingRight: `${triggerWidth / 2}px` }">left</div>
    <div class="pane-trigger" @mousedown="handleMousedown" :style="{ left:this.triggerLeft, width: `${this.triggerWidth}px` }"></div>
    <div class="pane pane-right" :style="{ left:paneVal, paddingLeft: `${triggerWidth / 2}px`}">right</div>
  </div>
</template>
<script>
export default {
  name: 'SplitPane',
  props: {
    value: {
      type: Number,
      default: 0.5
    }
  },
  data () {
    return {
      triggerWidth: 20,
      triggerMove: false,
      initofftset: 0,
      max: 100,
      min: 0
    }
  },
  methods: {
    handleMousedown (event) {
      document.addEventListener('mousemove', this.handleMousemove)
      document.addEventListener('mouseup', this.handleMouseup)
      this.initofftset = event.pageX - event.srcElement.getBoundingClientRect().left
      this.triggerMove = true
    },
    handleMousemove (event) {
      if (!this.triggerMove) return
      const outWidth = this.$refs.out.getBoundingClientRect()
      let offset = event.pageX - outWidth.left - this.initofftset + this.triggerWidth / 2 - outWidth.left
      this.max = this.$refs.out.getBoundingClientRect().width - this.triggerWidth / 2
      this.min = this.triggerWidth / 2
      if (offset > this.max) offset = this.max
      if (offset < this.min) offset = this.min
      let offsetWidth = offset / this.$refs.out.getBoundingClientRect().width
      console.log(offsetWidth)
      this.$emit('input', offsetWidth)
    },
    handleMouseup () {
      this.triggerMove = false
    }
  },
  computed: {
    paneVal () {
      return `${this.value * 100}%`
    },
    triggerLeft () {
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`
    }
  }
}
</script>
<style lang="stylus">
  .split-spne-warpper {
    height 100%
    width 100%
    position relative
    .pane {
      position absolute
      top 0
      height 100%
      &-left{
        background #cacaca
      }
      &-right{
        right 0
        background #00bcd4
      }
    }
    .pane-trigger {
      position absolute
      top 0
      height 100%
      background #ffb436
      z-index 99
      user-select none
      cursor w-resize
    }
  }
</style>
