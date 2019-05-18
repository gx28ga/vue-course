<template>
  <div>
    <!-- <div>
      <CountUp
        @animation-end="handleEnd"
        ref="countUp"
        :end-val="endVal"
        class="c"
      >
        <span slot="start">总价：</span>
        <span slot="end">美元</span>
      </CountUp>
      <button @click="updateCount">updateCount</button>
      <button @click="getCount">getCount</button>
    </div> -->
    <div style="width:400px;height:400px;background:papayawhip">
      <SplitPane :value.sync="offset"></SplitPane>
    </div>
  </div>
</template>

<script>
// import CountUp from '_c/count-up'
import SplitPane from '_c/split-pane'
export default {
  data () {
    return {
      endVal: 100,
      offset: 0.8
    }
  },
  components: {
    // CountUp,
    SplitPane
  },
  methods: {
    getCount () {
      this.$nextTick(() => {
        this.$refs.countUp.getCount()
      })
    },
    updateCount () {
      this.endVal += Math.random() * 100
    },
    handleEnd (endVal) {
      console.log(endVal)
    }
  }
}
</script>

<style scoped>
.c {
  font-size: 28px;
}
</style>
