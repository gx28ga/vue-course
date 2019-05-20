<template>
  <ul>
    <li
      v-for="(item, index) in list"
      :key="`item_${index}`"
    >
      <!-- <span v-if="!render">{{ item.name }}</span> -->
      <slot
        name="head"
        :number="item.number"
      ></slot>
      <!-- <render-dom
        v-else
        :render-func="render"
        :name="item.name"
        class="large"
      ></render-dom> -->
    </li>
  </ul>
</template>

<script>
// import RenderDom from '_c/render-dom'
export default {
  name: 'List',

  props: {
    list: {
      type: Array,
      default: () => []
    },
    render: {
      type: Function,
      default: () => {}
    }
  },
  components: {
    // RenderDom
  }
}
</script>

<style>
.large {
  font-size: 28px;
}
</style>
