<template lang="pug">
.tenderList(v-if="store.tenders.length > 0")
  // .slice(0,10) limits the number of items on the page
  TenderDetails(:template="tender")
  .container
    .row
      .column
        button(@click="store.likeTender(tender.id)") Like
      .column
        button(@click="store.dislikeTender(tender.id)") Dislike
    .row
      .column
        | {{ store.likedTenders }}
      .column
        | {{ store.dislikedTenders }}
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

<style scoped>

</style>