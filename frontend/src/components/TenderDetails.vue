<script lang="ts" setup>
import type {Tender, Bid} from "../opentenderSchema";
interface Props {
  template: Tender;
}
const props = withDefaults(defineProps<Props>(),{})
const tender = props.template
// check if the tender has a winning bid
let winningBid: Ref<Bid | null> = ref(null)
const hasWinningBid = tender?.lots && tender.lots.some(lot => {
  return lot?.bids && lot.bids.some(bid => {
    winningBid.value=bid
    return bid.isWinning
  })
})
import { ref} from "vue";
import type { Ref } from 'vue'
import Buyer from "./Tender/Buyer.vue";
</script>

<template lang="pug">
.container(v-if="tender" :class="{'has-winning-bid':  !!hasWinningBid}")
  .row
    h1 Tender details
  .row
    .column
      h2 {{ tender.title }}
    .column
      p {{ tender.description }}
  .row
    .column
      p {{ tender.buyers }}
  //.row
  //  p {{ !!tender.bidDeadline ? format(new Date(tender.bidDeadline), 'dd/MM/yyyy') : 'No bidDeadline' }}
  //.row(v-if="!!winningBid")
  //  pre {{ winningBid }}
  //.row
  //  pre {{ tender }}
</template>

<style lang="stylus" scoped>
.container
  margin 1em
.has-winning-bid {
  border 1px solid #94B0DA
  background-color: #F96E46
}

</style>