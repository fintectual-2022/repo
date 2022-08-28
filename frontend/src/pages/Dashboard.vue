<template lang="pug">
.row
  .column
    GraphSettings
  .column
    #graph(ref="canvas")
</template>

<script lang="ts" setup>
import {onMounted, onUnmounted} from "vue";
import ForceGraph from 'force-graph'
import {useMainStore} from "../stores/tenders";
import GraphSettings from "../components/GraphSettings.vue";
import {storeToRefs} from "pinia";
import type {GraphSchema} from "../schema";
const store = await useMainStore()
const {tenders, likedIds, dislikedIds} = storeToRefs(store)
import { v4 as uuidv4 } from 'uuid';
import type {Buyer4} from "../opentenderSchema";

// data to nodes and links
const liked = [...likedIds.value].map((id: string) => {
  // hydrate from data
  return tenders.value.find((tender: { id: string; }) => id === tender.id)
})
const disliked = [...dislikedIds.value].map((id: string) => {
  // hydrate from data
  return tenders.value.find((tender: { id: string; }) => id === tender.id)
})


// reduce the list of tenders to a set of their buyers
const buyers = new Set<Buyer4>()
for(const tender of [...liked, ...disliked]) {
  if(!!tender && tender.buyers && tender.buyers.length > 0) {
    for(const buyer of tender.buyers) {
      buyers.add(buyer)
    }
  }
}

function calculateGraph(): GraphSchema {
  const nodes: { id: string, name?: string, value?: any, color?:string }[] = [...liked, ...disliked]
  .map(node => {
    return {
      id: node!.id,
      name: node!.title,
      value: node
    }
  });

  nodes.push({
    id: 'pog',
    color: '#3772FF',
    name: `${likedIds.value.size} Liked Tenders`
  })
  nodes.push({
    id: 'poo',
    color: '#DF2935',
    name: `${dislikedIds.value.size} Disliked Tenders`
  })
  nodes.push({
    id: '0',
    color: '#FDCA40',
    name: `Tenders`
  })
  // create a connection from pog to each node
  const links = []
  for (const node of nodes) {
    if (node.id !== 'pog' && node.id !== 'poo' && node.id !== '0') // skip self-refference
      links.push({
        source: node.id,
        target: likedIds.value.has(node.id) ? 'pog' : 'poo'
      })
  }
  links.push({
    source: '0',
    target: 'pog'
  })
  links.push({
    source: '0',
    target: 'poo'
  })





  nodes.push({
    id: 'buyer',
    color: '#FDCA40',
    name: `Buyers`
  })
  console.log(buyers)
  // turn buyers into nodes
  for(const buyer of buyers) {
    const data = {
      id: uuidv4(),
      name: buyer.contactName,
      color: '#FFFF0F',
      value: buyer
    }
    nodes.push(data)
    // link the buyer master node to each buyer
    links.push({
      source: 'buyer',
      target: data.id
    })
    // link each buyer to their matching tender
    for(const tender of [...liked, ...disliked]) {
      if(tender.buyers && tender.buyers.length > 0) {
        for(const b of tender.buyers) {
          if(b === buyer) {
            links.push({
              source: data.id,
              target: tender.id
            })
          }
        }
      }
    }


  }





  return {
    nodes,
    links
  }
}
// secondary-bg = #B7B6C1 // levander gray
// text-primary = #F1F2F6
// color1 = #3772FF // blue crayola
// color2 = #DF2935 // rose madder
// color3 = #FDCA40 // sunglow
let Graph = ForceGraph()
onMounted(() => {
  const canvas = document.getElementById('graph')

  // TODO: add some way to dispose of this when the element is unmounted.
  if (canvas) {
    Graph(canvas)
        .linkDirectionalParticles(2)
        .warmupTicks(10)
        .nodeColor((node) => node.color ? node.color : '#F1F2F6')
        .linkColor(() => '#B7B6C1')
        .width(canvas.clientWidth)
        .centerAt(0, 0)
        .graphData(calculateGraph())
  }
})
</script>

<style lang="stylus" scoped>
#graph
  border 1px solid red
  overflow hidden
  width 100%
</style>