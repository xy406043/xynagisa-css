<template>
  <div class="grid">
    <div style="position:relative">
      <div class="every-a">blur constract 混合效果</div>
      <div class="every-1">
        <div class="black"></div>
        <div class="blue"></div>
      </div>
    </div>
    <div>
      <div class="every-a">滤镜及混合模式混搭特效</div>
      <div class="every-2">
        <div class="halftone">
          <img src="http://xynagisa.xyz/delete_1589014984477.png" />
        </div>
      </div>
    </div>

    <div style="position:relative">
      <div class="every-a">单标签滴水效果</div>
      <div class="every-3">
        <div class="water">Nagisa</div>
      </div>
    </div>

    <div>
      <div class="every-a">小球穿梭效果！</div>
      <div class="every-4">
        <div class="ball"></div>
        <div class="g-wall"></div>
        <div class="g-wall"></div>
        <div class="g-wall"></div>
        <div class="g-wall"></div>
      </div>
    </div>

    <div>
      <div class="every-a">hue-rotate 渐变背景动画</div>
      <div class="every-5"></div>
    </div>

    <div>
      <div class="every-a">单标签CSS幽灵动画</div>
      <div class="every-6">
        <div class="ghost"></div>
      </div>
    </div>

    <div>
      <div class="every-a">drop-shadow + clip-path 生成规则剪影</div>
      <div class="every-7">
        <div class="btn-wrap">
          <div class="btn">领取红包</div>
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
  content: "\1F463";
}
.every-2 {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}
.halftone {
  position: absolute;
  width: 20vw;
  height: 20vw;
  background: white;
  top: 50%;
  left: 50%;
  filter: contrast(100000%);
  transform: translate(-50%, -50%);
  overflow: hidden; // 电脑性能好的，关掉这个属性
}

.halftone > img {
  width: 100%;
  height: 100%;
  filter: brightness(0.5) blur(4px);
  //   animation: 3s animation-filter infinite alternate;
}

.halftone::after {
  content: "";
  position: absolute;
  top: -100%;
  left: -100%;
  right: -100%;
  bottom: -100%;
  background-blend-mode: multiply;
  background: radial-gradient(8px 8px, cyan, white),
    radial-gradient(8px 8px, magenta, white),
    radial-gradient(8px 8px, yellow, white);
  background-size: 8px 8px;
  background-position: 0 -3px, -2px 0, 2px 0;
  mix-blend-mode: saturation;
  pointer-events: none;
  transform: rotate(11.25deg);
  transition: 1s ease-in-out transform;
  z-index: 1;
  //   animation: 3s animation-overlay infinite alternate;
}

@keyframes animation-overlay {
  0% {
    transform: rotate(450deg) scale(15);
  }

  100% {
    transform: rotate(-90deg);
  }
}

@keyframes animation-filter {
  0% {
    filter: brightness(0.5) blur(40px);
  }

  100% {
    filter: brightness(0.5) blur(4px);
  }
}

.every-3 {
  height: 300px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  filter: blur(1px) contrast(20);
}
.water {
  position: relative;
  height: 80px;
  width: 220px;
  font-size: 70px;
  text-align: center;
  border-bottom: 10px solid rgb(255, 255, 255);
  transform: skewY(5deg);
  color: white;
  filter: contrast(20);
  &::before,
  &::after {
    position: absolute;
    content: "";
    bottom: -20px;
    left: 0;
    width: 10px;
    height: 20px;
    border-radius: 80%;
    background: #fff;
    filter: contrast(20);
    transform: translate(0, 0);
    animation: move 7.5s ease-in-out infinite;
  }
  &:after {
    animation: move 7.5s ease-in-out 1s infinite;
  }

  @keyframes move {
    80% {
      bottom: -30px;
      transform: translate(210px, 0);
    }
    93% {
      transform: translate(210px, 3px);
      opacity: 1;
    }
    100% {
      transform: translate(210px, 80px);
      opacity: 0;
    }
  }
}
.every-4 {
  height: 300px;
  width: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: black;
  filter: blur(5px) contrast(10);
  position: relative;
  overflow: hidden;
}
.ball {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: #fff;
  animation: move10 3s infinite;
}

.g-wall {
  height: 90px;
  width: 40px;
  filter: blur(2px);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
}

@keyframes move10 {
  20% {
    transform: translate(40px, 0);
    background: #ddd;
  }

  100% {
    transform: translate(400px, 0);
    background: #ddd;
  }
}

.every-5 {
  height: 300px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, blue, yellow, skyblue, rgb(21, 248, 78));
  animation: hueRote 10s infinite alternate;
  color: white;
}
@keyframes hueRote {
  100% {
    filter: hue-rotate(360deg);
  }
}
.every-6 {
  height: 300px;
  width: 400px;
  display: flex;
  justify-content: space-around;
   filter: blur(3px) contrast(10);
  align-items: center;
  background: black;
  position: relative;
  overflow: hidden;
}
.ghost{
   position: relative;
    width: 80px;
    height: 120px;
    background: 
        radial-gradient(circle at 60px 40px, #000, #000 7px, transparent 7px),
        radial-gradient(circle at 40px 40px, #000, #000 7px, transparent 7px),
        radial-gradient(circle at 50px 50px, #fff, #fff);
    background-size: 100% 100%; 
    background-repeat: no-repeat;
    margin: auto;
    border-radius: 40px 40px 60px 20px;
    transform: skewX(-10deg);
    animation: moveMain 2s infinite ease-out;
}
.ghost::before,.ghost::after{
    content: "";
    position: absolute;
    background: #fff;
    border-radius: 50%;

}
.ghost::before {
    width: 20px;
    height: 20px;
    top: 50px;
    left: -10px;
    box-shadow: 0 0 0 1px #fff;
    animation: move 2s infinite ease-in;
}

.ghost::after {
    width: 30px;
    height: 25px;
    top: 95px;
    left: -10px;
    box-shadow: 0 0 0 1px #fff;
    animation: move2 2s infinite ease-in;
}

@keyframes move {
    80%,
    100% {
        box-shadow: -60px 0 0 .5px rgba(255, 255, 255, .5);
    }
}

@keyframes move2 {
    80%,
    100% {
        box-shadow: -100px 0 0 .5px rgba(255, 255, 255, .2);
    }
}

@keyframes moveMain {
    42% {
        transform: skewX(-10deg) translate(40px, 0);
    }
}
.every-7 {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-wrap {
    margin: auto;
    filter: drop-shadow(2px 4px 3px rgba(50, 50, 0, 0.5));
}

.btn{
    content: "";
    width: 200px;
    height: 64px;
    line-height: 64px;
    text-align: center;
    background: linear-gradient(#f5e5bf, #fbe8c8, #f5e5bf);
    color: #be9451;
    font-size: 24px;
    clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0 50%);
    // box-shadow: inset 0px 0px 1px 1px #fff;
}
.every-1 {
  height: 300px;
  width: 300px;
  border-radius: 50%;
  filter: contrast(20);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  background: #fff;
  left: 50%;
}
.black {
  height: 160px;
  width: 160px;
  position: absolute;
  background: black;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  filter: contrast(20) blur(6px);
}
.blue {
  height: 80px;
  width: 80px;
  top: 50%;
  position: absolute;
  left: 80px;
  background: blue;
  border-radius: 50%;
  transform: translate(-50%, -50%) rotate(0);
  filter: unset;
  filter: contrast(20) blur(6px);
  animation: turn 5s linear infinite;
  transform-origin: -100% center;
}
@keyframes turn {
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>