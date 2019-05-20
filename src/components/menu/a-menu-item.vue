<template>
  <li class="a-menu-item">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'AMenuItem'
}
</script>

<style lang="scss">
.a-menu-item {
  background: #5a5c68;
}
</style>
