<template lang="pug">
.publication(v-for="publication of publications")
  p {{ publication }}
</template>

<script lang="ts" setup>
import type { Publication } from "../../opentenderSchema";
interface Props {
  template:  Publication[];
}
const props = withDefaults(defineProps<Props>(),{})
const publications = props.template
</script>

<style lang="stylus" scoped>
.publication
  border 1px solid red
</style>