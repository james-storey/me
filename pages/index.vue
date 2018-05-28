<template lang="pug">
.tile.is-ancestor
  .tile.is-vertical.is-8
    .tile
      .tile.is-vertical
        .tile.is-parent
          .tile.is-child.box
            article
              p.title Bio
              p {{ $store.state.bio }}
        .tile.is-parent
          .tile.is-child.box
            article
              p.title Education
              p {{ $store.state.edu }}
      .tile.is-vertical
        .tile.is-parent
          .tile.is-child.box
            article
              p.title Experience
              p {{ $store.state.exp }}
        .tile.is-parent
          .tile.is-child.box
            article
              p.title Projects
              p {{ $store.state.proj }}
    .tile
      .tile.is-parent
        .tile.is-child.box
          article
            p.title Skills
            p {{ $store.state.skills }}
  .tile.is-parent
    .tile.is-child.box
      article
        p.title Blog
        blog-preview
</template>

<script>
export default {
  data () {
    return {

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