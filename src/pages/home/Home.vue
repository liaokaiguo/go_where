<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>

</template>

<script>
  import HomeHeader from "./components/Header";
  import HomeSwiper from './components/Swiper'
  import HomeIcons from "./components/Icons";
  import HomeRecommend from "./components/Recommend";
  import HomeWeekend from "./components/Weekend";
  import {mapState} from 'vuex'
  import axios from 'axios'
	export default {
		name: "Home",
    components:{
	    HomeWeekend,
	    HomeRecommend,
	    HomeIcons,
			HomeHeader,
      HomeSwiper
    },
    mounted() {
			// console.log('mounted')
			this.getHomeInfo()
			this.lastCity = this.city
    },
    activated(){
      if(this.lastCity !== this.city){
      	this.lastCity = this.city
      	this.getHomeInfo()
      }
    },
    computed:{
			...mapState(['city'])
    },
    data(){
			return{
        swiperList:[],
        iconList:[],
        recommendList:[],
        weekendList:[],
        lastCity:''
      }
    } ,
    methods:{
			getHomeInfo(){
				axios.get('/static/mock/index.json?city= ' + this.city)
            .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res){
				res = res.data
        if(res.ret && res.data){
        	const data = res.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      }
    }
  }
</script>

<style scoped>
</style>
