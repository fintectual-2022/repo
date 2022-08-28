<template lang="pug">
.landingPage.container
  .branding
    h1 Tendir
  section.cta
    main
      router-link(to="/match")
        button
          | Explore Offers
    footer
      i match with hot tenders in your area
</template>

<style lang="stylus" scoped>
.landingPage
  display flex
  flex-direction column
  width 100%
  height 100%
  min-height 100vh
  justify-content center
  .branding
    margin 3rem
  .cta
    align-self end
    display flex
    flex-direction column
    justify-content center
    align-items center
    margin 3rem
</style>