<template>
  <div style="max-height: 92vh;overflow:auto;flex: 1;">
    <header>
      <header-input></header-input>
      <div class="swiper-container s1">
        <div class="swiper-wrapper">
          <div v-for="(i,s) in sliderImg" class="swiper-slide" >
            <img :src="i.img">
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="blur"></div>
    </header>
    <main>
      <div class="menu-nav pul m-b">
        <div class="swiper-container s2">
          <div class="swiper-wrapper">
            <div class="swiper-slide" >
              <ul class="row">
                <li><a href="#"><img src="../../static/img/5bbc800fN502129b8.png">京东超市</a></li>
                <li><a href="#"><img src="../../static/img/5b03b170Nc9e0ec7c.png">京东旅行</a></li>
                <li><a href="#"><img src="../../static/img/32d965fe9a9087a2.png">京东时尚</a></li>
                <li><a href="#"><img src="../../static/img/5ad87bf0N66c5db7c.png">京东生鲜</a></li>
                <li><a href="#"><img src="../../static/img/5ae01befN2494769f.png">京东到家</a></li>
              </ul>
              <ul class="row">
                <li><a href="#"><img src="../../static/img/5b03b74eN3541598d.png">充值缴费</a></li>
                <li><a href="#"><img src="../../static/img/5b03fae3N67f78fe3.png">领京豆</a></li>
                <li><a href="#"><img src="../../static/img/5ad87cf5N4ad8e6f1.png">领券</a></li>
                <li><a href="#"><img src="../../static/img/5b03b779N5c0b196f.png">借钱</a></li>
                <li><a href="#"><img src="../../static/img/5b0cea29N8fb2865f.png">PLUS会员</a></li>
              </ul>
            </div>
            <div class="swiper-slide" >
              <ul class="row">
                <li><a href="#"><img src="../../static/img/5bbc800fN502129b8.png">京东超市</a></li>
                <li><a href="#"><img src="../../static/img/5b03b170Nc9e0ec7c.png">京东旅行</a></li>
                <li><a href="#"><img src="../../static/img/32d965fe9a9087a2.png">京东时尚</a></li>
                <li><a href="#"><img src="../../static/img/5ad87bf0N66c5db7c.png">京东生鲜</a></li>
                <li><a href="#"><img src="../../static/img/5ae01befN2494769f.png">京东到家</a></li>
              </ul>
              <ul class="row">
                <li><a href="#"><img src="../../static/img/5b03b74eN3541598d.png">充值缴费</a></li>
                <li><a href="#"><img src="../../static/img/5b03fae3N67f78fe3.png">领京豆</a></li>
                <li><a href="#"><img src="../../static/img/5ad87cf5N4ad8e6f1.png">领券</a></li>
                <li><a href="#"><img src="../../static/img/5b03b779N5c0b196f.png">借钱</a></li>
                <li><a href="#"><img src="../../static/img/5b0cea29N8fb2865f.png">PLUS会员</a></li>
              </ul>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <div class="menu-footer">
          <a href="#" class="title no-w">京东快报</a>
          <a href="#" class="f-c no-w">
            <ul id="textS">
              <li>
                <span>HOT</span>为什么AMD显卡那么一般般？我也不知道
              </li>
              <li>
                <span>最新</span>神么？我最帅？？好的，我知道了
              </li>
              <li>
                <span>热门</span>你不用再说我帅了，我知道了
              </li>
              <li>
                <span>HOT</span>为什么AMD显卡那么一般般？我也不知道
              </li>
            </ul>
          </a>
          <a href="#" class="f-r no-w"><span>更多</span></a>
        </div>
      </div>
      <shop-active></shop-active>
      <shop-school></shop-school>
      <!--<day-shoping></day-shoping>-->
    </main>
  </div>
</template>

<script>
    import sliderImg from '../apis/data-Apis'
    import Swiper from '../../static/js/swiper'
    import HeaderInput from "../components/header-input";
    import shopActive from '../components/indexComponents/shopActive'
    import ShopSchool from "../components/indexComponents/shopSchool";
   // import DayShoping from "../components/indexComponents/dayShoping";

    export default {
      name: "index",
      data(){
        return {
          count:1,
          t:0,
          sliderImg:[]
        }
      },
      components:{
        HeaderInput,
        shopActive,
        ShopSchool,
        //DayShoping
      },
      methods:{
        _getData() {
          sliderImg.getSliderImg(data => {
            this.sliderImg=data//是初始化数据
            this.$nextTick(() => { // 下一个UI帧再初始化swiper
              this.initSwiper();
            });
            console.log(this.sliderImg)
          })
        },
          //图片自动轮播
        initSwiper (){
          var swiper = new Swiper('.s1', {
            // spaceBetween: 8,
            loop: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            autoplay: {
              delay: 2000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            preventLinksPropagation: false,   // 阻止点击事件冒泡(防止手动快速来回滑动后自动滑动紊乱)
            observer:true,                //修改swiper自己或子元素时，自动初始化swiper
            observeParents:true           //修改swiper的父元素时，自动初始化swiper
          });
        }
      },
      created(){
        this._getData()
      },
      mounted(){
        this.initSwiper()
        var swiper=new Swiper('.s2', {
          pagination: {
            el: '.swiper-pagination',
          }
        });
        //调文字滚动
        let his=this
        function _fly(){
          let p=setInterval(()=>{   //!!!得用箭头函数 不转移this
            his.t=his.t-1;
            $("#textS")[0].style.top=his.t+"px";
            if((his.t)%-25==0){
              his.t=-25*his.count;
              his.count++;
              clearInterval(p);
              setTimeout(_fly,3000)
            }if(his.t<=-75){
              his.t=0;
              his.count=1
            }
          },10)
        }
        setTimeout(_fly,2000);
      }
    }
</script>
<style lang="scss">
  @import "../assets/css/index.scss";
</style>
