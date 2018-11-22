<template>
  <div id="content" >
      <div class="rowBox" v-for="(is,ts) in items" @make="cc(ts)">
        <div class="merchant">
          <label>
          <input class="checkItem" type="checkbox"  :value="is[0].val" v-model="checkData" style=margin-right:5px;vertical-align:middle>
          </label>
          <i class="iconfont fir">&#xe679;</i>{{is[0].merchant}}<!--<i class="iconfont las">&#xe606;</i>-->
        </div>
        <div class="shopducts" v-for="(iss,tss) in is">
          <div class="checkbox">
            <label>
            <input  :value="iss.val" type="checkbox"  v-model="checkData">
            </label>
          </div>
          <div class="shopductsBox">
            <img :src="iss.img">
            <div class="textBox">
              <div style="width:100%;">
                <p class="title">{{iss.name}}</p>
                <div class="sub-title">
                  <div>{{iss.subname}}</div>
                  <div>选服务</div>
                </div>
              </div>
              <div class="foo">
                <div class="d-price-style">
                  ￥<span>{{iss.price}}</span>
                </div>
                <div class="addm">
                  <i class="iconfont">&#xe675;</i><input :value="iss.num"/><i class="iconfont">&#xe64f;</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

    export default {
        name: "shopList",
        props:["items","num"],
        data(){
          return {
            checkData: [], // 双向绑定checkbox数据数组
            specheckData:[],
            ts:null
          }
        },
      watch: { // 监视双向绑定的数据数组
        checkData: {
          handler(){ // 数据数组有变化将触发此函数
            //console.log(this.)
            if(this.checkData.length == 5){  //！！！shax
              document.querySelector('#quan').checked = true;
             // console.log(document.querySelector('#quan').checked)
            }else {
              document.querySelector('#quan').checked = false;
            }
          },
          deep: true // 深度监视
        },
        // specheckData: {
        //   handler(){ // 数据数组有变化将触发此函数
        //     if(this.checkData.length == 5){  //！！！shax
        //       document.querySelector('#quan').checked = true;
        //       // console.log(document.querySelector('#quan').checked)
        //     }else {
        //       document.querySelector('#quan').checked = false;
        //     }
        //   },
        //   deep: true // 深度监视
        // }
      },
      methods:{
        checkAll(e){ // 点击全选事件函数
          var checkObj = document.querySelectorAll('.checkItem'); // 获取所有checkbox项
          if(e.target.checked){ // 判定全选checkbox的勾选状态
            for(var i=0;i<checkObj.length;i++){
              if(!checkObj[i].checked){ // 将未勾选的checkbox选项push到绑定数组中
                this.checkData.push(checkObj[i].value);
              }
              console.log(!checkObj[i].value)
            }
          }else { // 如果是去掉全选则清空checkbox选项绑定数组
            this.checkData = [];
          }
        },
        cc(index){
          this.ts=index
        }
      },
      mounted(){
        console.log(this.checkData)
      }
    }
</script>

<style lang="scss">
    @import "../../assets/css/shopcarList";
</style>
