<template lang="pug">
// sidebar in dashboard
aside
  .column
    input(type="checkbox" id='tags' :v-model="isChecked" @change="updateGraph")
    label(for='tags') Show graph
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useMainStore} from "../stores/tenders";
import type {Tender} from "../opentenderSchema";

const store = await useMainStore()
const isChecked = ref(false)

const likedTenders = store

// async function updateGraph() {
//   if (isChecked) {
//     // load relevant data
//     const tenders = store.hydrateIds([...store.likedTenders.value])
//     // new set of all tags in hydrated tenders
//     const tags = new Set()
//     const withTags = tenders.find((tender: Tender) => {
//       return tender.indicators
//     })
//     console.log(withTags)
//
//
//     const TagGraph = {
//       nodes: []
//     }
//   }
// }

</script>

<style lang="stylus" scoped>
aside
  width 200px
  background #747bff
  height 100%

input
  float left
  display flex
  width 2rem;
  padding .5rem
  height 2rem;
  border 1px solid #9b4dca
  background #1a1a1a

  &:checked
    background #9b4dca
</style>