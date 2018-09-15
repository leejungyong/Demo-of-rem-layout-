<template>
<div style="background:white;">
    <div class="myReport">
        <div class="listTitle">我的报表
          <router-link to="/setting"> <span class="set">设置
                <img src="../imgs/iconsetting.png">
            </span></router-link> 
        </div>
        <div class="timeTab">
            <span :class="{time:true,active:a}" @click="tabChose(today)">今日</span>
            <span :class="{time:true,active:b}" @click="tabChose(week)">本周</span>
            <span :class="{time:true,active:c}" @click="tabChose(month)">本月</span>
        </div>
        <today :is="currentView" keep-alive ></today>
        <div class="loadingbox" style="display:none;" >
        <span class="loading"></span>
    </div>
    </div>
  
    <div class="myApply">
        <div class="listTitle">我的应用</div>
        <div class="appBox">
            <div class="appItem">
                <span class="icon1"></span>校内通知
            </div>
              <div class="appItem">
                <span class="icon2"></span>咨询本
            </div>
              <div class="appItem">
                <span class="icon3"></span>课程表
            </div>
              <div class="appItem">
                <span class="icon4"></span>记上课
            </div>
              <div class="appItem">
                <span class="icon5"></span>校宝秀
            </div>
              <div class="appItem">
                <span class="icon6"></span>校宝家
            </div>
              <div class="appItem">
                <span class="icon7"></span>学员
            </div>
              <div class="appItem">
                <span class="icon8"></span>报表中心
            </div>
              <div class="appItem">
                <span class="icon9"></span>校宝学院
            </div>
              <div class="appItem">
                <span class="icon10"></span>收银宝
            </div>
        </div>
    </div>
    <div class="bottomInfo">
        <div class="txt">已通过 ISO27001:2013 信息安全认证</div>
    </div>
    </div>
</template>
<script>
import today from './MyDetail';
import week from './MyDetail';
import month from './MyDetail';
export default {
    data(){
        return{
            currentView:'today',
            today:'today',
            week:'week',
            month:'month',
            a:true,
            b:false,
            c:false


        }
    },
    components:{
        today,
        week,
        month
    },
    methods: {
        tabChose(txt){
             this.currentView=txt;
            if(txt==='today'){
                this.a=true;
                this.b=false;
                this.c=false;
            }
            else if(txt==='week'){
                  this.a=false;
                this.b=true;
                this.c=false;
            }
            else {
                  this.a=false;
                this.b=false;
                this.c=true;
            }
            // document.getElementsByClassName('loadingbox')[0].style.display='inline-block';
            // document.getElementsByClassName('databox')[0].style.display='none';
            // setTimeout(function(){
            //      document.getElementsByClassName('loadingbox')[0].style.display='none';
            //       document.getElementsByClassName('databox')[0].style.display='block';
            // },2000);
           

        }
    },
    mounted () {
        
    }
    
}
</script>
<style scoped>
a{
    text-decoration: none;
}
.myReport{
    height: 4.5rem;
    width: 100%;
    text-align: center;
    
}
.listTitle{
    color: #929292;
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 0.26rem;
    text-align: center;
 background: #f0f0f1;
}

.set{
    font-size: 0.24rem;
    color: #68A6F5;
    position: absolute;
    right: 0.3rem;
}

.set img{
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    background-size: 100% 100%;
    margin-left: 0.1rem;
    vertical-align: text-bottom;
}
.timeTab{
    background: #f2f4fb;
    height: 0.5rem;
    width: 5.8rem;
    /* margin-top: 0.2rem; */
    border-radius: 0.5rem;
    margin: 0.2rem auto 0;
}

.time{
    float: left;
    width: 1.93rem;
    height: 0.5rem;
    line-height: 0.5rem;
    border-radius: 0.5rem;
    color: black;
    text-align: center;
    font-size: 0.24rem;
}
.active{
  background:  #6F94FF;
  color: white;
}

.loadingbox{
    width: 100%;
    background: white;
    text-align: center;
    height:  2.5rem;
    
}
.loading{
    display:none;
    width: 2rem;
    height: 2rem;
    background: url('../imgs/loading2.gif')no-repeat;
    background-size:100% 100%; 
    vertical-align: text-bottom;
    margin: 0.1rem;
}
.myApply{
    width: 100%;
    background: #fff;
    height: 5.4rem;
}
.appBox{
    font-size: 0.24rem;
}
.appItem{
    width: 25%;
    background: #fff;
    text-align: center;
    height: 1.6rem;
    float: left;
}
.appItem span{
    content: "";
    display:block;
    height: 0.56rem;
    width: 0.56rem;
    margin: 0.38rem auto 0.1rem;
}
.icon1{
    background: url('../imgs/icon-desk1.png')no-repeat ;
    background-size: 100% 100%;
     -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
}
.icon2{
    background: url('../imgs/icon-desk2.png')no-repeat ;
    background-size: 100% 100%;
     -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
}
.icon3{
    background: url('../imgs/icon-desk3.png')no-repeat ;
    background-size: 100% 100%;
     -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
}
.icon4{
    background: url('../imgs/icon-desk4.png')no-repeat ;
    background-size: 100% 100%;
     -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
}
.icon5{
    background: url('../imgs/icon-desk5.png')no-repeat ;
    background-size: 100% 100%;
     -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
}
.icon6{
    background: url('../imgs/icon-desk6.png')no-repeat ;
    background-size: 100% 100%;
     -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
}
.icon7{
    background: url('../imgs/icon-desk7.png')no-repeat ;
    background-size: 100% 100%;
     -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
}
.icon8{
    background: url('../imgs/icon-desk8.png')no-repeat ;
    background-size: 100% 100%;
     -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
}
.icon9{
    background: url('../imgs/icon-desk10.png')no-repeat ;
    background-size: 100% 100%;
     -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
}
.icon10{
    background: url('../imgs/icon-desk11.png')no-repeat ;
    background-size: 100% 100%;
     -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
}

.bottomInfo{
    width: 100%;
    padding-bottom: 1.6rem;
    background: #f0f0f1;
    }
.txt{
    padding-top: 0.1rem;
    font-size: 0.18rem;
    color: #b5b5b1;
    text-align: center;
}
</style>
