<template lang="pug">
.documents(v-for="doc of documents" :key="doc")
  p {{ doc }}
</template>

<script lang="ts" setup>
import type { TenderDocument } from "../../opentenderSchema";
interface Props {
  template:  TenderDocument[];
}
const props = withDefaults(defineProps<Props>(),{})
const documents = props.template
</script>

<style lang="stylus" scoped>

</style>