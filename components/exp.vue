<template lang="pug">
div
  h1.title Experience
  div(v-for='(item, index) in jobs')
    .columns
      .column.is-one-fifth.exp-icon
        img(:src="item.iconSrc")
      .column
        .columns
          .column
            b {{ item.company }}
          .column {{ item.startDate }} - {{ item.endDate }}
        .columns
          .column {{ item.role }}
        .columns(v-if="item.notes")
          .column(v-html="item.notes")
    hr(v-if="index + 1 != jobs.length")
</template>

<script>
export default {
  data () {
    return {
      jobs: [
        {
          iconSrc: '/Triseum_color.svg',
          company: 'Triseum, LLC',
          role: 'Software Engineer',
          startDate: 'Jan. 2016',
          endDate: 'Present',
          notes: 'Full-Stack, Online services, API design, Cloud Infrastructure'
        },
        {
          iconSrc: '/TAM-Stack.png',
          company: 'Texas A&M University',
          role: 'Technical Assistant',
          startDate: 'May 2014',
          endDate: 'Dec. 2016',
          notes: 'Research Game Development'
        },
        {
          iconSrc: '',
          company: 'Freelance',
          role: 'Unity3D Game Developer',
          startDate: 'May 2013',
          endDate: 'May 2014',
          notes: 'Contract developer on a persuasive video game project with ' +
          '<a href="http://www.dualpathlearning.com/">dual path learning.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>