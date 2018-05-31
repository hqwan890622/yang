<template>
	<div class="recommend">
		<div class="recommend-views">
			<a href="javascript:void(0);">
				<video-player  ref="videoPlayer"
                           :options="playerOptions" >
        		</video-player>
        		<p>测试视频1</p>
			</a>
			<a href="javascript:void(0);">
				<video-player  ref="videoPlayer"
                           :options="playerOptions" >
        		</video-player>
        		<p>测试视频2</p>
			</a>
			<a href="javascript:void(0);">
				<video-player  ref="videoPlayer"
                           :options="playerOptions" >
        		</video-player>
        		<p>测试视频3</p>
			</a>
			<a href="javascript:void(0);">
				<video-player  ref="videoPlayer"
                           :options="playerOptions" >
        		</video-player>
        		<p>测试视频4</p>
			</a>
		</div>
	</div>
</template>

<script>
	import { Indicator } from 'mint-ui'
	import { videoPlayer } from 'vue-video-player'

	export default {
		name: 'recommend',
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
          					src: "http://cdn12.mudu.tv/uploads/58661/640_480/d51c6fcf0d2a82f4f80aade7a4eb2ae1.m3u8" //你的m3u8地址（必填）
        				}],
        				poster: "../../../static/images/poster.jpg", //你的封面地址
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
				return '../../../static/images/1.jpg'
			}
		}
	}
</script>
<style lang="scss" >
	@import  "./recommend.scss"

</style>