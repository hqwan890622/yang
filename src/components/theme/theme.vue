<template>
	<div class="theme">
		<div class="theme-banner">
		</div>
		<div class="theme-list">
			<div class="theme-list-continer">
				<p>2018太平洋产险创新天使计划回顾</p>
				<div class="theme-list-title">
					<span></span>
					<span>往期回顾</span>
				</div>
				<div class="theme-list-view">
					<div class="theme-list-view-item">
						<a href="javascript:void(0);">
							
							<video-player  ref="videoPlayer"
                           				:options="playerOptions" >
        					</video-player>
							<p>2017太平洋产险创新大会回顾</p>
						</a>
						<a href="javascript:void(0);">
							
							<video-player  ref="videoPlayer"
                           				:options="playerOptionstwo" >
        					</video-player>
							<p>2017太平洋产险创新大会回顾</p>
						</a>
					</div>
					<div class="theme-list-view-item">
						<a href="javascript:void(0);">
							<!-- <img :src=imgFirst> -->
							<video-player  ref="videoPlayer"
                           				:options="playerOptionsthree" >
        					</video-player>
							<p>2017太平洋产险创新大会回顾</p>
						</a>
						<a href="javascript:void(0);">
							<!-- <img :src=imgFirst> -->
							<video-player  ref="videoPlayer"
                           				:options="playerOptionsfour" >
        					</video-player>
							<p>2017太平洋产险创新大会回顾</p>
						</a>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	import { Indicator } from 'mint-ui'
	export default {
		name: 'theme',
		data() {
			return {
				playerOptions: {
					
						autoplay: false, //如果true,浏览器准备好时开始回放。
        				muted: false, // 默认情况下将会消除任何音频。
        				loop: false, // 导致视频一结束就重新开始。
        				preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
       					language: 'zh-CN',
        				aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        				fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        				sources: [{
          					type: "application/x-mpegURL",
          					src: "http://cdn12.mudu.tv/uploads/58661/640_480/a265e51aa54557ec300404f2f86ec614.m3u8" //你的m3u8地址（必填）
        				}],
        				poster: "../../../static/images/banner.jpg", //你的封面地址
        				width: document.documentElement.clientWidth,
            	},
            	playerOptionstwo: {
					
						autoplay: false, //如果true,浏览器准备好时开始回放。
        				muted: false, // 默认情况下将会消除任何音频。
        				loop: false, // 导致视频一结束就重新开始。
        				preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
       					language: 'zh-CN',
        				aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        				fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        				sources: [{
          					type: "application/x-mpegURL",
          					src: "http://cdn12.mudu.tv/uploads/58661/640_480/84edf7c42b38278050c5416404c3e9ba.m3u8" //你的m3u8地址（必填）
        				}],
        				poster: "../../../static/images/banner.jpg", //你的封面地址
        				width: document.documentElement.clientWidth,
            	},
            	playerOptionsthree:{
            			autoplay: false, //如果true,浏览器准备好时开始回放。
        				muted: false, // 默认情况下将会消除任何音频。
        				loop: false, // 导致视频一结束就重新开始。
        				preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
       					language: 'zh-CN',
        				aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        				fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        				sources: [{
          					type: "application/x-mpegURL",
          					src: "http://cdn12.mudu.tv/uploads/58661/640_480/0d36049c6e9855078fb9d412d403deb6.m3u8" //你的m3u8地址（必填）
        				}],
        				poster: "../../../static/images/banner.jpg", //你的封面地址
        				width: document.documentElement.clientWidth,
            	},
            	playerOptionsfour:{
            			autoplay: false, //如果true,浏览器准备好时开始回放。
        				muted: false, // 默认情况下将会消除任何音频。
        				loop: false, // 导致视频一结束就重新开始。
        				preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
       					language: 'zh-CN',
        				aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        				fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        				sources: [{
          					type: "application/x-mpegURL",
          					src: "http://cdn12.mudu.tv/uploads/58661/640_480/739a679952567d762e65043f58262b87.m3u8" //你的m3u8地址（必填）
        				}],
        				poster: "../../../static/images/banner.jpg", //你的封面地址
        				width: document.documentElement.clientWidth,
            	}		
			}
		},
		created() {
			
		},
		mounted(){

		},
		components: {
		  
		},
		methods: {
		
		},
		computed:{
			imgFirst(){
				return '../../../static/images/banner.jpg'
			}
		}
	}
</script>
<style lang="scss" >
	@import  "./theme.scss"
</style>