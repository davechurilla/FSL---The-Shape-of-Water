<template>
	<div id="backToTop" class="hiddenscroll" v-on:click="scrollTop()"></div>
</template>
<script>
	export default {
		name: 'back-to-top',
		methods: {
			scrollTop: function() {
				$('html, body, .categoryPage').animate({scrollTop:0 }, 'fast');
			}
		}
	}
</script>