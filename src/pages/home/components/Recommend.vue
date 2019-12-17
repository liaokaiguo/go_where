<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
	export default {
		name: "HomeRecommend",
		data() {
			return {
				recommendList: [{
          id: "0001",
          imgUrl: "https://imgs.qunarzz.com/p/tts9/1908/e5/ae14cb05c5d23a02.png_224x148_7038f806.png",
          title: '北京长城',
          desc: '7-10-12点完出发懒北京八达岭长城+直通车7-10-12点完出发懒北京八达岭长城+直通车'
				}, {
					id: "0002",
					imgUrl: "https://imgs.qunarzz.com/p/tts2/1910/f1/553758b8c19aa202.jpg_224x148_17e289a2.jpg",
					title: '慕田峪',
					desc: '1日游|懒人游|晚出发|赠送摆渡车|中英双语讲解'
				}, {
					id: "0003",
					imgUrl: "https://imgs.qunarzz.com/p/tts7/1912/58/190eda9d99eaf402.jpg_224x148_93029615.jpg",
					title: '弘新社-皇城故事',
					desc: '故宫博物院深度讲解一日游 可选含故宫门票'
				}, {
					id: "0004",
					imgUrl: "https://imgs.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_224x148_f673705b.jpg",
					title: '八达岭长城',
					desc: '7-10-12点丨颐和园丨十三陵丨自助餐'
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

  .item
    display: flex
    overflow: hidden
    height: 1.9rem

    .item-img
      height: 1.7rem
      padding: .1rem
      width: 1.7rem

    .item-info
      flex: 1;
      padding: .1rem
      text-align: left
      min-width: 0

      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()

      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()

      .item-button
        line-height: .44rem
        background: #ff9300
        padding: 0 .2rem
        margin-top: .16rem
        color: #fff
        border-radius: .06rem
</style>
