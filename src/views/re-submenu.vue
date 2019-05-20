<template>
  <a-submenu>
    <template v-slot:title>
      <div>{{parent.title}}</div>
    </template>
    <template v-for="(item, i ) in parent.children">
      <a-menu-item
        v-if="!item.children"
        :key="`menu_item_${index}_${i}`"
      >{{item.title}}</a-menu-item>
      <re-submenu
        v-else
        :key="`menu_item_${i}`"
        :parent="item "
      ></re-submenu>
    </template>
  </a-submenu>
</template>

<script>
import menuComponents from '_c/menu'
const { AMenuItem, ASubMenu } = menuComponents
export default {
  name: 'ReSubmenu',
  components: {
    AMenuItem,
    ASubMenu
  },
  props: {
    parent: {
      type: Object,
      default: () => ({})
    },
    index: Number
  }
}
</script>

<style>
</style>
