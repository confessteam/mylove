<template>
  <van-tabbar v-model="active" active-color="#07c160" class="all">
    <van-tabbar-item icon="fire" info="4" v-on:click="index">首页</van-tabbar-item>
    <van-tabbar-item icon="like" v-on:click="care">关注</van-tabbar-item>
    <van-tabbar-item icon="add" @click="selectType">发布</van-tabbar-item>
    <van-tabbar-item icon="comment" v-on:click="msg">消息</van-tabbar-item>
    <van-tabbar-item icon="friends" v-on:click="mine">我的</van-tabbar-item>
    <van-actionsheet
      v-model="show"
      :actions="actions"
      @select="onSelect"
      cancel-text="取消"
    />
  </van-tabbar>
</template>

<script>
  import { Icon } from 'vant'
  import { Tabbar, TabbarItem, Actionsheet } from 'vant'
  import axios from 'axios'

  export default {
    props:['message'],
    components: {
      [Icon.name]: Icon,
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem,
      [Actionsheet.name]: Actionsheet
    },
    name: 'tabbar',
    data () {
      return {
        active: 0,
        show: false,
        actions: [
          {
            name: '表白',
          },
          {
            name: '失物招领',
//            disabled: true
          },
          {
            name: '二手商品发布',
//            disabled: true
          },
          {
            name: '其他',
//            disabled: true
          },
        ]
      }
    },
    methods: {
      onSelect (item) {
        // 点击选项时默认不会关闭菜单，可以手动关闭
        this.show = false
        if (item.name == '表白') {
          console.log('表白')
          this.$router.push({path: '/release',query:{categoryId:1}});
        } else if (item.name == '失物招领') {
          console.log('失物招领')
          this.$router.push({path: '/release',query:{categoryId:2}});
        } else if (item.name == '二手商品发布') {
          console.log('二手商品发布')
          this.$router.push({path: '/release',query:{categoryId:3}});
        } else if (item.name == '其他') {
          console.log('其他')
          this.$router.push({path: '/release',query:{categoryId:4}});
        }
      },
      selectType () {
        this.show = true
      },
      index:function () {
        this.$router.push({name: 'home',param:{token:this.message}});
          console.log(this.message)
      },
      care:function () {
          console.log(this.message)
        this.$router.push({name: 'care',param:{token:this.message}});
      },
      msg:function () {
        //console.log(this)
        console.log(this.message)
        this.$router.push({name: 'aboutme',param:{token:this.message}});
      },
      mine:function () {
        this.$router.push({name: 'mine',param:{token:this.message}});
        console.log(this.message)
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all{
  z-index: 1;
}
</style>
