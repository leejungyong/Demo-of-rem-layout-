<<<<<<< c868b490814d14db59c6c0835d82cd6666241db1
=======
# rem布局应用--移动端 

```bash
# rem 布局
  web app的适配解决方案
    1.写一段js,设定html的font-size
         (function (doc, win) {
              var docEl = doc.documentElement,
                  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                  recalc = function () {
                      var clientWidth = docEl.clientWidth;
                      if (!clientWidth) return;
                      if(clientWidth>=640){
                          docEl.style.fontSize = '100px';
                      }else{
                          docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
                      }
                  };
      
              if (!doc.addEventListener) return;
              win.addEventListener(resizeEvt, recalc, false);
              doc.addEventListener('DOMContentLoaded', recalc, false);
          })(document, window);
 #2.	将html,body,最外层div等元素width height设为100%，每一个vue文件的最外层div高度设定为100%；

#3.	body等元素都有自带的margin padding border等，需要清除css样式

body,table,td,div,p,ol,ul,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,form,a,i,object,input,button,table,select,option,textarea{margin: 0;padding: 0;outline:none;border: 0;}
   
#4.	布局：
（1）	相对于浏览器窗口进行绝对定位
position:fixed
top:0
bottom:0; 
（2）	父元素相对定位，子元素绝对定位
position:absolute
left:
top:
（3）	span I b等是内联元素，需要display：inline-block并设置宽高才能设置背景图片（或者float）
        背景图需要no-repeat center center
        background: url("../imgs/login_bottom_bg.png") no-repeat center bottom;
        -webkit-background-size: 100% 92%;
        -moz-background-size: 100% 92%;
        -ms-background-size: 100% 92%;
        background-size: 100% 92%;
（4）	 只有三种情况会使得元素脱离文档流，分别是：浮动绝对定位和相对定位。
（5）	z-index属性指对象的层叠顺序，数值越大，层叠在越上，-1在最底层（无position定位的元素的z-index属性是无效的）
（6）	border-radius：元素的圆弧边框
（7）	让img标签在容器中居中vertical-align:middle
（8）	line-height:值等于容器高度，文字居中
（9）	text-align:center ，设置文本或img标签等一些内联对象（或与之类似的元素）的居中。
        margin:0 auto ；设置块元素（或与之类似的元素）的居中。
（10）	text-decoration：下划线；
（11）	横向滑动的导航栏：
        父元素display:flex（display:box） overflow-x:auto overflow-y:hidden
        子元素display:inline-block块级元素
	

#5.	Tab标签切换：用vue的is特性实现
（1）	引入组件import
（2）	Components:{}
（3）	定义currentView变量：表示当前值
（4）	组件标签布局，并is绑定currentView
         <working :is="currentView" keep-alive></working>
（5）	点击事件：
        a.	改变currentView的值
        b.	改变控件的样式（可以用class和style绑定的方式实现，三元表达式）

```


> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



