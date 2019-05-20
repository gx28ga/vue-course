<template>
  <div @click="onClick">
    <button>btn</button>

  </div>
</template>

<script>
export default {
  methods: {
    onClick () {
      this.$emit('change')
    }
  }
}
</script>

<style>
</style>
