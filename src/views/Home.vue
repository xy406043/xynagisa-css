<template>
  <div>
    <div class="nav">
      飒飒
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
      axios.get("http://localhost:5555/pim/common/tell").then(res => {
        console.log(res.result);
      });
    });

    return {
      state,
      ...useOther
    };
  },
  components: {
  }
};
 function useOther(){
       return {
       }
}
</script>

<style lang="less" scoped>
.nav {
  font-size: 39px;
  font-family: "Times New Roman", Times, serif;
}
</style>