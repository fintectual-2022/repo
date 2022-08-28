<template lang="pug">
p Like at least {{ min }} offers to unlock Your Dashboard.
</template>

<script lang="ts" setup>
// takes a number 0 - 100
import {defineProps} from "vue";
const min = 0
const max = 100
const props = defineProps<{percentage:number}>();
</script>

<style scoped>

</style>