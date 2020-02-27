<template>
  <div id='home'>
    <!-- 顶部导航栏 -->
    <nav-top-bar class="nabClass">
      <!-- <div slot="left">nia</div> -->
      <div slot="center" >购物街</div>
      <!-- <div slot="right">heb</div> -->
    </nav-top-bar>

    <b-scroll class="content">
          <!-- 轮播图 -->
        <home-swiper :banners='banners'
            ref="hSwiper"></home-swiper>
        <!-- 推荐 -->
        <home-tui-jian :recommends="recommends">
        </home-tui-jian>

        <feature-view></feature-view>

        <tab-control :titles="['流行','新款','精选']" class="tab-control" 
          @tabClick="getTabControlIndex"></tab-control>

        <goods-list :goods="showGoods">
        </goods-list>
        <back-top></back-top>
    </b-scroll>

  </div>
</template>

<script>
import HomeSwiper from 'views/home/homePart/homeSwiper'
import HomeTuiJian from './homePart/homeTuiJian'
import FeatureView from './homePart/FeatureView'

import NavTopBar from 'components/common/navbar/NavBar'
import BScroll from 'components/common/BScroll/BScroll'
import TabControl from 'components/content/tabControl/tabControl'
import GoodsList from 'components/content/goods/goodsList'
import BackTop from 'components/content/backTop/backTop'


import {
  getHomePageData, 
  getHomeGoods
  } from 'network/home'

export default {
    name: 'Home',
    components: {
      NavTopBar,
      HomeSwiper,
      HomeTuiJian,
      FeatureView,

      TabControl,
      GoodsList,
      BScroll,
      BackTop
    },
    data(){
      return {
        // pageData: null,
        banners: [],
        recommends: [],
        goods:{
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        goodsIndex: 'pop',
      }
    },
    created(){
      //// 1。请求数据
        this.getHomedata()
      //// 2. 请求商品数据
        this.getHomeGoodsdata('pop')
        this.getHomeGoodsdata('new')
        this.getHomeGoodsdata('sell')
    },
    activated: function () {
      this.$refs.hSwiper.startTimer()
    },
    deactivated: function () {
      this.$refs.hSwiper.stopTimer()
    },
    computed:{
      showGoods(){
        return this.goods[this.goodsIndex].list
      }
    },

    methods:{
      /* 
        网络监听方法
      */
      getHomedata(){
        getHomePageData().then(res=>{
          console.log(res);
          // this.pageData = res.data;
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;

          console.log(this.banners, this.recommends)
        })
      },
      getHomeGoodsdata(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res=>{
          let data1 = res.data.list
          this.goods[type].list.push(...data1)
          this.goods[type].page += 1
          // console.log( "商品数据" + this.goods[type].list)
        })
      },

      /*
        事件监听方法
      */
     getTabControlIndex(index){
        switch (index) {
          case 0 :
            this.goodsIndex = 'pop';
            break;
          case 1 :
            this.goodsIndex = 'new';
            break;
          case 2 :
            this.goodsIndex = 'sell';
            break;
        }
     }
    },
}
</script>

<style scoped>
  #home{
    /* margin-top: 44px; */
    /* height: 100vh; */
    
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    /* vh -> viewport 视口 */
  }
  .nabClass{
    background: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 5;
  }
  .tab-control{
    position: sticky;
    top: 44px;
    background: white;
    z-index: 9;
  }
  .content{
    /* height: 300px; */
    overflow: hidden;
    position: absolute;
    bottom: 49px;
    top: 44px;
    right: 0;
    left: 0;
  }
  /* .content{
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  } */
</style>