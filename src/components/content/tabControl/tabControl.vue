<template>
    <div class="tab-control">
        <div v-for="(item, index) in titles" :key="index" class="tab-control-item" 
                :class="{active: index === currentIndex}"
                @click="getActivityItem(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabControl',
    props: {
        titles: {
            type: Array,
            default: []
        }
    },
    data(){
        return {
            currentIndex: 0
        }
    },
    methods: {
        getActivityItem(index){
            this.currentIndex = index;
            this.$emit('tabClick', index)
        }
    }
}
</script>

<style>
.tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
}
.tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
}
.tab-control-item span{
    padding: 5px;
}

.active span{
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-high-text);
    margin-top: 5px;
}
</style>