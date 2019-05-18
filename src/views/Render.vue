<template>
  <List
    :list="list"
    :render="renderFunc"
  ></List>
</template>

<script>
import List from '_c/List'

export default {
  data () {
    return {
      list: [{ name: 'aaa' }, { name: 'bbb' }]
    }
  },
  components: {
    List
  },
  methods: {
    renderFunc (h, name) {
      return h(
        'i',
        {
          style: {
            color: 'fuchsia'
          }
        },
        name
      )
    }
  }
}
</script>

<style>
</style>
