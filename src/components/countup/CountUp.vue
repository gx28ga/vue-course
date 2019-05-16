<template>
  <div>
    <slot name="start"></slot>
    <span
      ref="number"
      :class="className"
      :id="eleId"
    >count</span>
    <slot name="end"></slot>
  </div>
</template>

<script>
import { CountUp } from 'countup.js'
export default {
  name: 'CountUp',
  data () {
    return {
      countUp: {}
    }
  },
  props: {
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    duration: {
      type: Number,
      default: 1
    },
    decimalPlaces: {
      type: Number,
      default: 0
    },
    useEasing: {
      type: Boolean,
      default: true
    },
    useGrouping: {
      type: Boolean,
      default: true
    },
    delay: {
      type: Number,
      default: 0
    },
    decimal: {
      type: String,
      default: '.'
    },
    separator: {
      type: String,
      default: ','
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    eleId () {
      return `count_up_${this._uid}`
    }
  },
  methods: {
    getCount () {
      console.log(this.$refs.number.innerText)
    }
  },

  watch: {
    endVal (newVal, oldVal) {
      this.countUp.update(newVal)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.countUp = new CountUp(this.eleId, this.endVal, {
        startVal: this.startVal,
        endVal: this.endVal,
        duration: this.duration,
        decimalPlaces: this.decimalPlaces,
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        decimal: this.decimal,
        separator: this.separator
      })
      setTimeout(() => {
        this.countUp.start()
      }, this.delay)
    })
  }
}
</script>

<style>
</style>
