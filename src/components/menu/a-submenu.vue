<template>
  <ul class="a-submenu">
    <div
      class="a-submenu-title"
      @click="handleClick"
    >
      <slot name="title"></slot>
      <div
        class="shrink-icon"
        :style="{ transform: `rotateZ(${showChild ? 0 : 180}deg)`}"
      >^</div>
    </div>
    <div
      v-show="showChild"
      class="a-submenu-child-box"
    >
      <slot></slot>
    </div>
  </ul>
</template>

<script>
export default {
  name: 'ASubMenu',
  data () {
    return {
      showChild: false
    }
  },
  methods: {
    handleClick () {
      this.showChild = !this.showChild
    }
  }
}
</script>

<style lang="scss">
.a-submenu {
  &-title {
    background: gray;
    color: #ffffff;
    position: relative;
    .shrink-icon {
      position: absolute;
      top: 4px;
      right: 10px;
    }
  }
  &-child-box {
  }
}
</style>
