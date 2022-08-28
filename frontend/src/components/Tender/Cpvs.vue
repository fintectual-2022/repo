<template lang="pug">
.codes(v-for="code of codes" :key="code.code")
  p CPV Code:
    span(:class="code.isMain? 'bold' : ''") {{ code.code }} {{ code.name? '- '+ code.name : '' }}
</template>

<script lang="ts" setup>
import type { CPV1 } from "../../opentenderSchema";
interface Props {
  template: CPV1[];
}
const props = withDefaults(defineProps<Props>(),{})
const codes = props.template
</script>

<style lang="stylus" scoped>
.bold
  font-weight: bold
</style>