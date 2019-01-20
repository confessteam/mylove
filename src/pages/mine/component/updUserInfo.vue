<template>
    <div id="all">
      <div id="user_info_top">
        <div class="uploadImg">
        <van-uploader :after-read="onRead">
          <van-icon name="photograph" />
        </van-uploader>
        </div>
      </div>
      <div id="user_info_content">
        <div class="content">

        </div>
      </div>
    </div>
</template>

<script>
import { Uploader,icon } from 'vant';
import axios from 'axios'

export default {
  components: {
    [Uploader.name]: Uploader,
    [icon.name]: icon
  },
  name: 'updUserInfo',
  data () {
    return {
      show: true

    }
  },
  methods: {
    getIcon: function () {
      console.log(this.value);
      axios.get('http://www.fand.wang:8890/api/user/get_vcode', {
        params: {
          phonenum: this.value
        }
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (response) {
          console.log(response)
        })
    },
    onRead: function (file) {
      console.log(file)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #all {
    width: 100%;
    height: 100%;
    margin: 0.2rem auto;
    border: 0.02rem solid #DDDDDD;
    border-radius: 0.1rem;
    padding: 0;
    zoom: 1;
    display: table;
  }

  #user_info_top {
    width: 100%;
    height: 10%;
    float: left;
    border: 0.02rem solid black;
  }
  #user_info_top .uploadImg{
    align-content: center;
  }
   #user_info_content {
    width: 100%;
    height: 90%;
    float: left;
     background-color: black;
     border: 0.02rem solid red;
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

  .top {
    width: 100%;
    height: 4rem;
    overflow: hidden;
  }

  .bottom {
    width: 100%;
    height: 1rem;
    border-radius: 0.02rem;
    /*background-color: black;*/
  }

  .top img {
    width: 100%;
    height: 4rem;
    border-radius: 0.02rem;
  }
</style>
