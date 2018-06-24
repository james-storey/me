<template lang="pug">
div
  .blog-entry(v-for="i in entries")
    h4.title.is-4 {{ blogs[i-1].title }}
    .blog-date {{ blogs[i-1].date }}
    .content(v-html="blogs[i-1].content")
</template>

<script>
export default {
  name: 'blog',
  props: [
    'entries',
    'entrySize',
    'entryDate'
  ],
  data () {
    return {
      entries: 3,
      entrySize: 15,
      entryDate: new Date(),
      startingIndex: 0,
      blogs: [
        {
          title: 'BLOG_003',
          date: '2018-06-02',
          content: 'blog entry 003'
        },
        {
          title: 'BLOG_002',
          date: '2018-05-29',
          content: 'blog entry 002'
        },
        {
          title: 'BLOG_001',
          date: '2018-03-15',
          content: 'blog entry 001'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss">

</style>