<template lang='pug'>
div
  navbar
  nuxt
  footer-content
</template>

<script>
import nav from '~/components/Nav.vue'
import footer from '~/components/Footer.vue'
export default {
  components: {
    'navbar': nav,
    'footer-content': footer
  }
}
</script>