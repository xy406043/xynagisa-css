<template>
    <div class="flex-row every-G">
        <div class="every-r" @click="toText">文字</div> 
       <div class="every-r" @click="toCss">伪元素</div> 
       <div class="every-r" @click="toAnimaiton2">动画</div>
       <div class="every-r" @click="toGrid">栅格布局</div>
       <div class="every-r" @click="toSpecial">特效</div>
       <div class="every-r" @click="toGradual">渐变</div>
       <div class="every-r" @click="toShadow">阴影</div>
       <div class="every-r" @click="toPseudo">伪元素</div>
       <div class="every-r" @click="toFilter">过滤</div>
       <div class="every-r" @click="toBorder">边框</div>
       <div class="every-r" @click="toClip">裁剪</div>
       <div class="every-r" @click="toThreeD">3D </div>
       <div class="every-r" @click="toMixin">混合模式</div>
       <div class="every-r" @click="toMultiple">综合</div>
    </div>
    <div class="every-P flex-row">
      <div class="every-r" @click="toAnimaiton">进度条</div>
    </div>
    <router-view />
</template>

<script>
import{getCurrentInstance} from "vue"
    export default {
      setup(){
          const {ctx} = getCurrentInstance()
          const toText =() =>{
              ctx.$router.push({name:"test-text"})
          }
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
          const toShadow =() => {
              ctx.$router.push({name:"test-shadow"})
          }
          const toPseudo =() => {
              ctx.$router.push({name:"test-pseudo"})
          }
          const toFilter =() => {
              ctx.$router.push({name:"test-filter"})
          }
           const toBorder =() => {
              ctx.$router.push({name:"test-border"})
          }
            const toMixin =() => {
              ctx.$router.push({name:"test-mixin"})
          }
            const toMultiple =() => {
              ctx.$router.push({name:"test-multiple"})
          }
           const toThreeD =() => {
              ctx.$router.push({name:"test-3d"})
          }
           const toClip =() => {
              ctx.$router.push({name:"test-clip"})
          }
          return {
              toText,
              toCss,
              toAnimaiton,
              toAnimaiton2,
              toGrid,
              toSpecial,
              toGradual,
              toShadow,
              toPseudo,
              toFilter,
              toBorder,
              toMixin,
              toMultiple,
              toThreeD,
              toClip
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

.every-G,.every-P{
    align-items: center;
}
.every-r:nth-child(1){
    margin-left: 20px;
}
.every-G::before{
  content:"分类：\2705  ";
  color: rgb(0, 255, 170);
  font-weight: bolder;
  font-family: Georgia, 'Times New Roman', Times, serif;
//    background: linear-gradient(90deg, #ead39b 0%, #c49452 100%);
//     background-clip: text;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     margin-right: 15px;
}
.every-P::before{
  content:"专式：\2705  ";
  color: aqua;
  font-weight: bolder;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>