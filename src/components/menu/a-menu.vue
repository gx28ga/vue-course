<template>
  <div class="a-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AMenu'
}
</script>

<style lang="scss">
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style-type: none;
}
</style>
