<script lang="ts" setup>
import type {Bid, Tender} from "../opentenderSchema";
import type {Ref} from 'vue'
import {ref} from "vue";
import Buyer from "./Tender/Buyer.vue";
import Indicators from "./Tender/Indicators.vue";
import Cpvs from "./Tender/Cpvs.vue";
import Publications from "./Tender/Publications.vue";
import Documents from "./Tender/Documents.vue";
import {countryCodeEmoji} from 'country-code-emoji';
import LifeHash from 'lifehash-vue'
import {getDistance} from "../util/distance";

interface Props {
  template: Tender;
}

const props = withDefaults(defineProps<Props>(), {})
const tender = props.template
// check if the tender has a winning bid
let winningBid: Ref<Bid | null> = ref(null)
const hasWinningBid = tender?.lots && tender.lots.some(lot => {
  return lot?.bids && lot.bids.some(bid => {
    winningBid.value = bid
    return bid.isWinning
  })
})</script>

<template lang="pug">
.tender(v-if="tender" :class="{'has-winning-bid':  !!hasWinningBid}")
  h2 {{ countryCodeEmoji(tender.country) }}
  .details
    .title
      h2
        LifeHash(:input="tender.id").icon
        | {{ tender.title }}
    p {{ tender.description }}
  .distance
    .city
      p {{ tender?.buyers[0].address.city }}
    .range
      p {{ getDistance({ city: tender.buyers[0].address.city, street: tender.buyers[0].address.street, postcode: tender.buyers[0].address.postcode, country: tender.buyers[0].address.country}) }} km away
  // Some important dates
  .dates
    p {{ tender.awardDeadline }}
  .requirements(v-if="tender.personalRequirements || tender.economicRequirements || tender.technicalRequirements" )
    h2 Requirements
    .personal(v-if="tender.personalRequirements")
      | Personal requirements
      p {{ tender.personalRequirements }}
    .technical(v-if="tender.technicalRequirements")
      | Technical requirements
      p {{ tender.technicalRequirements }}
    .economic(v-if="tender.economicRequirements")
      | Economic requirements
      p {{ tender.economicRequirements }}
    .deposits(v-if="tender.deposits")
      | Deposits:
      p {{ tender.deposits }}

  // Category codes
  section(v-if="!!tender.cpvs && tender.cpvs.length >= 0")
    Cpvs(:template="tender.cpvs")
  .procedure
    | Type of procedure:
    b {{tender.procedureType}}
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
</template>

<style lang="stylus" scoped>
@import "../assets/vars.styl"
.tender
  width 100%
  padding 1em
.icon
  width .9em
  height .9em
  margin 0 .1em
.requirements
  display flex
  flex-direction column
  margin-bottom 1rem
  border 1px solid color3
  div
    font-size 1.5rem
    p
      font-size 1rem
.distance
  display flex
  flex-direction row
  justify-items center
  align-items center
  border 1px solid color1
  .city
    font-size 1.5rem
  .range
    padding-left 1rem
    font-size 1rem
</style>