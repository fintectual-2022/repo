<template lang="pug">
.buyers(v-for="buyer of buyers")
  header
    p {{ buyer?.buyerType }}
    p {{ buyer?.name }}
    p {{ buyer?.contactName }}
    p {{ buyer?.contactPoint }}
    p {{ buyer?.phone }}
    p {{ buyer?.address }}
    .activities
      p Activity
      p(v-for="activity of buyer?.activities")
        LifeHash(:input="activity")
        span {{ activity }}
</template>

<script lang="ts" setup>
import LifeHash from "lifehash-vue";
import type { Buyer4 } from "../../opentenderSchema";
interface Props {
  template: Buyer4[];
}
const props = withDefaults(defineProps<Props>(),{})
const buyers = props.template
</script>

<style lang="stylus" scoped>

</style>