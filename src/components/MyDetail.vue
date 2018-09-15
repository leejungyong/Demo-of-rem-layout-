
<template>
   <div >
       <div class="datetime">(2018/09/12-2018/09/12)</div>
       <div class="item">
           <router-link to="/myteaching"><div class="itemBox">
               <span class="itemdata"><b>0.00</b>课时</span>
               <span>我的教师课时</span>
           </div></router-link>
           <div class="itemBox">
               <span class="itemdata"><b>0.00</b>元</span>
               <span>我的业绩</span>
           </div>
           <div class="itemBox">
               <span class="itemdata"><b>0.00</b>人</span>
               <span>咨询人数 </span>
           </div>
           <div class="itemBox">
               <span class="itemdata"><b>0.00</b>人</span>
               <span>报名人数</span>
           </div>
           <div class="itemBox">
               <span class="itemdata"><b>0.00</b>元</span>
               <span>总实收</span>
           </div>
           <div class="itemBox">
               <span class="itemdata"><b>0.00</b>元</span>
               <span>总支出</span>
           </div>
       </div>
    </div> 
</template>

<script>
export default {

}
</script>

<style scoped>
a{
    text-decoration: none;
    color: black;
}
.datetime{
    font-size: 0.2rem;
    color: #A5A5A5;
    text-align: center;
    padding: 0.1rem 0 0.2rem;
}
.item{
    font-size: 0.24rem;
   
}
.itemBox{
    float: left;
    width:2.11rem;
    height: 0.65rem;
    border-right: 0.01rem solid #D2D2D2;
    text-align: center;
    margin: 0.3rem 0; 
}
.itemBox:nth-child(3n){
border-right: none;
}
.itemBox span{
    display: block;

}
.itemdata{
    color: #6F94FF;
}

</style>
