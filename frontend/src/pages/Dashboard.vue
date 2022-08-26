<template lang="pug">
#graph(ref="canvas")
</template>

<script setup>
import {onMounted, ref} from "vue";
import ForceGraph from 'force-graph'
onMounted(()=>{
  const canvas = document.getElementById('graph')

  // get screen center


  if(canvas) {
    // Random tree
    const N = 300;
    const gData = {
      nodes: [...Array(N).keys()].map(i => ({id: i})),
      links: [...Array(N).keys()]
          .filter(id => id)
          .map(id => ({
            source: id,
            target: Math.round(Math.random() * (id - 1))
          }))
    };
    const Graph = new ForceGraph()(canvas)
      .linkDirectionalParticles(2)
      .warmupTicks(10)
      .width(canvas.clientWidth)
      .centerAt( 0,0)
      .graphData(gData)
  }
})
</script>

<style lang="stylus" scoped>
#graph
  border 1px solid red
  overflow hidden
  width 100%
</style>