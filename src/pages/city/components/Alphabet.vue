<template>
  <div>
    <ul class="list">
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
    </ul>
  </div>
</template>

<script>
	export default {
		name: "CityAlphabet"
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
    top:2.77rem
    right :0
    bottom :0
    width :.4rem
    .item
      text-align :center
      line-height :.4rem
      color:$bgColor
</style>
