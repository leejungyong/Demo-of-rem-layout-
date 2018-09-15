<template>
    <div class="holder">
        <div class="noData">
            <span class="noDataImg"></span>
           <br> <p>暂无数据</p>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style >
.holder{
    width: 100%;
    height: 100%;
font-size: 0.4rem;
background: #f0f0f1;
color: #a4a2a2;
}
.noData{
    padding-top: 3rem;
    text-align: center;
    height: 100%;
}
.noDataImg{
    display: block;
    width: 2.34rem;
    height: 2.34rem;
    margin: 0 auto;
    background: url('../imgs/icon-noData.png')no-repeat center center;
    background-size: 100% 100%;
     -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
}
</style>
