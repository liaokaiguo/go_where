<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>

	export default {
		name: "HomeSwiper",
    data(){
			return{
		  swiperOption:{
		  	pagination:'.swiper-pagination',
        loop:true
      },
		  swiperList:[{
			  id:'0001',
			  imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/d8cb7dc033dc98988af113a875fb7b40.jpg_750x200_497817a1.jpg"
		  },{
			  id:'0002',
			  imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/de3403017ec566223f9eb768bde13f87.jpg_750x200_7daa779a.jpg"
		  }],
      }
    }
	}
</script>

<style lang="stylus" scoped>
  .wrapper>>>.swiper-pagination-bullet-active
    background :#fff !important
  .wrapper
    width :100%
    height :0
    overflow :hidden
    padding-bottom :26.67%
    background:#eee
    .swiper-img
      width:100%
</style>
