<template lang="pug">
.page
  header
    router-link( to="/")
      button Home
    router-link( to="/dashboard")
      button Dashboard
    .rangeSelection
      p You are in:
        b Prague
      input(type="range" min="5" max="400" v-model="range" id="range")
      label(for="range")
        | {{ range >= 400 ? range + '+' : range }} km
  .matchTenders
    header
      button(@click="dislike") Dislike ({{ dislikedIds.size }})
    Transition(name="fade")
      main(:class="!!isDragged ? dir === 'left' ? 'left' : dir === 'right' ? 'right' : '' : ''" v-if="tender")
        TenderDetails(:template="tender" :key="tender.id")
    footer
      button(@click="like") Like ({{ likedIds.size }})
</template>

<script lang="ts" setup>
import {useMainStore} from "../stores/tenders";
import {ref} from "vue";
import TenderDetails from "../components/TenderDetails.vue";
import {storeToRefs} from "pinia";
import {withinDistance} from "../util/distance";
const range = ref(100)
const store = await useMainStore()
const {tenders, likedIds, dislikedIds} = storeToRefs(store)

const isDragged = ref(false)
type DragDirection = "left" | "right"
const dir = ref<DragDirection>('left')

function newTender() {
  // filtered pool of tenders
  const selectable = tenders.value.find(tender =>
      // @ts-ignore
      !store.likedIds.has(tender.id) &&
      // @ts-ignore
      !store.dislikedIds.has(tender.id) &&
      !!tender.buyers && withinDistance({
        city: String(`${tender.buyers[0].address!.city}`),
        street: String(`${tender.buyers[0].address!.street}`),
        postcode: String(`${tender.buyers[0].address!.postcode}`),
        country: String(`${tender.buyers[0].address!.country}`),
      }, range.value))
  // select a random tender from the list
  return selectable ? selectable : tenders.value[Math.floor(Math.random() * tenders.value.length)]
}

// tender
const tender = ref(newTender())

function dislike() {
  store.dislikeTender(tender!.value!.id)
  // update the tender

  //animate the dislike
  isDragged.value = true
  dir.value = 'left'
  setTimeout(() => {
    isDragged.value = false
    tender.value = newTender()

  }, 300)

}

function like() {
  store.likeTender(tender!.value!.id)
  // update the tender

  //animate the like
  isDragged.value = true
  dir.value = 'right'
  setTimeout(() => {
    isDragged.value = false
    tender.value = newTender()

  }, 300)
}

</script>

<style lang="stylus" scoped>
@import "../assets/vars.styl"
.matchTenders
  display flex
  width 100%
  flex-grow 1

  header, footer
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
    transition all 300ms ease-in-out

    &.right
      transform: rotate(15deg) translateX(10vw) translateY(50vh);
      opacity 0

    &.left
      transform: rotate(-15deg) translateX(-10vw) translateY(50vh);
      opacity 0

.rangeSelection
  display flex
  align-items center
  justify-content center
  p
    margin-bottom 1rem
    float left
    b
      color text-primary
      font-size 1.5rem
  input
    flex-grow 1
    float left
    height 1.5rem
    border 1px solid secondary-bg
    border-radius 1rem
    margin-bottom 1rem
  p,label
    display flex
    justify-content center
    min-width 150px
</style>