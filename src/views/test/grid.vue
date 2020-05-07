<template>
    <div class="container">
        <div class="item item1">1</div>
        <div class="item item2">2</div>
        <div class="item item3">3</div>
        <div class="item item4">4</div>
        <div class="item item5">5</div>
        <div class="item item6">6</div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
     .container{
         display: grid;
         width: 100%;
         grid-template-rows :70px 100px;
         grid-template-columns: 1fr 2fr 2fr;
         border:1px solid;
         color: white;
         grid-gap: 10px;
         & div:nth-child(2n+1){
             background:green;
         }
        & div:nth-child(2n){
             background:rgb(223, 10, 194);
         }
     }
     .red{
         background: yellow;
         height: 20px;
         width:20px
     }
     .blue{
         background: olive;
            height: 20px;
         width:20px
     }
</style>