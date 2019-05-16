<template>
    <div class="home">
        <img
            alt="Vue logo"
            src="../assets/logo.png"
        >
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <button @click="go('back')">返回上一页</button>
        <button @click="go('push')">去parent页面</button>
        <button @click="go('replace')">替换</button>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log(vm)
    })
  },
  // beforeRouteLeave(to, from, next) {
  //     let leave = confirm("确认离开？");
  //     if (leave) next();
  // },
  methods: {
    go (type) {
      switch (type) {
        case 'back':
          this.$router.back()
          break
        case 'push':
          this.$router.push({
            name: 'parent',
            params: {
              name: 'rand'
            }
          })
          break
        case 'replace':
          this.$router.replace({
            name: 'parent'
          })
      }
    }
  }
}
</script>
