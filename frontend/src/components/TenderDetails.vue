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
import Indicators from "./Tender/Indicators.vue";
</script>

<template lang="pug">
.tender(v-if="tender" :class="{'has-winning-bid':  !!hasWinningBid}")
  .row
    h2 {{ tender.title }}
  .row
    p {{ tender.description }}
  .row
    p {{ tender?.buyers[0].address.city }}
  section(v-if="!!tender.buyers && tender.buyers.length >= 0")
    Buyer(:template="tender.buyers")

  section(v-if="!!tender.indicators && tender.indicators.length >= 0")
    Indicators(:template="tender.indicators")
  //.row
  //  p {{ !!tender.bidDeadline ? format(new Date(tender.bidDeadline), 'dd/MM/yyyy') : 'No bidDeadline' }}
  //.row(v-if="!!winningBid")
  //  pre {{ winningBid }}
  //.row
  //  pre {{ tender }}
</template>

<style lang="stylus" scoped>
.tender
  width 100%
  padding 1em
</style>