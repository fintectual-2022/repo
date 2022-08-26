<template lang="pug">
.container
  .row
    NavBar
  .row
    Suspense
      router-view
</template>
<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
