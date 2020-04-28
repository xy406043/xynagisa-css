<template>
  <div class="main-container">
    <div class="tab">
      <div class="button" @click="toHome">首页</div>
      <!-- <div class="button" @click="toTest">测试</div> -->
    </div>
    <div style="height:120px"></div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import { ref, getCurrentInstance } from "vue";
export default {
  setup() {
    const { ctx } = getCurrentInstance();
    const el = ref(true);
    const toHome = () => {
      ctx.$router.push({ name: "home" });
    };
    const toTest = () => {
      ctx.$router.push({ name: "test-el" });
    };
    el.value = !el.value;
    // if(el.value){
    // ctx.$router.push({name:"test-el"})}
    // else{
    //        ctx.$router.push({name:"login"})
    // }
    // }
    return {
      toTest,
      toHome
    };
  }
};
</script>

<style lang="less" scoped>
.main-container{
    // padding-top:50px;
}
.tab{
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 50px;
    // background: rgb(181, 240, 227);
    align-items: center;
//    position: fixed;
//    top:0;
}
.button{
    // background: rgba(12,12,1,.11);
    border-radius:12px;
    height:20px;
    width: 50px;
    box-sizing: border-box;
    border:1px solid black;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
}
.button:hover{
    cursor: pointer;
}
.button:active{
    opacity: 0.7;
    padding: 12px;
}
.main{
    width:800px;
    min-height: 800px;
    margin:0 auto;
    // background: rgb(236, 236, 236);
    // border-radius: 12px;
}
</style>