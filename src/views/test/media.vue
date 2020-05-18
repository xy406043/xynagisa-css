<template>
  <div class="grid">
    <div>
      <div class="every-a">立体阴影条纹字</div>
      <div class="every-1"></div>
    </div>
    <div>
      <div class="every-a">半透明遮罩</div>
      <div class="every-2"></div>
    </div>

    <div style="position:relative">
      <div class="every-a">IE标签</div>
      <div class="every-3"></div>
    </div>

    <div>
      <div class="every-a">圆环进度条</div>
      <div class="every-4"></div>
    </div>

    <div>
      <div class="every-a">box-shaodw标签</div>
      <div class="every-5">box-shadow</div>
    </div>

    <div>
      <div class="every-a">叉子</div>
      <div class="every-6"></div>
    </div>

    <div>
      <div class="every-a">drop-shadow 整体阴影</div>
      <div class="every-7">
        <div class="pop-with-border"></div>
      </div>
    </div>

    <div>
      <div class="every-a">title</div>
      <div class="every-8"></div>
    </div>

    <div>
      <div class="every-a">title</div>
      <div class="every-9"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.grid {
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 320px 320px 320px;
  grid-template-columns: repeat(3, 1fr);
}
.every-a:before {
  content: "\1F4B9";
}
.every-1 {
  font-family: Times New Roman, "serif";
  position: relative;
  font-size: 30px;
  line-height: 40px;
  margin: 30px auto;
  text-align: center;
}
</style>