<template>
  <div v-touch:swipe="swipeHandler">Swipe me!</div>
</template>

<script lang="ts" setup>
type SwipeDirection = "left" | "right" | "top" | "bottom"
function swipeHandler(dir: SwipeDirection) {
  if(dir === 'left')
    console.log('liked tender')
  if(dir === 'right')
    console.log('disliked tender')
}
</script>

<style lang="stylus" scoped>
div
  background red
</style>