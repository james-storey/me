<template>
<div>
  <div class="is-now"></div>
  <div class="is-lato"></div>
</div>
</template>

<style>
@font-face {
    font-family: 'Lato';
    src: local('Lato Regular'), local('Lato-Regular'),
        url('~/assets/fonts/LatoLatin-Regular.woff2') format('woff2'),
        url('~/assets/fonts/LatoLatin-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Italic'), local('Lato-Italic'),
        url('~/assets/fonts/LatoLatin-Italic.woff2') format('woff2'),
        url('~/assets/fonts/LatoLatin-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Bold'), local('Lato-Bold'),
        url('~/assets/fonts/LatoLatin-Bold.woff2') format('woff2'),
        url('~/assets/fonts/LatoLatin-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}
.is-lato {
  font-family: 'Lato';
}

@font-face {
    font-family: 'Now';
    src: local('Now Light'), local('Now-Light'),
        url('~/assets/fonts/subset-Now-Light.woff2') format('woff2'),
        url('~/assets/fonts/subset-Now-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Now';
    src: local('Now Regular'), local('Now-Regular'),
        url('~/assets/fonts/subset-Now-Regular.woff2') format('woff2'),
        url('~/assets/fonts/subset-Now-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Now';
    src: local('Now Bold'), local('Now-Bold'),
        url('~/assets/fonts/subset-Now-Bold.woff2') format('woff2'),
        url('~/assets/fonts/subset-Now-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}
.is-now {
  font-family: 'Now';
}
</style>