<template>
  <div id="all">
    <myheader></myheader>
    <aboutmecomment></aboutmecomment>
    <tabbar></tabbar>
  </div>
</template>

<script>
  import aboutmecomment from './components/aboutmecomment.vue'
  import myheader from '../common/myheader.vue'
  import tabbar from '../common/tabbar.vue'

  export default {
    components: {aboutmecomment, myheader, tabbar},
    name: 'aboutme',
    data () {
      return {
        msg: 'aboutme'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #all {
    padding-bottom: 1.1rem;
    padding-top: 1.4rem;
  }
</style>
