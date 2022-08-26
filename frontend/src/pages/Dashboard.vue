<template lang="pug">
#graph(ref="canvas")
</template>

<script setup>
import {onMounted, ref} from "vue";
import ForceGraph from 'force-graph'
import {useMainStore} from "../store";
const store = await useMainStore()
onMounted(()=>{
  const canvas = document.getElementById('graph')

  // TODO: add some way to dispose of this when the element is unmounted.
  if(canvas) {
    const Graph = new ForceGraph()(canvas)
      .linkDirectionalParticles(2)
      .warmupTicks(10)
      .width(canvas.clientWidth)
      .centerAt( 0,0)
      .graphData(store.calculateGraph)
  }
})
</script>

<style lang="stylus" scoped>
#graph
  border 1px solid red
  overflow hidden
  width 100%
</style>