<template>
	<div>
		<hero :content="heroContent" @hamburger="hamburgerClicked"></hero>
		<div class="clearfix">
			<voters class="voters col-xs-12"></voters>
		</div>
		<critic-quote :criticSliderContent="criticSlider1" class="col-xs-12 no-pad"></critic-quote>
		<div class="clearfix">
			<div class="col-xs-12 col-md-8 col-md-offset-2 video no-pad hideme">
				<video class="video-js vjs-default-skin" controls preload="none" data-setup='{"fluid": true}' poster="../../assets/video/best_sound_editing_01.jpg">
					<source src="../../assets/video/best_sound_editing_01.mp4" type='video/mp4' />
				</video>
			</div>
		</div>
		<click-thru :clickThru="clickThru" @clickThru="nextCategory"></click-thru>
		<social></social>
		<legal></legal>
	</div>
</template>
<script>
import Hero from '../../components/Hero';
import Voters from '../../components/Voters';
import CriticQuote from '../../components/CriticQuote';
import ClickThru from '../../components/ClickThru';
import Social from '../../components/Social';
import Legal from '../../components/Legal';

export default {
	name: 'best-screenplay',
	data: function() {
		return {
			heroContent: {
				"image": "best_sound_editing_lg",
				"mobileImage": "best_sound_editing_mob",
				"superHeader": "For Your Consideration",
				"header": "Best Sound Editing",
				"subHeader": ['NATHAN ROBITAILLE, MPSE'],
				"isSubPage": true
			},
			clickThru: {
				superHeader: 'Next Category',
				mainText: 'Best Makeup & Hairstyling',
				clickThruPath: ''
			},
			criticSlider1: [{
				text: "The Shape of Water is pure movie magic. It’s poignant, tender, funny, romantic, and flat-out breathtaking.",
				author: '- Entertainment Weekly'
			}]
		}
	},
	components: {
		Hero,
		Voters,
		CriticQuote,
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