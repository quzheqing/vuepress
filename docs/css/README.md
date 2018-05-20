---
sidebar: auto
---
# css汇总

## CSS3使用Calc
CSS3使用Calc
calc()使用通用的数学运算规则，但是也提供更智能的功能：
    >使用“+”、“-”、“*” 和 “/”四则运算；
    >可以使用百分比、px、em、rem等单位；
    >可以混合使用各种单位进行计算；
    >表达式中有“+”和“-”时，其前后必须要有空格，如"width: calc(12%+5em)"这种没有空格的写法是错误的；
    >表达式中有“*”和“/”时，其前后可以没有空格，但建议留有空格。
   
   例如 ：设置div元素的高度为当前窗口高度-100px
    div{
      height: calc(100vh - 100px);     
   }
   实现box高度居中定位
``` css
#Box{
	position: fixed;
	right: 100px;
	top: calc(100vh/2);
	width: 60px;
	height: 60px;
}
```

## css动画对号

html

``` html
<i class="icon-span" :class="{'icon-span-select' : isShow}"></i>
```

css
``` css
//对号样式
.icon-span{
  display: inline-block;
  background-color: #fff;
  border-radius: 100%;
  border: 1px solid #ccc;
  position: relative;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.icon-span::after{
  border: 2px solid transparent;
  border-left: 0;
  border-top: 0;
  content: " ";
  top: 3px;
  left: 6px;
  position: absolute;
  width: 4px;
  height: 8px;
  -webkit-transform: rotate(45deg) scale(0);
  transform: rotate(45deg) scale(0);
  -webkit-transition: -webkit-transform .2s;
  transition: -webkit-transform .2s;
  transition: transform .2s;
  transition: transform .2s, -webkit-transform .2s;
}
.icon-span-select{
  background-color: $color-primary;
  border-color: $color-primary;
}
.icon-span-select::after{
  border-color: #fff;
  -webkit-transform: rotate(45deg) scale(1);
  transform: rotate(45deg) scale(1);
}
```
效果
![效果图](http://img.blog.csdn.net/20171226102600042?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvbTBfMzgwNjk2MzA=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

## css实现三角形

html

``` html
<transition name="fade" mode="out-in">
    <div class="child" v-if="isShowChildMenu" @click="getRouter4">
        <span @click="getRouter5" :class="{active:shop.navActive == 1}">购买商品</span>
        <span @click="getRouter6" :class="{active:shop.navActive == 1}">我的订单</span>
    </div>
</transition>
```

css
``` css
.child:after, .child:before {
   border: solid transparent;
    content: ' ';
    height: 0;
    top: 100%;
    position: absolute;
    width: 0;
}
.child:after {
    border-width: 0.16rem;
    border-top-color: #fff;
    left: 50%;
    margin-left: -0.16rem;
}
.child:before {
    border-width: 0.22rem;
    border-top-color: #e1e1e1;
    left: 50%;
    margin-left: -0.215rem;
}
```
![效果图](http://img.blog.csdn.net/20171226101547504?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvbTBfMzgwNjk2MzA=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
