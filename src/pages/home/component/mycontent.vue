<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <div class="container">

      <div class="column-2">
        <div class="unit "v-for="img1 in this.image1_list">
          <div class="top">
            <img :src="img1" alt="" @click="showImagePreview">
            <!--<img src="http://a2.qpic.cn/psb?/V12bjHIg352Dl2/FvAgXAxGj1HwK.NIsdtWYy.nrgTJy*0tg0iNepRhYzs!/c/dBEAAAAAAAAA&ek=1&kp=1&pt=0&bo=kgNsA5IDbAMRECc!&t=5&tl=3&vuin=2094531487&tm=1548144000&sce=60-2-2&rf=0-0" alt="" @click="showImagePreview">-->
          </div>
          <div class="bottom">
            <ul>
              <li><van-icon name="star"   color="#EC9D87" class="myicon"/><span> {{zan}}</span></li>
              <li><van-icon name="comment"   color="#EC9D87" class="myicon"/><span> {{comment}}</span></li>
              <li><van-icon name="more"    color="#EC9D87" class="myicon"/></li>
            </ul>
          </div>
        </div>

      </div>
      <div class="column-2">
        <div class="unit" v-for="img2 in this.image2_list">
          <div class="top">
            <img :src="img2" alt="" @click="showImagePreview">
          </div>
          <div class="bottom">
            <ul>
              <li><van-icon name="star"   color="#EC9D87" class="myicon"/><span> 15</span></li>
              <li><van-icon name="comment"   color="#EC9D87" class="myicon"/><span> 13</span></li>
              <li><van-icon name="more"    color="#EC9D87" class="myicon"/></li>
            </ul>
          </div>
        </div>
      </div>
    </div>


  </van-list>

</template>

<script>

  import { Icon, List, Cell, CellGroup, ImagePreview } from 'vant'
  import axios from 'axios'

  const images = [
    'http://192.168.0.107:8080/static/img/changtu.308b78b.jpeg',
    'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
    'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
    'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
  ]
  export default {
    components: {
      [Icon.name]: Icon,
      [List.name]: List,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [ImagePreview.name]: ImagePreview,
    },
    name: 'mycontent',
    props:{
        image1_list: Array,
        image2_list: Array,
    },
    data () {
      return {
        loading: false,
        finished: false,
        zan: 15,
        comment: 20,
      }
    },
    methods: {
      onLoad () {
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1)
          }
          // 加载状态结束
          this.loading = false

          // 数据全部加载完成
          if (this.list.length >= 30) {
            this.finished = true
          }
        }, 500)
      },

      showImagePreview: function (position, timer) {
        const instance = ImagePreview({
          images,
          asyncClose: !!timer,
          startPosition: typeof position === 'number' ? position : 0
        })
        if (timer) {
          setTimeout(() => {
            instance.close()
          }, timer)
        }
      },
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    width: 90%;
    margin: 0.2rem auto;
    border: 0.02rem solid #DDDDDD;
    border-radius: 0.1rem;
    padding: 0;
    zoom: 1;
    display: table;
  }

  .column-2 {
    width: 50%;
    margin: 0;
    float: left;
  }

  .unit {
    width: 95%;
    /*height: 5rem;*/
    border: 0.02rem solid #DDDDDD;
    margin: 0.1rem auto;
    font-weight: bold;
    font-size: 0.32rem;
    border-radius: 0.2rem;
  }

  .top {
    width: 100%;
    /*height: 4rem;*/
    overflow: hidden;
    max-height: 15rem;
  }

  .bottom {
    width: 100%;
    height: 1rem;
    border-radius: 0.02rem;
  }

  li{
    float: left;
    line-height: 1.1rem;
    width: 33%;
    text-align: center;
  }
  .top img {
    width: 100%;
    border-radius: 0.2rem;
  }

</style>
