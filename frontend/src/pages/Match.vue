<template lang="pug">
h1 {{ store.tenders.length }}
</template>

<script setup>
import {useMainStore} from "../store";
import {onMounted} from "vue";
const store = useMainStore()

onMounted(()=> {
  store.fetchData()
})
</script>

<style scoped>

</style>