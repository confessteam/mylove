<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <div class="container">

      <div class="column-2">
        <div class="unit " v-for="img1 in this.image1_list">
          <div class="top">
            <img :src="img1[0]" alt="" @click="showImagePreview(($event))" :images="img1">
            <!--<img src="http://a2.qpic.cn/psb?/V12bjHIg352Dl2/FvAgXAxGj1HwK.NIsdtWYy.nrgTJy*0tg0iNepRhYzs!/c/dBEAAAAAAAAA&ek=1&kp=1&pt=0&bo=kgNsA5IDbAMRECc!&t=5&tl=3&vuin=2094531487&tm=1548144000&sce=60-2-2&rf=0-0" alt="" @click="showImagePreview">-->
          </div>
          <div class="bottom">
            <ul>
              <li>
                <van-icon name="star" color="#EC9D87" class="myicon"/>
                <span> {{zan}}</span></li>
              <li>
                <van-icon name="comment" color="#EC9D87" class="myicon"/>
                <span> {{comment}}</span></li>
              <li>
                <van-icon name="more" color="#EC9D87" class="myicon"/>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div class="column-2">
        <div class="unit" v-for="img2 in this.image2_list">
          <div class="top">
            <img :src="img2[0]" alt="" @click="showImagePreview($event)" :images="img2">
          </div>
          <div class="bottom">
            <ul>
              <li>
                <van-icon name="star" color="#EC9D87" class="myicon"/>
                <span> 15</span></li>
              <li>
                <van-icon name="comment" color="#EC9D87" class="myicon"/>
                <span> 13</span></li>
              <li>
                <van-icon name="more" color="#EC9D87" class="myicon"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </van-list>

</template>

<script>

  import { Icon, List, Cell, CellGroup, ImagePreview } from 'vant'

  export default {
    components: {
      [Icon.name]: Icon,
      [List.name]: List,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [ImagePreview.name]: ImagePreview,
    },
    name: 'mycontent',
    props: {
      image1_list: Array,
      image2_list: Array,
      type: null
    },
    data () {
      return {
        loading: false,
        finished: false,
        zan: 15,
        comment: 20,
        endPage: 10,
      }
    },
    methods: {
      onLoad () {
        // 异步更新数据
        setTimeout(() => {
            if (this.type == 1) {
              this.$ajax.get('/api/proxy/user/index', {
                params: {
                  start: this.endPage,
                  step: this.endPage + 10
                }
              })
                .then(response => {
                  this.image1_list = this.image1_list.concat(response.data.data.image1_list)
                  this.image2_list = this.image2_list.concat(response.data.data.image2_list)
                  // 加载状态结束
                  this.loading = false
                  if (r.code == 4006) {
                    this.finished = true
                  }
                })
                .catch(error => {
                  console.log(error)
                  this.errored = true
                })
            } else if (this.type == 2) {
              this.loading = false
            } else if (this.type == 3) {
                this.loading = false
            } else if(this.type==4){
             this.loading = false
            }

          },
          500
        )

      },

      showImagePreview (images) {
        var s = images.target.attributes.images.nodeValue
        ImagePreview(s.split(','))
      }

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
    max-height: 8rem;
  }

  .bottom {
    width: 100%;
    height: 1rem;
    border-radius: 0.02rem;
  }

  li {
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
