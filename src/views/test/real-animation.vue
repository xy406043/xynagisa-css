<template>
  <div class="grid">
    <div>
      <div class="every-a">水池</div>
      <div class="every-1">
        <div class="share"></div>
      </div>
    </div>
    <div>
      <div class="every-a">title</div>
      <div></div>
    </div>

    <div>
      <div class="every-a">title</div>
      <div></div>
    </div>

    <div>
      <div class="every-a">title</div>
      <div></div>
    </div>

    <div>
      <div class="every-a">title</div>
      <div></div>
    </div>

    <div>
      <div class="every-a">title</div>
      <div></div>
    </div>

    <div>
      <div class="every-a">title</div>
      <div></div>
    </div>

    <div>
      <div class="every-a">title</div>
      <div></div>
    </div>

    <div>
      <div class="every-a">title</div>
      <div></div>
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
  content: "\1F4F5";
}
.every-1 {
  height: 300px;
  width: 300px;
  background: rgb(118, 218, 255);
  position: relative;
  align-items: center;
  overflow:hidden;
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
    opacity: .5;
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
</style>