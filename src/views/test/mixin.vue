<template>
  <div class="grid">
    <div>
      <div class="every-a">mix-blend-mode 实现loading</div>
      <div class="every-1">
        <strong class="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </strong>
      </div>
    </div>
    <div>
      <div class="every-a">mix-blend-mode 实现抖音logo</div>
      <div class="every-2">
        <div class="j"></div>
        <div class="j"></div>
      </div>
    </div>

    <div style="position:relative">
      <div class="every-a">类抖音文字故障效果</div>
      <div class="every-3">
        <div class="text-magic" data-word="CSSTextGlitch">
          <div class="white"></div>
        </div>
      </div>
    </div>

    <div>
      <div class="every-a">图片任意颜色赋值</div>
      <div class="every-4">
        <div class="pic"></div>
      </div>
    </div>

    <div>
      <div class="every-a">惊艳的水波</div>
      <div class="every-5"><div></div></div>
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
  content: "\1F386";
}
.every-1 {
  height: 300px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  .loading {
    position: absolute;
    display: block;
    width: 100px;
    height: 100px;
    text-align: center;
    filter: contrast(1.2);

    span {
      mix-blend-mode: screen;
      display: block;
      position: absolute;
      border-radius: 50%;
      animation: wave 3s infinite linear;
    }

    span:nth-child(0) {
      left: -11%;
      right: -2%;
      top: -12%;
      bottom: -5%;
      transform-origin: 46% 53%;
      animation-delay: 0;
      background-color: hsl(0, 50%, 50%);
    }

    span:nth-child(1) {
      left: -4%;
      right: -4%;
      top: -9%;
      bottom: -2%;
      transform-origin: 47% 50%;
      animation-delay: -1s;
      background-color: hsl(50, 60%, 50%);
    }

    span:nth-child(2) {
      left: -11%;
      right: -4%;
      top: -10%;
      bottom: -11%;
      transform-origin: 49% 53%;
      animation-delay: -1.5s;
      background-color: hsl(100, 70%, 50%);
    }

    span:nth-child(3) {
      left: -7%;
      right: -9%;
      top: -11%;
      bottom: -4%;
      transform-origin: 47% 52%;
      animation-delay: -2s;
      background-color: hsl(150, 80%, 50%);
    }

    span:nth-child(4) {
      left: -8%;
      right: -3%;
      top: -5%;
      bottom: -11%;
      transform-origin: 47% 52%;
      animation-delay: -2.5s;
      background-color: hsl(200, 90%, 50%);
    }

    span:nth-child(5) {
      left: -10%;
      right: -8%;
      top: -4%;
      bottom: -9%;
      transform-origin: 48% 51%;
      animation-delay: -3s;
      background-color: hsl(250, 100%, 50%);
    }

    span:nth-child(6) {
      left: -9%;
      right: -11%;
      top: -5%;
      bottom: -8%;
      transform-origin: 47% 50%;
      animation-delay: -3.5s;
      background-color: hsl(300, 100%, 50%);
    }
  }

  @keyframes wave {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
}
.every-2 {
  height: 300px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  // overflow: hidden;
  filter: contrast(150%) brightness(110%);
  position: relative;
}
.j {
  position: absolute;
  top: 0;
  left: 200px;
  width: 47px;
  height: 218px;
  z-index: 1;
  background: #24f6f0;

  &::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    border: 47px solid #24f6f0;
    border-top: 47px solid transparent;
    border-radius: 50%;
    top: 121px;
    left: -147px;
    transform: rotate(45deg);
  }

  &::after {
    content: "";
    position: absolute;
    width: 140px;
    height: 140px;
    border: 40px solid #24f6f0;
    border-right: 40px solid transparent;
    border-top: 40px solid transparent;
    border-left: 40px solid transparent;
    top: -110px;
    right: -183px;
    border-radius: 100%;
    transform: rotate(45deg);
    z-index: -10;
  }
}

.j:last-child {
  left: 190px;
  top: 10px;
  background: #fe2d52;
  z-index: 100;
  mix-blend-mode: lighten;
  animation: moveLeft 10s infinite;

  &::before {
    border: 47px solid #fe2d52;
    border-top: 47px solid transparent;
  }

  &::after {
    border: 40px solid #fe2d52;
    border-right: 40px solid transparent;
    border-top: 40px solid transparent;
    border-left: 40px solid transparent;
  }
}

@keyframes moveLeft {
  0% {
    transform: translate(200px);
  }
  50% {
    transform: translate(0px);
  }
  100% {
    transform: translate(0px);
  }
}
.every-3 {
  height: 300px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  // overflow: hidden;
  position: relative;
}
.text-magic {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(3);
  width: 300px;
  font-size: 36px;
  font-family: Raleway, Verdana, Arial;
  color: transparent;
}
.white {
  position: absolute;
  left: -10px;
  width: 100%;
  height: 1px;
  background: #000;
  z-index: 4;
  animation: whiteMove 10s ease-out infinite;
}

.text-magic::before {
  content: attr(data-word);
  position: absolute;
  top: 0;
  left: 0;
  height: 36px;
  color: red;
  overflow: hidden;
  z-index: 2;
  filter: contrast(200%);
  text-shadow: 1px 0 0 red;
  animation: move 0.95s infinite;
}

.text-magic::after {
  content: attr(data-word);
  position: absolute;
  top: 0;
  left: -1px;
  height: 36px;
  color: rgba(255, 255, 255, 0.8);
  overflow: hidden;
  z-index: 3;
  color: cyan;
  filter: contrast(200%);
  text-shadow: -1px 0 0 cyan;
  mix-blend-mode: lighten;
  animation: move 1.1s infinite 0.2s;
}

@keyframes whiteMove {
  9% {
    top: 38px;
  }
  14% {
    top: 8px;
  }
  18% {
    top: 42px;
  }
  22% {
    top: 1px;
  }
  32% {
    top: 32px;
  }
  34% {
    top: 12px;
  }
  40% {
    top: 26px;
  }
  43% {
    top: 7px;
  }
  99% {
    top: 30px;
  }
}

@keyframes move {
  10% {
    top: -0.4px;
    left: -1.1px;
  }
  20% {
    top: 0.4px;
    left: -0.2px;
  }
  30% {
    left: 0.5px;
  }
  40% {
    top: -0.3px;
    left: -0.7px;
  }
  50% {
    left: 0.2px;
  }
  60% {
    top: 1.8px;
    left: -1.2px;
  }
  70% {
    top: -1px;
    left: 0.1px;
  }
  80% {
    top: -0.4px;
    left: -0.9px;
  }
  90% {
    left: 1.2px;
  }
  100% {
    left: -1.2px;
  }
}
.every-4 {
  height: 300px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.pic{
  width: 200px;
  height: 200px;
  text-align: center;
    font-size: 42px;
    line-height: 420px;
    background-image: url('http://xynagisa.xyz/1584457596506.png'),linear-gradient(rgba(0, 255, 128, 0.336),rgb(0, 102, 255));
    background-size:cover;
    background-blend-mode: lighten;
}

.every-5 {
  height: 300px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
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
$circles: ();
$move: ();
$n: 8;

@function randomNum($max, $min: 0, $u: 1) {
    @return ($min + random($max)) * $u;
}

@for $i from 0 through $n {
    $start-x: randomNum(100, 1) * 1vw;
    $start-y: randomNum(100, 1) * 1vh;

    $end-x: randomNum(150, -50) * 1vw;
    $end-y: randomNum(150, -50) * 1vh;

    $circles: append(
        $circles,
        radial-gradient(
                randomNum(75, 25) * 1vw,
                #ddd 0%,
                #666 10%,
                #fff,
                #000,
                #999
            )
            $start-x $start-y,
        comma
    );

    $move: append($move, $end-x $end-y, comma);
}


.every-5 div {
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom :0;
    background: $circles;
    animation: waveMove 15s infinite linear alternate;
    background-blend-mode: difference;
    filter: blur(2px) hue-rotate(0);

    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #03a9f4;
        mix-blend-mode: color-burn;
    }
}

@keyframes waveMove {
    100% {
        background-position: $move;
        filter: blur(5px) hue-rotate(30deg);
    }
}
</style>