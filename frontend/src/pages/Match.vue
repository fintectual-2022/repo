<template lang="pug">
.tenderList(v-if="store.tenders.length > 0")
  .tender(v-for="tender in store.tenders" :key="tender.id")
    TenderDetails(:template="tender")
</template>

<script setup>
import {useMainStore} from "../store";
import {onMounted} from "vue";
import TenderDetails from "../components/TenderDetails.vue";
const store = useMainStore()

onMounted(()=> {
  store.fetchData()
})
</script>

<style scoped>

</style>