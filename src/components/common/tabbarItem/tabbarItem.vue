<template>
  <div class="navBar-item" @click="tabbarItemClick">
    <div  v-if="isActive">
      <slot name='itemImg_light'></slot>
    </div>
    <div  v-else>
      <slot name="itemImg_dark"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="itemTittle"></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'tabbarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      },
      defaultColor: {
        type: String,
        default: 'black'
      }
    },
    data(){
      return{
        // isActive: false,
      }
    },
    computed: {
      isActive(){
        //this.$route 代表那个路由活跃，就获取到那个路由的的数据
        return this.$route.path.indexOf(this.path) != -1
      },
      activeStyle(){
        // return this.isActive ? {color: this.activeColor}: {color: this.defaultColor}
        return this.isActive ? 'color: ' + this.activeColor: 'color: ' + this.defaultColor
      }
    },
    methods: {
      tabbarItemClick(){
        console.log(this.path)
        console.log("tabbarItem 组件点击了", this.$router)
        ////页面跳转不可以返回
        this.$router.replace(this.path)
        ////页面跳转可以返回
        // this.$router.push(this.path)
      }
    }
}
</script>

<style>
  .navBar-item{
    height: 100%;
    text-align: center;
    font-size: 14px;
  }
  .navBar-item img{
    width: 29px;
    height: 29px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .color{
    color: blue;
  }
</style>