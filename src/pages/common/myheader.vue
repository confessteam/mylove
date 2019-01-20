<template>
  <div id="header">
    <div id="left" @click="showToolbar=true"><img src="@/assets/ext_images/suanggang.png" alt=""></div>
    <van-popup v-model="showToolbar" position="left" class="toolbar">
      这是扩展菜单栏
    </van-popup>
    <div id="right" @click="showMessage=true"><img src="@/assets/ext_images/lingdang.png" alt=""></div>
    <van-popup v-model="showMessage" position="right" class="toolbar">
      这是通知
    </van-popup>
  </div>
</template>

<script>
  import { Popup } from 'vant'
  import axios from 'axios'

  export default {
    name: 'myheader',
    components: {
      [Popup.name]: Popup,
    },
    data () {
      return {
        showToolbar: false,
        showMessage: false,
      }
    },
    methods: {},
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
    z-index: 1;
  }

  #left {
    float: left;
    margin-left: 0.3rem;
  }

  #right {
    float: right;
    margin-right: 0.3rem;
  }

  #header img {
    width: 0.6rem;
  }

  .toolbar {
    width: 70%;
    height: 100%;
  }
</style>
