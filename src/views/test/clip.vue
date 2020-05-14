<template>
  <div class="grid">
    <div>
      <div class="every-a">clip-path 实现边框线条特效</div>
      <div class="every-1">
        <div>Hello</div>
        <div class="bg">示意图</div>
      </div>
    </div>
    <div>
      <div class="every-a">clip inset 图形</div>
      <div class="every-2"></div>
    </div>

    <div style="position:relative">
      <div class="every-a">border-image 圆角渐变边框</div>
      <div class="every-3">
        <div class="border-image-clip-path"></div>
      </div>
    </div>

    <div>
      <div class="every-a">clip-path polygon</div>
      <div class="every-4">
        <div class="pic"></div>
        <div class="pic2"></div>
        <div class="pic3"></div>
        <div class="pic4"></div>
      </div>
    </div>

    <div>
      <div class="every-a">惊艳的水波</div>
      <div class="every-5">
        <div></div>
      </div>
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
  content: "\1F4AE";
}
.every-1 {
  height: 300px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  div {
    position: relative;
    margin: auto;
    width: 160px;
    line-height: 160px;
    text-align: center;
    font-size: 24px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 2px solid gold;
      transition: all 0.5s;
      animation: clippath 3s infinite linear;
    }
  }

  @keyframes clippath {
    0%,
    100% {
      clip-path: inset(0 0 95% 0);
    }

    25% {
      clip-path: inset(0 95% 0 0);
    }
    50% {
      clip-path: inset(95% 0 0 0);
    }
    75% {
      clip-path: inset(0 0 0 95%);
    }
  }

  .bg::before {
    background: rgba(255, 215, 0, 0.5);
  }
}
.every-2 {
  height: 300px;
  width: 450px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid rgb(209, 231, 12);
  //   background: linear-gradient(45deg, rgb(181, 245, 224) rgb(128, 255, 128)en);
  position: relative;
  //   background-blend-mode: lighten;
  background-image: url(http://xynagisa.xyz/1584985645300.png);
  background-repeat: no-repeat;
  background-size: cover;
  animation: file 2s linear infinite alternate-reverse;
}
.every-2::before {
  position: absolute;
  top: 0;
  content: "";
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid yellow;
  mix-blend-mode: hue;
  background: url(http://xynagisa.xyz/1584457596506.png);
}
@keyframes file {
  from {
    clip-path: inset(10% 20% 50% 30% round 10% 20% 10% 14%); //圆效果
    filter: hue-rotate(60deg);
  }
  to {
    clip-path: inset(10% 20% 50% 30% round 80% 50% 30% 10%); //圆效果
    filter: hue-rotate(300deg);
  }
}
.every-3 {
  height: 300px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.border-image-clip-path {
  width: 200px;
  height: 100px;
  margin: auto;
  border: 10px solid;
  border-image: linear-gradient(45deg, gold, deeppink) 1;
  clip-path: inset(0px round 10px);
  animation: huerotate 6s infinite linear;
  filter: hue-rotate(360deg);
}

@keyframes huerotate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rorate(360deg);
  }
}
.every-4 {
  height: 300px;
  width: 450px;
  display: flex;
  position: relative;
  border: 1px solid green;
}
.pic {
  height: 200px;
 position: absolute;
  background: white;
  width: 200px;
  top:0;
  left: 0;
  background-image: url(http://xynagisa.xyz/1583851925343_1589337233550.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  clip-path: polygon(10% 0, 30% 10%, 90% 100%, 20% 70%);
  animation: showP 3s linear infinite alternate-reverse 0.7s;
}
.pic2{
  position: absolute;
    height: 200px;
    top: 17px;
    left:0px;
    mix-blend-mode: lighten;
  background: white;
  width: 200px;
  background-image: url(http://xynagisa.xyz/1584985645300.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  clip-path: polygon(20% 100%, 30% 50%, 90% 10%, 100% 30%);
  animation: showP 3s linear infinite alternate-reverse 1.3s;
}
.pic3{
  position: absolute;
    height: 200px;
    top: 17px;
    left:0px;
    mix-blend-mode: lighten;
  background: white;
  width: 200px;
  background-image: url(http://xynagisa.xyz/1584457596506.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  clip-path: polygon(30% 70%, 30% 60%, 79% 40%);
  animation: showP 3s linear infinite alternate-reverse 2s;
}
.pic4{
  position: absolute;
    height: 200px;
    top: 17px;
    left:0px;
    mix-blend-mode: lighten;
  background: white;
  width: 200px;
  background-image: url(http://xynagisa.xyz/1584457668420_1589337141585.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  clip-path: circle(12px  at 50px 50px);
  animation: showP 3s linear infinite alternate-reverse 1s;
}
@keyframes showP {
    from{
        transform: skewY(45deg);
        transform:scale(1);
        transform:rotate(60deg)
    
    }
    from{
        transform: skewY(180deg);
        transform:scale(2);
        transform:rotate(360deg)
    }
}

.every-5 {
  height: 300px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>


<style lang="scss" scoped>
</style>