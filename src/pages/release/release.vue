<template>
  <div id="all">
    <div id="form">
      <div id="header">
        <div id="left"><router-link to="/"><img src="@/assets/ext_images/back.png" alt=""></router-link></div>
        <div id="right">
          <van-button type="primary" round="true" size="small">发布</van-button>
        </div>
      </div>
      <textarea name="" id="content" placeholder="请输入发表内容"></textarea>
      <van-uploader :after-read="onRead" multiple accept="image/gif,image/jpeg,image/jpg,image/png,image/svg">
        <van-icon name="photograph" size="1.5rem"/>
      </van-uploader>
    </div>
  </div>
</template>

<script>
  import { Uploader, Icon, Button } from 'vant'

  export default {
    name: 'release',
    components: {
      [Uploader.name]: Uploader,
      [Icon.name]: Icon,
      [Button.name]: Button,
    },
    data () {
      return {
        info: 'info'
      }
    },
    methods: {
      onRead (file) {
        console.log(file)
        for (let f in file) {
          console.log(file[f])
        }

      }
    },
    created () {
      console.log(this.$router)
      this.info = this.$router.history.current.query.name
      console.log(this.info)
    }
    ,
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #all {
    padding-top: 1.5rem;
  }

  #content {
    width: 100%;
    height: 2rem;
    /*border: solid 0.02rem grey;*/
    border-radius: 0.06rem;
    font-size: 18px;
  }

  #form {
    margin: 0 auto;
    width: 90%;
  }

  #header {
    height: 1rem;
    width: 100%;
    /*background-color: #EC9D87;*/
    line-height: 1rem;
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
    /*color: #ffffff;*/
    /*font-size: 0.5rem;*/
  }

  #header img {
    width: 0.6rem;
  }
</style>
