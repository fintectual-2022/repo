<template lang="pug">
.matchTenders
  header
    button(@click="dislike()") Dislike
  main(:class="!!isDragged ? dir === 'left' ? 'left' : dir === 'right' ? 'right' : '' : ''" v-if="tender")
    TenderDetails(:template="tender")
  footer
    button(@click="like()") Like
</template>

<script lang="ts" setup>
import {useMainStore} from "../stores/tenders";
import {onMounted, reactive, ref, toRefs} from "vue";
import TenderDetails from "../components/TenderDetails.vue";
import type {Tender} from "../opentenderSchema";
import {storeToRefs} from "pinia";
const store = await useMainStore()
const { getRandomTender } = storeToRefs(store);

const isDragged = ref(false)
type DragDirection = "left" | "right"
const dir: DragDirection = "left"
onMounted(()=>{
  updateTender()
})


let tender = ref(getRandomTender)
function updateTender() {
  // get new random tender
  tender = getRandomTender
  console.log(tender.value)
}

function dislike() {
  store.dislikeTender(tender.value!.id)
  updateTender()
}
function like() {
  store.likeTender(tender.value!.id)
  updateTender()
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
    justify-content end
    min-width 150px
    button
      width 100%
  main
    border 1px solid secondary-bg
    display flex
    width 100%
    transition all 1000ms ease-in-out
    &.left
      transform: rotate(5deg);
      transform: translateX(-10vmin)
    &.right
      transform: rotate(-5deg);
      transform: translateX(10vmin)

</style>