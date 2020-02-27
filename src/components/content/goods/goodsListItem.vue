<template>
    <div class="goodsItem">
        <img :src="goodsItem.show.img">
        <div class="detail">
            <p class="title">{{goodsItem.title}}</p>
            <span class="price">￥{{goodsItem.price}}</span>
            <span class="collect"> 收藏数：{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'goodsListItem',
    props: {
        goodsItem: {
            type: Object,
            default: {}
        }
    }
}
</script>

<style>
.goodsItem{
    position: relative;
    padding-bottom: 40px;
    width: 48%;
}
.goodsItem img{
    width: 100%;
    border-radius: 5px;
}
.detail{
    height: 40px;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    white-space: nowrap;
}
.title{
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.price{
    color: red;
}
</style>