<template>
	<div>
		<hero :content="heroContent" @hamburger="hamburgerClicked"></hero>
		<div class="clearfix">
			<voters class="voters col-xs-12"></voters>
		</div>
		<div class="clearfix topper">
			<critic-quote id="bestVisualEffectsSlider1" :criticSliderContent="criticSlider1" class="col-xs-12 no-pad"></critic-quote>
			<div class="col-xs-12 col-md-8 col-md-offset-2 video no-pad hideme">
				<video class="video-js vjs-default-skin" controls preload="none" data-setup='{"fluid": true}' poster="../../assets/video/best_vfx_01.jpg">
					<source src="http://videos.davechurilla.com/tsow/best_vfx_01.mp4" type='video/mp4' />
				</video>
			</div>
		</div>
		<div class="clearfix grid">
			<production-quote id="bestVFXQuote1" :prodQuote="prodQuoteContent1" class="col-xs-12 col-md-6"></production-quote>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/creature-peeking.jpg" alt="The Shape of Water"></div>
		</div>
		<div class="clearfix">
			<production-quote id="bestVFXQuote2" :prodQuote="prodQuoteContent2" class="col-xs-12"></production-quote>
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
import ProductionQuote from '../../components/ProductionQuote';
import ClickThru from '../../components/ClickThru';
import Social from '../../components/Social';
import Legal from '../../components/Legal';

export default {
	name: 'best-visual-effects',
	data: function() {
		return {
			heroContent: {
				"image": "best_visual_effects_lg",
				"mobileImage": "best_visual_effects_mob",
				"superHeader": "For Your Consideration",
				"header": "BEST VISUAL EFFECTS",
				"subHeader": ['DENNIS BERARDI', 'SHANE MAHAN', 'TREY HARRELL', 'KEVIN SCOTT'],
				"isSubPage": true
			},
			clickThru: {
				superHeader: 'Return To',
				mainText: 'Home',
				clickThruPath: ''
			},
			criticSlider1: [
				{
					text: "Visually and Stylistically, ‘The Shape of Water' is a rapture.",
					author: '- Boston Globe'
				},
				{
					text: "‘SHAPE OF WATER’ is a stunner. You’ve never seen anything quite like this spellbinding tale.",
					author: '- The Wall Street Journal'
				}
			],
			prodQuoteContent1:
				{
					text: 'The Shape of Water features roughly 600 VFX, a significant number for a relatively budgeted film, though most of the enhancements are so subtle they’re likely to go unnoticed by the average viewer.',

				},
			prodQuoteContent2:
				{
					text: "Our hope is that the audience can't distinguish at all between the digital version of the creature or the Doug Jones version. Doug's performance informs our animation and I think our animation has also informed how Doug was photographed. If the audience can’t tell which is which, we will have succeeded.",
					author: "- Dennis Berardi"
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
	#bestVFXQuote1 {
		.quote {
			display: none;
		}
	}
</style>