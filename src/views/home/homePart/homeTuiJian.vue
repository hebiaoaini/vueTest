<template>
    <div class="recommod">
        <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>

export default {
    name: 'homeTuijian',
    components: {

    },
    props: {
        recommends: {
            type: Array,
            default: []
        }
    }
}
</script>

<style>
    .recommod{
        display: flex;
        /* align-items: center; */
        justify-content: space-evenly;
        width: 100%;
        padding: 15px 0 40px;
        border-bottom: 8px solid #eeeeee;
        line-height: 25px;
    }
    .recommend-item{
        width: 65px;
        height: 65px;
    }
    .recommend-item img{
        width: 100%;
        height: 100%;
    }
</style>