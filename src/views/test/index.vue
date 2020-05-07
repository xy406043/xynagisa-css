<template>
    <div class="flex-row">
       <div class="every-r"  @click="toCss">伪元素</div> 
       <div class="every-r" @click="toAnimaiton">进度条</div>
       <div class="every-r" @click="toAnimaiton2">动画</div>
       <div class="every-r" @click="toGrid">栅格布局</div>
       <div class="every-r" @click="toSpecial">特效</div>
       <div class="every-r" @click="toGradual">渐变</div>
    </div>
    <router-view />
</template>

<script>
import{getCurrentInstance} from "vue"
    export default {
      setup(){
          const {ctx} = getCurrentInstance()
          const toCss = () =>{
              console.log("why?")
              ctx.$router.push({name:"test-css"})
          }
          const toAnimaiton = () =>{
              ctx.$router.push({name:"test-animation"})
          }
           const toAnimaiton2 = () =>{
              ctx.$router.push({name:"test-animation2"})
          }
          const toGrid = () =>{
              ctx.$router.push({name:"test-grid"})
          }
          const toSpecial = () =>{
              ctx.$router.push({name:"test-special"})
          }
          const toGradual =() => {
              ctx.$router.push({name:"test-gradual"})
          }
          return {
              toCss,
              toAnimaiton,
              toAnimaiton2,
              toGrid,
              toSpecial,
              toGradual
          }
      }
    }
</script>

<style lang="less" scoped>
    .flex-row{
        display: flex;
        flex-wrap: auto;
    }
    .every-r{
        cursor: pointer;
        margin-right: 16px;
    }
</style>