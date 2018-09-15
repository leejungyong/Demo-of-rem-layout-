<template>
      <div class="manageMain" style=" height: 100%;">
            <div class="navTeach">
                <ul>
                    <li class="tabNavItem"><span>总实收</span></li>
                    <li  class="tabNavItem"><span>总支出</span></li>
                     <li  class="tabNavItem"><span>咨询人数</span></li>
                      <li  class="tabNavItem"><span>报名人数</span></li>
                </ul>
            </div>
            <div class="relativeData">
                <ul>
                    <li class="dtItem" style="border-right:1px solid darkgrey"><b style="color:#6f94ff">0元</b><span>总实收</span></li>
                    <li class="dtItem"><b style="color:#fa7e88">--%</b><span>较昨日全天</span></li>
                </ul>
            </div>
             <div class="dataList">
                <div>
                    <h3 class="chartTitle"><b style="color:#6f94ff">|</b> 总实收对比</h3>
                    <div class="iconNoDt">
                        <i></i>
                        <p>无数据，请调整查询条件</p>
                    </div>
                 </div>
            </div>
            <div class="chartPillar">
                <div>
                    <h3 class="chartTitle"><b style="color:#6f94ff">|</b> 校区对比</h3>
                    <div class="iconNoDt">
                        <i></i>
                        <p>无数据，请调整查询条件</p>
                    </div>
                 </div>
            </div>
              <div class="dataList">
                <div>
                    <h3 class="chartTitle"><b style="color:#6f94ff">|</b> 数据列表</h3>
                    <div class="iconNoDt">
                        <i></i>
                        <p>无数据，请调整查询条件</p>
                    </div>
                 </div>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>
.manageMain{
    width: 100%;
    font-size: 0.26rem;
    background: #f0f0f1;
   padding-bottom: 7.1rem;
  
}
.navTeach{
    padding-top: 1.3rem; 
  
}
.navTeach ul{
    display: -webkit-box;
    white-space:nowrap;
     overflow-x: auto;
     overflow-y: hidden;
    -webkit-overflow-scrolling: touch;   
    padding-left: 0.2rem;
      transition-property: transform;
    transform-origin: 0px 0px 0px;
    transform: translate(0px,0px)scale(1) translateZ(0px);
}

::-webkit-scrollbar{
display:none;
}
.tabNavItem span{
    display: inline-block;
    background: #fff;
    border-radius: 0.3rem;
    color: #4f4e4d;
  box-shadow:   0 0.08rem 0.16rem 0 rgba(154,163,189,.28);
  padding: 0.1rem 0.2rem 0.1rem 0.2rem;
  margin: 0.1rem 0.1rem;
}

.relativeData{
    box-sizing: border-box;
    width: 5.9rem;
    height: 1.4rem;
    border-radius: 0.07rem;
    overflow: hidden;
    padding-top: 0.3rem;
    margin: 0.1rem auto;
    background: #fff;
}
.relativeData li{
    float: left;
    text-align: center;
    width: 49.5%;
}
.dtItem b{
    display: block;
}
.dtItem span{
    display: inline-block;
    margin-top: 0.1rem;
}

.chartPillar{
    width: 5.9rem;
    height: 5rem;
    background: #fff;
    margin: 0.2rem auto;
    border-radius: 0.07rem;
}
.dataList{
    width: 5.9rem;
     height: 4rem;
    background: #fff;
    margin: 0.2rem auto ;
    border-radius: 0.07rem;
   
}
.chartTitle{
    display: inline-block;
    color: #4f4e4d;
    margin: 0.2rem 0 0 0.2rem;
}

.chartSwitch{
    font-size: 0.2rem;
    color: #4f4e4d;
    float: right;
margin: 0.2rem 0.2rem;
}
.chartSwitch i{
    display: inline-block;
    width: 0.35rem;
    height: 0.35rem;
    vertical-align: middle;
    margin-left: 0.15rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABGdBTUEAALGPC/xhBQAABHJJREFUSA3FV11onEUUPfPtJqSRtomUgoFK/SGKWH/omyjYYOpjIxV/QJEqts0G6mZXUvx52AdtpZjuWsxu90HEIojF0gR8KDW0FEFBGh/6YttHKyu0SmIqabPZ3fGccaf5dm23u9HUC8nMN3PvOXfmzty5a9CEpKwNLmfxWAkYMBYbadJjDXpkyu8CmwK/p6LA+MoYvksZU9FcIzGNJlOf2o6ZOeyiTtJarG2k6+eMwUX2R7s6cSC1zVz14/XtDYkTObu1UkGahOtkRMXz/DdO4G9MFD+vWnArxWwbV1/CndTrh8WABXqdvsGFIMDw/kFzpJ60ilc7bK018RzeQwVvuxluoQkwkhk0J2o1r/8Vz9k+W8E+OqGQAAH2ZAbxrjEMSkhqVizS4Sy+oPfPc6JEo3h6ENl6o5D9dbsOJ4cYnc+QLcpd+jIdw4thnCBsqZWKlFs6HRhszsTMWFg5rNuoLxvZCkNYwnS7GDK6tmLFtFzGV1qpDPYPmZMhvRt2kwftA6UyEtEoPhzdYc7WKybG7KaKxXGtPBLBsz7mbsU6vTpIzojb2yyp9Ctld6heK5dw6s2cfbCe2GER0+mSQ1zqO2JdGW7HOm7LlGJab9zoe3Un8rQ7Rvu1pQpOJg7ah+v1HSaxxVG9ngiUHKiYlLJOb6sx1V295y4M0PxrAq+plHCCYXtUeF6EKezqd1KcJjlmHy9ZfMuTdy4zZO73yq22qcO2feYSDpN8izucEWxO7zSnwzjxj+05xro3avBEVGmwOjnhlUY+sSuLV5HgQbvdj92s/eMSNQwKvK1FknfbMibjeduX2WF+vGbLBMT7PSLOqHIvvYAykleYn8cmKqQ03pKEDEi+OihhJ+23ewxxcHxEnMzr1WTPNOgVutfg2OxveLlcaX7F3ta3vJIlG8VR/61WqRZFN9ITda8MPfW5V8Op54ymP3cq/+E/cUwTT5zuOgl7roMRWmbxHCSyinGBC+5l9rmDvJfFnc/btp8W8AJv+aql+sJYFjtXYHzvq0bHzkmVg7T4VTHWQ96rp43teWmcXcAzdOYQk/y/kitz2EAAvedOqhzqFxTjKXrwJD3s58CkRu1tOI45nOH4Q/qmHOX2yMFWZCHSxqwWkiqHrt1p5naM814pc23h327pZbaZmbc+s31X/sQklR/hNdjQ3o5d+143v2h+ycJCQbYRYCJQjUTgiyS4T4+4B937ivm9w6CP3inH3lss4tTuvFU4liSuQGBIxSXOoFqYjQpNlYMecY/8QcxMm048xYEfSH73PF8gAqz38822wnRVyd8Go+J010mFGT25wJhuHFblEBJte1cX+kn+PcnX88AdCE031U1kMSRscYhLRo5YL4wKM4fCckWPdxgx9ZKZbV+Bp0k+xvFD4bmb9YVFh9PSE4evPIm1KG9k7fuuyGO5wgOwtZWCYBFlsSfSMnCEq+3mEvd8FDPv+Nka4ltZ7NUQyxuR3/Ly1m+D2n8U9CwUODzBA7I8BX2Y/H/5CVPjwDL8aPsLsIwO2d/H2OsAAAAASUVORK5CYII=)  no-repeat;
    background-size: 100% 100%;
}
.iconNoDt{
    position: relative;
   margin: 0.6rem 0.3rem 0 0;
    text-align: center;
    color: darkgray;
}
.iconNoDt i{
    display: inline-block;
    width: 2.4rem;
    height: 2rem;   
    background: url('../imgs/background-error-70a8f0.png') no-repeat;
     background-size: 100% 100%;
}
</style>
