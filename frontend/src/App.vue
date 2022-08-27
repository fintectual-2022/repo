<template lang="pug">
Suspense
  template(v-slot:fallback)
    Loading
  router-view
</template>
<script setup>
import Loading from './components/Loading.vue'
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
