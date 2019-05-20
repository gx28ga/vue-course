<template>
  <div>
    <ul class="menu-box">
      <!-- <a-menu>
        <a-menu-item>title1</a-menu-item>
        <a-menu-item>title2</a-menu-item>
      </a-menu>
      <a-sub-menu>
        <template v-slot:title>
          <div>title3</div>
        </template>
        <a-menu-item>title3-1</a-menu-item>
        <a-sub-menu>
          <template v-slot:title>
            <div>title3-2</div>
          </template>
          <a-menu-item>title3-2-1</a-menu-item>
          <a-menu-item>title3-2-2</a-menu-item>
        </a-sub-menu>
      </a-sub-menu> -->
      <a-menu>
        <template v-for="(item, index ) in list">
          <a-menu-item
            v-if="!item.children"
            :key="`menu_item_${index}`"
          >{{item.title}}</a-menu-item>
          <re-submenu
            v-else
            :key="`menu_item_${index}`"
            :parent="item"
            :index="index"
          ></re-submenu>
        </template>
      </a-menu>
    </ul>
  </div>
</template>

<script>
import menuComponents from '_c/menu'
import ReSubmenu from './re-submenu'
const { AMenu, AMenuItem, ASubMenu } = menuComponents
export default {
  data () {
    return {
      list: [
        { title: 1111 },
        { title: 2222 },
        {
          title: 3333,
          children: [
            { title: 3333 - 1 },
            {
              title: 3333 - 2,
              children: [{ title: 3333 - 2 - 1 }, { title: 3333 - 2 - 2 }]
            }
          ]
        }
      ]
    }
  },
  components: {
    AMenu,
    AMenuItem,
    ASubMenu,
    ReSubmenu
  }
}
</script>

<style lang="scss">
.menu-box {
  width: 300px;
  height: 400px;
}
</style>
