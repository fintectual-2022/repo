<template lang="pug">
button(onClick="clearData")
  | clearData
</template>

<script lang="ts" setup>
type SwipeDirection = "left" | "right" | "top" | "bottom"
function swipeHandler(dir: SwipeDirection) {
  if(dir === 'left')
    console.log('liked tender')
  if(dir === 'right')
    console.log('disliked tender')
}

import {useMainStore} from '../stores/tenders';
import {onMounted} from "vue";
const clearData = async () => {
  const store = await useMainStore()
  store.clearData()
}
</script>

<style lang="stylus" scoped>
div
  background red
</style>