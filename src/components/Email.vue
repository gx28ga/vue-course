<template>
  <div>
    <h1>email xxxxxx@xxx.com</h1>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
export default {
  mounted () {},
  methods: {
    handleClick () {
      this.$bus.$emit('haha', 'yes i am!')
    }
  }
}
</script>

<style>
</style>
