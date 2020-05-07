<template>
  <div>
    <div class="every-t">focus-within</div>
    <div class="btn-container">
      <input />
      <button class="cur-btn">你好</button>
    </div>
    <div class="every-t">混沌动态</div>
    <div class="chaos">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="every-t">行星移动</div>
    <div class="main">
      <div class="main-outer">
        <p class="foot"></p>
      </div>
    </div>
    <div class="every-t">天狗食月</div>
    <div class="moon-outer">
        <div class="moon"></div>
    </div>
    <div class="every-t">天狗食月2</div>
    <div class="moon-outer">
        <div class="moon2"></div>
    </div>
    <div class="every-t">渐变应用</div>
    <div class="round-foot">

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.btn-container {
  display: flex;
}
.every-t {
  &:before {
    content: "\26A1";
  }
}
.btn-container:focus-within button {
  transition: 1.5s cubic-bezier(0.8, 0.21, 0.85, 0.57);
  transform: rotate(1turn);
}

// 行星
.main {
  height: 100px;
  width: 150px;
  border: 1px solid aqua;
  border-radius: 50%;
  position: relative;
  margin: 20px;
  .main-outer {
    position: absolute;
    left: 50%;
    top: 50%;
    animation: foot 3s linear infinite;
  }
  @keyframes foot {
    0% ,100%{
       transform: translate(25px,0);
    }
    25% ,75%{
       transform: translate(0,0);
    }
    50%{
       transform: translate(-25px,0);
    }
  }
  .foot {
    margin: 0;
    height: 20px;
    width: 20px;
    margin: -50%;
    border-radius: 50%;
    background: aqua;
    // transform: rotate(360deg) translate(50px);
    animation: rotate 3s linear infinite;
    // animation-play-state: paused;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg) translate(50px);
    }
    to {
      transform: rotate(360deg) translate(50px);
    }
  }
}
// 天狗食月
.moon-outer{
   height: 100px;
   width: 300px;
//    background:lavender;
}
.moon{
    height:50px;
    width:50px;
    background: transparent;
    margin: auto 0;
    border-radius: 50%;
    box-shadow: 50px 0px 0 lightblue; 
    animation: move-moon 3s linear infinite alternate-reverse;
}
@keyframes move-moon {
    to{
          box-shadow: -50px 0px 0 lightblue; 
    }
}
.moon2{
    height: 50px;
    width: 50px;
    color:white;
    background:skyblue;
    border-radius: 50%;
    box-shadow: inset 5em 0 0;
    animation: leave 5s linear infinite alternate-reverse;
}
@keyframes leave {
    to{
        box-shadow: inset -5em 0 0;
    }
    
}
// 混沌动态
.chaos {
  height: 200px;
  width: 200px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  background: rgb(255, 149, 190);
}
.chaos div {
  height: 100px;
  width: 100px;
  position: absolute;
  border-radius: 50%;
  animation: move 2s linear infinite;
  filter: blur(20px);
}
.chaos::after {
  content: "正在加载中。。。";
  text-align: center;
  display: block;
  height: 200px;
  color: white;
  font-size: 20px;
  line-height: 200px;
  filter: drop-shadow(
    12px 4px 6px rgb(240, 55, 8)
  ); // 投影 与box-shadow的 阴影不同
}
.chaos div:nth-child(1) {
  background: rgb(1, 7, 1);
  animation-delay: 0s;
}
.chaos div:nth-child(2) {
  background: rgb(9, 243, 224);
  animation-delay: -0.5s;
}
.chaos div:nth-child(3) {
  background: rgb(238, 8, 8);
  animation-delay: -1s;
}
.chaos div:nth-child(4) {
  background: rgb(117, 9, 219);
  animation-delay: -1.5s;
}
@keyframes move {
  0%,
  100% {
    transform: translate(0%, 0%);
  }
  25% {
    transform: translate(100%, 0%);
  }

  50% {
    transform: translate(100%, 100%);
  }

  75% {
    transform: translate(0%, 100%);
  }
}
// 下面的写法只在sass里可？
</style>

<style lang="less" scoped>

.round-foot{
    height:100px;
    width: 100px;
    // border: 2px solid white;
    // border-radius: 50%;
    // background-repeat:no-repeat;
    //  background: 
    // radial-gradient(#419af6 26%, white 0, white 30%, transparent 0), 
    // //   linear-gradient(120deg, #5dd52f 50%, transparent 0) 0 100% / 115% 44%, 
    // //   linear-gradient(60deg, #5dd533 50%, transparent 0) 0 0/ 35% 70%, 
    // //   linear-gradient(120deg, #ff0000 50%, transparent 0) 0 0 / 50% 197%, 
    //   linear-gradient(120deg,red, red), 
    //   linear-gradient(60deg,#fdeb35, #fce72a);
    //为0 表示不要渐变
    // 斑马线
    //  background: linear-gradient( 
    //     red 25%,blue 0,blue 50%,red 0,      
    //   red 75%, blue 0);
    // background-size: 50px 50px;
    // 棋盘
   background-image: 
		linear-gradient(45deg, #666 25%, transparent 0, transparent 75%, #666 0),
		linear-gradient(45deg, #aaa 25%, transparent 0, transparent 75%, #aaa 0);
	background-position: 0 0, 15px 15px;
	background-size: 30px 30px;
}
</style>