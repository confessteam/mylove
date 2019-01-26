<template>
    <div id="all">
      <van-popup v-model="show" position="right" >
  这是个密码
</van-popup>
    </div>
</template>

<script>
import { Popup } from 'vant'
import axios from 'axios'

export default {
  components: {
    [Popup.name]: Popup
  },
  name: 'update',
  data () {
    return {
      show: true,

    }
  },
  methods: {
    getIcon: function () {
      console.log(this.value);
      axios.get('http://www.fand.wang:8890/api/user/get_vcode', {
        params: {
          phonenum: this.value
        }
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (response) {
          console.log(response)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
