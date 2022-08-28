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
// data to nodes and links

function calculateGraph(): GraphSchema {
  const masterNode = {
    id: 'pog',
    name: `${likedIds.value.size} Liked Tenders`
  }
  const nodes: { id: string, name?: string, value?: any }[] = [...likedIds.value].map((id: string) => {
    // hydrate from data
    return tenders.value.find((tender: { id: string; }) => id === tender.id)
  }).map(node => {
    return {
      id: node!.id,
      name: node!.title,
      value: node
    }
  });

  nodes.push(masterNode)
  // create a connection from pog to each node

  const links = []
  for (const node of nodes) {
    if (node.id !== 'pog') // skip self-refference
      links.push({
        source: node.id,
        target: 'pog'
      })
  }

  return {
    nodes,
    links
  }
}

let Graph = ForceGraph()
onMounted(() => {
  const canvas = document.getElementById('graph')

  // TODO: add some way to dispose of this when the element is unmounted.
  if (canvas) {
    Graph(canvas)
        .linkDirectionalParticles(2)
        .warmupTicks(10)
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