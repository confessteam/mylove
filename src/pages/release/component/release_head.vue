<template>
  <div id="header">
    <div id="left"><img src="@/assets/ext_images/back.png" alt=""></div>
    <div id="right"><van-button type="primary" round="true" size="small">发布</van-button></div>
  </div>
</template>

<script>
  import { Button } from 'vant'
  export default {
    name: 'releaseHead',
    components: {
      [Button.name]:Button,
    },
    data () {
      return {}
    },
    methods: {},
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #header {
    height: 1rem;
    width: 100%;
    /*background-color: #EC9D87;*/
    line-height: 1rem;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1;
  }

  #left {
    float: left;
    margin-left: 0.3rem;
  }

  #right {
    float: right;
    margin-right: 0.3rem;
    /*color: #ffffff;*/
    /*font-size: 0.5rem;*/
  }

  #header img {
    width: 0.6rem;
  }
</style>
