<template>
  <div class="middle">
  saksalk
  </div>
</template>

<script>
import { articleApi } from "../api";
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
      let p = {};
      articleApi.getGroupList(p).then(res => {
        console.log(res.result);
      });
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

</style>