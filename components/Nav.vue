<template lang='pug'>
.navbar
  .navbar-brand
    .navbar-icon.image.profile
      img(src="profile.jpg")
    .navbar-brand__text
      .name {{name}}
      .contact
        img.inline-icon(src="@/node_modules/open-iconic/svg/envelope-closed.svg" alt="envelope")
        span(style="unicode-bidi:bidi-override; direction: rtl;") {{liame}}
  .navbar-menu
    .navbar-item
      ul
        li.role-link(v-for="role in roles" :class="{ selected: role.selected }") {{role.name}}
</template>

<script>
export default {
  data () {
    return {
      name: "James Storey",
      email: "james@sysreturn.net",
      roles: [
        {
          selected: true,
          name: "Software Engineer"
        },
        {
          selected: false,
          name: "System Administrator"
        },
        {
          selected: false,
          name: "Artist"
        },
        {
          selected: false,
          name: "Musician"
        }
      ]
    }
  },
  computed: {
    liame: function () {
      let rev = []
      for(let i = this.email.length - 1; i >= 0; i--) {
        rev.push(this.email[i])
      }
      return rev.join('')
    }
  }
}
</script>

<style lang="scss">
@import "../global.scss";
.navbar {
  margin: $pad1;
}

.profile {
  border: $border-width solid $black-bis;
  width: 128px;
  height: 128px;
  box-shadow: -5px -5px 0 $primary;
  @include mobile {
    width: 64px;
    height: 64px;
  }
}

.navbar-brand__text {
  padding: 0 $pad3 0 $pad3;
}

.name {
  font-size: xx-large;
  font-weight: bold;
  //text-shadow: -10px 0px 0px $purple;
}

.inline-icon {
  position: relative;
  margin: 0 0.25em -0.25em 0;
  width: $pad2;
}

.role-link {
  font-weight: bold;
  color: $grey;
  padding-bottom: $border-width;
  &:hover {
    color: $black-bis;
    cursor: pointer;
  }
}
.selected {
  color: $black-bis;
  border-bottom: $border-width solid $primary;
  padding-bottom: 0px;
}
</style>
