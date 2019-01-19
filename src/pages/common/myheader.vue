<template>
  <div id="header">
    <div id="left"><img src="@/assets/ext_images/suanggang.png" alt=""></div>
    <div id="right"><img src="@/assets/ext_images/lingdang.png" alt=""></div>
  </div>
</template>

<script>
  import { Button } from 'vant'
  import axios from 'axios'

  export default {
    name: 'myheader',
    data () {
      return {
        msg: 'login',
      }
    },
    methods: {
      getIcon: function () {
        console.log(this.value)
        axios.get('http://www.fand.wang:8890/api/user/get_vcode', {
          params: {
            phonenum: this.value,
          }
        })
          .then(function (response) {
            console.log(response)
          })
          .catch(function (response) {
            console.log(response)
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #header {
    height: 1.4rem;
    width: 100%;
    background-color: #EC9D87;
    line-height: 1.4rem;
    position: fixed;
    top: 0px;
    left: 0px;
  }
  #left{
    float: left;
    margin-left: 0.3rem;
  }
  #right{
    float: right;
    margin-right: 0.3rem;
  }
  #header img{
    width: 0.6rem;
  }
</style>
