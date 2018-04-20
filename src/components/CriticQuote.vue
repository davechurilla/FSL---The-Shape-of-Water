<template>
	<section class="critic-slider hideme">
			<div class="carousel slide carousel-fade" data-ride="carousel">
				<div class="carousel-inner">
					<div class="item" v-for="(slide, idx) in criticSliderContent" :class="{'active': idx == 0}">
						<div class="quote top"><img src="../assets/icon-quote-top.png" alt="quote"></div>
						<div class="critic-content">
							<p v-if="slide.text" class="critic-quote" style="text-align: center">{{slide.text}}</p>
							<img v-if="slide.image && slide.fileType" :src="exportImagePath(slide.image, slide.fileType)" class="critic-img" alt="The Shape of Water" :style="{maxWidth: slide.maxWidth}">
						</div>
						<div class="quote bottom"><img src="../assets/icon-quote-bottom.png" alt="quote"></div>
						<div class="byline">{{slide.author}}&nbsp;</div>
					</div>
				</div>
			</div>
	</section>
</template>

<script>
	export default {
		name:'critic-quote',
		props: {
			criticSliderContent: {
				required: false,
				type: Array
			}
		},
		data: function() {
			return {}
		},
		methods: {
			exportImagePath: function(fileName, fileType) {
				return require('../assets/' + fileName + '.' + fileType);
			}
		},
		mounted: function() {
		}
	}
</script>