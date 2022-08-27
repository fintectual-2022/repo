<template lang="pug">
.matchTenders
  header
    button(@click="store.likeTender(tender.id)") Dislike
  main
    TenderDetails(:template="tender")
  footer
    button(@click="store.likeTender(tender.id)") Like
</template>

<script setup>
import {useMainStore} from "../store";
import {onMounted} from "vue";
import TenderDetails from "../components/TenderDetails.vue";
const store = await useMainStore()
const tender = store.getRandomTender
console.log(tender)
// onMounted(()=> {
//   store.fetchData()
// })
</script>

<style lang="stylus" scoped>
.matchTenders
  display flex
  width 100%
  header,footer
    button
      width 100%
    flex-grow 1
</style>