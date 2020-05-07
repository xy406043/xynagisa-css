<template>
    <div>
    <div class="bar-title"> 进度条</div>
    <div class="progress1"></div>
    <div  class="bar-title"> 进度条状态</div>
    <div class="progress3"></div>
    <div class="bar-title"> 渐变进度条</div>
    <div class="progress2"></div>
    <div class="bar-title"> 渐变进度条状态</div>
    <div class="progress4"></div>
    </div>
</template>

<script>
    export default {
       setup(){

       }
    }
</script>

<style lang="less" scoped>
/**
*@order 不好用的时候 可以使用 outline + outline-offset属性
*/
@myPercent:50%;
@myColor:rgb(80, 170, 230);
@myColor2: rgb(89,190,12,.8);
.progress2{
        height:30px;
        background-color:silver ;
        border-radius: 30px;
        background-image: radial-gradient(closest-side circle at @myPercent,@myColor,@myColor 100%,transparent),linear-gradient(90deg,@myColor2,@myColor) ;
        background-repeat: no-repeat;
        background-size:   100%,@myPercent;  //','表示的是 全部100%只展示设置的百分比
}
.progress4{
        height:30px;
        background-color:silver ;
        border-radius: 30px;
        background-image: radial-gradient(closest-side circle at 0%,@myColor,@myColor 100%,transparent),linear-gradient(90deg,@myColor2,@myColor) ;
        background-repeat: no-repeat;
        background-size:   100%,0%;  //','表示的是 全部100%只展示设置的百分比
        animation: move2 1.5s linear;
        animation-fill-mode: forwards;
}
// 径变  的圆形如何实现从左到右移动

@keyframes move2 {
    to{
    background-image: radial-gradient(closest-side circle at @myPercent,@myColor,@myColor 100%,transparent),linear-gradient(90deg,@myColor2,@myColor) ;
    background-size:100%,@myPercent;
    }
}

.progress1{
        height:30px;
        background-image:linear-gradient(45deg,black,red);
        background-repeat: no-repeat;
        background-size: @myPercent;
        border-radius: 30px;
        border:1px solid;
    }
    .progress3{
        height:30px;
        border:1px solid;
        background-image:linear-gradient(45deg,black,red);
        background-repeat: no-repeat;
        background-size: 0;
        border-radius: 30px;
        animation: move 1.5s linear ;
        animation-fill-mode: forwards;
        // animation-delay: -4s;
        // animation-play-state: paused;
    }
    @keyframes move {
        to{
            background-size: @myPercent;
        }
    }
.bar-title::before{
    content:"\267F"
}
</style>

 
 <!--
 <style scoped>
.progress1{
        --myPercent:60%;
        --myColor:rgb(80, 170, 230);
        height:30px;
        background-image:linear-gradient(45deg,black,red);
        background-repeat: no-repeat;
        background-size: var(--myPercent);
        border-radius: 30px;
        /* background-image:linear-gradient(blue) ; */
        
    }
</style>
-->