
<template>
    <div style="height:100%;font-size:0.3rem">
        <div class="userItem">
             <router-link to="
                /mysalary"> <div class="row">
              <span class="rowTxt">我的工资条</span>
                <span class="nextImg"></span>
            </div></router-link>
            <div class="row">
                <router-link to="/"><span class="rowTxt">查看电脑版</span></router-link> 
                <span class="nextImg"></span>
            </div>
            <div class="row">
                <router-link to="/"><span class="rowTxt">帮助中心</span></router-link> 
                <span class="nextImg"></span>
            </div>
        </div>
        <div class="safeBack">
            <div class="row" @click="alertMask">安全退出</div>
        </div>
        <div class="mask" style="display:none">
            <div class="confirmBox">
                <div>安全退出？</div>
               <router-link to="/"> <div class="blueTxt" >确定</div></router-link>
                <div @click="cancel">取消</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

methods:{
    alertMask(){
            document.getElementsByClassName('mask')[0].style.display="block";
    },
    cancel(){
document.getElementsByClassName('mask')[0].style.display="none";
    }
}
}
</script>

<style>
a{
    text-decoration: none;
}
.clear {
  clear: both;
  }
.userItem{
    padding-top: 1rem;
}
.row{
     background: white;
    border-bottom: 0.01rem solid #d0d0d0;
    padding: 0 0.25rem 0 0.3rem;
     line-height: 0.8rem;
     
}
.rowTxt{
    height: 0.8rem;
   
    display: inline-block;
    vertical-align: top;
    color: dimgray;
}

.nextImg{
    background: url('../imgs/icon-go.png')no-repeat center center;
    background-size: 100% 100%;
    width: 0.13rem;
    height: 0.25rem;
    float: right;
    margin-top: 0.26rem;
}

.safeBack{
    margin-top: 0.6rem;
    text-align: center;
    color: dimgray;
}
.mask{
    position: fixed;
    width: 100%;
    height: 100%;
    bottom:0;
    left:0;
    background: rgba(0,0,0,0.7);
    z-index: 999;
}
.confirmBox{
    position: absolute;
    left:0;
    bottom: 0;
    width: 100%;
    background: #f0eff0;
}
.confirmBox div{
     background: white;
    border-bottom: 0.01rem solid #d0d0d0;
    padding: 0 0.25rem 0 0.3rem;
     line-height: 0.8rem;
     text-align: center;
}
.confirmBox .blueTxt{
    margin-bottom: 0.2rem;
    color: #67adf7 ;
}
</style>

