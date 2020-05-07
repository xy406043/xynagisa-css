<template>
    <div class="gradual-con">
        <div>
        <div class="every-g">太极</div>
        <div class="every-1"></div>
        </div>
        <div>
        <div class="every-g">顺时针linear-gradient</div>
        <ul class="ul">
        <li class="every-2-1">0</li>
        <li class="every-2-2">45</li>
        <li class="every-2-3">90</li>
        <li class="every-2-4">135</li>
        <li class="every-2-5">180</li>
         <li class="every-2-6">270</li>
        </ul>
        </div>
        <div>
        <div class="every-g">自定义样例</div>
        <div class="every-3"></div>
        </div>
        <div>
        <div class="every-g">百分比待定。。含义</div>
        <div class="every-4"></div>
        </div>
        <div>
        <div class="every-g">棋盘纹理</div>
        <div class="every-5"></div>
        </div>
        <div>
        <div class="every-g">background-position</div>
        <div class="every-6"></div>
        </div>
         <div>
        <div class="every-g">棋盘纹理</div>
        <div class="every-7"></div>
        </div>
         <div>
        <div class="every-g">棋盘纹理</div>
        <div class="every-8"></div>
        </div>
         <div>
        <div class="every-g">棋盘纹理</div>
        <div class="every-9"></div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="less" scoped>
    .every-g::before{
        content: '\264C';
    }
    .gradual-con{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 400px 400px 400px;
        grid-gap: 10px;
    }
</style>

<style lang="scss" scoped>
    .every-1{
        height:100px; //需要给渐变高度
        width:100px;
        // border-radius:50%;
        background:
radial-gradient(circle at 50% 59%, #D2CAAB 3%, #364E27 4%, #364E27 11%, rgba(54,78,39,0) 12%, rgba(54,78,39,0)) 50px 0,
radial-gradient(circle at 50% 41%, #364E27 3%, #D2CAAB 4%, #D2CAAB 11%, rgba(210,202,171,0) 12%, rgba(210,202,171,0)) 50px 0,
radial-gradient(circle at 50% 59%, #D2CAAB 3%, #364E27 4%, #364E27 11%, rgba(54,78,39,0) 12%, rgba(54,78,39,0)) 0 50px,
radial-gradient(circle at 50% 41%, #364E27 3%, #D2CAAB 4%, #D2CAAB 11%, rgba(210,202,171,0) 12%, rgba(210,202,171,0)) 0 50px,
radial-gradient(circle at 100% 50%, #D2CAAB 16%, rgba(210,202,171,0) 17%),
radial-gradient(circle at 0% 50%, #364E27 16%, rgba(54,78,39,0) 17%),
radial-gradient(circle at 100% 50%, #D2CAAB 16%, rgba(210,202,171,0) 17%) 50px 50px,
radial-gradient(circle at 0% 50%, #364E27 16%, rgba(54,78,39,0) 17%) 50px 50px;
background-color:#63773F;
background-size:100px 100px;
    }

.ul{
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    font-weight: bold;
    margin:0;
}
.ul li{
    list-style: none;
    display: inline-block;
    text-align: center;
    color: white;
}
    .every-2-1{
       height: 100px;
       width:100px;
       background:linear-gradient(0deg,green,blue) ; //不写 0deg 默认是180deg
       background-size: 100px 100px;
    }
     .every-2-2{
       height: 100px;
       width:100px;
       background:linear-gradient(45deg,green,blue) ;
       background-size: 100px 100px;
    }
     .every-2-3{
       height: 100px;
       width:100px;
       background:linear-gradient(90deg,green,blue) ;
       background-size: 100px 100px;
    }
        .every-2-4{
       height: 100px;
       width:100px;
       background:linear-gradient(135deg,green,blue) ;
       background-size: 100px 100px;
    }
        .every-2-5{
       height: 100px;
       width:100px;
       background:linear-gradient(180deg,green,blue) ;
       background-size: 100px 100px;
    }
     .every-2-6{
       height: 100px;
       width:100px;
       background:linear-gradient(270deg,green,blue) ;
       background-size: 100px 100px;
    }
.every-3{
    height: 200px;
    width: 200px;
    background: linear-gradient(0deg,black 50%,transparent 0),
    linear-gradient(90deg,black 50%,skyblue 0);
    background-size:10px 10px;
}
.every-4{
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background:  //写的顺序表示展示层级  最上方的表示层级最高！！！
    radial-gradient(blue 26%,white 0,white 30%,transparent 0),
    linear-gradient(60deg,green 50%,transparent 0)0 100% / 100% 60%,
    linear-gradient(120deg,green 50%,transparent 0) 50% 100% /100% 100% ,
    linear-gradient(120deg,red 44%,transparent 0 ),
    linear-gradient(red 33%,transparent 0),
    linear-gradient(yellow,yellow);
    // background-size:10px 10px;
}
.every-5{
    background-color: #eee;
     height: 60px;
    width: 60px;
background-image: linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black),
linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black);
background-size: 60px 60px;
background-position:0 0,30px 30px;  // 这里背景图片的位置属性影响了 受到   最终的展示效果 偏移，与原来的组合成了棋盘
}
.every-6{
    background-image:url('http://xynagisa.xyz/1584985520652_1588832937953.png');
    height:200px;
    width:200px;
    border: 1px solid ;
    background-size:100% 100%;
    background-repeat:no-repeat;
    background-position: 10px 10px;

}
.every-7{
    height: 300px;
    width: 300px;
    background:
radial-gradient(black 15%, transparent 16%) 0 0,
radial-gradient(black 15%, transparent 16%) 8px 8px,
radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 8px;
background-color:#1373cc;
background-size:16px 16px;
}
.every-8{
    height: 300px;
    width:300px;
    background-image:
radial-gradient(closest-side, transparent 0%, transparent 75%, #B6CC66 76%, #B6CC66 85%, #EDFFDB 86%, #EDFFDB 94%, #FFFFFF 95%, #FFFFFF 103%, #D9E6A7 104%, #D9E6A7 112%, #798B3C 113%, #798B3C 121%, #FFFFFF 122%, #FFFFFF 130%, #E0EAD7 131%, #E0EAD7 140%),
radial-gradient(closest-side, transparent 0%, transparent 75%, #B6CC66 76%, #B6CC66 85%, #EDFFDB 86%, #EDFFDB 94%, #FFFFFF 95%, #FFFFFF 103%, #D9E6A7 104%, #D9E6A7 112%, #798B3C 113%, #798B3C 121%, #FFFFFF 122%, #FFFFFF 130%, #E0EAD7 131%, #E0EAD7 140%);
background-size: 110px 110px;
background-color: #C8D3A7;
background-position: 0 0, 55px 55px;
}
</style>