<template>
  <div id="all">
    <!--头部-->
    <myheader></myheader>

    <!--头像-->
    <div id="icon">
      <img :src="icon" alt="">
    </div>

    <!--表单-->
    <van-cell-group>
      <van-field
        v-model="sms"
        center
        clearable
        label="手机号"
        placeholder="请输入手机号"
      >
      </van-field>
      <van-field
        v-model="sms"
        center
        clearable
        label="验证码"
        placeholder="请输入短信验证码"
      >
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
      <van-button type="primary" size="large">登录</van-button>
    </van-cell-group>
    <tabbar></tabbar>

  </div>
</template>

<script>
  import { Button, Field } from 'vant'
  import myheader from '../../common/myheader.vue'
  import tabbar from '../../common/tabbar.vue'

  export default {
    components: {
      [Button.name]: Button,
      myheader,
      tabbar,
      [Field.name]: Field
    },
    name: 'home',
    data () {
      return {
        icon: 'https://ss1.bdstatic.com/5aAHeD3nKgcUp2HgoI7O1ygwehsv/media/ch1000/png/pc215.png',
        value: '',
      }
    },
    methods: {
      getIcon: function () {
        console.log(this.value)
        axios.get('/proxy/user/get_vcode', {
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
  #all {
    padding-bottom: 1.1rem;
    padding-top: 1.4rem;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }

  #icon {
    height: 2.5rem;
    text-align: center;
    margin-top: 1rem;
  }

  #icon img {
    display: inline-block;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
  }
</style>
