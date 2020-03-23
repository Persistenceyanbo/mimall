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
<style>
  @import './assets/scss/reset.scss';
  @import './assets/scss/base.scss';
</style>
