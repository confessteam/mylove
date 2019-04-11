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
      <p style="color: red;">{{message}}</p>
      <van-field
        center
        label="手机号"
        placeholder="请输入手机号"
        v-model="phonenum"
      >
      </van-field>
      <van-field
        center
        label="验证码"
        placeholder="请输入短信验证码"
        v-model="vcode"
      >
        <van-button slot="button" size="small" type="primary" v-on:click="get_vcode">发送验证码</van-button>
      </van-field>
      <van-button type="primary" size="large" v-on:click="login">登录</van-button>
    </van-cell-group>

  </div>
</template>

<script>
  import { Button, Field, CellGroup} from 'vant'
  import myheader from '../../common/myheader.vue'
  import tabbar from '../../common/tabbar.vue'
  import qs from 'qs'

  export default {
    components: {
      [Button.name]: Button,
      myheader,
      tabbar,
      [Field.name]: Field,
      [CellGroup.name]: CellGroup
    },
    name: 'home',
    data () {
      return {
        icon: 'https://ss1.bdstatic.com/5aAHeD3nKgcUp2HgoI7O1ygwehsv/media/ch1000/png/pc215.png',
        phonenum: '',
        vcode: '',
        message:'',

      }
    },
    methods: {
      get_vcode: function () {
        console.log(this.icon)
        this.$ajax.get('/api/proxy/user/get_vcode', {
          params: {
            phonenum: this.phonenum,
          }
        })
          .then(function (response) {
            console.log(response);
            console.log(1);
          })
          .catch(function (response) {
            console.log(response)
            console.log(1)
          })
      },
      login: function () {
        var _this = this
        this.$ajax.post('/api/proxy/user/login', qs.stringify({
            'phonenum': this.phonenum,
            'vcode':this.vcode,
          })
        )
          .then(function (response) {
            if(response.data.code == 403){
                _this.message = '用户名或密码错误'
            }
            else if(response.data.code == 200){
              _this.$router.push({name: 'mine'})
              setCookie("token", response.data.data.token, 1);
              console.log(getCookie("token"))
            }
          })
          .catch(function (response) {
            console.log(response)
          })
      },


    }
  }
  function setCookie(cname,cvalue,exdays)
        {
          var d = new Date();
          d.setTime(d.getTime()+(exdays*24*60*60*1000));
          var expires = "expires="+d.toGMTString();
          document.cookie = cname + "=" + cvalue + "; " + expires;
        }
      function getCookie(cname)
        {
          var name = cname + "=";
          var ca = document.cookie.split(';');
          for(var i=0; i<ca.length; i++)
          {
            var c = ca[i].trim();
            if (c.indexOf(name)==0) return c.substring(name.length,c.length);
          }
          return "";
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
