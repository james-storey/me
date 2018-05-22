<template lang="pug">
.tile.is-ancestor
  .tile.is-vertical.is-8
    .tile
      .tile.is-vertical
        .tile.is-parent
          .tile.is-child.box
            article
              p.title Bio
              p
                | James hails from Bryan, Texas while finishing his Masters of Science in Visualization.
                | A professional Software Developer since 2013, he has designed and created software of many shapes
                | and sizes.
        .tile.is-parent
          .tile.is-child.box
            article
              p.title Education
      .tile.is-vertical
        .tile.is-parent
          .tile.is-child.box
            article
              p.title Experience
        .tile.is-parent
          .tile.is-child.box
            article
              p.title Projects
    .tile
      .tile.is-parent
        .tile.is-child.box
          article
            p.title Skills
  .tile.is-parent
    .tile.is-child.box
      article
        p.title Blog
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../_variables.scss";
.box {
  // border: $border-width solid $black-bis;
}
</style>