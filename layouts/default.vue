<template lang='pug'>
div
  fontloader
  navbar
  nuxt
  footer-content
</template>

<script>
import nav from '~/components/Nav.vue'
import footer from '~/components/Footer.vue'
import fontloader from '~/components/FontLoader.vue'
export default {
  components: {
    'navbar': nav,
    'footer-content': footer,
    'fontloader': fontloader
  }
}
</script>