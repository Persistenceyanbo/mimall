<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage/index'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  mounted () {
    storage.setItem('abc', '123')
  }
}
</script>