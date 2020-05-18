<template>
  <div class="grid">
    <div>
      <div class="every-a">文字溢出省略号-wx</div>
      <div class="every-1">
        <div
          class="show-ellipse"
        >回到家，她把两人的事告诉父母，遭到他们的强烈反对。父亲是工厂的老职工，认识他，对他的印象不好，一直就反对他们交往。理由是，他是个不上进的男人，懒散，没事业心，还跟外面社会上一些不务正业的年轻人来往，女人跟了他，以后绝对没有好日子过。尤其现在，工厂效益每况愈下，有能力的人都自己出去单干了，而他还在流水线上混着，一个月只有几百块钱。这样的男人，没前途的。</div>
      </div>
    </div>
    <div>
      <div class="every-a">text-shadow</div>
      <div class="every-2">
        <div class="show-more" data-word="Click here to show more!">Click here to show more!</div>
        <div class="show-more2" data-word="Click here to show more!">Click here to show more!</div>
        <div class="show-more3" data-word="Click here to show more!">Click here to show more!</div>
        <div class="show-more4" data-word="Click here to show more!">Click here to show more!</div>
      </div>
    </div>

    <div style="position:relative">
      <div class="every-a">文字底部波浪效果</div>
      <div class="every-3">
        <div class="wave">ABCDEFGHIJKLMNOPQ</div>
        <div class="wave2">ABCDEFGHIJKLMNOPQ</div>
      </div>
    </div>

    <div>
      <div class="every-a">4</div>
      <div class="every-4">
        <div class="pic"></div>
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
  content: "\1F6B3";
}
.every-1 {
  height: 300px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.show-ellipse {
  width: 200px; //微信小程序版本
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  white-space: normal;
  -webkit-line-clamp: 2;
  display: -webkit-box; //不是小程序可以不用？
  -webkit-box-orient: vertical;
}

.every-2 {
  height: 300px;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.show-more {
  font-size: 20px;
  transform: scale(2);
  position: relative;
  font-family: Georgia, "Times New Roman", Times, serif;
  // text-shadow: 1px 2px 3px blue;
  color: black;
}
.show-more:before {
  position: absolute;
  z-index: 1;
  content: "";
  top: 0;
  left: 0;
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
  background-size: 3px 3px;
  right: 0;
  bottom: 0;
}
.show-more2 {
  font-size: 20px;
  transform: scale(2);
  position: relative;
  font-family: Georgia, "Times New Roman", Times, serif;
  // text-shadow: 1px 2px 3px blue;
  color: black;
  background-image: linear-gradient(
    -45deg,
    rgb(45, 236, 243) 0%,
    rgb(22, 236, 236) 25%,
    transparent 25%,
    transparent 50%,
    rgb(50, 62, 230) 50%,
    rgb(25, 228, 218) 75%,
    transparent 75%,
    transparent 100%
  );
  background-size: 3px 3px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  margin-top: 12px;
}
.show-more3 {
  font-size: 20px;
  transform: scale(2);
  position: relative;
  font-family: Georgia, "Times New Roman", Times, serif;
  // text-shadow: 1px 2px 3px blue;
  color: black;
  background-image: linear-gradient(-45deg, rgb(0, 255, 179), rgb(255, 0, 255));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  margin-top: 12px;
}
.show-more4 {
  font-size: 20px;
  transform: scale(2);
  font-family: Georgia, "Times New Roman", Times, serif;
  text-shadow: -1px -1px 2px grey;
  filter: drop-shadow(-230px 20px 2px black);
}

.every-3 {
  height: 300px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  .wave {
    text-decoration-line: underline;
    text-decoration-style: wavy;
    text-decoration-color: rgb(48, 226, 202);
  }
  .wave2 {
    position: relative;
  }
  .wave2::before {
    position: absolute;
    content:'';
    height: 5px;
    width:100%;
    left: 0;
    top:18px;
    background-image:linear-gradient(315deg,transparent ,transparent 45% ,green 45%,green 55%,transparent 55%,transparent),
    linear-gradient(45deg,transparent ,transparent 45% ,green 45%,green 55%,transparent 55%,transparent);
    background-size:10px 10px ;
    animation: animal-wave 3s linear infinite;
  }
  @keyframes animal-wave{
    // from{
    //   transform:translateX(0)
    // }
    // to{
    //   transform:translateX(100px)
    // }
  }
}
.every-4 {
  height: 300px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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