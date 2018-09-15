<template>
    <div class="reportDetail">
        <div class="header">
            <div class="changeDate">
                <span class="lastDay " @click="lastDay">
                    <i class="imgla"></i>{{last}}</span>
                <span class="timeType ">
                    <select v-model="select" @change="selectVal">
                        <!-- <option disabled selected value></option> -->
                        <option v-for="(item,index) in selects" :key=index>{{item.value}}</option>

                    </select>
                    <span class="timeTypeCurrent">{{select}}</span>
                    <i class="timePicker-arrow-down"></i>
                </span>
                <span class="nextDay " @click="nextDay">{{next}}
                    <i class="imgla rotate"></i>
                </span>
            </div>
            <div class="datetime">({{datebefore}}-{{dateafter}})</div>
        </div>
        <teachcontent :is="currentView" keep-alive></teachcontent>
        <div class="navTab2">
            <div class="tab2" :class="{blue:a}" @click="tabChange(managecontent)">
                <span class="Imgw2 manage " :class="{manage2:a}"></span> 经营报告 </div>
            <div class="tab2" :class="{blue:b}" @click="tabChange(marcontent)">
                <span class="Imgw2 mar" :class="{mar2:b}"></span>市场</div>
            <div class="tab2" :class="{blue:c}" @click="tabChange(teachcontent)">
                <span class="Imgw2 teach" :class="{teach2:c}"></span>教务</div>
            <div class="tab2" :class="{blue:d}" @click="tabChange(moneycontent)">
                <span class="Imgw2 money" :class="{money2:d}"></span>财务</div>
        </div>
    </div>
</template>

<script>
import managecontent from "./ManageContent";
import marcontent from "./MarContent";
import teachcontent from "./Content";
import moneycontent from "./MoneyContent";

export default {
  components: {
    managecontent,
    marcontent,
    teachcontent,
    moneycontent
  },
  data() {
    return {

      managecontent: "managecontent",
      marcontent: "marcontent",
      teachcontent: "teachcontent",
      moneycontent: "moneycontent",
      currentView: "teachcontent",
      last: "上一日",
      next: "下一日",
      select: "按日",
      selects: [{ value: "按日" }, { value: "按周" }, { value: "按月" }],

      valueDate:new Date(),
      laterDate:new Date(),
      datebefore:new Date().toLocaleDateString(),
      dateafter:new Date().toLocaleDateString(),

      a: false,
      b: false,
      c: true,
      d: false
    };
  },
  methods: {
    tabChange(txt) {
      if (txt === "managecontent") {
        this.currentView = txt;
        this.a = true;
        this.b = false;
        this.c = false;
        this.d = false;
        this.select = "日报";
        this.selects = [
          { value: "日报" },
          { value: "周报" },
          { value: "月报" }
        ];
      } else if (txt === "marcontent") {
        this.currentView = txt;
        this.a = false;
        this.b = true;
        this.c = false;
        this.d = false;
        this.select = "按日";
        this.selects = [
          { value: "按日" },
          { value: "按周" },
          { value: "按月" }
        ];
      } else if (txt === "teachcontent") {
        this.currentView = txt;
        this.a = false;
        this.b = false;
        this.c = true;
        this.d = false;
        this.select = "按日";
        this.selects = [
          { value: "按日" },
          { value: "按周" },
          { value: "按月" }
        ];
      } else if (txt === "moneycontent") {
        this.currentView = txt;
        this.a = false;
        this.b = false;
        this.c = false;
        this.d = true;
        this.select = "按日";
        this.selects = [
          { value: "按日" },
          { value: "按周" },
          { value: "按月" }
        ];
      }
    },
    selectVal(ele) {
      this.select = ele.target.value;
      if (this.select == "按日" || this.select == "日报") {
        this.last = "上一日";
        this.next = "下一日";
        this.valueDate=new Date();
        this.datebefore=this.valueDate.toLocaleDateString();
        this.dateafter=this.valueDate.toLocaleDateString();
        
      } else if (this.select == "按周" || this.select == "周报") {
        this.last = "上一周";
        this.next = "下一周";
        this.valueDate=new Date(this.valueDate.setDate(this.valueDate.getDate()-this.valueDate.getDay()+1));
        this.datebefore=this.valueDate.toLocaleDateString();
        this.laterDate=new Date(this.laterDate.setDate(this.valueDate.getDate()-this.valueDate.getDay()+7));
        this.dateafter=this.laterDate.toLocaleDateString();

      } else if (this.select == "按月" || this.select == "月报") {
        this.last = "上一月";
        this.next = "下一月";
        this.valueDate=new Date(this.valueDate.setDate(this.valueDate.getDate()-this.valueDate.getDate()+1));
        this.datebefore=this.valueDate.toLocaleDateString();
        this.dateafter=new Date().toLocaleDateString();
      }
    },
    lastDay(){
        if(this.select=='按日'||this.select=='日报'){
            this.valueDate = new Date(this.valueDate.setDate(this.valueDate.getDate()-1));
            this.datebefore=this.valueDate.toLocaleDateString();
            this.dateafter=this.valueDate.toLocaleDateString();
        }
        else if(this.select=='按周'||this.select=='周报'){
           
         var a = new Date(this.valueDate.setDate(this.valueDate.getDate()-this.valueDate.getDay()));
         this.valueDate=new Date(this.valueDate.setDate(a.getDate()-6));
           this.datebefore=this.valueDate.toLocaleDateString();
           this.laterDate = new Date(a.setDate(a.getDate()));
           this.dateafter=this.laterDate.toLocaleDateString();
        }
                
        else if(this.select=='按月'||this.select=='月报'){

         this.laterDate  =new Date(this.laterDate.setDate(this.valueDate.getDate()-1));
           this.valueDate = new Date(this.valueDate.setMonth(this.valueDate.getMonth()-1));
           this.datebefore=this.valueDate.toLocaleDateString();
           this.dateafter=this.laterDate.toLocaleDateString();
        }
        
    },
    nextDay(){
         if(this.select=='按日'||this.select=='日报'){
            this.valueDate = new Date(this.valueDate.setDate(this.valueDate.getDate()+1));
            this.datebefore=this.valueDate.toLocaleDateString();
            this.dateafter=this.valueDate.toLocaleDateString();
        }
        else if(this.select=='按周'||this.select=='周报'){
           
         var a = new Date(this.laterDate.setDate(this.laterDate
         .getDate()-1));
         this.valueDate=new Date(a.setDate(a.getDate()+1));
           this.datebefore=this.valueDate.toLocaleDateString();
           this.laterDate = new Date(a.setDate(this.laterDate.getDate()+6));
           this.dateafter=this.laterDate.toLocaleDateString();
        }
        else if(this.select=='按月'||this.select=='月报'){
           
            this.valueDate=new Date(this.valueDate.setMonth(this.valueDate.getMonth()+1));
           this.laterDate=new Date(this.laterDate.setMonth(this.valueDate.getMonth()+1));
            this.laterDate  =new Date(this.laterDate.setDate(this.valueDate.getDate()-1));
            this.datebefore=this.valueDate.toLocaleDateString();
           // this.laterDate=new Date(b.setDate(b.getDate()-1));
            this.dateafter=this.laterDate.toLocaleDateString();

        
        }
    }
    
  }
};
</script>

<style>
.reportDetail {
  height: 100%;
}
.clear {
  clear: both;
}
li {
  list-style-type: none;
}
.reportDetail {
  background: #f0f0f1;
}
.header {
  font-size: 0.24rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.changeDate {
  height: 0.8rem;
  width: 100%;
  line-height: 0.8rem;
  background: #6f94ff;
  /* text-align: center; */
  color: #fff;
}
.lastDay {
  float: left;
  width: 34%;
}
.timeType {
  display: inline-block;
  margin-left: 0.6rem;
}
select {
  position: absolute;
  height: 65%;
  background: rgb(235, 232, 232);
  color: black;
  font-size: 0.22rem;
  -webkit-appearance: none;
  opacity: 0;
}
.timeTypeCurrent {
  display: inline-block;
}

.timePicker-arrow-down {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 0rem;
  border-left: 0.1rem solid transparent;
  border-right: 0.1rem solid transparent;
  border-top: 0.11rem solid #fff;
}
.nextDay {
  float: right;
}
.imgla {
  display: inline-block;
  width: 0.3rem;
  height: 0.3rem;
  vertical-align: -0.07rem;
  margin: 0 0.1rem 0 0.4rem;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABGdBTUEAALGPC/xhBQAAAkRJREFUSA3Fl7FOG0EQhn2uKGihSEFJkzJd5AYHeiSeIoGaN6DIm6SEF4i7VKEKkXBLgRRFSkMZKZfvO+8o5zufvfYR80v/zd3uzPy3t+PddTHIQFmWQ9zewlP4Br5KxAweE2+x1/BLURR/sJsDwR14CX/AXOhrzM5GygSewQcYmHLzER7DQ7ib6L1t9ukTMPYsWxznAl5FNPYrHOcm0DfFYCqYq1garwP8VLmX5W/shW1LgxZ0GpNizSHM2Z2HzhjpL+6PFuRcq8kc0FziamEwHc6p8C17i4aIuVJOTGPOabB6o5DOI+i5LLnPoVDjX7XzYPkLC6l7Lhpvgu8e/NBobj2aE5pbXFYO3Axh/E7XqV5F76DIEbfahVrDAZeRT+C+9aodDfjWRRXf63Cda1YDipFLocuguJmZ5VeCFJnA1/A7HLNE/sTmIDROHfEEiuNVkfg0R7q/Kqber4ZCYKJwLHOHdafmPX69RM1HDpdXMfXhqbpl7W2KxTP9vUWT8G7SenKOXwLli31qR+xGLg5mZvE1Va5L6R20oj/z2dYqLmJC41FhTw7iZGa6r0l8jMem4qFx66eOBWTaLTnfk4rtWyoUF5CskeMXv6CRwn2WzBDPWTLfpRedLZmOhYY+m8T7+e/RfiJ/e5NIwvVt8aId2q8FYU8yYn5bTOLbPwjEeHij7R990qidi+0f9mriMXLnxZODv90s6JtiMBVWH2/rmQlxzi2GQM6BPjZ6Y4zNP9A3xK32//IXJutgh7hL67P+afsLh1oFWFPeLicAAAAASUVORK5CYII=);
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
}
.rotate {
  box-sizing: content-box;
  transform: rotate(180deg);
  margin: 0 0.4rem 0 0.1rem;
}
.datetime {
  font-size: 0.2rem;
  color: #a5a5a5;
  text-align: center;
  padding: 0.08rem 0 0.08rem;
  background: #fff;
}

.navTab2 {
  position: fixed;
  height: 1rem;
  width: 100%;
  background: #fff;
  bottom: 0;
  left: 0;
  font-size: 0.24rem;
  color: darkgray;
  border: 1px solid #d2d2d2;
}
.tab2 {
  width: 25%;
  height: 100%;
  float: left;
  text-align: center;
}
.Imgw2 {
  position: relative;
  display: block;
  height: 0.45rem;
  width: 0.45rem;
  margin: 0.1rem auto 0.08rem;
}
.manage {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAAA7ZJREFUWAntmU1IVFEUx9+baUYSc5ENorkIbAoxVCRaTDCNUpuCjCho0aKCItqYC4k2Qu1y0ab21aZIgohqVfg5zKIMTChIpgglow/cRJYfM9PvyLwYxnefc8f3BGUuHN59557zP/9z3r33fZnGKlsmk/EBsRupR0wHuEXG3pmmOelg4+0QZDuQr4hOG8O4pVhmThVxxCToUQyeiNHs7OySODlQWaOiosIoKysTs99IM7qPTj52Y0URhqz4fUFqksmkMTU1ZYe9TCekGxoajOrqahl7yrkkrdU2rWQ9NDTUkE6nI4BvtWzHx8dDTU1NNVLZQsmKL4kaExMTQphu5uDg4GC36MFPcfhQVVU12NzcLNVXNkfC/f39NwG7LBWVYFZbWFhY6lpHS1/IMZVKCUG5QpvB7M3FnZmZ+UzME+3t7W9UWErCVPYc4F04/kUeID8tECorfp2VlZVmeXm5KZUutIVCIcPn8xlzc3PfIXtP/Dj3048iezntSyQSeyKRyB87TCVhqnA663CGjB/mOwPuY5p0tra2ZiYnJ1ckLfOXBI26ujq5VCaLrwvc+xYueH6myCjHFpLZj/6lNZZ7VBLGUfZWWdXxXIec/lX6OwKBQEd9vWzBBTchfIME/pMVT85TEE4IYWQXKj3CAPhwNBYXF9MCmN8Yl0t2DJsjHGNIQTcO7J7hO8pxWQNrKZbEXjaYVSgrrHLI1wP+HJ3ImjRlJmsSvYggJcJFFE3LZd1VWGvRcTM5nL3z+bXKojBmwT5ua2u7rRi2VWsRhuxJtp5DtkhFKMHahpt3hLlLXZyenr5DEK1E7XKBbMbv94/ZjTnptAKHw+E5wIadAL0eW3eLrkTY6ymhNYcHBgZOQegK4sq2xrp7xCPmdZ0ktQgDfIAgRb/x5hNjH5aXA+8Ix2KxSyMjI7dkR8oPXsx5bW3thK6fVoWpiDx8v9cN4qZ9aZdws5p2WOuuwlpzmG8GF8i6h7nsyqIDp4+F3GlXSZVOizABwuwQ2xEVnpYenD1aDhhrEebZtXt4eLiXDyyuVJjqfvOUsIBHo9EfukHctF93i65E2M3Lb4e1oSr8SzJk66mwy9Qj3ZYs7lJsuxhOFX4lDmxh1+LxuAVkh+GKjpuSfGI9LmC8nL5WgSr/cfCwvpPqvsWxXJ7SaPMqkNXqwZcvpQHBoX+X/f6sClNZYZySwWBwHwAvcJb/DvL7xxPJkv3El/geYpxHlE1Z4VwPAE3+FgVzdW725+fnM42NjZ5dQTe5bnysf+6fjRk+zO3AAAAAAElFTkSuQmCC);
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
}
.manage2 {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAAA0BJREFUWAntWd1LFUEU/+29IkGmZoqYmVCSKJRWFBRRog/RQ0UUEv0DBT2IL0XQQ2/RSwR9vSRET1FU9IVkpiVSEKllGIEZfaB9KBaoeU2v029u3ZLb7tw9e1dFuAdmP+acOec3vzkzuzsLzDGxEsWrlArQRzHLchaTvwnquyzL+sDz7AjB7mT5xCKR5zQu94rYxIjRJ4PuoMFNbfT1O9DPopRzkwDHIT8byJgfsRnhsYxs9zi3sNd4Akywul0vS96tx0BTh73z2NogQe+rAtauiGhuE7DutEh0/nkRHTJPs+oWrA4SngSutUTC6bHY/KfjkQq3h5R4hofq1OLxELZNKmRFbS83YeneSmA4FK1xfw79/A2cKZJ25AIO15xRYSuAMMes69QBNJB1Q2IBRsC159X6sVHcJ5z0qZDauoHqCqAgB8hdCHz5NlVrvi7jWsLUsPoGEAyN4bi2VmReS+05XOdpd+TG4WDM4ZqzqhEKzLr/ZdcmYEsZWR4FmpnDeuKZRE+6wlzmwSqyFAQuNQDt7HisBC1UnjxoNcfWR++NDBNsSdQw9nznCZC1AFi5DNi+MVbrfM/UQmObPVjdimod0yNgCwHtwU7Gw0BdPVBaCBTlA9kZdlb/6iY57J8H+eR4B3zs/1dvc8WxcBYzw87t/mpevQd0mSkx9mamQEjiJAFL2PJiO+cYFk26Eq4IFVx7LePq7Z63zrdA60v39tpSBLicT6niAlkAk3XavGkGfOUh8PQ1EPCBYb289w6YumOvEzGs37Z6+uwdzVTtnJt0ScDTnRqiHF5dBFSt4aTzaVxevAHuPZN1UQRYv5Ut4Uu7XzLBD/9pBXz1EdDS6c+ypjsd76XfjhgRw9qB5HPILmCidT5lY6Iw3LdPAnbPlTdLUQ5vKAW2rvNv0nVwWbvRKgMuApyTCWSmyQKYrPMWmbT2OhFgvY/2oN2/B8fQD3tQploRYO1oxMP2lAmAVJdcJaSMSe2TDEsZk9rHY3hI6jBhewvGmEbA3Fq+mzAAgQN+246mBp13LrUrI+CUdBzlHsRF/swaFsT1Zmqhm2D2nNhv/i3m6oNd/4s4XY9Ub0jitxochjpWbfFnQlJmn4Ff0tnzF8bHuhAAAAAASUVORK5CYII=);
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
}
.mar {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAAAxZJREFUWAntmM9rE0EUx5tkE6IhKBG8lByDiAEP5pSQn1DRm4o/EC8exEN70Iv3gkXswUtQ7F/Qg1SKHjxJEhLIQUIvNiqKokUFYxCaUEyy+eH3hd2lSXdnd7ZJ18MODDP73pv3Pn2z89LZmRm72RmwM2BngJUBBykLhcKTfr8/zzK0UudwOAaIn02n03edVoKYiT3MMC3M5/PhwWDwFtOPbrf7vBlnk17T7XZfgCksCMKZRCKxQf4FlSBiPB7/oiI/cFEul+uMB1UDHrfhfq5Wq556vX7K5/NtRiIRkdsBY8FU3uFarfaq1+ttNJvNl4zYplQTB8Y7R+ciQzSYz5miYiyaODBiOSRoCqscajWGSqVyWE3Okk0DmBVP0aEqrTcajR2MDxWhgYklwMjsEezCBeLDeNMAp2JiCTAO5O7qtHuugGlNLAHWgjEi5/rr8L4twOkCtnElk8lkjQSYtA1XhgG6jH4S/4wsTxrEqD8uYDg9RI4B7UXnXWuUiWlnSVAmkY7SBtZJ0L7Vdob3nUIdB1wZRjnrSf76GOmedeCNCxilbI0IAf5cuhjuAYa8j/5JUnzYYwCBy+VqYNgmHWy3aDTauIBxa73h8XhmU6nUNVYA2Mw5nc55gJ1Ts6NbCO5pZ6G7j35VzUZLxvXTLGX1p5YzWR6Lxb5h/lR+VhtxqXwDOXWuxpVhLs9TMlYyjKv9oNMZXlKFcrk8O6V4XG7b7bYb52ZkjQIM6Ra2/C8MTrRare8jVtY+tPG+f5URRu5c+GR1EZ+sFqE8JhvojD7oj6LT1vxm2LqhOy6dgV9IilweGUuGFeQPDu9SMpl8JhuOAMtCIyNemwB2gspXAE4voXKss9bho8gq9NcBvYZqc4Vly9KZPnSAXYLjAABe68ESgNfrvYdhB9m9jJ1Mk8xMMwVcKpVOI9htwHZRa+8YCRyNRn/A7gHZAjqL7jKybtzGFLAoihSYAj5GPX037lTrORgMPoLuM2DDxWKR+eOj5cMUMJxtI7ubfr9/UcuxmjwUCrWx7hb6e9ycKeN2szNgZ+B/z8A/XUXoPKvdpcQAAAAASUVORK5CYII=);
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
}
.mar2 {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAAAtNJREFUWAntWE1oE0EU/iYx/lwsRAVBRS2oxUSLeBClF4+KvQneRYxtwdqgd6FSsFCtYoyCNw9CL6L0pD0JtYJQpfaHHApa6KUKbZVaY5OMb7Jus6E72Z1xwlbYgTCT97733rffvtnMBghHqECoQKhALQWYcHZmeAYc7bWAgfoYOBG939/BrkUCJaJRvKywHXc9y5MrRXyyv6+HmcVwvD/FRm0u/53CdSEcpay7tgOROmTfYEttck6dAw7uAaa+AI8HTWYmEcyms7Id2G3Nh4i06WGcsNjFzN7K9ixhHdO4vxohkuqK5otngKONwBDt/8ER/8HGFfZTevNGi6zAnmjyE1HBBEI44mgV1SdJIIQreqmvlHq4JQm0HAHeTgBvxtSLmYhQUrj1FLAzDrSeNFFaL4cSYfsxJGZHG+pV1oxSIqxZw2hYSNionC7JQoVdRDFqUlKYl6zaJQ56BQxmKBH+OG2RHPs7u1EWF/J1wfLMzbshgF8rwHLe8s3/cMfIrEq/dE9fAy+Gge8/Zeks+8OXwOG9wMRnd1yJ7lSWMIl9wPucO0ZmVSIskniRFRih2vC4WMnHzBwgPqpDqSVUk9cDX0W4WAxsL0mvLVKq5lTVEg0J5BYm8YqiE9IMax0NlLJAh4ulta5VS4w24w46fyySpRZuNaC84Mht3QY6G1bGP51hujK8nR5xGSL77l4Hk57h0ll+jO7eKBVb3hRD0+0Um6lQUFtVtYRKaNcTHucc3SKG3hp6a8XeaWMf6MX0Gam8JV9AXy2sl0+bMP+NW0QgTkSG7rax516FWAQ3SOElusjz6Qw/7YWX+bUIpx/xZip8mQgUolF0ypI77XRRs4TvEbYi/RM5MMCjTr/ftRZh6sce2mii4IO+K2zSb7H9jeV2mKbY5Mg3XPAb58RpESalFmmjjdMGuulM5rW+epblWRSXqI2mCDvrhQ/9oQKhAutAgT9rKpsKllwWbAAAAABJRU5ErkJggg==);
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
}

.teach {
  background-image: url(data:image/png;base64,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);
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
}
.teach2 {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAABNtJREFUWAntWF1sVEUU/ma7ttQK1fIjRKW2pgJiCdRaC0KjSAshIpFEE40PJiRaLSFtQoQXExJDYlAUojQx0hcfVBB5gaWJCragUSNSG4io1JBGQAVKy0/t/47fuXd3c7m9c1d3t5A1e5KZOz/nzHzz3TMz514gIxkGMgxkGPhfMaBMq2lo1MU6jCatUKA0WnUWQvcUomXtcjVgskmkfV2jnjOsUUPbWUzNW+vUbr9xjIDrt+udWuNppzGVe6HwBdO+7Bzs37xanXX2/5ty/Xt6GoawhETUQKOaNrfH7BRbNOZvW6O+i7W5CkFX3VktdFakrIE8ZislDfRD17+r2wg+pALYl1+LIxuVCrttGnbp3HAXqhBGNd9UjR5CqaXDwUaJhiIpZWxPADCNRw3obGA/5ywj+DI9gld7tqOPC+h46lEEggH0f3QQXewvCp/H3dS5SUy9MDqHlDIR+87rx3DAPZhfnWBy2V+64D5b68MDftqJ9xlB0cd8V5r4lMlZGgHzfacXYMI1LiY5jpKzNoNKO4aRZgyn36bjkZict42NtdmH084l0m3Txbsix+aFxx/V6BK8ao198YcdOw1jLMEdJ8HNmMjUAuCBEmDmdOC28cC4bODK38AfXcDVPix8S+sPlFJXvSY3AqZyyhnOzQGeXAiUz+DgrjPozV1Afh6j+EI8c+EyqrXWGwi6yQ3aCJjBu2tIt+l/q0/KB158HJh8q7ddbz+/DpjOkuXWdkxa+iB2EHQFtV8i8FicbQQsm46gUyLCrBPsuR7g+5+BH38DJk4AaldcO83wCBD6FugfxAsr5oPaWB/VMAIm2JS5xCq6QZTZI78AO1uAoWEbQgF92CQHjjLALsIrZLqZLLeInhFwqhiWDSY+K/L1ceCTVrtcyUB/wWxg+hS7bspb2oHnp+J19leKjhFwqny4/F7rs8c6BfZ+Y8N69jGgYqZdjpefPG1pPESWS8jySb/X7tcXb55Y/wweXSIH2yyfRBmPMy+wwSxbz53LRuwbtFrlV4CZ4VS5RNRHO8/ZUBaV2k93vmk1IJvNLQHSlstzmmIt3Y/FXrdxIvUc63vZvhTEftpE71FEL2+cnW7ms62DzPKXTQSsGN0imR/g90UhWbkcWXb0ouBNFleOnwJ2c3N+/sM1qn9KzQiYv4w2BxUW8fZ4h3ocIjGRi0Akyuwpa1q7zZS383wWcZ0gx6TNCFg6t9Spr7auUWv566g4GMRs+vV6psO8Az28TSxGy7HIUqNH237+0xkYGq0XbTl9nhcK3YHz4P6iaCvkvXwmNV/AMXUWttSqn4R1pqpADqZwwOfY/DHBdzv13OWjvwKX6BaVs4CSO4DuK8COENDjEdp0/gU0Ndub75G5dmwRGa+RRxrDoxR8Bm38UgcvncDDYY1lDO/mvV2HpTJwQyMu8CEO0bG8AgPV5Vh1kWC3fWovQCK00mLgrsnAIG89ASu+K+FAyZ3Ay0/YLNP+DNMcAr7IZ2oDHBnQJDz432DfOjlT9xy2Ywm3bjavMS4Mi+cBWfa7F1arCDa2/egp108IegNn28QUOEP+T3QCwrqctXKFM26wQswIot/5XEmwvHJuoBD0XKYQ0wiTl3Sz8TWm8V4wryvDTgAERO/FEqZCJgFHLwbDIxwiq/TqjNwYBv4Bnz51k9fm4SsAAAAASUVORK5CYII=);
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
}

.money {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAAA2NJREFUWAntmD9oE3EUx5sQiBYytIEWUQSHDKIShUwZTNpJB3GS4j+kSx2LQxWriwgOiiKiS5FOFaVDUREcxDZBWihWVCo6ZBChUh0iDjESAomfp/cr1+vv7nL1clS8g8t773u/99733u/duyMdHeERViCsQKAViNhlm5mZ2dZsNq9GIpE8covdOj9xci2Tq4A829fXt6SLrSVskH2LQ7fOKQDsG6TTOtIxXXKprJDF6SlySOeo8/tbTApFjDHyHzQ4HLPGjFoBsSGaN/DAyEo+ozBDops4iLlyaAlzd797NqjKrrBBUTkVB/M10bWErYs2kt0SYXorNj8/n9QRn52d7dHhXrFW47gSnpub20zyl9Vq9QvED5iJYD+o1WpfC4XCiBn3qhNnwohz3s3XlXC9Xj9CP+3ljHFeUgGLxeIe7AGxG43GRZJuUte8SOLsJM5x8UGOLiwsdDr5a+fw9PR008kpqGv9/f1r+LlWOChyrebRvjiUs9wh/TnIlo8b2CuwjOi0gLTJa9GZmZV4PN6TzWZ/iu3lIM5u4iwaPtVkMtlTLpcrdjFcK9zV1TUJoQ+c0iaXVSDm5Rv0x2KT8Np6yIovcd4hpkTnuJ5Op3/8UT38Sg+b+7hUKsWZFlutISAa5aHZYcW92tY41vzmeI4toRamUqka+mdlK0nVG+gflb1e6SWOa0usl0S7/ELC7aqsivvPVbilh07dnZtkpsZ4gEaY2++Z14/M62WeMw06GWN3FC7TAfwGdjKRSJzOZDJVdc1O+lphCIxC9grJphh3+1RSSB2Slw/Xb3NTp0z4SbBhzhOVSuWcwp3kmne1LDbPYCfndl/7P74lvFSRnfnE+u3iE41Gb+Xz+WHRaYOHbPth0enxF/TxftFZL98og6KDF8HzojvtsK89DMknktA4tDrEzfg9tRg5YdJtVV+nBGQuUKlu5CLVfaayoo/z4O0C7+zt7b2pcHr0OQ/nAHiSNXcV7iR9JcyWfifZUWtCbkK+Oc5YcbFzudykDrfDfG0JuyR+4iFhP6upi6WtMD23LIsZR/JfV6CHyqk4WJNrCfPUFoyFYyqA1bEdtpFrTGKbOKxKpX01iyMOG/LvVm2FGU9LbEmaW7tvtzWrbtsnw8glObX/DfuUJgwTViCsgJcK/AIcxHFy2Om+fgAAAABJRU5ErkJggg==);
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
}
.money2 {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAAAw9JREFUWAntWEtIVGEU/sbH2HOhFTnkoqKoyDBMdCMkZcIso0UY4SbaBa6SFkG0FVxE7oSI2QS1UCIhJcpAymooh4jKlKLUImwgI2LGx3TO/DP8TffcuY95Bd2zuHPuuefxzfe/zr2AJx4DHgNFZcBnVq1nIFEXj6OXnrclEgiY+eXT7vPhM+Ub8/vR03vWNyvlFgEnwcYQSQA1UlChbQQq6q9CgwS6TCrOzJYKLOPh2qnRNcATAZNXm8Gz+AYRgwi4WHM2GwdmGETA2RKV+pktwGW0CtZVyVA3rJXtTq1281RYJa4sB7pPAIFNwMAw8OajjujqABp3A7cfAfdfaLtT7XQ70LQHuPMYuPc8e7Qlwwd3AXVbgHLyDDbrZAHa8BgsS0cTUEF/zI1srVZgOfbYIaDSkkKhSnQxUXIJjdKyE8SSYSGmpCZxAC6HNKbmvcCpo+r+01eg75bSt20Gzp9UeiwOXLwGLK3oOLtaLU2tC53KO76k8sSXzaMtGZ6cBr5E6fShARoJ60RzC8DL9+qeF5wbsBzNuSMzKs+DSSAbWPYSe4nu/sz5wwuOt53vP1Xi9JWDqzfSwf8jbXH3a5bnyjlqh/4SS4bZf2XVCJbtvCpyBes0jy3AnPRfEQ9woUfi/2aYm6T2RqB+h5Fn3s9b6zPtvAUcbwW4l7B7JIsHR2Za+3fcCwRbgFXaPvpuArxXs+zfrg+fGB0Oz94mzcmG53CD0hcWgbtPle746vUSjikzDxCnxJ+9hHmo8cmlLnXy8ZOHEWBwXPmcCQIHdip9Zh64Oqj0ziNAyz6lT88B/UNKz3bN6y7x6oMuZUcPT2n/cGpea4usiQzLrtbW4Ql6lVoDzH8Dpma1/5PXQC29sfipGjOflnfkc30EWE8xE+RjR/IK+Be1maFRY1nuOYbGjXa2cDfoRPI6JZwUduvrAXbLnN04keHUV0S7OQriZ4ZBBEwIxgqCwllSEYMImL/PUmNCb1ulEa7NGKTqImD+LsvfZ2lYbpgNjZQsVxvX4ppm34Zzze/Fewx4DLhg4Dc8EsGdQ3NhvgAAAABJRU5ErkJggg==);
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
}
.blue {
  color: #6f94ff;
}
</style>
