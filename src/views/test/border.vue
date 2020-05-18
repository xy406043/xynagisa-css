<template>
  <div class="grid">
    <div>
      <div class="every-a">图形</div>
      <div class="every-1">
        <div class="show1"></div>
        <div class="show2"></div>
        <div class="show3"></div>
        <div class="show4"></div>
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
  content: "\1F300";
}
.every-1 {
  height: 300px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .show1 {
    height: 0;
    width: 0;
    border-top: 30px solid rgb(255, 0, 255);
    border-right: 30px solid rgb(109, 128, 0);
    border-bottom: 30px solid rgb(0, 247, 255);
    border-left: 30px solid rgb(0, 255, 149);
  }
  .show2 {
    margin-left: 10px;
    width: 50px;
    height: 0;
    border-top: 30px solid rgb(255, 153, 0);
    border-right: 30px solid rgb(126, 128, 0);
    border-bottom: 30px solid rgb(0, 255, 42);
    border-left: 30px solid rgb(0, 247, 255);
  }
  .show3 {
    // font-size: 22px;
    // font-family: "Times New Roman", Times, serif;
    position: relative;
    height: 0;
    width: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid red;
  }
  .show3::after {
    content: ""; //:after ::before 必须有 content属性
    position: absolute;
    height: 0;
    width: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 100px solid red;
    top: 30px;
    left: -50px;
  }
  .show4 {
    width: 96px;
    height: 48px;
    background-color: #fff;
    border-color: black;
    border-style: solid;
    border-width: 2px 2px 50px 2px;
    border-radius: 100%;
    position: relative;
    animation: show-yingyang 3s linear infinite;
  }
  @keyframes show-yingyang {
    0%{
      transform: rotate(0deg);
    }

    100%{
      transform: rotate(360deg);
    }
  }

  .show4:before {
    width: 12px;
    height: 12px;
    top: 50%;
    left: 0;
    content: "";
    position: absolute;
    background-color: #fff;
    border: 18px solid black;
    border-radius: 100%;
  }
  .show4:after {
    width: 12px;
    height: 12px;
    top: 50%;
    left: 50%;
    background-color: black;
    border: 18px solid #fff;
    border-radius: 100%;
    content: "";
    position: absolute;
  }
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