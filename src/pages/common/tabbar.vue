<template>
  <div id="hello">
    <van-tabbar v-model="active" active-color="#07c160">
      <van-tabbar-item  icon="fire" info="4">
        首页
      </van-tabbar-item>
      <van-tabbar-item icon="like">关注</van-tabbar-item>
      <van-tabbar-item icon="add">发布</van-tabbar-item>
      <van-tabbar-item icon="comment">消息</van-tabbar-item>
      <van-tabbar-item icon="friends">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import { Icon } from 'vant'
  import { Tabbar, TabbarItem } from 'vant';
  import axios from 'axios'
  export default {
    components: {
      [Icon.name]: Icon,
      [Tabbar.name]:Tabbar,
      [TabbarItem.name]:TabbarItem,
    },
    name: 'tabbar',
    data () {
      return {
       active: 0,
      icon: {
        normal: '//img.yzcdn.cn/icon-normal.png',
        active: '//img.yzcdn.cn/icon-active.png'
      }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
