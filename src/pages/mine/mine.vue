<template>
  <div id="all">
    <div id="top">个人中心</div>
    <div id="icon">
      <div id="left">
        <img :src="icon" alt="">
      </div>
      <div id="right">
        <p><img src="@/assets/headImage/user.png" alt="">樊丁</p>
        <p><img src="@/assets/headImage/mynote.png" alt="">这就是我</p>
      </div>
    </div>
    <div id="func"></div>

  </div>
</template>

<script>
  import { Button } from 'vant'
  import axios from 'axios'

  export default {
    components: {
      [Button.name]: Button,
    },
    name: 'mine',
    data () {
      return {
        msg: 'login',
        icon: 'https://avatar.csdn.net/6/D/3/3_riddle1981.jpg',
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
  #top {
    height: 1.5rem;
    background-color: #34D68D;
    line-height: 1.5rem;
    text-align: center;
    color: #F1F0EE;
    font-size: 0.46rem;

  }

  #icon {
    height: 1.5rem;
    padding: 0.3rem;
    border-bottom: solid 0.02rem gray;
  }

  #left {
    float: left;
    width: 20%;
  }

  #right {
    float: right;
    width:80%;
  }

  #left img {
    display: inline-block;
    border-radius: 50%;
    width: 1.5rem;
  }

  #right img {
    display: inline-block;
    border-radius: 50%;
    width: 0.5rem;
  }

  #func {
    margin-top: 1rem;
    height: 4rem;
    background-color: black;
  }
</style>
