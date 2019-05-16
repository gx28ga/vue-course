<template>
  <div>
    <h1>AShow</h1>
    <div>{{content}}</div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style>
</style>
