<template>

</template>

<script>
  export default {
    data () {
      return { }
    },
    mounted () {
      this.$router.replace(this.$store.state.currentTag)
    }
  }
</script>

<style lang="scss">

</style>
