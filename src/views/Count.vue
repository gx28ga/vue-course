<template>
  <div>
    <div>
      <CountUp
        ref="countUp"
        :end-val="endVal"
      >
        <span slot="start">总价：</span>
        <span slot="end">美元</span>
      </CountUp>
      <button @click="updateCount">updateCount</button>
    </div>
  </div>
</template>

<script>
import CountUp from '_c/countup'
export default {
  data () {
    return {
      endVal: 100
    }
  },
  components: {
    CountUp
  },
  methods: {
    getCount () {
      this.$nextTick(() => {
        this.$refs.countUp.getCount()
      })
    },
    updateCount () {
      this.endVal += 100
    }
  }
}
</script>

<style>
</style>
