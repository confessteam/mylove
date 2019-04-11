<template>
    <div id="hello">
      <div v-for="(item, index) in items">
        <el-alert class="el"
        :title="index+1 + '、'+item.message"
        type="warning">
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
    methods: {},
     mounted: function () {
      this.parentMessage = this.$route.params.token;
//      请求首页数据
      this.$ajax.get('/api/proxy/user/get_notice')
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #hello{
    /*background: indianred;*/
  }
.el{
  margin-top: 2px;

}
</style>
