<template>
<div class="swiperArea">
        <div v-for="item in listArr" :key='item' class="swiperImg">
            <img :src='curImg' alt="" width="100%" height="100%" /> 
        </div>

    <!-- <div class="point">
        <div v-for="index in listArr.length"  :key='index'  class="item" 
            :style="(currentIndex + 1) == index ? 'background: red;':'background: white;'"
            @click="getCurrentPoint($event, index)"
        ></div>
    </div>   -->
</div>
</template>

<script>
export default {
    name: 'swiper',
    props: {
        // listArr: [
        //     {url: '~assets/img/test_img/1.jpg'},
        //     {url: '~assets/img/test_img/2.jpg'},
        //     {url: '~assets/img/test_img/3.jpg'},
        //     {url: '~assets/img/test_img/3.jpg'},
        // ],
        // currentIndex: 0,
    },
    data(){
        return{
            listArr: [
                {url: require('assets/img/test_img/1.jpg')},
                {url: require('assets/img/test_img/2.jpg')},
                {url: require('assets/img/test_img/3.jpg')},
                {url: require('assets/img/test_img/4.jpg')},
            ],
            currentIndex: 0,
            curImg: require('assets/img/test_img/1.jpg'),
            index: null,
            timer: null
        }
    },
    created(){
        // this.start();
    },
    methods:{
        start(){
            this.timer =  setInterval(()=>{
                if(this.currentIndex < this.listArr.length - 1){
                    this.currentIndex++
                } else {
                    this.currentIndex = 0
                }
                this.curImg = this.listArr[this.currentIndex].url
                // console.log(this.currentIndex,this.curImg)
                // console.log(this.index)
            }, 3000)
        },
        stop(){
            clearInterval(this.timer)
        },
        getCurrentPoint(event, index){
            console.log(event, index)
            this.stop();
            this.currentIndex = index - 1;
            this.curImg = this.listArr[this.currentIndex].url
            this.start();
        }
    }
}
</script>

<style>
    .swiperArea{
        width: 100%;
        height: 200px;
    }
    .swiperImg{
        width: 100%;
        height: 200px;
    }
    .point{
        width: 100%;
        height: 20px;
        position: relative;
        left: 0;
        top: -25px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .item{
        width: 10px;
        height: 10px;
        margin-left: 5px;
        border-radius: 5px;
    }
</style>