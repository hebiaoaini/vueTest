<template>
  <div class="navbar">
      <tabbar-item path="/home" activeColor="blue">
          <img slot="itemImg_light" src="~assets/img/bottomTabbar/storySelected.png" >
          <img slot="itemImg_dark" src="~assets/img/bottomTabbar/story.png" >
          <div slot="itemTittle">首页</div>
      </tabbar-item>
      <tabbar-item path="/type" activeColor="blue">
          <img slot="itemImg_light" src="~assets/img/bottomTabbar/settingSelected.png" >
          <img slot="itemImg_dark" src="~assets/img/bottomTabbar/setting.png" >
          <div slot="itemTittle">分类</div>
      </tabbar-item>
      <tabbar-item path="/shopcar" activeColor="blue">
          <img slot="itemImg_light" src="~assets/img/bottomTabbar/timeSelected.png" >
          <img slot="itemImg_dark" src="~assets/img/bottomTabbar/time.png" >
          <div slot="itemTittle">购物车</div>
      </tabbar-item>
      <tabbar-item path="/my" activeColor="blue">
          <img slot="itemImg_light" src="~assets/img/bottomTabbar/mySelected.png" >
          <img slot="itemImg_dark" src="~assets/img/bottomTabbar/my.png" >
          <div slot="itemTittle">我的</div>
      </tabbar-item>
  </div>
</template>

<script>
import tabbarItem from 'components/common/tabbarItem/tabbarItem'

export default {
    name: 'mainTabbar',
    components: {
        tabbarItem
    }
}
</script>

<style>
    .navbar{
        width: 100%;
        height: 50px;
        background-color: #cdcdcd;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
    }
</style>