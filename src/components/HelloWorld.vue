<template>
  <div style="height:100%">
  <div class="padding_style">
    <form>
      <div class="content">
        <div class="login_box" id="TelLogin" style="display:block" v-if="showTel">
          <div class="page_logo"></div>
          <div class="login_input">
            <input type="text" class="input_style" placeholder="输入手机号" maxlength="11" v-model="telnum" id="te">
          </div>
          <div class="login_input">
            <input type="password" class="input_style" placeholder="输入密码" maxlength="32" v-model="telpwd">
          </div>
          <div class="login_input">
            <input type="text" class="input_style" placeholder="输入验证码" style="width:2.66rem;" maxlength="4">
            <img id="phoneCode" src="/Home/ValidateCode?t=636722581464803665" style="width:1.98rem;height:0.8rem;border-radius:3px; vertical-align:bottom" >
          </div>
          <div class="login_a ">
            <a id="UserLogin" @click="ChangeMode" >账号登录</a>
           <!-- <a class="TelRes fr" ></a> -->
            <router-link to='/pwdreset' class="TelRes">手机号重置密码</router-link>
          </div>
          <div>
            <input type="button"  class="btn" value="登录" @click="formSubmit">
          </div>
          <div>
            <router-link to='/registerpersonal'> <input type="button" class="btn" value="立即开通，免费体验" readonly="readonly"></router-link>
          </div>
        </div>
        <div class="login_box" id="OrgLogin"  v-if="showOrg">
          <div class="page_logo"></div>
          <div class="login_input">
             <input type="text" class="input_style" placeholder="输入机构后缀" v-model="org">
          </div>
          <div class="login_input">
             <input type="text" class="input_style" placeholder="输入登录名" v-model="orgloginname">
          </div>
           <div class="login_input">
             <input type="text" class="input_style" placeholder="输入密码" v-model="orgpwd">
          </div>
          <div class="login_a clearfix">
            <a id="TelLogin"  @click="ChangeMode">手机号登录</a>
            <a class="fr" href="#" @click="ForgetPwd">忘记密码？</a>
          </div>
           <div>
           <router-link to="/workingdata" ><input type="button" class="btn" value="登录" ></router-link> 
          </div>
          <div>
            <router-link to='/registerpersonal'> <input type="button" class="btn" value="立即开通，免费体验" readonly="readonly"></router-link>
          
          </div>
        </div>

      </div>

    </form>
    <div class="login_figure">
    </div>
    <div style="position: absolute;bottom: 0.3rem;font-size: 0.18rem;color: #fff;width: 100%;text-align: center;">已通过 ISO27001:2013 信息安全认证</div>
  </div>
  <div class="tip_holder" id="div_error" style="display:none;">
    <div class="tip_position_box">请联系学校最高权限账号拥有者重置密码</div>
  </div>
  <div class="tip_holder" id="tip">
     <div class="tip_position_box">
                  手机号或密码错误，请重新输入！<br/>如果忘记密码，可用手机号重置密码
        </div>
</div>
  <div class="tip_holder" id="tip_lack" style="display:none;" >
     <div class="tip_position_box">
                 
                 输入的信息不完整，请补全
            
        </div>
</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      showTel:true,
      showOrg:false,

      telnum:'',
      telpwd:'',

      org:'',
      orgloginname:'',
      orgpwd:''


    };
  },
  methods:{
    ChangeMode(){
      this.showTel=!this.showTel;
      this.showOrg=!this.showOrg;
    },

    ForgetPwd(){
      document.getElementById("div_error").style.display="block";
      setTimeout(function(){
      document.getElementById("div_error").style.display="none";
    }
      ,5000)
  },

  checkNull(){
    if(this.org==''||this.orgloginname==''||this.orgpwd==''){
     document.getElementById("tip_lack").style.display="block";
      setTimeout(function(){
      document.getElementById("tip_lack").style.display="none";
    }
      ,5000)}
  },
  formSubmit(){
    if(this.telnum==''||this.telpwd==''){
  document.getElementById("tip").style.display="block";
      setTimeout(function(){
      document.getElementById("tip").style.display="none";
    }
      ,5000)}
  }
  },

  mounted () {
    setTimeout(function(){
      document.getElementById("tip").
     style.display="none";
    },5000);
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.login_a {
  margin: 0.2rem auto;
  
}
.login_a a {
  color: #fff;
  text-decoration: underline;
}

.TelRes{
  float: right;
}

.btn {
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
  top:0;
  left:0;
  width: 100%;
  font-size:0.24rem;
  color: #fff;
  background: url("../imgs/tip_bg.png")repeat;
  z-index: 999;
  letter-spacing: 2px;
}
.tip_position_box{
  position: relative;
  padding: 0.2rem 0.8rem;
}
</style>
