<template>
  <div id="all">
    <release-head></release-head>
  </div>
</template>

<script>
  import releaseHead from './component/release_head.vue'

  export default {
    name: 'release',
    components: {releaseHead},
    data () {
      return {

      }
    },
    created () {
      console.log(this.$router)
      this.info = this.$router.history.current.query.name
      console.log(this.info)
    }
    ,
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#all{
  padding-top: 1rem;

}
</style>
