<template>
  <div id="all">
    <myheader></myheader>
    <aboutmecomment></aboutmecomment>
    <tabbar v-bind:message="this.parentMessage"></tabbar>
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
        msg: 'aboutme',
        parentMessage:null,
      }
    },
     mounted: function () {
//       var token = getCookie("token")
//      console.log(token)
////      请求首页数据
//      this.$ajax.get('/api/proxy/user/index')
//        .then(response => {
//          this.image1_list = response.data.data.image1_list
//          this.image2_list = response.data.data.image2_list
//        })
//        .catch(error => {
//          console.log(error)
//          this.errored = true
//        })
//        .finally(() => this.loading = false)
    },
    method:{},
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #all {
    padding-bottom: 1.1rem;
    padding-top: 1.4rem;
  }
</style>
