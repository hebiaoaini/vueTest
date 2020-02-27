<template>
  <div class="goods">
      <goods-list-item  class="goodsItem" v-for="(item, index) in goods" :key='index'
        :goodsItem="item"
        >

      </goods-list-item>
  </div>
</template>

<script>

import GoodsListItem from './goodsListItem'

export default {
    name: 'goodsList',
    components: {
        GoodsListItem
    },
    props: {
        goods: {
            type: Array,
            default: []
        }
    }
}
</script>

<style>
    .goods{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 4px;
    }
</style>