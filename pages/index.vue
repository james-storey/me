<template lang="pug">
.tile.is-ancestor
  .tile.is-vertical
    .tile.is-parent
      .tile.is-child.box
        article
          p.title Bio
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis massa et magna vulputate ullamcorper vestibulum congue libero. Ut dignissim felis quis erat commodo pellentesque. Donec finibus, velit id laoreet vehicula, erat lorem vestibulum metus, eget blandit sapien erat sit amet purus. Pellentesque at est enim. Donec eget vestibulum arcu, a vehicula ligula. Integer vitae ante sed urna consectetur feugiat. Vestibulum eget commodo lectus. Mauris quis dignissim purus. In hac habitasse platea dictumst.
    .tile.is-parent
      .tile.is-child.box
        article
          p.title Education
          p Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam eget nibh ipsum. Nullam ac leo nec augue accumsan consequat sed at dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris et lorem sit amet nisi viverra tristique id id nulla. Nunc rutrum feugiat libero, at consectetur mauris bibendum viverra. Proin id ipsum libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis eu lacus quam. Duis posuere sapien nec odio cursus maximus. Aliquam id mi nec elit interdum convallis. Aliquam tempus quam sed libero volutpat semper ac in nisl. Vestibulum augue tortor, laoreet ac sem non, elementum vulputate nibh. Sed rhoncus sed nisl non posuere. Ut consectetur est non urna fermentum facilisis.
    .tile.is-parent
      .tile.is-child.box
        article
          p.title Experience
          p Aliquam nec diam dictum, vehicula eros id, posuere mi. Nulla tempor tellus et augue semper, tempus scelerisque tortor efficitur. Proin congue lacus et vestibulum ullamcorper. Aenean at iaculis nisl, in consequat nisl. Morbi sed aliquet sem. In sollicitudin nibh mi, at sollicitudin mauris tempus eget. Proin facilisis rhoncus felis, non convallis mauris viverra nec. Vivamus ac sapien eu libero mollis rhoncus vehicula nec nibh. Nunc ac odio dolor. Nulla hendrerit nulla vel nulla molestie, et tristique ex accumsan.
  .tile.is-vertical
    .tile.is-parent
      .tile.is-child.box
        article
          p.title Skills
          p Quisque turpis lorem, ornare at diam eu, vestibulum mattis sapien. Nullam dapibus odio at est tempor euismod. Ut pretium elementum nunc dictum rhoncus. Etiam finibus odio sit amet augue laoreet, in venenatis risus finibus. Curabitur varius cursus pellentesque. Nulla dapibus elit vel lorem pharetra iaculis at vel neque. Donec laoreet urna auctor, ultrices ipsum ornare, ornare nulla. Donec lobortis vulputate orci, vel pretium lectus consectetur sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas lacinia eget odio eu venenatis. In porta pulvinar dolor, a elementum nisi consectetur a. Quisque dictum tellus et tortor lobortis sagittis sed nec eros. Proin suscipit lorem et bibendum dictum. Nulla eget porttitor sem. Integer sit amet arcu enim. Suspendisse potenti.
    .tile.is-parent
      .tile.is-child.box
        article
          p.title Projects
          p Aenean rutrum massa sit amet metus luctus pellentesque. Suspendisse ultricies felis vel risus luctus, vel vulputate purus varius. Praesent maximus nisi a iaculis sollicitudin. Suspendisse sit amet commodo sem. In quam ex, consectetur a tortor ut, pharetra venenatis nibh. Maecenas aliquet ornare erat. Sed pulvinar nibh elementum turpis commodo ultrices. Nam lobortis lacus eu ipsum pulvinar, vel dapibus ligula accumsan. Pellentesque pulvinar imperdiet libero id congue.
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
@import "../global.scss";
.box {
  border: $border-width solid $black-bis;
}
</style>