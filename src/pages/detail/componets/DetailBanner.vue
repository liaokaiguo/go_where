<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">
          {{sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe608;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <FadeAnimation>
      <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose">
      </common-gallary>
    </FadeAnimation>

  </div>
</template>

<script>
  import  CommonGallary from 'common/gallary/Gallary'
  import  FadeAnimation from 'common/fade/fade'
	export default {
		name: "DetailBanner",
    props:{
	    sightName:String,
      bannerImg:String,
      bannerImgs:Array
    },
    components:{
	    CommonGallary,
      FadeAnimation
    },
    data(){
			return{
				imgs:['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg',
            'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png'],
        showGallary:false
	    }
    },
    methods:{
			handleBannerClick(){
				this.showGallary = true
      },
      handleGallaryClose(){
				this.showGallary = false
      }
    }
	}
</script>

<style lang="stylus"scoped>
  .banner
    position :relative
    overflow:hidden
    height :0
    padding-bottom :55%
    .banner-img
      width :100%
    .banner-info
      display :flex
      position :absolute
      left :0
      right :0
      bottom :0
      color :#fff
      line-height :.6rem
      background-image :linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        flex :1
        font-size :.32rem
        text-align :left
        padding :0 .2rem
      .banner-number
        margin-top :.14rem
        padding :0 .4rem
        line-height :.32rem
        height :.32rem
        border-radius :.2rem
        background :rgba(0,0,0,.8)
        font-size :.24rem
        .banner-icon
          font-size :.24rem
</style>
