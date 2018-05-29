<template lang='pug'>
.navbar
  .navbar-brand
    .navbar-icon.image.profile
      img(src="~/assets/profile.jpg")
    .navbar-brand__text
      .name {{name}}
      .contact
        img.inline-icon(src="@/node_modules/open-iconic/svg/envelope-closed.svg" alt="envelope")
        span(style="unicode-bidi:bidi-override; direction: rtl;") {{liame}}
    a.navbar-burger(data-target="navMenu", role="button" aria-label="menu" aria-expanded="false")
      span(aria-hidden="true")
      span(aria-hidden="true")
      span(aria-hidden="true")
  .navbar-menu
    .navbar-start
      .navbar-item
        ul
          li.role-link(v-for="role in roles" :class="{ selected: role.selected }") {{role.name}}
    .navbar-end
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
          name: "Art and Photography"
        },
        {
          selected: false,
          name: "Music"
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
@import "../_variables.scss";
.navbar {
  margin: $pad1;
}

.profile {
  border: $border-width solid $black-bis;
  width: 128px;
  height: 128px;
  box-shadow: $shadow-width $shadow-width 0 $primary;
  @include mobile {
    width: 64px;
    height: 64px;
  }
}

.navbar-brand__text {
  margin-left: $pad3;
  padding: 0 $pad3 0 $pad3;
}

.name {
  font-size: xx-large;
  font-weight: bold;
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

.navbar-burger span {
  width: 32px;
  height: $border-width;
  background-color: $black-bis;
  left: calc(50% - 16px);
}
.navbar-burger span:nth-child(1) {
  top: calc(50% - 10px);
}
.navbar-burger span:nth-child(3) {
  top: calc(50% + 8px);
}
</style>
