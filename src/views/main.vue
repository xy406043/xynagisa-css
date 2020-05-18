<template>
  <div class="main">
       <router-view />
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
.main{
  height: 100%;
  width: 100%;
}
</style>