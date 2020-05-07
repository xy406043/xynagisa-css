<template>
  <div class="main-container">
    <div class="article" @click="toHome">首页</div>
  </div>
</template>

<script>
import {  getCurrentInstance } from "vue";
export default {
  setup() {
    const { ctx } = getCurrentInstance();
    const toArticle = () => {
      ctx.$router.push({ name: "article" });
    };
    const toHome =() => {
      ctx.$router.push({ name:"home"})
    }
    return {
      toArticle,
      toHome
    };
  }
};
</script>

<style lang="less" scoped>
.main-container{
  height: 100%;
    background-image: url("http://xynagisa.xyz/1584457596506.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
// .main-container{
//   height:100%;
//   width: 100%;
//   position: relative;
// }
.show-img{
  height: 100%;
  width: 100%;
}
.article{
  position: absolute;
  left:50%;
  top:50%;
  color: white;
  // transform: translate(-50%;-50%);

}
</style>