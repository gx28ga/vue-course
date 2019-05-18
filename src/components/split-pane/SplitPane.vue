<template>
  <div
    class="split-pane-wrapper"
    ref="outer"
  >
    <div
      class="pane pane-left"
      :style="{width:offsetLeftPercent}"
    ></div>
    <div
      class="pane-trigger-con"
      :style="{left:triggerLeft,width:`${triggerWidth}px`}"
      @mousedown="handleMousedown "
    ></div>
    <div
      class="pane pane-right"
      :style="{left:offsetLeftPercent}"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'SplitPane',
  props: {
    value: {
      type: Number,
      default: 0.5
    },
    triggerWidth: {
      type: Number,
      default: 8
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    }
  },
  data () {
    return {
      movable: false,
      offsetInit: 0
    }
  },
  computed: {
    offsetLeft () {
      return this.value
    },
    offsetLeftPercent () {
      return `${this.offsetLeft * 100}%`
    },
    triggerLeft () {
      return `calc(${this.offsetLeft * 100}% - ${this.triggerWidth / 2}px)`
    }
  },
  methods: {
    handleMousedown (event) {
      document.addEventListener('mousemove', this.handleMousemove)
      document.addEventListener('mouseup', this.handleMouseup)
      this.offsetInit =
        event.pageX - event.srcElement.getBoundingClientRect().left

      this.movable = true
    },
    handleMousemove (event) {
      if (!this.movable) return
      const outerRect = this.$refs.outer.getBoundingClientRect()
      let offsetPercent =
        (event.pageX -
          outerRect.left -
          this.offsetInit +
          this.triggerWidth / 2) /
        outerRect.width
      if (offsetPercent < this.min) offsetPercent = this.min
      else if (offsetPercent > this.max) offsetPercent = this.max
      this.$emit('update:value', offsetPercent)
    },
    handleMouseup (event) {
      document.removeEventListener('mousemove', this.handleMousemove)
      document.removeEventListener('mouseup', this.handleMouseup)
      this.movable = false
    }
  }
}
</script>

<style lang="scss" scoped>
.split-pane-wrapper {
  height: 100%;
  position: relative;
  .pane {
    position: absolute;
    top: 0;
    height: 100%;
    &-left {
      background-color: palevioletred;
    }
    &-right {
      bottom: 0;
      right: 0;
      background: paleturquoise;
    }
    &-trigger-con {
      height: 100%;
      background-color: #ff0000;
      position: absolute;
      top: 0;
      z-index: 10;
      user-select: none;
    }
  }
}
</style>
