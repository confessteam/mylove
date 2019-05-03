<template>
  <div id="hello">
    <div v-for="(item, index) in items">
      <el-alert class="el"
                :title="index+1 + '、' + item.message"
                type="warning"
                close-text="知道了"
                @close="messageClose(item.id)">
      </el-alert>
    </div>
  </div>
</template>

<script>
  import { Button } from 'vant'

  export default {
    components: {
      [Button.name]: Button,
    },
    name: 'aboutmecomment',
    data () {
      return {
        msg: 'aboutme',
        items: []
      }
    },
    methods: {
      messageClose (messageId) {
        console.log(messageId)
        this.$ajax.get('/api/proxy/user/changeMessageState?token=' + getCookie('token'), {
          params: {
            messageId: messageId,
          }
        })
          .then(response => {
            console.log(response.data.data)
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
          .finally(() => this.loading = false)
      }
    },

    mounted: function () {
      this.parentMessage = this.$route.params.token
      this.$ajax.get('/api/proxy/user/get_notice?token=' + getCookie('token'))
        .then(response => {
          console.log(response.data.data)
          this.items = response.data.data
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    },
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

  #hello {
    /*background: indianred;*/
  }

  .el {
    margin-top: 2px;

  }
</style>
