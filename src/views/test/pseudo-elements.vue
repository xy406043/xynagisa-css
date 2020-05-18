<template>
  <div class="grid">
    <div>
      <div class="every-a">伪元素实现边界智能移动</div>
      <div class="every-1">
        <div class="box">
          <div class="box__right">Right → Left</div>
          <div class="box__left">Left → Right</div>
          <div class="box__top">Top → Bottom</div>
          <div class="box__bottom">Bottom → Top</div>
          <div class="box__center">Hover from any side</div>
        </div>
      </div>
    </div>
    <div>
      <div class="every-a">伪元素遮罩线条loading</div>
      <div class="every-2">
          <div class="loading"></div>
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
  content: "\1F498";
}
.every-2{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    overflow: hidden;
}
.loading{
    height: 200px; 
    width: 200px;
    border-radius: 50%;
    position: relative;
    transform: rotate(360deg);
    animation: rotate 45s infinite linear  ;
}
.loading::before{
    content:"";
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom: 0;
    border-radius: 50%;
    box-sizing: border-box;
    border-radius: 50%;
    border-top: 3px solid #000;
    border-left: 3px solid #000;
    border-bottom: 3px solid transparent;
    border-right: 3px solid transparent;
    transform: rotate(720deg);
    animation: rotate 3s infinite ease-out;
}
.loading::after{
    position: absolute;
    content: "";
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    box-sizing: border-box;
    border-radius: 50%;
    border-bottom: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid #fff;
    border-left: 7px solid #fff;
    transform: rotate(720deg);
    animation: rotate 3s infinite ease-in-out;
}
@keyframes rotate {
  100%{
      transform: rotate(0deg);
  }
}
.every-3{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
}
.every-4{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
}
.every-5{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
}
.every-6{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
}
.every-1{
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.box {
    margin: 5em auto;
    position: relative;
    width: 10em;
    height: 10em;
    line-height: 10em;
    overflow: hidden;
}
.box__right,
.box__left,
.box__top,
.box__bottom,
.box__center {
    position: absolute;
    width: inherit;
    height: inherit;
    text-align: center;
    line-height: inherit;
    transition: transform 0.4s ease;
}
.box__right:before,
.box__left:before,
.box__top:before,
.box__bottom:before,
.box__center:before {
    position: absolute;
    content: "";
    width: 70.71%;
    height: 70.71%;
    transform: rotate(45deg);
}
.box__right:hover,
.box__left:hover,
.box__top:hover,
.box__bottom:hover,
.box__center:hover {
    transform: translateX(0);
    z-index: 1;
}
.box__right:hover:before,
.box__left:hover:before,
.box__top:hover:before,
.box__bottom:hover:before,
.box__center:hover:before {
    width: 100%;
    height: 100%;
    transform: none;
}

.box__right {
    background: blue;
    transform: translateX(100%);
}

.box__right:before {
    right: 100%;
    bottom: 0;
    transform-origin: 100% 100%;
}

.box__right:hover ~ .box__center {
    transform: translateX(-100%);
}

.box__left {
    background: green;
    transform: translateX(-100%);
}

.box__left:before {
    left: 100%;
    transform-origin: 0 0;
}

.box__left:hover ~ .box__center {
    transform: translateX(100%);
}

.box__top {
    background: red;
    transform: translateY(-100%);
}

.box__top:before {
    top: 100%;
    right: 0;
    transform-origin: 100% 0;
}

.box__top:hover ~ .box__center {
    transform: translateY(100%);
}

.box__bottom {
    background: yellow;
    transform: translateY(100%);
}

.box__bottom:before {
    bottom: 100%;
    left: 0;
    transform-origin: 0 100%;
}

.box__bottom:hover ~ .box__center {
    transform: translateY(-100%);
}

.box__center {
    background: orange;
    z-index: -1;
}
</style>