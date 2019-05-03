<template>
  <div id="all">
    <div id="form">
      <div id="header">
        <div id="left">
          <router-link to="/home"><img src="@/assets/ext_images/back.png" alt=""></router-link>
        </div>
        <div id="right">
          <van-button type="primary" round="true" size="small" @click="newSubmit">发布</van-button>
        </div>
      </div>
      <textarea name="" id="content" placeholder="请输入发表内容" v-model="content"></textarea>
      <!--<van-uploader :after-read="onRead" multiple accept="image/gif,image/jpeg,image/jpg,image/png,image/svg">-->
      <!--<van-icon name="photograph" size="1.5rem"/>-->
      <!--</van-uploader>-->
      <el-upload
        action='/api/proxy/user/uploadFirst'
        list-type="picture-card"
        accept="image/jpeg,image/jpg,image/gif,image/png"
        multiple
        :on-remove="handleRemove"
        :before-upload="beforeUpload"
        :auto-upload="true">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <div>
          <img width="100%" :src="dialogImageUrl" alt="">
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import { Uploader, Icon, Button } from 'vant'
  import qs from 'qs'

  export default {
    name: 'release',
    components: {
      [Uploader.name]: Uploader,
      [Icon.name]: Icon,
      [Button.name]: Button,
    },
//    data () {
//      return {
//        info: 'info'
//      }
//    },
//    methods: {
//      onRead (file) {
//        console.log(file)
//        for (let f in file) {
//          console.log(file[f])
//        }
//
//      }
//    },
    mounted () {
      console.log(this.$route)
      this.info = this.$route.query.categoryId
      this.fd.append('info', this.info)
    }
    ,
    data () {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        info: '',
        fd: new FormData(),
        content: ''
      }
    },
    methods: {
      handleRemove (file, fileList) {
        this.fd.delete('file')
        for (var i = 0; i < fileList.length; i++) {
          this.fd.append('file', fileList[i].raw)
        }
        console.log(this.fd.getAll('file'))
      },
      beforeUpload (file) {
        this.fd.append('file', file)
        console.log(file)
      },
      newSubmit () {
        var _this = this
        console.log('submit')
        console.log(this.fd.getAll('file'))
        let config = {headers: {'Content-Type': 'multipart/form-data'}}
        this.fd.append('content', this.content)
        this.$ajax.post('/api/proxy/user/uploadImg?token=' + getCookie('token'), this.fd, config
        )
          .then(function (response) {
              _this.$router.push({path: '/home'});
          })
          .catch(function (response) {
            console.log(response)
          })
      }
    }
  }

  function setCookie (cname, cvalue, exdays) {
    var d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    var expires = 'expires=' + d.toGMTString()
    document.cookie = cname + '=' + cvalue + '; ' + expires
  }

  function getCookie (cname) {
    var name = cname + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim()
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length)
    }
    return ''
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
