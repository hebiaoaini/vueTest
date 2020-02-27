<template>

<!-- ref/children(父组件绑定子组件) ref一般绑定给子组件-->
<!--  -->
  <div class="wrapper" ref='wrapper'>
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'BScroll',
    data(){
        return{
            scroll: null
        }
    },
    mounted: function(){
        // //最好不要通过jquery去拿元素，如果元素名有很大相同的，
        // //拿到的元素可能不准确
        // this.scroll = new BScroll(document.querySelector('.content'),{})
        // //通过给元素绑定ref值，获取的基本上是正确的
        this.scroll = new BScroll(this.$refs.wrapper, {

        })
    }
}
</script>


<style scoped>
/*scoped ：作用域  */
    /* .wrapper{
        overflow: hidden;
    }
    .content{
        width: 300px;
    } */
</style>