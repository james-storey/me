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
              .content(v-html="exp")
        .tile.is-parent
          .tile.is-child.box
            article
              .content(v-html="skills")
    .tile
      .tile.is-parent
        .tile.is-child.box
          article
            .content(v-html="proj")
  .tile.is-parent
    .tile.is-child.box
      article
        p.title Blog
        // blog-preview
</template>

<script>
  import Bio from '~/assets/bio.md'
  import Edu from '~/components/edu.vue'
  import Exp from '~/assets/exp.md'
  import Skills from '~/assets/skills.md'
  import Proj from '~/assets/proj.md'
  export default {
    components: {
      'edu': Edu
    },
    data () {
      return {

      }
    },
    computed: {
      bio () {
        return Bio
      },
      exp () {
        return Exp
      },
      skills () {
        return Skills
      },
      proj () {
        return Proj
      }
    }
  }
</script>

<style lang="scss">
@import "../_variables.scss";
.tile.is-ancestor {
  margin: 1.25rem;
}
.box {
  border: $border-width solid $black-bis;
  box-shadow: $shadow-width $shadow-width 0 $primary;
}
</style>