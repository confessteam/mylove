<template>
  <van-list
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <div class="container">

      <div class="column-2">
        <div class="unit " v-for="confess1 in this.confesses1">
          <div class="top">
            <img :src="confess1.images.split('##')[0]" alt="" @click="showImagePreview(($event))"
                 :images="confess1.images.split('##')">
            <!--<img src="http://a2.qpic.cn/psb?/V12bjHIg352Dl2/FvAgXAxGj1HwK.NIsdtWYy.nrgTJy*0tg0iNepRhYzs!/c/dBEAAAAAAAAA&ek=1&kp=1&pt=0&bo=kgNsA5IDbAMRECc!&t=5&tl=3&vuin=2094531487&tm=1548144000&sce=60-2-2&rf=0-0" alt="" @click="showImagePreview">-->
          </div>
          <div class="bottom">
            <ul>
              <li>
                <van-icon name="star" color="#EC9D87" class="myicon" @click="do_collect(confess1.userID,confess1.id)"/>
                <span :id="confess1.id">{{confess1.collectCount}}</span></li>
              <li>
                <van-icon name="comment" color="#EC9D87" class="myicon" @click="do_comment(confess1.id)"/>
                <span>{{confess1.commentCount}}</span></li>
              <li>
                <van-icon name="like" color="#EC9D87" class="myicon"
                          @click="do_care($event, confess1.userID, confess1.id)"
                          :id="confess1.id"/>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div class="column-2">
        <div class="unit" v-for="confess2 in this.confesses2">
          <div class="top">
            <img :src="confess2.images.split('##')[0]" alt="" @click="showImagePreview($event)"
                 :images="confess2.images.split('##')">
          </div>
          <div class="bottom">
            <ul>
              <li>
                <van-icon name="star" color="#EC9D87" class="myicon" @click="do_collect(confess2.userID,confess2.id)"/>
                <span :id="confess2.id">{{confess2.collectCount}}</span></li>
              <li>
                <van-icon name="comment" color="#EC9D87" class="myicon" @click="do_comment(confess2.id)"/>
                <span>{{confess2.commentCount}}</span></li>
              <li>
                <van-icon name="like" color="#EC9D87" class="myicon"
                          @click="do_care($event, confess2.userID, confess2.id)"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div>
      <van-popup v-model="show" position="bottom" id="s_popup">
        <div id="icon" v-for="obj in userAndComment">
          <div id="left">
            <img src="@/assets/headImage/mynote.png" alt="">
          </div>
          <div id="right">
            <p><img src="@/assets/headImage/user.png" alt="">{{obj.user.u_name}}</p>
            <p>{{obj.comment.context}}</p>
          </div>
        </div>
        <div style="margin-top: 5px; width: 100%;" id="send">
          <el-input placeholder="请输入内容" v-model="comment" style="">
            <el-button slot="append" type="success" style="background: green;" @click="send">发送</el-button>
          </el-input>
        </div>
      </van-popup>
    </div>
  </van-list>

</template>

<script>

  import { Icon, List, Cell, CellGroup, ImagePreview, Popup, Toast } from 'vant'
  import qs from 'qs'

  export default {
    components: {
      [Icon.name]: Icon,
      [List.name]: List,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [ImagePreview.name]: ImagePreview,
      [Popup.name]: Popup,
      [Toast.name]: Toast,
    },
    name: 'mycontent',
    props: {
      confesses1: Array,
      confesses2: Array,
      type: null,
    },
    data () {
      return {
        loading: false,
        finished: false,
        endPage: 10,
        show: false,
        comment: '',
        userAndComment: {},
        confessId: ''
      }
    },
    methods: {
      do_collect: function (userId, confessId) {
        this.$ajax.post('/api/proxy/user/add_collection?token=' + getCookie('token'), qs.stringify({
            'confess_id': confessId,
            'userId': userId
          })
        )
          .then(function (response) {
            console.log(response.data.code)
            if (response.data.code == 200) {
              document.getElementById(confessId).innerHTML = parseInt(document.getElementById(confessId).innerHTML) + 1
            } else if (response.data.code == 4007) {
              document.getElementById(confessId).innerHTML = parseInt(document.getElementById(confessId).innerHTML) - 1
            }
            console.log(response)
            Toast.success('收藏成功')
          })
          .catch(function (response) {
            console.log(response)
          })

      },
      do_comment: function (confessId) {
        this.confessId = confessId
        this.show = true
        var _this = this
        this.$ajax.post('/api/proxy/user/get_comments?token=' + getCookie('token'), qs.stringify({
            'confess_id': confessId,
          })
        )
          .then(function (response) {
            _this.userAndComment = response.data.data
            console.log(response)
          })
          .catch(function (response) {
            console.log(response)
          })
      },
      do_care: function (e, userId, confessionId) {
        console.log(userId)
        this.$ajax.post('/api/proxy/user/care?token=' + getCookie('token'), qs.stringify({
            'userId': userId,
            'confessionId': confessionId
          })
        )
          .then(function (response) {
            console.log(response.data.code)
            if (response.data.code == 200) {
              e.target.style.color = 'red'
              Toast.success('关注成功')
            } else if (response.data.code == 4007) {

            }

          })
          .catch(function (response) {
            console.log(response)
          })
      },
      onLoad () {
        // 异步更新数据
        setTimeout(() => {
            if (this.type == 1) {
              this.$ajax.get('/api/proxy/user/index', {
                params: {
                  start: this.endPage,
                  step: this.endPage + 10
                }
              })
                .then(response => {
                  console.log(response.data.data.confesses1)
                  this.confesses1 = this.confesses1.concat(response.data.data.confesses1)
                  this.confesses2 = this.confesses2.concat(response.data.data.confesses2)
                  this.endPage = this.endPage + 10
                  // 加载状态结束
                  this.loading = false
                  if (r.code == 4006) {
                    this.finished = true
                  }
                })
                .catch(error => {
                  console.log(error)
                  this.errored = true
                })
            } else if (this.type == 2) {
              this.loading = false
            } else if (this.type == 3) {
              this.loading = false
            } else if (this.type == 4) {
              this.loading = false
            }

          },
          500
        )

      },

      showImagePreview (images) {
        var s = images.target.attributes.images.nodeValue
        ImagePreview(s.split(','))
      },
      send () {
        console.log('send')
        var _this = this
        this.$ajax.post('/api/proxy/user/do_comment?token=' + getCookie('token'), qs.stringify({
            'confess_id': _this.confessId,
            'comment': _this.comment,
          })
        )
          .then(function (response) {
            console.log(response)
            if (response.data.code == 200) {

              var newComment = document.createElement('div')
              var fchild = document.getElementById('s_popup').firstChild
              var father = document.getElementById('s_popup')
              newComment.innerHTML = '<div data-v-6f78908f="" id="icon"><div data-v-6f78908f="" id="left"><img data-v-6f78908f="" src="/static/img/mynote.f6c0337.png" alt=""></div> <div data-v-6f78908f="" id="right"><p data-v-6f78908f=""><img data-v-6f78908f="" src="data:image/png;base64,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" alt="">' + response.data.data.user.name + '</p> <p data-v-6f78908f="">' + response.data.data.comment.context + '</p></div></div>'
//              console.log(father)
              father.insertBefore(newComment, fchild)
              _this.comment = ''

            }

          })
          .catch(function (response) {
            console.log(response)
          })
      },

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

  function getElementByAttr (tag, attr, value) {
    var aElements = document.getElementsByTagName(tag)
    var aEle = []
    for (var i = 0; i < aElements.length; i++) {
      if (aElements[i].getAttribute(attr) == value)
        aEle.push(aElements[i])
    }
    return aEle//具有该自定义属性值得元素数组
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    width: 90%;
    margin: 0.2rem auto;
    border: 0.02rem solid #DDDDDD;
    border-radius: 0.1rem;
    padding: 0;
    zoom: 1;
    display: table;
  }

  .column-2 {
    width: 50%;
    margin: 0;
    float: left;
  }

  .unit {
    width: 95%;
    border: 0.02rem solid #DDDDDD;
    margin: 0.1rem auto;
    font-weight: bold;
    font-size: 0.32rem;
    border-radius: 0.2rem;
  }

  .top {
    width: 100%;
    /*height: 4rem;*/
    overflow: hidden;
    max-height: 8rem;
  }

  .bottom {
    width: 100%;
    height: 1rem;
    border-radius: 0.02rem;
  }

  li {
    float: left;
    line-height: 1.1rem;
    width: 33%;
    text-align: center;
  }

  .top img {
    width: 100%;
    border-radius: 0.2rem;
  }

  #s_popup {
    height: 500px;
    width: 100%;
  }

  #icon {
    height: 1.5rem;
    padding: 0.2rem;
    border-bottom: solid 0.02rem gray;
  }

  #left {
    float: left;
    width: 30%;
  }

  #right {
    float: right;
    width: 70%;
  }

  #left img {
    display: inline-block;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    padding-left: 0.1rem;
  }

  #right img {
    display: inline-block;
    border-radius: 50%;
    width: 0.5rem;
  }

  #send {
    position: fixed;
    left: 0;
    bottom: 0;
  }


</style>


