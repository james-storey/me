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
    return {
      projects: [
        [
          {
            name: "Research",
            status: "on going",
            year: "2016-2018",
            description: '<a href="https://gitlab.sysreturn.net/auxreturn/rsrch">Investigation on dynamic situational awarness data visualization techniques.</a>'
          },
          {
            name: "SchwayFlower",
            status: "on going",
            year: "2017-2018",
            description: 'A Music Visualization and interaction framework for Unity3D. Used in live A/V concerts'
          },
          {
            name: "Net League",
            status: "incomplete",
            year: "2017",
            description: '<a href="https://gitlab.sysreturn.net/auxreturn/net_league">Collaborative card inventory management software for the Netrunner card game</a>'
          },
          {
            name: "Parking Garage Data Collection",
            status: "complete",
            year: "2018",
            description: 'Website Scrapper and data collector in Bash'
          }
        ],
        [
          {
            name: "Tallies",
            status: "on hiatus",
            year: "2017-2018",
            description: '<a href="https://gitlab.sysreturn.net/auxreturn/attend">Realtime classroom aid for gathering attendence in large classrooms</a>'
          },
          {
            name: "Shaders and real-time effects",
            status: "complete",
            year: "2015-2017",
            description: '<ul><li><a href="https://gitlab.sysreturn.net/auxreturn/imgsynth">Realtime GPU accelerated ray-tracer</a>,</li>'+
              '<li><a href="https://gitlab.sysreturn.net/auxreturn/physical-modeling">Realtime physics simulations in the browser</a></li></ul>'
          },
          {
            name: "Game Jams",
            status: "complete",
            year: "2014-2017",
            description: 'Various project submissions to Ludum Dare and Chillenium'
          },
          {
            name: "Generative Art",
            status: "complete",
            year: "2016",
            description: '<a href="https://gitlab.sysreturn.net/auxreturn/genart">Generative art work displayed in local galleries</a>'
          }
        ]
      ]
    }
  }
}
</script>

<style lang="scss">
.project-item {
  margin-bottom: 2rem;
}
</style>
