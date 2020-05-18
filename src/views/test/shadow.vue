<template>
  <div class="grid">
    <div>
      <div class="every-a">立体阴影条纹字</div>
      <div class="every-1" data-name="Solid Shadow Word">Solid Shadow Word</div>
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
  content: "\1F4A6";
}
.every-1 {
  font-family: Times New Roman, "serif";
  position: relative;
  font-size: 30px;
  line-height: 40px;
  margin: 30px auto;
  text-align: center;
  text-shadow: 4px 4px 1px #333;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      -45deg,
      #fff 0%,
      #fff 25%,
      transparent 25%,
      transparent 50%,
      #fff 50%,
      #fff 75%,
      transparent 75%,
      transparent 100%
    );
    background-size: 6px 6px;
    z-index: 1;
  }

  &::after {
    position: absolute;
    content: attr(data-name);
    top: -4px;
    left: -2px;
    right: 6px;
    bottom: 6px;
    color: #333;
    z-index: 2;
    text-shadow: 3px 3px #fff;
  }
}
.every-2 {
  .button {
    height: 70px;
    width: 140px;
    border: 1px solid;
    transform: translate(50%, 50%);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.1s;
  }
  .button:hover {
    box-shadow: 0 0 0 60vmax rgba(0, 0, 0, 0.5);
    transform: translate(50%, 60%);
  }
}
.every-3 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-image: radial-gradient(#fff 38%, transparent 38%),
    radial-gradient(#09c 0%, #09c 100%);
  &:before {
    content: "";
    width: 285px;
    height: 122px;
    background: none;
    border-radius: 100%;
    position: absolute;
    top: 33px;
    left: -45px;
    margin: auto;
    box-shadow: inset 0 12px 0 13px #09c, -35px -8px 0 -5px #fff;
    transform: rotate(-35deg);
  }
  &:after {
    content: "";
    width: 120px;
    height: 25px;
    background: #09c;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    margin: auto;
    box-shadow: 50px 23px 0 -2px #fff;
  }
}
.every-4 {
  @color: #e91e63;
  background: #000;

  .container {
    position: relative;
    overflow: hidden;
    width: 124px;
    height: 124px;
    overflow: hidden;
    margin: 100px auto;
    border-radius: 50%;
  }

  .shadow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    line-height: 120px;
    border-radius: 50%;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 60px -60px 0 2px @color, -60px -60px 0 2px @color,
      -60px 60px 0 2px @color, 60px 60px 0 2px @color;
    text-align: center;

    &:hover {
      animation: border 0.5s ease forwards;
    }
  }

  @keyframes border {
    0% {
      box-shadow: 60px -60px 0 2px @color, -60px -60px 0 2px @color,
        -60px 60px 0 2px @color, 60px 60px 0 2px @color, 0 0 0 2px transparent;
    }
    25% {
      box-shadow: 0 -125px 0 2px @color, -60px -60px 0 2px @color,
        -60px 60px 0 2px @color, 60px 60px 0 2px @color, 0 0 0 2px #fff;
    }
    50% {
      box-shadow: 0 -125px 0 2px @color, -125px 0px 0 2px @color,
        -60px 60px 0 2px @color, 60px 60px 0 2px @color, 0 0 0 2px #fff;
    }
    75% {
      box-shadow: 0 -125px 0 2px @color, -125px 0px 0 2px @color,
        0px 125px 0 2px @color, 60px 60px 0 2px @color, 0 0 0 2px #fff;
    }
    100% {
      box-shadow: 0 -125px 0 2px @color, -125px 0px 0 2px @color,
        0px 125px 0 2px @color, 120px 40px 0 2px @color, 0 0 0 2px #fff;
    }
  }
}
.every-5 {
  position: relative;
  width: 200px;
  height: 80px;
  margin: auto;
  overflow: hidden;
  line-height: 80px;
  text-align: center;
  &::before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: -10px;
    top: -10px;
    border-radius: 50%;
    box-shadow: 0 0 0 25vw #e91e63;
    z-index: -1;
    animation: shadowmove 2s linear infinite;
  }
  @keyframes shadowmove {
    0% {
      background: #e91e63;
      box-shadow: 0 0 0 0 #e91e63;
    }
    10% {
      background: transparent;
      box-shadow: 0 0 0 0 #e91e63;
    }

    50% {
      background: transparent;
      box-shadow: 0 0 0 25vw #e91e63;
    }
  }
}
.every-6 {
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  height: 300px;

  .cheap {
    position: relative;
    height: 140px;
    width: 140px;
    border-radius: 50%;
    background: #ffff;
    &::before {
      content: "";
      position: absolute;
      height: 200px;
      width: 40px;
      left: 50%;
      top: 100%;
      background: #ffff;
      border-radius: 20px;
      transform: translate(-50%, -50%);
    }
    &::after {
      content: "";
      position: absolute;
      width: 20px;
      border-radius: 15px;
      height: 100px;
      left: 0;
      top: -20px;
      background: #ffff;
      box-shadow: 20px 0 0 0 #000, 40px 0 0 0 #fff, 60px 0 0 0 #000,
        80px 0 0 0 #fff, 100px 0 0 0 #000, 120px 0 0 0 #fff;
    }
  }
}
.every-7 {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  .pop-with-border {
    margin: 30px;
    width: 200px;
    height: 100px;
    padding: 10px;
    background: #fff;
    border-radius: 8px;
    position: relative;
    border: 1px solid #ddd;
    filter: drop-shadow(0 0 5px #eee);
  }
  .pop-with-border:before,
  .pop-with-border:after {
    top: -8px;
    border: 8px solid transparent;
    border-top: 0;
    border-bottom-color: #fff;
    content: "";
    display: block;
    width: 0;
    height: 0;
    left: 16px;
    overflow: hidden;
    position: absolute;
    z-index: 101;
  }
  .pop-with-border:before {
    top: -9px;
    border-bottom-color: #ddd;
    z-index: 99;
  }
  .pop-with-border p {
    padding: 10px 20px;
  }
}
</style>