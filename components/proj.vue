<template lang="pug">
div 
  h1.title Projects
  .columns
    .column(v-for="g in projects")
      .project-item(v-for="project in g")
        h4.title.is-4 {{ project.name }}
        .columns
          .column {{ project.year }}
          .column {{ project.status }}
        .project-description(v-html="project.description")
</template>

<script>
export default {
  name: 'proj',
  data () {
    let dataValues = { 
      projects: [
        [
          {
            name: "Research",
            status: "on going",
            year: "2016-2018",
            description: ''
          },
          {
            name: "SchwayFlower",
            status: "on going",
            year: "2017-2018",
            description: ''
          },
          {
            name: "Net League",
            status: "incomplete",
            year: "2017",
            description: ''
          },
          {
            name: "Parking Garage Data Collection",
            status: "complete",
            year: "2018",
            description: ''
          }
        ],
        [
          {
            name: "Tallies",
            status: "hiatus",
            year: "2017-2018",
            description: ''
          },
          {
            name: "Music Visualizers",
            status: "complete",
            year: "2015-2017",
            description: ''
          },
          {
            name: "Game Jams",
            status: "complete",
            year: "2014-2017",
            description: ''
          },
          {
            name: "Generative Art",
            status: "complete",
            year: "2016",
            description: ''
          }
        ]
      ]
    }
    return dataValues
  }
}
</script>

<style lang="scss">
.project-item {

}
</style>