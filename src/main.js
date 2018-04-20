// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Main from './Main.vue';
import './vendor/jquery-3.2.1.min.js';
// import './vendor/video.js/dist/video.min.js';
import './vendor/bootstrap-3.3.7/js/bootstrap.min.js';

import ScrollFade from './directives/ScrollFade';

const app = new Vue({ 
	el: '#app',
	render: h => h(Main), 
}).$mount('#app');
