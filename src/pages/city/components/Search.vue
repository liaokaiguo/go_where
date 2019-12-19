<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音">
    </div>
    <div class="search-content"
         v-show="keyword"
         ref="search">
      <ul>
        <li class='search-item border-bottom' v-for="item of list" :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有匹配到数据</li>
      </ul>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
	export default {
		name: "CitySearch",
    props:{
			cities:Object
    } ,
    data(){
			return{
				keyword:'',
        list:[],
        timer:null
      }
    },
    watch:{
			keyword(){
				if(this.timer){
					clearTimeout( this.timer)
        }
				if(!this.keyword){
            this.list = []
            return
        }
				this.timer = setTimeout(() => {
					const result = []
          for(let i in this.cities){
          	this.cities[i].forEach((value) => {
          		if(value.spell.indexOf(this.keyword) > -1 ||
                value.name.indexOf(this.keyword) > -1){
          			result.push(value)
              }
            })
          }
          this.list = result
        }, 100)
      }
    },
    mounted() {
			this.scroll = new BScroll(this.$refs.search)
    },
    computed:{
			hasNoData(){
				return !this.list.length
      }
    }
  }
</script>

<style lang="stylus"scoped>
  @import "~styles/varibles.styl"
  .search
    height :.72rem
    padding :0 .1rem
    background :$bgColor
    .search-input
      height :.62rem
      line-height :.62rem
      width :100%
      box-sizing :border-box
      text-align :center
      border-radius :0.06rem
      padding :0 .1rem
      color :#666
  .search-content
    z-index:1
    overflow :hidden
    position :absolute
    top:1.58rem
    left:0
    right:0
    bottom :0
    background:#eee
    .search-item
      line-height :.62rem
      padding-left :.2rem
      color :#666
      background :#fff
      text-align :left
</style>
