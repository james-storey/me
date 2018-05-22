<template lang="pug">
.tile.is-ancestor
  .tile.is-vertical
    .tile.is-parent
      .tile.is-child.box
        article
          p.title Bio
    .tile.is-parent
      .tile.is-child.box
        article
          p.title Education
    .tile.is-parent
      .tile.is-child.box
        article
          p.title Experience
  .tile.is-vertical
    .tile.is-parent
      .tile.is-child.box
        article
          p.title Skills
    .tile.is-parent
      .tile.is-child.box
        article
          p.title Projects
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