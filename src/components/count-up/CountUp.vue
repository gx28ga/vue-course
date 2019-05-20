<template>
  <div>
    <slot name="start"></slot>
    <span
      ref="number"
      :class="styles"
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
    },
    styles () {
      return ['count-up', this.className]
    }
  },
  methods: {
    getCount () {
      return this.$refs.number.innerText
    },
    endEventEmitter () {
      setTimeout(() => {
        this.$nextTick(() => {
          this.$emit('animationend', parseFloat(this.getCount()))
        })
      }, this.duration * 1000 + 5)
    }
  },

  watch: {
    endVal (newVal, oldVal) {
      this.countUp.update(newVal)
      this.endEventEmitter()
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
        this.endEventEmitter()
      }, this.delay)
    })
  }
}
</script>

<style>
</style>
