<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hotcities="hotCities" :cities="cities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
	import CityHeader from "./components/Header";
  import CitySearch from "./components/Search";
  import CityList from "./components/List";
  import CityAlphabet from "./components/Alphabet";
  import axios from 'axios'
  export default {
		name: "City",
    data(){
			return{
				hotCities:[],
        cities:{}
      }
    } ,
	  components: {
	    CityAlphabet,
	    CityList,
			CitySearch,
      CityHeader,
    },
    mounted() {
      this.getCityInfo()
    },
    methods:{
			getCityInfo(){
        axios.get('/api/city.json')
            .then(this.handleGetCityInfoSucc)
      },
      handleGetCityInfoSucc(res){
				res = res.data
        if(res.ret && res.data){
          this.hotCities = res.data.hotCities
          this.cities = res.data.cities
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
