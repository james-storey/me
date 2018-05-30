<template lang="pug">
div
  h1.title Skills
  .columns
    .column
      h5.title.is-5 Tools
      ul
        li(v-for="tool in tools") {{ tool }}
    .column
      h5.title.is-5 Knowledge
      ul
        li(v-for="item in knowledge") {{ item }}
</template>

<script>
export default {
  data () {
    return {
      tools: [
        'Node.js',
        'HTML / CSS / JS',
        'Linux Admin',
        'Python',
        'NGINX Server',
        'MariaDB / MySQL',
        'Go',
        'C#'
      ],
      knowledge: [
        'Web applicatons',
        'API Design and Dev',
        'Unity3D',
        'Real-Time metrics and analytics',
        'AWS Cloud Infrastructure',
        'Database Design'
      ]
    }
  }
}
</script>

<style lang="scss">

</style>