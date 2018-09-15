
<template>
    <div style="height:100%; display:block">
        <div class="container">
           <working :is="currentView" keep-alive></working>
             </div>
        <div class="navTab">
            <div class="tab clear" style=" color: darkgray" @click="tabChoose(working)">
                <span v-bind:class="{Imgw:true,wbefore:b,wafter:a,}"></span>
                工作台
            </div>
           <div class="tab" style=" color: darkgray" @click="tabChoose(userinfo)">
                <span v-bind:class="{Imgw:true,mbefore:a,mafter:b,}"></span>
                我的
            </div>
        </div>
    </div>
</template>

<script>
import userinfo from './UserInfo';
import working from './Working';
export default {
    data(){
        return{
            currentView:'working',
            userinfo:'userinfo',
            working:'working',
            a:false,
            b:true

        }
    },
    components:{
    userinfo,
    working
    },
    methods: {
        tabChoose(tabTxt){
            this.currentView=tabTxt;
            if(tabTxt=='userinfo'){
                this.b=false
                this.a=true;
                console.log(this.a);
                document.getElementsByClassName('tab')[1].style.color='#67adf7';
                document.getElementsByClassName('tab')[0].style.color='darkgray';
            }
            else{
                 document.getElementsByClassName('tab')[0].style.color='#67adf7';
                document.getElementsByClassName('tab')[1].style.color='darkgray';
                 this.b=true;
                this.a=false;
            }
            
        }
    }

}
</script>

<style>

.clear {
  clear: both;
  }
.container{
    height: 100%;
    background: #f0f0f1;
    
}

.navTab{
    position: fixed;
    height: 1rem;
    width: 100%;
    background: #fff;
    bottom: 0;
    left: 0;
    font-size:0.16rem;
   
}
.tab{
    width: 50%;
    height: 100%;
    float: left;
     text-align: center;
  
}
.Imgw{
    position: relative;
    display:block;
    height: 0.38rem;
    width: 0.38rem;
    margin: 0.14rem auto 0.08rem;   
}
.wbefore{
 background: url('../imgs/icon-func-2.png')bottom left no-repeat;
 background-size:100% 100%;
}
.wafter{
background: url('../imgs/icon-func-1.png')bottom left no-repeat;
background-size:100% 100%;
}
.mineImg{
    position: relative;
    display: block;
    height: 0.38rem;
    width: 0.38rem;
     margin: 0.14rem auto 0.08rem;
}
.mbefore{
  background: url('../imgs/icon-user-2.png')bottom left no-repeat;
    background-size:100% 100%;
}
.mafter{
  background: url('../imgs/icon-user-1.png')bottom left no-repeat;
    background-size:100% 100%;
}

</style>
