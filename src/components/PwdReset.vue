<template>
<div style="height:100% ;display:block;">
  <div class="padding_style">
      <div class="content">
        <div class="login_box" id="checkPhone" >
          <div class="page_logo"></div>
          <div class="login_input">
            <input type="text" class="input_style" placeholder="输入手机号" maxlength="11">
          </div>
          <div class="login_input">
            <input type="text" class="input_style" placeholder="图形验证码" style="width:2.58rem" maxlength="4">
              <img id="pic" src="/Home/ValidateCode?t=636722581464803665" style="width:1.98rem;height:0.8rem;border-radius:3px; vertical-align:bottom" >
          </div>
          <div class="login_input">
            <input type="text" class="input_style" placeholder="短信验证码" style="width:2.58rem;" maxlength="6">
            <input type="text" class="queryCode" value="获取" style="width:1.98rem" readonly="readonly" >
       </div><br><br>
         
          <div>
            <input type="button" @click="formSubmit" class="btn_style" value="确定">
          </div>
        
        </div>
      </div>

  
    <div class="login_figure">
    </div>
     <div class="tip_holder" id="tip_yz" style="display:none;" >
     <div class="tip_position_box">
                 
                验证码已失效，请重新发送 ！
            
        </div>
</div>
  </div>
  </div>
</template>

<script>
export default {
    name:'PwdReset',
    data(){
        return{

        }
      
    },
      methods: {
            formSubmit(){
                  document.getElementById("tip_yz").style.display="block";
      setTimeout(function(){
      document.getElementById("tip_yz").style.display="none";
    }
      ,5000)
            }
        }
}
</script>

<style scoped>
@import "../css/common.css";
/*媒体查询- 在特定分辨率下的字体大小*/
@media screen and (max-width: 321px) {
  .content,
  .container,
  .input_style,
  .changeRow input,
  .qr_code,
  textarea {
    font-size: 15px;
  }
  .btn_style {
    font-size: 17px;
  }
}

@media screen and (max-width: 400px) and (min-width: 321px) {
  .content,
  .container,
  .input_style,
  .changeRow input,
  .qr_code,
  textarea {
    font-size: 16px;
  }
  .btn_style {
    font-size: 19px;
  }
}

@media screen and (min-width: 400px) {
  .content,
  .container,
  .input_style,
  .changeRow input,
  .qr_code,
  textarea {
    font-size: 18px;
  }
  .btn_style {
    font-size: 20px;
  }
}
input::-webkit-input-placeholder {
  color: #fff; /* WebKit browsers */
}

input:-moz-placeholder {
  color: #fff; /* Mozilla Firefox 4 to 18 */
}

input::-moz-placeholder {
  color: #fff; /* Mozilla Firefox 19+ */
}

input:-ms-input-placeholder {
  color: #fff; /* Internet Explorer 10+ */
}

.padding_style {
  width: 6.4rem;
  height: 100%;
  overflow-x: hidden;
  padding: 0.42rem 0.42rem 0.64rem;
  background: #3168a2 url("../imgs/web_bg.png") repeat-x;
  position: relative;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
  background-size: 100% 100%;
}

.content {
  height: 100%;
  background: #326ba4 url("../imgs/content_bg.png") no-repeat top left;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
  background-size: 100% 100%;
  -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  -ms-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.page_logo {
  width: 2.05rem;
  height: 1.11rem;
  margin: -0.05rem auto 0.2rem;
  background: url("../imgs/logo.png") center center;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
  background-size: 100% 100%;
}
.login_box {
  min-height: 3.61rem;
  padding: 0.4rem;
  position: relative;
  z-index: 20;
}
.login_input {
  margin-top: 0.2rem;
}

.input_style {
  width: 4.76rem;
  height: 0.8rem;
  padding: 0 0.2rem;
  text-align: center;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.23);
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  border-radius: 3px;
  outline: none;
}
.input_style:focus {
  background-color: #31699e;
}

.queryCode{
    width:1.98rem;
  height: 0.8rem;
  padding: 0 0.2rem;
  text-align: center;
  color: #40484f;
  background-color:#c1d5e9 ;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  border-radius: 3px;
  outline: none;
font-size: 0.24rem;
}


.btn_style{
  width: 4.76rem;
  height: 0.84rem;
  color: #fff;
  background: none;
  border: 2px #fdfdfd solid;
  font-family: "Microsoft Yahei", sans-serif;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  border-radius: 4px;
  margin-bottom: 0.2rem;
  font-size: 0.22rem;
}

.login_figure {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 6.4rem;
  height: 1.56rem;
  background: url("../imgs/login_bottom_bg.png") no-repeat center bottom;
  -webkit-background-size: 100% 92%;
  -moz-background-size: 100% 92%;
  -ms-background-size: 100% 92%;
  background-size: 100% 92%;
}
.tip_holder{
    position: fixed;
    top: 0;
     left:0;
  width: 100%;
  font-size:0.24rem;
  color: #fff;
  background: url("../imgs/tip_bg.png")repeat;
 
  letter-spacing: 2px;
}
.tip_position_box{
  position: relative;
  padding: 0.2rem 0.8rem;
}
input:focus::-webkit-input-placeholder {
color: transparent;
/* transparent是全透明黑色(black)的速记法，即一个类似rgba(0,0,0,0)这样的值 */
}


/* Mozilla Firefox 4 to 18 */

input:focus:-moz-placeholder {
color: transparent;
}


/* Mozilla Firefox 19+ */

input:focus::-moz-placeholder {
color: transparent;
}


/* Internet Explorer 10+ */

input:focus:-ms-input-placeholder {
color: transparent;
}
</style>