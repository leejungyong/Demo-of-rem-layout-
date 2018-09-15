<template>
    <div style="height:100%">
        <div class="container" id="step1">
            <div class="changeRow">
                <div class="listRow">
                    <label>手机号码<input type="text" placeholder="请输入手机号码" maxlength="11"></label>
                </div>
                <div class="listRow">
                    <label>验证码<input type="text" placeholder="请输入验证码" maxlength="4"></label>
                    <img src="/Home/ValidateCode?t=636722716990002161">
                </div>
            </div>
            <button class="nextbtn" @click="nextCheck">下一步</button>
            <p class="regtips">点击上面按钮“下一步”即表示同意</p>
            <router-link to='/servicetxt' class="service">《校宝ERP服务协议》</router-link>

        </div>
        <div class="tip_holder" id="tel_error" style="display:none;">
            <div class="tip_position_box">手机号错误,请重新输入！</div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    nextCheck() {
      document.getElementById("tel_error").style.display = "block";
      setTimeout(function() {
        document.getElementById("tel_error").style.display = "none";
      }, 5000);
    }
  }
};
</script>

<style scoped>
.container {
  background: #f0f0f1;
  height: 100%;
}
.changeRow::before {
  content: "";
  display: block;
  height: 0.6rem;
}
.listRow {
  padding: 0 0.25rem 0 0.3rem;
  height: 0.8rem;
  line-height: 0.8rem;
  position: relative;
  background-color: #fff;
  border-bottom: 1px solid #d0d0d1;
}
input {
  margin-left: 0.2rem;
  padding-right: 0;
}

.nextbtn {
  background: #67adf7;
  width: 6.1rem;
  margin: 0.6rem auto 0;
  display: block;
  height: 0.8rem;
  font-size: 0.3rem;
  color: #fff;
  border-radius: 0.08rem;
}

.regtips {
  margin-top: 0.25rem;
  font-size: 0.24rem;
  text-align: center;
  display: block;
  line-height: 1.6;
  color: dimgray;
}

.service {
  font-size: 0.24rem;
  text-align: center;
  display: block;
  color: #67adf7;
  text-decoration: none;
}

.tip_holder {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 0.24rem;
  color: #fff;
  background: url("../imgs/tip_bg.png") repeat;

  letter-spacing: 2px;
}
.tip_position_box {
  position: relative;
  padding: 0.2rem 0.8rem;
}

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

@media screen and (min-width: 321px) and (max-width: 400px) {
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
