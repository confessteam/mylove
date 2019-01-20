<template>
  <van-tabbar v-model="active" active-color="#07c160">
    <van-tabbar-item icon="fire" info="4" to="/" >首页</van-tabbar-item>
    <van-tabbar-item icon="like" to="care">关注</van-tabbar-item>
    <van-tabbar-item icon="add" to="release">表白</van-tabbar-item>
    <van-tabbar-item icon="comment" to="aboutme">消息</van-tabbar-item>
    <van-tabbar-item icon="friends" to="mine">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
  import { Icon } from 'vant';
  import { Tabbar, TabbarItem } from 'vant';
  import axios from 'axios';

  export default {
    components: {
      [Icon.name]: Icon,
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem
    },
    name: 'tabbar',
    data () {
      return {
        active: 0,
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
