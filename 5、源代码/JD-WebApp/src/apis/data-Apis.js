
import {sliderImgUrl} from '../commons/indexSlideSchema'
import {shopschoolUrl} from '../commons/shopSchoolSchema'

export default {
  /**
   * 获取首页轮播图图片数据
   * @param calb
   */
  getSliderImg(calb){
    fetch(sliderImgUrl).then(res=> {
      res.json().then(data => {
        calb(data)
      })
    })
  },
  /**
  * 获取首页校园商品类似dom的数据
  * @param callb
  */
    getSchoolDatas(callb){
      fetch(shopschoolUrl).then(res=> {
        res.json().then(data => {
          callb(data)
        })
      })
    }
  }
