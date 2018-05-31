<template>
	<div class="index">
		<!-- 头部 -->
		<div class="index-title">
			<div class="bg"></div>
			<div class="logo-continer">
				<div class="logo"></div>
				<div class="words">
					<a href="javascript:void(0);">官方自媒体</a>
					<a href="javascript:void(0);">企业级微信直播一体化服务商</a>
				</div>
			</div>
		</div>
		<!-- 精彩推荐 -->
		<div class="index-recommend">
			<div class="index-recommend-container">
				<div class="small-title">
					<span></span>
					<span>精彩推荐</span>
				</div>
				<div class="view">
					<!-- <img src="../../../static/images/live.jpg"> -->
				</div>
				<div class="view-Instruction">
					太平洋产险2018表彰年会直播链接
				</div>
				<div class="view-small">
					<div class="view-small-item">
						<div class="view-small-top">
							<img src="../../../static/images/Bitmap.png" width="100%">
						</div>
						<a href="javascript:void(0);" class="btn"  @click="goRecommend">
							<img src="../../../static/images/Group 16.png" width="100%">
						</a>
						<div class="view-small-bottom">
							<a>创意短视频</a>
						</div>
					</div>
					<div class="view-small-item">
						<div class="view-small-top">
							<img src="../../../static/images/iPhotos bg.png" width="100%">
						</div>
						<a href="javascript:void(0);" class="btn">
							<img src="../../../static/images/iphotos.png" width="100%">
						</a>
						<div class="view-small-bottom">
							<a>创新天使</a>
						</div>
					</div>
					<div class="view-small-item">
						<div class="view-small-top">
							<img src="../../../static/images/bg.png" width="100%">
						</div>
						<a href="javascript:void(0);" class="btn">
							<img src="../../../static/images/cx.png" width="100%">
						</a>
						<div class="view-small-bottom">
							<a>创新大会</a>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<!-- 精彩话题 -->
		<div class="index-theme">
			<div class="index-theme-container">
				<div class="small-title">
					<span></span>
					<span>精彩话题</span>
				</div>
				<div class="index-theme-views">
					<div class="index-theme-views-item" @click="goTheme">
						<div class="index-theme-views-item-left">
							<img src="../../../static/images/banner.jpg" width="100%">
						</div>
						<div class="index-theme-views-item-right">
							<a href="javascript:void(0);">
								创新学院第二季开学典礼暨创新天使计划启动大会
							</a>
							<a href="javascript:void(0);">
								<p>
									<!-- <svg class="icon" aria-hidden="true">
    									<use xlink:href="#icon-eye"></use>
									</svg>
									<a href="javascript:void(0);">209</a> -->
								</p>
								<p>
									<svg class="icon" aria-hidden="true">
    									<use xlink:href="#icon-data"></use>
									</svg>
									<a href="javascript:void(0);">2018-07-06 10:00</a>
								</p>
							</a>
						</div>
					</div>
					<div class="index-theme-views-item" @click="goTheme">
						<div class="index-theme-views-item-left">
							<img src="../../../static/images/banner.jpg" width="100%">
						</div>
						<div class="index-theme-views-item-right">
							<a href="javascript:void(0);">
								创新学院第二季开学典礼暨创新天使计划启动大会
							</a>
							<a href="javascript:void(0);">
								<p>
									<!-- <svg class="icon" aria-hidden="true">
    									<use xlink:href="#icon-eye"></use>
									</svg>
									<a href="javascript:void(0);">209</a> -->
								</p>
								<p>
									<svg class="icon" aria-hidden="true">
    									<use xlink:href="#icon-data"></use>
									</svg>
									<a href="javascript:void(0);">2018-07-06 10:00</a>
								</p>
							</a>
						</div>
					</div>
					<div class="index-theme-views-item" @click="goTheme">
						<div class="index-theme-views-item-left">
							<img src="../../../static/images/banner.jpg" width="100%">
						</div>
						<div class="index-theme-views-item-right">
							<a href="javascript:void(0);">
								创新学院第二季开学典礼暨创新天使计划启动大会
							</a>
							<a href="javascript:void(0);">
								<p>
									<!-- <svg class="icon" aria-hidden="true">
    									<use xlink:href="#icon-eye"></use>
									</svg>
									<a href="javascript:void(0);">209</a> -->
								</p>
								<p>
									<svg class="icon" aria-hidden="true">
    									<use xlink:href="#icon-data"></use>
									</svg>
									<a href="javascript:void(0);">2018-07-06 10:00</a>
								</p>
							</a>
						</div>
					</div>
					<div class="index-theme-views-item" @click="goTheme">
						<div class="index-theme-views-item-left">
							<img src="../../../static/images/banner.jpg" width="100%">
						</div>
						<div class="index-theme-views-item-right">
							<a href="javascript:void(0);">
								创新学院第二季开学典礼暨创新天使计划启动大会
							</a>
							<a href="javascript:void(0);">
								<p>
									<!-- <svg class="icon" aria-hidden="true">
    									<use xlink:href="#icon-eye"></use>
									</svg> -->
									<!-- <a href="javascript:void(0);">209</a> -->
								</p>
								<p>
									<svg class="icon" aria-hidden="true">
    									<use xlink:href="#icon-data"></use>
									</svg>
									<a href="javascript:void(0);">2018-07-06 10:00</a>
								</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { Indicator } from 'mint-ui'
	export default{
		name:'',
		data() {
			return {
			
			}
		},
		created() {
			
		},
		watch: {},
		methods: {
			goTheme(){
				this.$router.push('theme');
			},
			goRecommend(){
				this.$router.push('recommend');
			}
		}
	}
</script>
<style lang="scss" scoped="scoped" rel="stylesheet/scss">
	@import  "./index.scss"
</style>