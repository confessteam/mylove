<template>
  <div id="all">
    <myheader></myheader>
    <mycontent :image1_list="image1_list" :image2_list="image2_list"></mycontent>
    <tabbar></tabbar>
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
        msg: 'home',
        image1_list: [],
        image2_list: [],

      }
    },
    mounted: function () {
//      请求首页数据
      this.$ajax.get('/api/proxy/user/index')
        .then(response => {
          console.log(response)
          this.image1_list = response.data.data.image1_list
          this.image2_list = response.data.data.image2_list
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
