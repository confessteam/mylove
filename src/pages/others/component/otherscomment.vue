<template>
    <div id="hello">
      <mycontent :image1_list="image1_list" :image2_list="image2_list" :type="2"></mycontent>
    </div>
</template>

<script>
  import { Button } from 'vant'
  import mycontent from '../../home/component/mycontent.vue'

  export default {
    components: {
      [Button.name]: Button,
      mycontent,
    },
    name: 'otherscomment',
    data () {
      return {
        image1_list: [],
        image2_list: [],
        msg: 'care',
      }
    },
    methods: {},
//    mounted: function () {
////      请求首页数据
//      this.$ajax.get('/api/proxy/user/get_care_confessions')
//        .then(response => {
//          console.log(response)
//          this.image1_list = response.data.data.image1_list
//          this.image2_list = response.data.data.image2_list
//        })
//        .catch(error => {
//          console.log(error)
//          this.errored = true
//        })
//        .finally(() => this.loading = false)
//    },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
