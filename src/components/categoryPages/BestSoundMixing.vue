<template>
	<div>
		<hero :content="heroContent" @hamburger="hamburgerClicked"></hero>
		<div class="clearfix">
			<voters class="voters col-xs-12"></voters>
		</div>
		<div class="clearfix topper">
		<critic-quote id="bestDirectorCriticSlider1" :criticSliderContent="criticSlider1" class="col-xs-12 no-pad"></critic-quote>
			<div class="col-xs-12 col-md-8 col-md-offset-2 video no-pad hideme">
				<video class="video-js vjs-default-skin" controls preload="none" data-setup='{"fluid": true}' poster="../../assets/dazzling-dive-v6-01.jpg">
					<source src="http://videos.davechurilla.com/tsow/Dazzling-Dive-v6.mp4" type='video/mp4' />
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
	name: 'best-sound-mixing',
	data: function() {
		return {
			heroContent: {
				"image": "best_sound_mixing_lg",
				"mobileImage": "best_sound_mixing_mob",
				"superHeader": "For Your Consideration",
				"header": "BEST SOUND MIXING",
				"subHeader": ['CHRISTIAN COOKE, CAS', 'BRAD ZOERN, CAS', 'GLEN GAUTHIER'],
				"isSubPage": true
			},
			clickThru: {
				superHeader: 'Next Category',
				mainText: 'Best Sound Editing',
				clickThruPath: ''
			},
			criticSlider1: [
				{
					text: "The Shape of Water is pure movie magic. It’s poignant, tender, funny, romantic, and flat-out breathtaking.",
					author: '- Entertainment Weekly'
				}
			]
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