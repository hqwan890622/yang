import Vue from 'vue';
import App from './App';
import router from '../../routers/index.js';
import store from '../../store/';

import axios from 'axios';
Vue.prototype.$http = axios;

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer);

require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
// require('videojs-contrib-hls/dist/videojs-contrib-hls');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
