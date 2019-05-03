<template>
  <div id="all">
    <myheader></myheader>
    <div id="icon">
      <div id="left">
        <img src="@/assets/headImage/mynote.png" alt="">
      </div>
      <div id="right">
        <p><img src="@/assets/headImage/user.png" alt="">樊丁</p>
        <p><img src="@/assets/headImage/mynote.png" alt="">这就是我</p>
      </div>
    </div>
    <div id="func">
      <van-tabs v-model="active" style="z-index: 0" @click="onClick">
        <van-tab title="动态">
          <mycontent :confesses1="confesses1" :confesses2="confesses2" :type="3"></mycontent>
        </van-tab>
        <van-tab title="收藏">
          <mycontent :confesses1="confesses1" :confesses2="confesses2" :type="4"></mycontent>
        </van-tab>
      </van-tabs>
    </div>
    <tabbar v-bind:message="this.parentMessage"></tabbar>
  </div>
</template>

<script>
  import { Button } from 'vant'
  import { Tab, Tabs } from 'vant'
  import tabbar from '../common/tabbar.vue'
  import myheader from '../common/myheader.vue'
  import mycontent from '../home/component/mycontent.vue'

  export default {
    components: {
      [Button.name]: Button,
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      tabbar,
      myheader,
      mycontent
    },
    name: 'mine',
    data () {
      return {
        parentMessage: null,
        active: 0,
        icon: '@/assets/headImage/mynote.png',
        confesses1: [],
        confesses1: []
      }
    },
    methods: {
      onClick: function (index, title) {
        var token = getCookie('token')
        if (index == 0) {
          console.log(token)
          this.$ajax.get('/api/proxy/user/get_self_issue', {
            params: {
              token: token,
            }
          })
            .then(response => {
              console.log(response)
              this.confesses1 = response.data.data.confesses1
              this.confesses2 = response.data.data.confesses2
            })
            .catch(error => {
              console.log(error)
              this.errored = true
            })
            .finally(() => this.loading = false)
        } else if (index == 1) {
          console.log(token)
          this.$ajax.get('/api/proxy/user/get_collections', {
            params: {
              token: token,
            }
          })
            .then(response => {
              console.log(response)
              this.confesses1 = response.data.data.confesses1
              this.confesses2 = response.data.data.confesses2
            })
            .catch(error => {
              console.log(error)
              this.errored = true
            })
            .finally(() => this.loading = false)
        }
      },
    },
    mounted: function () {
      var token = getCookie('token')
      console.log(token)
      //      请求首页数据
      this.$ajax.get('/api/proxy/user/get_self_issue', {
        params: {
          token: token,
        }
      })
        .then(response => {
          console.log(response)
          this.confesses1 = response.data.data.confesses1
          this.confesses2 = response.data.data.confesses2
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)

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
    padding-bottom: 1.1rem;
    padding-top: 1.4rem;
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

  #func {
    margin-top: 0.1rem;
    height: 4rem;
  }
</style>
