<template>
  <div id="all">
    <myheader></myheader>
    <mycontent :confesses1="confesses1" :confesses2="confesses2" :type="2"></mycontent>
    <tabbar v-bind:message="this.parentMessage"></tabbar>
  </div>
</template>

<script>
  import tabbar from '../common/tabbar.vue'
  import myheader from '../common/myheader.vue'
  import lostcomment from './component/lostcomment.vue'
  import mycontent from '../home/component/mycontent.vue'

  export default {
    components: {tabbar, myheader, lostcomment, mycontent},
    name: 'lost',
    data () {
      return {
        parentMessage: null,
        msg: 'care',
        confesses1: [],
        confesses2: [],
//        type: 2
      }
    },
    mounted: function () {
      var token = getCookie('token')
      console.log(token)
      //      请求首页数据
      this.$ajax.get('/api/proxy/user/get_lost_and_found', {
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
    },
    method: {}
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
</style>
