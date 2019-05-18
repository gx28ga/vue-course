<template>
  <div>
    <h1>Store</h1>
    <div>{{ appName + appVersion }}</div>

    <button @click="setAppVersion(version)">修改</button>
    <button @click="updateAppName">修改name</button>
    <div>
    </div>
    <input
      type="text"
      v-model="testValue"
    >
    {{testValue}}
    <div>{{inputValue}}</div>
    <div>
      <AShow :content="inputValue"></AShow>
    </div>
    <img
      :src="src"
      alt=""
    >
  </div>
</template>

<script>
import AShow from '_c/AShow'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { getUserInfo } from '@/api/user'

export default {
  name: 'store',
  data () {
    return {
      inputValue: '',
      myJson: { prefix: 'bilibili' },
      version: 3.0,
      src: ''
    }
  },
  computed: {
    ...mapState({
      appName: state => state.appName,
      appVersion: state => state.appVersion
    }),
    ...mapGetters(['appNameWithVersion']),
    testValue: {
      get () {
        return this.$store.state.testValue
      },
      set (val) {
        this.setTestValue(val)
      }
    }
  },
  components: {
    AShow
  },
  methods: {
    ...mapMutations({
      setAppName: 'setAppName',
      setAppVersion: 'setAppVersion',
      setTestValue: 'setTestValue'
    }),
    ...mapActions(['updateAppName']),
    handleInput (val) {
      this.inputValue = val
    },
    changeValue (e) {
      console.log(e.target.value)
    }
  },
  created () {
    getUserInfo({ userId: 123 }).then(res => {
      console.log(res.data)
      this.src = res.data.img
    })
  }
}
</script>

<style>
</style>
