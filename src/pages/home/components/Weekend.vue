<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
	export default {
		name: "HomeWeekend",
		data() {
			return {
				recommendList: [{
					id: "0001",
					imgUrl: "https://imgs.qunarzz.com/sight/p0/1812/5a/5a4129c70246ac2da3.img.jpg_224x148_b75fa863.jpg",
					title: '灵隐寺',
					desc: '江南禅宗“五山”之一'
				}, {
					id: "0002",
					imgUrl: "https://imgs.qunarzz.com/sight/p0/1603/8f/8fff2332dff679ec90.water.jpg_224x148_d9a5b20a.jpg",
					title: '普陀山',
					desc: '海天佛国 观音道场 ——普陀山'
				}, {
					id: "0003",
					imgUrl: "https://imgs.qunarzz.com/sight/p0/1607/21/2142167d4b1bfa84b4.water.jpg_224x148_765ff787.jpg",
					title: '西塘古镇',
					desc: '水墨西塘让你感受古镇千年的诗情画意'
				}, {
					id: "0004",
					imgUrl: "https://imgs.qunarzz.com/sight/p0/201405/27/8211cadd5d9fefeaa044c5b7eefc695d.jpg_224x148_1b0829b3.jpg",
					title: '千岛湖',
					desc: '亲近大自然，放飞心情'
				}]
			}
		}
	}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    margin-top: .2rem
    text-indent: .2rem
    line-height: .8rem
    background: #ccc
    text-align: left

  .item-img-wrapper
    height :0
    overflow :hidden
    padding-bottom: 66.07%
    .item-img
      width: 100%
  .item-info
    padding : .1rem
    text-align: left

    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()

    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()

</style>
