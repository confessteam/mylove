<template>
  <div id="header">
    <div id="left"  @click="showToolbar=true"><img src="@/assets/ext_images/suanggang.png" alt=""></div>
    <van-popup v-model="showToolbar" position="left" class="toolbar" z-index="1000" id="leftToolbar">
        <div><router-link to="/mall">二手商城</router-link></div>
        <div><router-link to="/lost">失物招领</router-link></div>
        <div><router-link to="/others">其他</router-link></div>
    </van-popup>
    <div id="right" @click="showMessage=true"><img src="@/assets/ext_images/lingdang.png" alt=""></div>
    <van-popup v-model="showMessage" position="right" class="toolbar" z-index="1">
      <div>失物招领</div>
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
    methods: {
//      open12() {
//        this.$notify({
//          title: 'HTML 片段',
//          dangerouslyUseHTMLString: true,
//          message: '<strong>这是 <i>HTML</i> 片段</strong>',
//          offset:50,
////          position: 'top-left'
//        });
//        this.$notify({
//          title: 'HTML 片段',
//          dangerouslyUseHTMLString: true,
//          message: '<strong>这是 <i>HTML</i> 片段</strong>',
//          offset:50,
////          position: 'top-left'
//        });
//      }

    },
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
  .el{
  margin-top: 2px;

}
  #leftToolbar div{
    width:100%;
    height: 1.6rem;
    background: #F56C6C;
    text-align: center;
    line-height: 1.6rem;
    border:1px solid gray;
    border-radius: 5px;
    color: #ffffff;
    font-size: 18px;
  }
</style>
