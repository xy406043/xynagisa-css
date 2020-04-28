

<template>
  <div class="counter-display">
    <span class="counter-label" :style="{color: color}">恭喜你，你已经写了</span>
    <span class="counter-text">{{ count }}</span>
    <span class="counter-label">斤代码！</span>
  </div>
  <div class="counter-btns">
    <button class="btn" @click="increase">写一斤</button>
    <button class="btn" @click="reset">删库啦</button>
  </div>
    <h5>TemplateRefTwo --- {{count}}</h5>
    <!-- 3. 点击按钮，让 count 值自增 +1 -->
    <button @click="count+=1">+1</button>
  <OtherSA ></OtherSA>
</template>

<script>
import {ref,inject} from "vue"
import OtherSA from "./other-s/index.vue"
export default {
name:"Count",
components:{
    OtherSA
},
  setup() {
    const countOps = useCount();
    const color= inject("globalData")
    const count1 =ref(0)
    console.log("确认",color)
    return { ...countOps ,color,count1};
  }
};
function useCount() {
  const count = ref(0);
  const increase = () => {
    count.value++;
  };
  const reset = () => {
    count.value = 0;
  };
  return { count, increase, reset };
}
</script>

<style lang="" scoped>
</style>