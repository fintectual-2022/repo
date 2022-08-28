<template lang="pug">
.landingPage
  .foreground
    .branding
      h1 Tender
    section.cta
      header
        i match with hot tenders in your area
      main
        router-link(to="/match")
          button
            | Explore Offers
</template>

<script lang="ts" setup>

</script>

<style lang="stylus" scoped>
.background, .foreground
  height: 100%;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 0;
  left: 0;
  top: 0;
  display flex

.foreground
  z-index 1
</style>