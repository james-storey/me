<template lang="pug">
.tile.is-ancestor
  .tile.is-vertical.is-8
    .tile
      .tile.is-vertical
        .tile.is-parent
          .tile.is-child.box
            article
              .content(v-html="bio")
        .tile.is-parent
          .tile.is-child.box
            article
              edu
      .tile.is-vertical
        .tile.is-parent
          .tile.is-child.box
            article
              exp
        .tile.is-parent
          .tile.is-child.box
            article
              skills
  .tile.is-parent
      .tile.is-child.box
        article
          proj
//.tile.is-parent
    .tile.is-child.box
      article
        h1.title Blog
        blog(v-bind:entries='3', v-bind:entryDate="new Date()", v-bind:entrySize="15")
</template>

<script>
  import Bio from '~/assets/bio.md'
  import Edu from '~/components/edu.vue'
  import Exp from '~/components/exp.vue'
  import Skills from '~/components/skills.vue'
  import Proj from '~/components/proj.vue'
  import Blog from '~/components/blog.vue'
  export default {
    components: {
      'edu': Edu,
      'exp': Exp,
      'skills': Skills,
      'proj': Proj
    },
    data () {
      return {
        bio: Bio
      }
    },
    mounted () {
      this.$store.commit('setCurrentTag', 'engineer')
    }
  }
</script>

<style lang="scss">
@import "../_variables.scss";
.tile.is-ancestor {
  margin: 1.25rem;
  @include mobile {
    margin: 0.25rem;
  }
}
.box {
  border: $border-width solid $black-bis;
  box-shadow: $shadow-width $shadow-width 0 $primary;
}
</style>
