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
              .content(v-html="edu")
      .tile.is-vertical
        .tile.is-parent
          .tile.is-child.box
            article
              .content(v-html="exp")
        .tile.is-parent
          .tile.is-child.box
            article
              .content(v-html="proj")
    .tile
      .tile.is-parent
        .tile.is-child.box
          article
            .content(v-html="skills")
  .tile.is-parent
    .tile.is-child.box
      article
        p.title Blog
        // blog-preview
</template>

<script>
  import Bio from '~/assets/bio.md'
  import Edu from '~/assets/edu.md'
  import Exp from '~/assets/exp.md'
  import Skills from '~/assets/skills.md'
  import Proj from '~/assets/proj.md'
  export default {
    data () {
      return {
        
      }
    },
    computed: {
      bio () {
        return Bio
      },
      edu () {
        return Edu
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
.box {
  // border: $border-width solid $black-bis;
}
</style>