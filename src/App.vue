<template>
  <div id="app" class="main">
    <!-- 考虑三栏布局，左边展示分类，标签云，右边展示文章目录结构 -->
    <router-view />
  </div>
</template>

<script >
import { ref, onUpdated, getCurrentInstance } from "vue";
// import Left from "./components/layout/left";
export default {
  components: {
    // Left
  },
  setup() {
    let { ctx } = getCurrentInstance();
    let telList = ref([1, 2, 3, 4, 5]);
    console.log(ctx.$router.currentRoute);
    // console.log(ctx.$el);
    let localRoute = ref(ctx.$router.currentRoute.value.path);
    console.log("当前路由", localRoute);
    onUpdated(() => {
      {
        let localRoute = ref(ctx.$router.currentRoute.value.path);
        console.log("当前路由", localRoute);
      }
    });
    return {
      localRoute,
      telList
    };
  }
};
</script>

<style lang="less">
html,
body,
#app {
  margin: 0;
  height: 100%;
  width: 100%;
}
.main {
  height: 100%;
}
.left {
  float: left;
  width: 300px;
  height: 100%;
}
.right {
  float: right;
  width: 300px;
  height: 100%;
}
.middle {
  margin-left: 300px;
  margin-right: 300px;
}
//清除浮动
.main::after {
  content: "";
  display: block;
  clear: both;
}
</style>

