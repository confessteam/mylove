<template>
  <div id="all">
    <myheader></myheader>
    <mycontent :confesses1="confesses1" :confesses2="confesses2" :type="1"></mycontent>
    <tabbar v-bind:message="this.parentMessage"></tabbar>
  </div>
</template>

<script>
  import tabbar from '../common/tabbar.vue'
  import myheader from '../common/myheader.vue'
  import mycontent from './component/mycontent.vue'
  import axios from 'axios'

  export default {
    components: {tabbar, myheader, mycontent, axios},
    name: 'home',
    data () {
      return {
        parentMessage:null,
        msg: 'home',
        confesses1: [],
        confesses2: [],
        type:1

      }
    },
    mounted: function () {
//      请求首页数据
      this.$ajax.get('/api/proxy/user/index')
        .then(response => {
          console.log(response)
          this.confesses1 = response.data.data.confesses1
          this.confesses2 = response.data.data.confesses2
          console.log(this.image1_list)
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #all {
    padding-bottom: 1.1rem;
    padding-top: 1.4rem;
  }
</style>
