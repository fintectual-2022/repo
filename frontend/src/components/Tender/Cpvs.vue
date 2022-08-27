<template lang="pug">
.codes(v-for="code of codes")
  p {{ code }}
  b {{ code.code }}
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

</style>