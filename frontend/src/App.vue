<template lang="pug">
Suspense
  template(v-slot:fallback)
    Loading
  router-view
</template>
<script setup>
import Loading from './components/Loading.vue'</script>

<style lang="stylus">
@import "assets/vars.styl"
#app
  background primary-bg
  color text-primary
  display flex
  min-height 100vh
  height 100%
  width 100%
</style>
