<template>
	<div>
		<hero :content="heroContent" @hamburger="hamburgerClicked"></hero>
		<div class="clearfix">
			<voters class="voters col-xs-12"></voters>
		</div>
		<div class="clearfix topper">
			<critic-quote :criticSliderContent="criticSlider1" class="col-xs-12 no-pad"></critic-quote>
			<div class="col-xs-12 col-md-8 col-md-offset-2 video no-pad hideme">
				<video class="video-js vjs-default-skin" controls preload="none" data-setup='{"fluid": true}' poster="../../assets/video/best_actor_01.jpg">
					<source src="http://videos.davechurilla.com/tsow/best_actor_01.mp4" type='video/mp4' />
				</video>
			</div>
		</div>
		<div class="clearfix grid">
			<production-quote id="bestActorProdQuote1" class="col-xs-12 col-md-6 no-pad" :prodQuote="productionQuote1"></production-quote>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_actor_block_1.jpg" alt="The Shape of Water"></div>
			<production-quote id="bestActorProdQuote2" class="col-xs-12 col-md-6 col-md-push-6 no-pad" :prodQuote="productionQuote2"></production-quote>
			<div class="col-xs-12 col-md-6 col-md-pull-6 image hideme"><img src="../../assets/best_actor_block_2.jpg" alt="The Shape of Water"></div>
		</div>
		<div class="clearfix"></div>
		<click-thru :clickThru="clickThru" @clickThru="nextCategory"></click-thru>
		<social></social>
		<legal></legal>
	</div>
</template>
<script>
import Hero from '../../components/Hero';
import Voters from '../../components/Voters';
import CriticQuote from '../../components/CriticQuote';
import ProductionQuote from '../../components/ProductionQuote';
import ClickThru from '../../components/ClickThru';
import Social from '../../components/Social';
import Legal from '../../components/Legal';

export default {
	name: 'best-actor',
	data: function() {
		return {
			heroContent: {
				"image": "best_actor_lg",
				"mobileImage": "best_actor_mob",
				"superHeader": "For Your Consideration",
				"header": "Best Actor",
				"subHeader": ['DOUG JONES'],
				"isSubPage": true
			},
			clickThru: {
				superHeader: 'Next Category',
				mainText: 'Best Supporting <br class="hidden-sm hidden-md hidden-lg" />Actor',
				clickThruPath: ''
			},
			criticSlider1: [
				{
					text: "The creature — portrayed with supreme elegance by Doug Jones — quickly captures Elisa’s heart, and ours too",
					author: '- TIME'
				},
				{
					text: "The acting of Hawkins and Jones will haunt your dreams.",
					author: '- ROLLING STONE'
				},
				{
					text: "The richly drawn figures are played by a first-rate cast.",
					author: '- The Hollywood Reporter'
				},
			],
			productionQuote1: {
				text: "If you don't have an actor inside the creature’s suit, you don't have a movie — and Doug is not a performer, he’s an actor. I think of such moments as when he enters the movie theater and you realize the creature has never seen a movie before. Those are actor moments. He’s a fantastic actor with or without makeup.",
				author: "Guillermo Del Toro"
			},
			productionQuote2: {
				text: "Doug gives such an ingenious and beautiful performance and it had to be, because it’s such a fragile thing we explore. We’re two different species falling in love, but it had to feel real, and it had to be right. Luckily, I couldn’t help but fall in love with Doug the way he embodied this.",
				author: "Sally Hawkins"
			}
		}
	},
	components: {
		Hero,
		Voters,
		CriticQuote,
		ProductionQuote,
		ClickThru,
		Social,
		Legal
	},
	methods: {
		hamburgerClicked: function() {
			this.$emit('hamburger');
		},
		nextCategory: function() {
			this.$emit('clickThru')
		}
	}
}
</script>
<style lang="scss">
	#bestActorProdQuote1 {
		p {
			@media (min-width: 992px) {
				line-height: 2vw !important;
				padding: 0 5px !important;
			}
		}
	}
</style>