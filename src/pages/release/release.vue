<template>
  <div id="all">
    <release-head></release-head>
    <div id="form">
      <textarea name="" id="content" placeholder="请输入发表内容"></textarea>
      <van-uploader :after-read="onRead" multiple accept="image/gif,image/jpeg,image/jpg,image/png,image/svg">
        <van-icon name="photograph" size="2rem"/>
      </van-uploader>
    </div>
  </div>
</template>

<script>
  import releaseHead from './component/release_head.vue'
  import { Uploader, Icon } from 'vant'

  export default {
    name: 'release',
    components: {
      [Uploader.name]: Uploader,
      [Icon.name]: Icon,
      releaseHead
    },
    data () {
      return {
        info: 'info'
      }
    },
    methods: {
      onRead (file) {
        console.log(file)
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

</style>
