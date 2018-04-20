<template>
	<div class="hideme">
		<carousel :perPage="1" :paginationPadding="10" :navigationEnabled="true" :autoplayTimeout="5000" :loop="true">
			<slide v-for="(slide, idx) in sliderContent" :key="idx">
				<div class="VueCarousel-slide"><img :src="exportImagePath(slide.image)" width="100%" alt="The Shape of Water"></div>
			</slide>
		</carousel>
	</div>
</template>

<script>
	import { Carousel, Slide } from 'vue-carousel';
	export default {
		name: 'slider-image',
		props: {
			sliderContent: {
				required: true,
				type: Object
			}
		},
		components: {
			Carousel,
			Slide
		},
		methods: {
			exportImagePath: function(data) {
				return require('../assets/' + data + '.jpg');
			},
		}
	}
</script>
