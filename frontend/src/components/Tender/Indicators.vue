<template lang="pug">
.indicators(v-for="indicator in indicators" )
  .column
    | {{indicator.type}}
  .column(:class="indicator.status === 'INSUFFICIENT_DATA' ? 'color3' : indicator.status === 'UNDEFINED' ? 'color2': '' ")
    | {{indicator.status}}
  .column(:class="indicator.status === 'CALCULATED'? 'color1': '' ")
    | {{indicator.value}}
</template>

<script lang="ts" setup>
import type {Indicator} from "../../opentenderSchema";
interface Props {
  template: Indicator[];
}
const props = withDefaults(defineProps<Props>(),{})
const indicators = props.template
</script>

<style lang="stylus" scoped>
@import "../../assets/vars.styl"
.indicators
  display flex
  flex-direction row
  .column
    padding-left 1rem
.color1
  color color1
.color2
  color color2
.color3
  color color3
</style>