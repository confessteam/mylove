<template>
    <div id="all">
      <myheader></myheader>
      <div>
        {{msg}}
      </div>
      <tabbar></tabbar>
    </div>
</template>

<script>
  import { Button } from 'vant'
  import myheader from './myheader.vue'
  import tabbar from './tabbar.vue'

  export default {
    components: {
      [Button.name]: Button,
      myheader,
      tabbar
    },
    name: 'detail',
    data () {
      return {
        msg: '详情页',
      }
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#all {
    padding-bottom: 1.1rem;
    padding-top: 1.4rem;
  }
</style>
