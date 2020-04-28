<template>
  <div class="thisEditor">
    <mavonEditor ref="editor" v-model="doc" @save="saveDoc" @change="changeDoc" @imgAdd="$imgAdd"></mavonEditor>
  </div>
</template>

<script>
/**
 * 注意，一般都是使用 this.$refs这样的方式来获取或修改数据
 * 如果只使用this则只能获取到markdown和修改markdown获取不到编译后的html
 */
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { commonApi } from "@/api";
export default {
  name: "mavon-editor",
  components: {
    mavonEditor
  },
  props: {
    originText: { type: String, default: "" }
  },
  data() {
    return {
      doc: ""
    };
  },
  mounted() {},
  methods: {
    other() {
      // 获取 markdown
      let markdown = this.$refs.editor.d_value;

      // 修改 markdown
      this.$refs.editor.d_value = "hello world";

      // 获取编译后的 html
      let html = this.$refs.editor.d_render;
    },
    changeDoc(markdown, html) {
      // console.log("改变");
      this.$emit("getEditor",markdown,html)
    },
    saveDoc(markdown, html) {
      // console.log("markdown", markdown);
      // console.log("html", html);
      this.$emit("getEditor",markdown,html)
    },
    putContent(markdown,html){
        this.$refs.editor.d_value=markdown
    },
    async $imgAdd(pos, $file) {
      let data = new FormData();
      data.append("file", $file);
      /***
       * @从自己的后台获取token
       */
      let p = {
        name: $file.name
      };
      await commonApi.getQiniuToken(p).then(res => {
        data.append("key", res.result.name);
        data.append("token", res.result.token);
      });
      /**
       * @上传到七牛云服务器
       */
      //   const axiosInstance = this.$https.create({ withCredentials: false });
      this.$https({
        url: "http://upload.qiniu.com",
        data,
        timeout: 10000,
        method: "post"
      }).then(res => {
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        /**
         * $vm 指为mavonEditor实例，可以通过如下两种方式获取
         * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
         * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
         */
        // console.log("返回结果", res);
        const url = "http://xynagisa.xyz/" + res.data.key;
        console.log(url);
        this.$refs.editor.$img2Url(pos, url);
      });
    }
  }
};
</script>

<style lang="less" scoped>
.thisEditor{
    .v-note-wrapper{
        z-index: 1;
    }
}
</style>