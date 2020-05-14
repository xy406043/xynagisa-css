<template>
  <div class="grid">
    <div>
      <div class="every-a">translate Z 实现滚动视差</div>
      <div class="every-1">

      </div>
    </div>
    <div>
      <div class="every-a">半透明遮罩</div>
      <div class="every-2">
        <div class="button">Hover</div>
      </div>
    </div>

    <div style="position:relative">
      <div class="every-a">IE标签</div>
      <div class="every-3"></div>
    </div>

    <div>
      <div class="every-a">圆环进度条</div>
      <div class="every-4">
        <div class="container">
          <div class="shadow">Hover Me</div>
        </div>
      </div>
    </div>

    <div>
      <div class="every-a">box-shaodw标签</div>
      <div class="every-5">box-shadow</div>
    </div>

    <div>
      <div class="every-a">叉子</div>
      <div class="every-6">
        <div class="cheap"></div>
      </div>
    </div>

    <div>
      <div class="every-a">drop-shadow 整体阴影</div>
      <div class="every-7">
        <div class="pop-with-border">
          <p>filter:drop-shadow实现整体阴影</p>
        </div>
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
  content: "\1F4A8";
}
.every-1 {
  height: 300px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.every-2 {
  height: 300px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.every-3 {
  height: 300px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.every-4 {
  height: 300px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.every-5 {
  height: 300px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.every-6 {
  height: 300px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>

<style lang="scss" scoped>

</style>