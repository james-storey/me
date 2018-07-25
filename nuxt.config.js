module.exports = {
  mode: 'spa',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Personal website for James Storey, Software Engineer, Musician, and Photographer.' },
      { name: 'keywords', content: 'Personal,Portfolio,Software,Engineer,Music,Photgraphy,resume,cv,experience,blog' },
      { name: 'author', content: 'James Storey' },
      { name: 'robots', content: 'index, follow' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' }
    ],
    title: 'James Storey'
  },
  css: [
    '@/_global.scss'
  ],
  modules: [
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: false
  }
}
