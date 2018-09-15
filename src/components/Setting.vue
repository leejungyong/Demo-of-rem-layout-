<template>
    <div class="setting">
        <div class="tipBox"></div>
        <div class="listBox">
            <div class="list">
                <div class="listTitle">
                    <i class="icon market"></i>市场数据</div>
                <ul>
                    <li class="listItem">
                        <span>咨询人数</span>
                        <span class="Img sec"></span>
                    </li>
                    <li class="listItem">
                        <span>沟通次数</span>
                        <span class="Img "></span>
                    </li>
                    <li class="listItem">
                        <span>试听人数</span>
                        <span class="Img"></span>
                    </li>
                    <li class="listItem">
                        <span>报名人数</span>
                        <span class="Img sec"></span>
                    </li>
                    <li class="listItem">
                        <span>销售业绩</span>
                        <span class="Img"></span>
                    </li>
                    <li class="listItem">
                        <span>我的业绩</span>
                        <span class="Img sec"></span>
                    </li>
                </ul>
            </div>
            <div class="list">
                <div class="listTitle">
                    <i class="icon teach"></i>教务数据</div>
                <ul>
                    <li class="listItem">
                        <span>学员课时消耗</span>
                        <span class="Img sec"></span>
                    </li>
                    <li class="listItem">
                        <span>学员学费消耗</span>
                        <span class="Img "></span>
                    </li>
                    <li class="listItem">
                        <span>教师课时</span>
                        <span class="Img"></span>
                    </li>
                    <li class="listItem">
                        <span>我的教师课时</span>
                        <span class="Img sec"></span>
                    </li>
                    <li class="listItem">
                        <span>出勤率</span>
                        <span class="Img"></span>
                    </li>

                </ul>
            </div>
            <div class="list">
                <div class="listTitle">
                    <i class="icon finance"></i>财务数据</div>
                <ul>
                    <li class="listItem">
                        <span>总实收</span>
                        <span class="Img sec"></span>
                    </li>
                    <li class="listItem">
                        <span>总支出</span>
                        <span class="Img "></span>
                    </li>
                    <li class="listItem">
                        <span>学费退费</span>
                        <span class="Img"></span>
                    </li>
                    <li class="listItem">
                        <span>欠款总额</span>
                        <span class="Img sec"></span>
                    </li>

                </ul>
            </div>
        </div>
        <div class="bottomBtn">保存</div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.setting {
  font-size: 0.24rem;
  height: 100%;
  background: #f0f0f1;
  
}
.list {
  background: #fff;
  margin-bottom: 0.2rem;
}
.listBox{
    overflow-y: scroll;
    padding-bottom: 1rem;
    height: 85%;
}
.bottomBtn {
  font-size: 0.3rem;
  width: 100%;
  text-align: center;
  color: #fff;
  background: #68a7f6;
  height: 1rem;
  position: absolute;
  bottom: 0;
  line-height: 1rem;
}
.listTitle {
  height: 0.8rem;
  line-height: 0.8rem;
  padding: 0 0.3rem;
  border-bottom: 1px solid #e9edf3;
  color: #a5a5a5;
}
.icon {
  display: inline-block;
  width: 0.45rem;
  height: 0.45rem;
  margin-right: 0.05rem;
  vertical-align: middle;
}
.market {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAmVBMVEVHcEzW1tZ3mv9wlf/T09PT09PT09Pb29vS0tLT09NwlP9ymP9vlP/T09OitPbU1NRvlf+azf9wlv/T09Pc3NzT09NvmP9xlv9vlf/S0tLW1tbc3Nxzlf/T09NvlP9vlf96m/9vlf9vlf/T09PS0tJvlP/V1dXU1NRvlP9wlf90m/9wlv/U1NTT09PT09PT09PU1NTS0tJvlP/Wj5dEAAAAMXRSTlMAZA/weYadHONim0W6mAauzgJkqBa0LBznWEAOPIqymAv5qML4bjaBPuYhS3zXi+dfPsAVzgAAAMdJREFUeF7t0UkPgjAQhuFxRUUKiCubbO7rzP//cYZKIwkp1HgjPpf5Dm96KTT4M7DJaP5dCH00NLk9jgBEOIAyFkGJJg1X61hXCmdEW9Vwwl/eLdVCi9a2Utgj6v4W6qcpUwpDoqNSOCXSWxOGRL7469rQtxKW33MvvuQ3Iav+ryHq8mMvWUMo2FAJF2OhU5wgH1z/E7pYzwRhYwzfnAxNPkzkgzt4UOGgU6w7piDnYqYV03vgBqRSvILwxBtIBQsGgm0MoLVe6Xg1SGL7DqYAAAAASUVORK5CYII=);
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
}
.teach {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABTVBMVEVHcEzW1tbW1tb////T09PU1NTS0tLU1NTU1NTW1tb////U1NTT09PV1dXX19fS0tLT09PT09Pt7e3////m5ubT09PT09PY2NjV1dXU1NTW1tbU1NTT09PT09PT09PT09PS0tLT09PV1dXT09P////T09PT09Pn5+fU1NT////////S0tLT09PT09PV1dXX19f////T09P////////////////////////////////////T09PS0tL////////////S0tLq8P/////////////y9f/V1dXT09P9/f3U1NTS0tLT09PV1dXT09PT09P9/v/////////////////6+vrS0tL////V1dVvlP/i4uL4+Pj7+/v9/f3+/v/n5+fX19fd3d31+P/09PTZ2dmAof+Nq//C0v+rwf92mf/o7v/Z4v6JqP/y9f2iuv/w8PAE4SFbAAAAVXRSTlMAJiAD7WvUplkRConjLhnZjv4N+gnb3xxBXzE96+j6zb3QI/M3x3T0VuAb8Kl5KhaSwIKiiKy6fE/KW7WmtGIdmtrTzmvTToScZaqiSZWj9PM9Q/T+RE6U1QAAAadJREFUeF7dk1dPIzEUhZ2ECZvMAhkS2JQllJBsaEvZxsL2Qu9wrqel0uv/f2RizMBEDPCAhMT3cC1ffT6ypWv2AimEe2PJUHM3saIuL3q6ChqMjKbGmUt6rC8Lh9htsQ9KRg0D0PJjmXYWSada34rdvKLlbkf2Iu3UoDIrMkRB969ixGm2wKku/WiTt5pbncwh17+kBMTeTxR8wyux3iWGHy++f2KxA4HnErsw8ORi8HFi953i5sdPnz+8qzwkDn4lIuv0/GShk7m8xptmcSZOZFs1Xdf3f/+8R9yKk2lwfqY77P2P+oqJIbrg0Iya3uBwikl60O4Vf5CpoWzRlXi0HvUTv1MVZSIp6sfTrjjuFYdsjdtEVDoQ1L74JW7XUSWJWSeacH9hXgl6EuvYJUlFK9F1YlsPgLCaCbl3tDRukUAcmWaSRGp0BEDLWjEiX23AEF6p8aqNKLshlIx1AcjmO9Cqzpo7HIZJZFaxa9MUayJQmMxCUKU6BzgHKib9lYEeIkklphaKAzNxy+DQKuUS/Rlmvsjp2bGJ4hOd7AEGG/P4b5g9N5fUFn90AZuCYQAAAABJRU5ErkJggg==);
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
}
.finance {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAvVBMVEVHcEzT09OJrf9xlv/X19fT09PS0tLb29vT09PS0tLT09PS0tJwlf9vlf9wlP////9xlv96nv9vlf9wlf5xlv93mvxvlP9wlf9ylP9vlP+jtelwlf9vlf+dseqDoviTq+9wlf9vlf9zl/1wmf98nPpvlP/R0dShtOm5wt91mPyIpPTDydnEzt3R0dO+xt1wlf+LpvRwlf9wlf+IpPaKpPOKp/ZvlP/S0tKVre7DydicserQ0NKwveGAn/afsulDEUWdAAAANnRSTlMA5gQ5LWmmHJbS7bZ2q/EBUQ5o/jDX3MtGprvDtuiJ7SmT/Bnq42qVqPXa2DSXeYJyiVS+uXSpSjYkAAAA+ElEQVR4Xt3Ux24CMRSF4TOe5oEpzNB7eq8kORfS3v+xskPGiYMmmyD+naVPsmXLF3tYHHnyY14Ub7iGOGuYMpJm7NiqKZGx9MRwlhTPWInAmcgf4eC0AtSkX5qoHE+UBYMu85vggZwFRjPyxYLSJlfySS7FaEm+WjA5Iq+TKTlPjObk1ILI2CvgkwsYtUjfhseHHQBVio3Sqsb17DhUv0GVDRXQ6vtAJx9+g3rdiBzp20ueaH1FXmgLWs+2IvkmH+S7WDBc90Q+h3dk+yzskueh84wLcoCixzGQMi/hhMXjPQA/OwBU6v/zy9T9rtsHQN2Rsn1I7V9fmWFE7v8ZLHUAAAAASUVORK5CYII=);
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
}

.listItem {
  height: 0.8rem;
  line-height: 0.8rem;
  padding: 0 0.3rem;
  border-bottom: 1px solid #e9edf3;
  color: #4f4e4d;
}

.Img {
  float: right;
  width: 0.4rem;
  height: 0.4rem;
  margin-top: 0.2rem;
  border: 0.01rem solid #d2d2d2;
  border-radius: 0.4rem;
}

.sec {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAb1BMVEVHcExop/Vqqv9pp/Zpp/Zop/ZqqPZpp/dpp/b///9pp/ZpqPZtqPhpp/Vop/Zorv9xqv9opvX///90rfVwq/Xb6vxtqfX8/f73+v7M4fvW5/yHuPfn8f2szvnh7f2UwPi21Pq/2fvv9v58svagx/kJsMzPAAAAEXRSTlMA6AzZqv5SgPMBpXIj078WCfEnQBwAAAElSURBVHhejZXbroMgEEVHrUIVsDPe7f3y/994okcDRaisF2OyssEJbOEbUeQq4TxReSHAS8kkGkhWOrWYcbTgLN56WYQOoszSjixFJyk7mt7pgF4OJyNPey5TZzL8CVu9LP0tptkylwh3iGK9cMDiJd8XebkTeG3OOlL6vQfRE2ckgPiRR9QviSig8Hofou6OCwXkXq8zPMxBebx7R/TRrwoSt3fuia6oSYCvCf3QfnsPNODA9SiaGhfer3UwWlyXrm6Tqb0Bv0hAoWHeZrO6bDxUxnjqyaz+n2Nribk58LohulRto/egKUCgZY7zDmwEgLTMKRVtpH3M2pHo9cYNbHNw2+fg8HgZehWCL1fodQ0tgOBKCS6p8NoLL9Lwag4v++Dfxx/4clVaSlUDTwAAAABJRU5ErkJggg==);
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
}
</style>
