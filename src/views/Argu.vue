<template>
    <div>
        <h1>Argu</h1>
        {{name}}
    </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'boo'
    }
  }
}
</script>

<style>
</style>
