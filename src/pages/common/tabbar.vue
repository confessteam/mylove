<template>
  <van-tabbar v-model="active" active-color="#07c160">
    <van-tabbar-item icon="fire" info="4" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="like" to="care">关注</van-tabbar-item>
    <van-tabbar-item icon="add" @click="selectType">表白</van-tabbar-item>
    <van-tabbar-item icon="comment" to="aboutme">消息</van-tabbar-item>
    <van-tabbar-item icon="friends" to="mine">我的</van-tabbar-item>
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
            name: '表白'
          },
          {
            name: '失物招领',
            disabled: true
          },
          {
            name: '二手商品发布',
            disabled: true
          },
          {
            name: '其他',
            disabled: true
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
          this.$router.push({
            path: '/release',
            query: {name: '表白'}
          })
        } else if (item.name == '失物招领') {
          console.log('失物招领')
        } else if (item.name == '二手商品发布') {
          console.log('二手商品发布')
        } else if (item.name == '其他') {
          console.log('其他')
        }
      },
      selectType () {
        console.log(1233)
        this.show = true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
