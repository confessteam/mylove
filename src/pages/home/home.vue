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
    components: {tabbar, myheader, mycontent},
    name: 'home',
    data () {
      return {
        msg: 'home',
        image1_list:[],
        image2_list:[],

      }
    },
    mounted: function () {
      this.$api.get('user/index', null, r => {
          this.image1_list = r.data.image1_list;
          this.image2_list = r.data.image2_list;
      })
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
