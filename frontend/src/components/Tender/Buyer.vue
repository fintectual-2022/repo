<template lang="pug">
pre
  | {{ buyer }}
</template>

<script lang="ts" setup>
import type { Buyer } from "../../schema";
interface Props {
  template: Buyer;
}
const props = withDefaults(defineProps<Props>(),{})
const buyer = props.template
</script>

<style scoped>

</style>