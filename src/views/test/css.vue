<template>
  <div class="middle-war">
    <div>
      <div class="every-title">before/after border</div>
      <div class="every-content">
        <div class="nav">
          <!-- 飒飒 -->
        </div>
      </div>
    </div>
    <div>
      <div class="every-title">before/after 图形</div>

      <div class="every-content">
        <div id="wraper">
          <div id="phone"></div>
        </div>
      </div>
    </div>
    <div>
      <div class="every-title">before/after  气泡</div>

      <div class="every-content">
        <div>
          <span class="qipao">你好sasasasa,sa</span>
        </div>
      </div>
    </div>
    <div>
      <div class="every-title">before/after  显示</div>
      <!-- 测试vertical-align -->
      <div class="every-content">
        <div class="ver">
          <img class="ver-img" src="http://xynagisa.xyz/search1_1588733974374.png" />
          <span class="ver-font">你说的</span>
        </div>
      </div>
    </div>
    <div>
      <div class="every-title">border</div>
      <!-- shape-outside-->

      <div class="every-content">
        <div class="tel">
          <div class="tel-img"></div>
          <span
            class="tel-font"
          >CSS 伪元素用于向某些选择器设置特殊效果。语法 伪元素的语法: selector:pseudo-element {property:value;} CSS 类也可以与伪元素配合使用: selector.class:pseudo</span>
        </div>
      </div>
    </div>
    <div>
      <div class="every-title">before/after  等比</div>
      <!-- padding-top 实现等宽高比-->
      <div class="every-content">
        <div class="bi">我是文字</div>
      </div>
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
    onMounted(() => {});

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
.middle-war {
  display: grid;
  grid-template-rows: 300px 300px;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
}
.every-title::before {
  margin-bottom: 10px;
  content: "\26F3";
}
.every-content {
  height: 250px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav {
  // font-size: 22px;
  // font-family: "Times New Roman", Times, serif;
  position: relative;
  height: 0;
  width: 0;
  border-left: 50px solid #1e4fb738;
  border-right: 50px solid #25d03529;
  border-bottom: 100px solid red;
}
.nav::after {
  content: ""; //:after ::before 必须有 content属性
  position: absolute;
  height: 0;
  width: 0;
  border-left: 50px solid rgba(1, 44, 22, 0.2);
  border-right: 50px solid rgba(121, 21, 45, 0.1);
  border-top: 100px solid red;
  top: 30px;
  left: -50px;
}
//通过：after :before 实现小图标
#wraper {
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
.qipao {
  background: cyan;
  padding: 6px;
  border-radius: 4px;
  box-sizing: border-box;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    left: -20px;
    border: 10px solid transparent;
    border-right: 10px solid cyan;
  }
}
.ver {
  margin-top: 20px;
  &-img {
    height: 12px;
    width: 12px;
    vertical-align: sub;
  }
}
.tel {
  width: 200px;
  &-img {
    height: 130px;
    width: 130px;
    float: left;
    background: rgba(228, 54, 94, 0.603);
    shape-outside: circle();
  }
  &-font {
    font-size: 13px;
    white-space: pre-wrap;
    word-break: break-all;
  }
}
.bi {
  background: red;
  border: 1px solid red;
  display: flex;
  width: 100px;
  &::after {
    content: "";
    padding-top: 150%;
  }
}
</style>