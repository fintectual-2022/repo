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
import { ref } from "vue";
import type { Ref } from 'vue'
import Buyer from "./Tender/Buyer.vue";
import Indicators from "./Tender/Indicators.vue";
import Cpvs from "./Tender/Cpvs.vue";
import Publications from "./Tender/Publications.vue";
import Documents from "./Tender/Documents.vue";
import { countryCodeEmoji } from 'country-code-emoji';
import LifeHash from 'lifehash-vue'
import {getDistance} from "../util/distance";
</script>

<template lang="pug">
.tender(v-if="tender" :class="{'has-winning-bid':  !!hasWinningBid}")
  h2 {{ countryCodeEmoji(tender.country) }}
  .row
    .column-10
      LifeHash(:input="tender.id")
    .column
      h2 {{ tender.title }}
  .row
    p {{ tender.description }}
  .row
    .column
      p {{ tender?.buyers[0].address.city }}
    .column
      p {{ getDistance({ city: tender.buyers[0].address.city, street: tender.buyers[0].address.street, postcode: tender.buyers[0].address.postcode, country: tender.buyers[0].address.country}) }} km away
  // Category codes
  section(v-if="!!tender.cpvs && tender.cpvs.length >= 0")
    Cpvs(:template="tender.cpvs")
  // Buyer
  section(v-if="!!tender.buyers && tender.buyers.length >= 0")
    Buyer(:template="tender.buyers")
  // Indicators
  section(v-if="!!tender.indicators && tender.indicators.length >= 0")
    Indicators(:template="tender.indicators")
  // Publications
  section(v-if="!!tender.publications && tender.publications.length >= 0")
    Publications(:template="tender.publications")
  // Documents
  section(v-if="!!tender.documents && tender.documents.length >= 0")
    Documents(:template="tender.documents")
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