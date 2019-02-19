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
      <van-tabs v-model="active" animated style="z-index: 0">
        <van-tab title="动态">
          <mycontent></mycontent>
          动态
        </van-tab>
        <van-tab title="收藏">
          <mycontent></mycontent>
          收藏
        </van-tab>
      </van-tabs>
    </div>
    <tabbar></tabbar>
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
        active: 0,
        icon:'@/assets/headImage/mynote.png'
      }
    },
    methods: {
      getIcon: function () {
        console.log(this.value)
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
