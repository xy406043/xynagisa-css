<template>
  <div class="grid">
    <div>
      <div class="every-a">水池</div>
      <div class="every-1">
        <div class="share"></div>
      </div>
    </div>
    <div>
      <div class="every-a">trasition-delay 实现按钮动画</div>
      <div class="every-2">
        <div class="both">Both</div>
        <div class="rectangle">Rectangle</div>
        <div class="circle">Circle</div>
      </div>
    </div>

    <div>
      <div class="every-a">正负旋转相消3D</div>
      <div class="every-3">
        <div class="reverseRotate">
          <div class="rotate">
            <div class="content">正负旋转相消3D动画</div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="every-a">自定义样例</div>
      <div class="every-4"></div>
    </div>
    <div>
      <div class="every-a">自定义样例</div>
      <div class="every-5"></div>
    </div>
    <div>
      <div class="every-a">自定义样例</div>
      <div class="every-6"></div>
    </div>

    <div>
      <div class="every-a">自定义样例</div>
      <div class="every-7"></div>
    </div>
    <div>
      <div class="every-a">自定义样例</div>
      <div class="every-8"></div>
    </div>
    <div>
      <div class="every-a">自定义样例</div>
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
  grid-template-columns: 400px 523px 400px;
}
.every-a:before {
  content: "\1F4A5";
}
.every-1 {
  height: 300px;
  width: 300px;
  background: rgb(118, 218, 255);
  position: relative;
  align-items: center;
  overflow: hidden;
  &:before,
  &:after {
    content: "";
    background: #fff;
    // text-align: center;
    position: absolute;
    left: 50%;
    min-height: 350px;
    min-width: 350px;
    animation: rotate 10s linear infinite;
  }
  &:before {
    bottom: 100px;
    border-radius: 45%;
  }
  &:after {
    bottom: 80px;
    opacity: 0.5;
    border-radius: 47%;
  }
  @keyframes rotate {
    0% {
      transform: translate(-50%, 0) rotateZ(0deg);
    }
    50% {
      transform: translate(-50%, -2%) rotateZ(180deg);
    }
    100% {
      transform: translate(-50%, 0%) rotateZ(360deg);
    }
  }
}
.every-2 {
  height: 300px;
  width: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  div {
    position: relative;
    width: 200px;
    height: 64px;
    line-height: 64px;
    box-shadow: inset 0 0 0 3px #fff;
    margin: 50px auto;
    text-align: center;
    color: #fff;
    font-size: 32px;
    cursor: pointer;
    transition: color 1s;
  }

  div::before,
  div::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    left: 0;
    box-sizing: border-box;
    // transition: width .5s, height .5s;
    // transition-delay: .5s, 0s;
    border: 3px solid transparent;
  }

  .both:hover {
    color: #00e2ff;

    &::before {
      transition: width 0.5s, height 0.5s, border-bottom-color 0s;
      transition-delay: 0.5s, 0s, 0.5s;
      width: 200px;
      height: 64px;
      border-left: 3px solid #00e2ff;
      border-bottom: 3px solid #00e2ff;
    }

    &::after {
      transition: width 0.5s, height 0.5s, border-right-color 0.5s;
      transition-delay: 0s, 0.5s, 0.5s;
      width: 200px;
      height: 64px;
      border-top: 3px solid #00e2ff;
      border-right: 3px solid #00e2ff;
    }
  }

  .rectangle {
    &::after {
      top: unset;
      left: unset;
      right: 0;
      bottom: 0;
    }

    &:hover {
      color: #00e2ff;

      &::before {
        transition: width 0.25s, height 0.25s, border-bottom-color 0s;
        transition-delay: 0.25s, 0s, 0.25s;
        width: 200px;
        height: 64px;
        border-left: 3px solid #00e2ff;
        border-bottom: 3px solid #00e2ff;
      }

      &::after {
        transition: width 0.25s, height 0.25s, border-top-color 0.25s;
        transition-delay: 0.75s, 0.5s, 0.75s;
        width: 200px;
        height: 64px;
        border-top: 3px solid #00e2ff;
        border-right: 3px solid #00e2ff;
      }
    }
  }

  .circle {
    width: 120px;
    height: 120px;
    line-height: 120px;
    border-radius: 50%;

    &::before,
    &::after {
      border-radius: 50%;
    }

    &:hover {
      color: #00e2ff;

      &::before {
        width: 120px;
        height: 120px;
        border-color: #00e2ff;
        transition: border-top-color 0.25s linear,
          border-right-color 0.25s linear, border-bottom-color 0.25s linear,
          border-left-color 0.25s linear;
        transition-delay: 0s, 0.25s, 0.5s, 0.75s;
      }

      &::after {
        width: 120px;
        height: 120px;
        border-top: 3px solid #00e2ff;
        transform: rotate(270deg);
        transition: transform 0.75s linear;
        transition-delay: 0s;
      }
    }
  }
}
.every-3 {
  height: 300px;
  width: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    transform-style: preserve-3d;
    perspective: 500px;
  }

  .reverseRotate {
    margin: 20vh auto;
  }

  .rotate,
  .reverseRotate {
    width: 50vh;
    height: 50vh;
  }

  .content {
    width: 100%;
    height: 100%;
    line-height: 50vh;
    text-align: center;
    background-color: rgba(255, 100, 100, 0.8);
    font-size: 5vh;
    color: #fff;
    box-shadow: 0px 0px 8px 2px rgba(100, 100, 100, 0.6);
  }

  .rotate {
    animation: rotate 5s linear infinite;
  }

  .reverseRotate {
    animation: reverseRotate 5s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotateX(0deg) rotateZ(0deg);
    }
    50% {
      transform: rotateX(40deg) rotateZ(180deg);
    }
    100% {
      transform: rotateX(0deg) rotateZ(360deg);
    }
  }

  @keyframes reverseRotate {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(-360deg);
    }
  }
}
</style>