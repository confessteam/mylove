<template>
  <div class="container">
    <div class="column-4">
      <div class="unit">

      </div>
      <div class="unit">
        <!--<div class="top">-->
          <!--<img src="@/assets/ext_images/list.jpeg" alt="">-->
        <!--</div>-->
        <!--<div class="bottom"></div>-->
      </div>
      <div class="unit">第一列 03</div>
      <div class="unit">第一列 03</div>
      <div class="unit">第一列 03</div>
      <div class="unit">第一列 03</div>
      <div class="unit">第一列 03</div>
      <div class="unit">第一列 03</div>
      <div class="unit">第一列 03</div>
      <div class="unit">第一列 03</div>
    </div>

    <div class="column-4">
      <div class="unit">
        <div class="top">
          <!--<img src="@/assets/ext_images/list.jpeg" alt="">-->
        </div>
        <div class="bottom"></div>
      </div>
      <div class="unit">第二列 02</div>
      <div class="unit">第二列 02</div>
      <div class="unit">第二列 02</div>
      <div class="unit">第二列 02</div>
      <div class="unit">第二列 02</div>
      <div class="unit">第二列 02</div>
      <div class="unit">第二列 02</div>
      <div class="unit">第二列 02</div>
    </div>
  </div>
</template>

<script>

  import { Button } from 'vant'
  import axios from 'axios'

  export default {
    components: {
      [Button.name]: Button,
    },
    name: 'mycontent',
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
  .container {
    width: 90%;
    margin: 0.2rem auto;
    border: 0.02rem solid #DDDDDD;
    border-radius: 0.1rem;
    padding: 0;
    zoom: 1;
    display: table;
  }

  .column-4 {
    width: 50%;
    margin: 0;
    float: left;
  }

  .unit {
    width: 95%;
    height: 5rem;
    border: 0.02rem solid #DDDDDD;
    margin: 0.1rem auto;
    text-align: center;
    line-height: 4rem;
    font-weight: bold;
    font-size: 0.4rem;
    border-radius: 0.2rem;
  }
  .top{
    height: 4rem;
    background-color: indianred;
    overflow-x: scroll;
    overflow-y:  scroll;
  }
  .bottom {
    height: 1rem;
    background-color: black;
  }
</style>
