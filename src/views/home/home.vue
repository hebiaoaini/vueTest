<template>
  <div id='home'>
    <!-- 顶部导航栏 -->
    <nav-top-bar class="nabClass">
      <!-- <div slot="left">nia</div> -->
      <div slot="center" >wos</div>
      <!-- <div slot="right">heb</div> -->
    </nav-top-bar>

    <!-- 轮播图 -->
    <swiper></swiper>
  </div>
</template>

<script>
import NavTopBar from 'components/common/navbar/NavBar'
import Swiper from 'components/common/swiper/swiper'
import {getHomePageData} from 'network/home'

export default {
    name: 'Home',
    components: {
      NavTopBar,
      Swiper
    },
    data(){
      return {
        // pageData: null,
        banners: [],
        recommends: [],
      }
    },
    created(){
      //// 1。请求数据
      // getHomePageData().then(res=>{
      //   console.log(res);
      //   // this.pageData = res.data;
      //   this.banners = res.data.banner.list;
      //   this.recommends = res.data.recommend.list;

      //   console.log(this.banners, this.recommends)
      // })
    }
}
</script>

<style>
  .nabClass{
    background: var(--color-tint);
    color: white;
  }
</style>