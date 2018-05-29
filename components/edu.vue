<template lang="pug">
div
  h1.title Education
  div(v-for='(item, index) in creds')
    .columns
      .column.is-one-fifth.edu-icon
        img(:src="item.iconSrc")
      .column
        .columns.is-multiline
          .column {{ item.institution }}
          .column {{ item.degree }}
          .column {{ item.year }}
        .columns(v-if="item.thesis")
          .column Thesis: {{ item.thesis }}
    hr(v-if="index + 1 != creds.length")
</template>

<script>
export default {
  name: 'edu',
  data () {
    return {
      creds: [
        {
          iconSrc: '/TAM-Stack.png',
          institution: 'Texas A&M University',
          degree: 'Master of Science in Visualization',
          year: '2018',
          thesis: 'Historical Data in Situational Awareness Displays using Dynamic Ego-centric Graphs'
        },
        {
          iconSrc: '/TAM-Stack.png',
          institution: 'Texas A&M University',
          degree: 'Bachelor of Science in Computer Science',
          year: '2012'
        },
        {
          iconSrc: '/tc.png',
          institution: 'Texarkana College',
          degree: 'Associate of Science in Mathematics',
          year: '2010'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.edu-icon {
  max-width: 96px;
}
</style>