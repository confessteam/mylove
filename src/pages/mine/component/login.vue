<template>
  <div id="hello">
    <!--头部-->
    <div id="top">
      <div class="left iconfont back">
        <a href="#">&#xe624;</a>
      </div>
      <div class="right">
        Singn In
      </div>
    </div>

    <!--头像-->
    <div id="icon">
      <img :src="icon" alt="">
    </div>

    <!--表单-->
    <form action="#" id="form">
      <ul>
        <li><input type="text" placeholder="手机号" @blur="getIcon"></li>
        <li><input type="text" placeholder="验证码"></li>
        <div class="getcode-right">获取验证码</div>
        <li>
          <button class="submit">登录</button>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'login',
        icon: 'https://avatar.csdn.net/6/D/3/3_riddle1981.jpg'
      }
    },
    methods: {
      getIcon:function () {
        console.log('success')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #top {
    height: 1rem;
    margin-top: 0.2rem;
    padding: 0.1rem;
    font-size: 0.5rem;
  }

  #top .left {
    float: left;
    width: 20%;
    font-size: 0.5rem;
    text-align: center;
  }

  #top .right {
    float: right;
    text-align: center;
    width: 80%;
    font-size: 0.66rem;
  }

  #icon {
    height: 2.5rem;
    text-align: center;
    margin-top: 1rem;
  }

  #icon img {
    display: inline-block;
    border-radius: 50%;
    width: 2.3rem;
  }

  #form {
    margin-top: 1rem;
    font-size: 0.50rem;

  }

  #form input {
    height: 1.8rem;
    width: 100%;
    border: solid 0.02rem gray;
  }

  .getcode-right {
    float: right;
    height: 1rem;
    font-size: 0.40rem;
    background-color: indianred;
    text-align: center;
    line-height: 1rem;
    border-radius: 10%;
    margin-top: 0.1rem;
    width: 2.5rem;
  }

  .submit {
    margin-top: 0.5rem;
    width: 100%;
    height: 1.8rem;
    font-size: 0.46rem;
    background-color: #EB8F81;
    border-radius: 0.2rem;
  }
</style>
