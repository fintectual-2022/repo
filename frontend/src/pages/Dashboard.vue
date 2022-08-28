<template lang="pug">
.row
  .column
    GraphSettings
  .column
    #graph(ref="canvas")
</template>

<script setup>
import {onMounted, onUnmounted} from "vue";
import ForceGraph from 'force-graph'
import {useMainStore} from "../stores/tenders";
import GraphSettings from "../components/GraphSettings.vue";

// const store = await useMainStore()
// let Graph = new ForceGraph()
// onMounted(() => {
//   const canvas = document.getElementById('graph')
//
//   // TODO: add some way to dispose of this when the element is unmounted.
//   if (canvas) {
//     Graph(canvas)
//         .linkDirectionalParticles(2)
//         .warmupTicks(10)
//         .width(canvas.clientWidth)
//         .centerAt(0, 0)
//         .graphData(store.calculateGraph)
//   }
// })
// onUnmounted(() => {
//   Graph = null
// })
</script>

<style lang="stylus" scoped>
#graph
  border 1px solid red
  overflow hidden
  width 100%
</style>