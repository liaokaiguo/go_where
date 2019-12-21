<template>
  <div>
    <ul class="list">
      <li class="item"  v-for="item of letters" :key="item"
          :ref="item"
          @touchstart.prevent="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        @click="handleLetterClick">{{item}}</li>
    </ul>
  </div>
</template>

<script>
	export default {
		name: "CityAlphabet",
    props:{
			cities:Object
    },
    computed:{
			letters(){
				const letters = []
        for(let i in this.cities){
        	letters.push(i)
        }
        return letters
      }
    } ,
    data(){
			return{
				touchstatus:false,
        startY:0,
        timer:null
      }
    } ,
    updated(){
			this.startY = this.$refs['A'][0].offsetTop
    } ,
    methods:{
	    handleLetterClick(e){
	    	this.$emit('change',e.target.innerText)
      },
      handleTouchStart(){
        this.touchstatus = true
      },
      handleTouchMove(e){
        if(this.touchstatus){
          if(this.timer){
          	clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
	          const touchY = e.touches[0].clientY
	          const index = Math.floor((touchY - this.startY)/20)
	          if(index >= 0 && index <22 ){
		          this.$emit("change",this.letters[index])
	          }
          },16)
        }
      },
      handleTouchEnd(){
	      this.touchstatus = false
      }
    }
	}
</script>

<style lang="stylus"scoped>
  @import "~styles/varibles.styl"
  .list
    /*垂直居中*/
    display :flex
    flex-direction :column
    justify-content :center
    text-align :center
    position :absolute
    top:0.1rem
    right :0
    bottom :0
    width :.4rem
    .item
      text-align :center
      line-height :.4rem
      color:$bgColor
</style>
