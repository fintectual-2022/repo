<template lang="pug">
.buyers(v-for="buyer of buyers")
  header
    h2 {{ buyer?.buyerType }}
    h2 {{ buyer?.name }}
    h2 {{ buyer?.contactName }}
    h2 {{ buyer?.contactPoint }}
    h2 {{ buyer?.phone }}
    h2 {{ buyer?.mainActivities }}
    h2 {{ buyer?.address }}
</template>

<script lang="ts" setup>
import type { Buyer4 } from "../../opentenderSchema";
interface Props {
  template: Buyer4[];
}
const props = withDefaults(defineProps<Props>(),{})
const buyers = props.template
</script>

<style lang="stylus" scoped>

</style>