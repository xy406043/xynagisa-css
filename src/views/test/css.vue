<template>
  <div class="middle">
    <div class="nav">
      <!-- 飒飒 -->
    </div>
    <div id="wraper">
      <div id="phone"></div>
    </div>
    <span class="qipao">你好sasasasa,sa</span>
    <!-- 测试vertical-align -->
    <div class="ver">
      <img class="ver-img" src="http://xynagisa.xyz/search1_1588733974374.png"  />
      <span class="ver-font">你说的</span>
    </div>
    <!-- shape-outside-->
    <div class="tel">
        <div class="tel-img"> </div>
        <span class="tel-font">
             CSS 伪元素用于向某些选择器设置特殊效果。语法 伪元素的语法: selector:pseudo-element {property:value;} CSS 类也可以与伪元素配合使用: selector.class:pseudo</span>
    </div>
    <!-- padding-top 实现等宽高比-->
    <div class="bi">
       我是文字
    </div>
  </div>
</template>

<script>
import { onMounted, getCurrentInstance, reactive } from "vue";
export default {
  name: "home",
  setup() {
    console.log("获取", getCurrentInstance());
    const state = reactive({
      count: 0,
      value: null
    });
    onMounted(() => {
    });

    return {
      state,
      ...useOther
    };
  },
  components: {}
};
function useOther() {
  return {};
}
</script>

<style lang="less" scoped>
.nav {
  // font-size: 22px;
  // font-family: "Times New Roman", Times, serif;
  position: relative;
  height: 0;
  width: 0;
  border-top: 100px solid black;
  border-left: 50px solid #1e4fb738;
  border-right: 50px solid #25d03529;
  border-bottom: 100px solid red;
}
.nav::after {
  content: ""; //:after ::before 必须有 content属性
  position: absolute;
  height: 0;
  width: 0;
  border-bottom: 100px solid green;
  border-left: 50px solid rgba(1, 44, 22, 0.2);
  border-right: 50px solid rgba(121,21,45,.1);
  border-top: 100px solid red;
  top: 30px;
  left: -50px;
}
.middle {
  margin-left: 300px;
  margin-right: 300px;
  margin-top: 70px;
}
//通过：after :before 实现小图标
#wraper {
  margin-top: 120px;
}
#phone {
  width: 50px;
  height: 50px;
  border-left: 6px solid #eeb422;
  border-radius: 20%;
  transform: rotate(-30deg);
  -webkit-transform: rotate(-30deg);
  margin: 20px;
  margin-right: 0px;
  position: relative;
  display: inline-block;
  top: -5px;
}
#phone:before {
  width: 15px;
  height: 15px;
  background: #eeb422;
  border-radius: 20%;
  content: "";
  position: absolute;
  left: -2px;
  top: 1px;
}
#phone:after {
  width: 15px;
  height: 15px;
  background: #eeb422;
  border-radius: 20%;
  content: "";
  position: absolute;
  left: -3px;
  top: 34px;
}
// 实现气泡
.qipao{
  background: cyan;
  padding: 6px;
  border-radius: 4px;
  box-sizing: border-box;
  position: relative;
  &::before{
    position: absolute;
    content: "";
    left: -20px;
    border: 10px solid transparent;
    border-right: 10px solid cyan;
  }
}
.ver{
  margin-top: 20px;
  &-img{
    height: 12px;
    width: 12px;
    vertical-align: sub ;
  }
}
.tel{
    width: 200px;
    &-img{
        height: 130px;
        width:130px;
        float: left;
        background: rgba(228, 54, 94, 0.603);
        shape-outside: circle();
    }
    &-font{
        font-size:13px;
        white-space: pre-wrap;
        word-break: break-all;
    }
}
.bi{
    background: red;
     border: 1px solid red;
     display: flex;
     width: 100px;
    &::after{
        content: '';
        padding-top: 150%;
    }
}


</style>