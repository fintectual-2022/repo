<template lang="pug">
// sidebar in dashboard
aside
  .column
    input(type="checkbox" :v-model="isChecked" @change="updateGraph")
  .column
  | Show Tags
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useMainStore} from "../store";
import type {Tender} from "../opentenderSchema";
const store = await useMainStore()
const isChecked = ref(false)

const likedTenders = store

async function updateGraph() {
if(isChecked){
  // load relevant data
  const tenders = store.hydrateIds([...store.likedTenders.value])
  // new set of all tags in hydrated tenders
  const tags = new Set()
  const withTags = tenders.find((tender: Tender) => {
    return tender.indicators
  })
  console.log(withTags)


  const TagGraph = {
   nodes: []
  }
}
}

</script>

<style lang="stylus" scoped>
aside
  width 200px
  background #747bff
  height 100%
input
  display flex
  width 4rem;
  height 4rem;
  border 1px solid #9b4dca
  background #1a1a1a
  &:checked
    background #9b4dca
</style>