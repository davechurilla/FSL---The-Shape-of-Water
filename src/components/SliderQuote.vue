<template>
	<section class="slider hideme">
		<div class="carousel slide carousel-fade hideme" data-ride="carousel">
			<div class="carousel-inner">
				<div class="item" v-for="(slide, idx) in sliderContent" :class="{'active': idx == 0}">
					<div class="quote top"><img src="../assets/icon-quote-top.png" alt="quote"></div>
					<div>
						<p style="text-align: center">{{slide.text}}</p>
					</div>
					<div class="quote bottom"><img src="../assets/icon-quote-bottom.png" alt="quote"></div>
					<div class="byline">{{slide.author}}</div>
				</div>
			</div>
		</div>
	</section>
</template>


<script>
	export default {
		name:'slider-quote',
		props: {
			sliderContent: {
				required: false,
				type: Array
			}
		},
		data: function() {
			return {}
		},
		methods: {
		},
		mounted: function() {
		}
	}
</script>