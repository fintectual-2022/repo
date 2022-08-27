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
@import "../assets/vars.styl"
.matchTenders
  display flex
  width 100%
  flex-grow 1
  header,footer
    display flex
    flex-direction column
    justify-content end
    min-width 150px
    button
      width 100%
  main
    border 1px solid secondary-bg
    display flex
    width 100%
</style>