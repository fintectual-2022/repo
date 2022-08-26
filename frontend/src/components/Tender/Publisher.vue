<template>

</template>

<script lang="ts" setup>
import type { Publication,  } from "../../schema";
interface Props {
  template: Tender;
}
const props = withDefaults(defineProps<Props>(),{})
const tender = props.template
</script>

<style scoped>

</style>