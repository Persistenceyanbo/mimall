<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      res: {}
    }
  }
}
</script>
<style lang="scss">
  @import './assets/scss/config.scss';
  @import './assets/scss/reset.scss';
</style>
