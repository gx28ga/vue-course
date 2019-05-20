<template>
  <div>
    <List :list="list">

      <template v-slot:head="slotProps">
        <CountUp :end-val="slotProps.number"></CountUp>
      </template>
    </List>
    <div>

    </div>
  </div>
</template>

<script>
import List from '_c/List'
import CountUp from '_c/count-up'

export default {
  data () {
    return {
      list: [{ number: 100 }, { number: 200 }]
    }
  },
  components: {
    List,
    CountUp
  },
  methods: {
    renderFunc (h, name) {
      return <CountUp endVal={name} onAnimationend={this.handleClick} />
    },
    handleClick () {
      alert('changed')
    }
  }
}
</script>

<style>
</style>
