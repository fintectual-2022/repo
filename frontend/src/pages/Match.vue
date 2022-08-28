<template lang="pug">
.matchTenders
  header
    button(@click="dislike") Dislike
  main(:class="!!isDragged ? dir === 'left' ? 'left' : dir === 'right' ? 'right' : '' : ''" v-if="!!tender")
    TenderDetails(:template="tender" :key="tender.id")
  footer
    button(@click="like") Like
</template>

<script lang="ts" setup>
import {useMainStore} from "../stores/tenders";
import {onMounted, reactive, computed, ref, toRefs} from "vue";
import TenderDetails from "../components/TenderDetails.vue";
import type {Tender} from "../opentenderSchema";
import {storeToRefs} from "pinia";
const store = await useMainStore()
const { tenders } = storeToRefs(store)

const isDragged = ref(false)
type DragDirection = "left" | "right"
const dir = ref<DragDirection>('left')

function newTender() {
  const selectable = tenders.value.find(tender => !store.likedIds.has(tender.id) && !store.dislikedIds.has(tender.id))
  // select a random tender from the list
  return selectable ? selectable : tenders.value[Math.floor(Math.random() * tenders.value.length)]
}
// tender
const tender = ref(newTender())

function dislike() {
  store.dislikeTender(tender!.value!.id)
  // update the tender
  tender.value = newTender()

  //animate the dislike
  isDragged.value = true
  dir.value = 'left'
  setTimeout(() => {
    isDragged.value = false
  }, 300)

}
function like() {
  store.likeTender(tender!.value!.id)
  // update the tender
  tender.value = newTender()

  //animate the like
  isDragged.value = true
  dir.value = 'right'
  setTimeout(() => {
    isDragged.value = false
  }, 300)
}

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
    //justify-content end
    min-width 150px
    button
      width 100%
  main
    border 1px solid secondary-bg
    display flex
    width 100%
    transition all 1000ms ease-in-out
    &.left
      transform: rotate(15eg);
      transform: translateX(-10vmin)
    &.right
      transform: rotate(-15deg);
      transform: translateX(10vmin)

</style>