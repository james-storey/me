<template lang="pug">
.columns.sysadmin__page
  .column.is-3
    .box
      .content(v-html="description")
  .column
    div(v-for="project in projects")
      section.section(:style="{background: project.background}")
        .content(:class="{'has-text-white':project.whiteText}")
          div
            span.title.is-3(:class="{'has-text-white':project.whiteText}")
              | {{ project.title }}
            span.project-icon
              img.project-icon__img(:src="project.icon")
          .sub-title {{ project.time }}
          article
            .content
              p {{ project.description }}
            a(:href="project.link") {{ project.link }}
</template>

<script>
import sysadmin from '~/assets/sysadmin.md'
export default {
  data () {
    return {
      description: sysadmin,
      projects: [
        {
          title: 'Gitlab',
          background: '#6e49cb', // gitlab purple
          whiteText: true,
          icon: '/gitlab-logo-rgb.png',
          time: 'April 2016 - Present',
          description: 'A community edition gitlab server for personal projects, experiments, and collaboration',
          link: 'https://gitlab.sysreturn.net'
        },
        {
          title: 'Tallies',
          background: '#ff9d00', // amazon orange
          whiteText: true,
          icon: '',
          time: 'August 2017 - January 2018',
          description: 'AWS serverless application for my Tallies attendance system. Interfaced with twillio for SMS message sending and retrieval.'
        },
        {
          title: 'CouchDB',
          background: '#e32428', // couchdb red
          whiteText: true,
          icon: '/couchdb-white.png',
          time: 'February 2018 - Present',
          description: 'Couchdb database used for research data storage and retrieval. Secured for authenticated users.',
          link: 'https://couch.sysreturn.net'
        },
        {
          title: 'Mastodon',
          background: '#282c37', // mastodon purple
          whiteText: true,
          icon: '/mastodon-logo.svg',
          time: 'January 2017 - May 2017',
          description: 'I attempted to run a mastodon server at one point. Important lessons about database and asset backups were learned the hard way.'
        },
        {
          title: 'Mini Home Lab',
          background: '#c51a4a',
          whiteText: true,
          icon: '',
          time: 'November 2016 - Present',
          description: 'I keep 2-3 single-board computers running as a home lab cluster. They can be pretty useful for running automatic tasks and local network services.'
        },
        {
          title: 'Gitea',
          background: '#669a23',
          whiteText: true,
          icon: '',
          time: 'November 2018 - Present',
          description: 'In my obsession with improving my tools, I have started to move my git server application to gitea for better economics, simpler features, and easier admin',
          link: 'https://git.sysreturn.net'
        }
      ]
    }
  },
  mounted () {
    this.$store.commit('setCurrentTag', 'sysadmin')
  }
}
</script>

<style lang="scss">
@import '../_variables.scss';
.sysadmin__page {
  margin: 1.25rem;
  @include mobile {
    margin: 0.25rem;
  }
}
.project-icon {
  margin-left: 1rem;
}
.project-icon__img {
  max-height: 3rem;
  margin-bottom: -0.5rem;
}
</style>
