<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.dec}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
	export default {
		name: "HomeIcons",
    data(){
			return{
				iconList:[{
					id:'0001',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          dec:'景点门票景点门票景点门票'
        },{
          id:'0002',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png' ,
          dec:'嘉兴必游'
		    },{
          id:'0003',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
          dec:'亲子游'
        },{
          id:'0004',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          dec:'名胜古迹'
        },{
          id:'0005',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          dec:'一日游'
        },{
          id:'0006',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
          dec:'古镇'
        },{
          id:'0007',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
          dec:'杭州宋城'
        },{
          id:'0008',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
          dec:'欢乐谷'
        },{
          id:'0009',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
          dec:'雪谷'
        }]
      }
    },
    computed:{
			pages(){
				const pages = []
        this.iconList.forEach((item,index) =>{
        	const  page = Math.floor(index /8)
          if(!pages[page]){
          	pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
	}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container
    height :0
    padding-bottom :50%

  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%

    .icon-img
      position: absolute
      top: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .1rem
      left: 0

      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
    .icon-desc
      position: absolute
      right: 0
      bottom: 0
      line-height: .44rem
      height: .44rem
      color: $darkTextColor
      left: 0
      text-align: center
      ellipsis()


</style>
