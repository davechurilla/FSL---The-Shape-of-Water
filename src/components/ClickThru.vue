<template>
<div class="click-thru hideme">
    <div class="clickthru-top">{{clickThru.superHeader}}</div>
	<div class="clickthru-middle" v-on:click="nextCategory" v-html="clickThru.mainText"></div>
    <div class="clickthru-bottom"><img src="../assets/fancy-frame-lg.png" alt="fancy-frame" style="width:100%;"></div>
</div>
</template>

<script>
	export default {
		name: 'click-thru',
		props: {
			clickThru: {
				required: true,
				type: Object
			}
		},
		methods: {
			nextCategory: function() {
				this.$emit('clickThru');
			}
		}
	}
</script>