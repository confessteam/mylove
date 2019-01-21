<template>
    <div id="all">
      <van-nav-bar
        title="个人资料"
        right-text="保存"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <div id="user_info_top">
        <div class="uploadImg" v-if='!dwimg'>
        <van-uploader :after-read="onRead" >
          <van-icon name="photograph" />
        </van-uploader>
        </div>
        {{dwimg}}
          <p class="img" v-if="dwimg" ><img class="head-img" src="" ref="goodsImg"/></p>
      </div>
      <div id="user_info_content">
        <div class="content">
          <div>
            <van-cell-group>
              <van-field v-model="value" placeholder="请输入昵称" />
            </van-cell-group>
          </div>
          <div>
            <van-cell-group>
              <van-field v-model="value" placeholder="请输入签名" />
            </van-cell-group>
          </div>
          <div>
            <van-radio-group v-model="radio">
              <van-radio name="1">男</van-radio>
              <van-radio name="2">女</van-radio>
              <van-radio name="0">不显示</van-radio>
            </van-radio-group>
          </div>
          <div>
            <van-popup v-model="show"  position="bottom" :overlay="false">
                  <van-datetime-picker
                  v-model="currentDate"
                  type="date"
                  :min-date="minDate"
                />
              </van-popup>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { Uploader,icon } from 'vant';
import { Field } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { DatetimePicker } from 'vant';
import { Popup } from 'vant';
import { NavBar } from 'vant';
import axios from 'axios'

export default {
  components: {
    [Uploader.name]: Uploader,
    [DatetimePicker.name]: DatetimePicker,
    [Popup.name]: Popup,
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    [Field.name]: Field,
    [NavBar.name]: NavBar,
    [icon.name]: icon
  },
  name: 'updUserInfo',
  data () {
    return {
      show: false,
      currentDate: new Date(),

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
      this.dwimg = file.content
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
