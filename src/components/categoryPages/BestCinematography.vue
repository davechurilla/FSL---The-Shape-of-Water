<template>
	<div>
		<hero :content="heroContent" @hamburger="hamburgerClicked"></hero>
		<div class="clearfix">
			<div class="banner laurels hideme">
			    <div class="awards-container">
			    	<div class="award-wrapper">
						<div class="awards-inner hideme">
							<img src="../../assets/lockups/SOW_ASC_NOMINATION_GRAPHIC_Lockup.png" alt="Awards Tout" />
						</div>
				    </div>
		    	</div>
			</div>
			<voters class="voters col-xs-12"></voters>
		</div>
		<div class="clearfix topper">
			<critic-quote :criticSliderContent="criticSlider1" class="col-xs-12 no-pad"></critic-quote>
			<div class="col-xs-12 col-md-8 col-md-offset-2 video no-pad hideme">
				<video class="video-js vjs-default-skin" controls preload="none" data-setup='{"fluid": true}' poster="../../assets/video/best_cinematography_01.jpg">
					<source src="http://videos.davechurilla.com/tsow/best_cinematography_01.mp4" type='video/mp4' />
				</video>
			</div>
		</div>
		<div class="clearfix">
			<production-quote id="bestCinematographyQuote1" :prodQuote="prodQuoteContent1" class="col-xs-12"></production-quote>
			<div class="col-xs-12 image hideme"><img src="../../assets/best_cinematography_block_1.jpg" alt="The Shape of Water"></div>
		</div>
		<div class="clearfix">
			<production-quote id="bestCinematographyQuote2" :prodQuote="prodQuoteContent2" class="col-xs-12"></production-quote>
			<div class="col-xs-12 image hideme"><img src="../../assets/best_cinematography_block_2.jpg" alt="The Shape of Water"></div>
		</div>
		<div class="clearfix">
			<production-quote id="bestCinematographyQuote3" :prodQuote="prodQuoteContent3" class="col-xs-12"></production-quote>
			<div class="col-xs-12 image hideme"><img src="../../assets/best_cinematography_block_3.jpg" alt="The Shape of Water"></div>
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
import SliderImage from '../../components/SliderImage';
import ClickThru from '../../components/ClickThru';
import Social from '../../components/Social';
import Legal from '../../components/Legal';

export default {
	name: 'best-cinematography',
	data: function() {
		return {
			heroContent: {
				"image": "best_cinematography_lg",
				"mobileImage": "best_cinematography_mob",
				"superHeader": "For Your Consideration",
				"header": "Best Cinematography",
				"subHeader": ['DAN LAUSTSEN, ASC, DFF'],
				"isSubPage": true
			},
			clickThru: {
				superHeader: 'Next Category',
				mainText: 'Best Production <br class="hidden-sm hidden-md hidden-lg" />Design',
				clickThruPath: ''
			},
			criticSlider1: [
				{
					text: "Dan Laustsen’s ethereal cinematography finds a thousand shades of green, once more amplifying the dreamlike fairy-tale atmosphere.",
					author: '- INDIEWIRE'
				},
				{
					text: "This film is a labor of love, a devotion that shows in every frame.",
					author: '- VANITY FAIR'
				},
				{
					text: "It’s full-hearted sincerity and warmth is reflected in every aspect of its craft, including Dan Laustsen’s luminous cinematography.",
					author: '- TELEGRAPH'
				}

			],
			prodQuoteContent1:
				{
					text: "The final design of the creature is done with light. If I did not have a D.P. who understood that, it wouldn’t work. Dan also understands it's not just about key light, cross light, rim light, etcetera. He's not technical; he’s emotional. I think all great cinematographers are emotional. A great cinematographer is like an orchestra conductor – he transmits emotion with light instead of musical notes.",
					author: "- Guillermo del Toro"
				},
			prodQuoteContent2:
				{
					text: "Everything’s in motion in the film. Guillermo wanted lots of camera movement, and he likes very precise movement, so we worked with all kinds of cranes, dollies and Steadicams, and it was very exciting.",
					author: "- Dan Laustsen"
				},
			prodQuoteContent3:
				{
					text: "Dan is a genius with light. In the same shot, sometimes [Lausten] lit the two apartments completely differently. Richard’s had a beautiful shaft of light entering through the window. It felt always at dusk or at dawn, very poetic in a way. Sally’s felt underwater, almost like a fish tank. Dan is extraordinary at achieving this. I think it’s not just visual – it is for me character storytelling.",
					author: "- Guillermo del Toro"
				}
		}
	},
	components: {
		Hero,
		Voters,
		CriticQuote,
		ProductionQuote,
		SliderImage,
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