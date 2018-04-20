<template>
	<div>
		<hero :content="heroContent" @hamburger="hamburgerClicked"></hero>
		<div class="clearfix">
			<div class="banner laurels hideme">
			    <div class="awards-container">
			    	<div class="award-wrapper">
						<div class="awards-inner hideme">
							<img src="../../assets/lockups/SAG_lockup_octavia_spencer.png" alt="Awards Tout" />
						</div>
				    </div>
		    	</div>
			</div>
			<voters class="voters col-xs-12"></voters>
		</div>
		<div class="clearfix topper">
			<critic-quote id="bestSupportingActressSlider1" :criticSliderContent="criticSlider1" class="col-xs-12 no-pad"></critic-quote>
			<div class="col-xs-12 col-md-8 col-md-offset-2 video no-pad hideme">
				<video class="video-js vjs-default-skin" controls preload="none" data-setup='{"fluid": true}' poster="../../assets/video/best_supporting_actress_video_01.jpg">
					<source src="../../assets/video/best_supporting_actor_actress_video_01.mp4" type='video/mp4' />
				</video>
			</div>
		</div>
		<production-quote id="bestSupportingActress1" :prodQuote="prodQuoteContent1" class="col-xs-12 nofloat"></production-quote>
		<slider-image :sliderContent="imageSlider1"></slider-image>
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
	name: 'best-supporting-actress',
	data: function() {
		return {
			heroContent: {
				"image": "best_supporting_actress_lg",
				"mobileImage": "best_supporting_actress_mob",
				"superHeader": "For Your Consideration",
				"header": "Best Supporting Actress",
				"subHeader": ['OCTAVIA SPENCER'],
				"isSubPage": true
			},
			clickThru: {
				superHeader: 'Next Category',
				mainText: 'Best Film Editing',
				clickThruPath: ''
			},
			criticSlider1: [
				{
					text: "Octavia Spencer is irresistible.",
					author: '- Rolling Stone'
				},
				{
					text: "Octavia Spencer is as glorious as ever.",
					author: '- Peter Travers, ROLLING STONE'
				},
				{
					text: "Octavia Spencer plays Zelda with delightful verve.",
					author: '- The Wall Street Journal'
				}

			],
			prodQuoteContent1:
				{
					text: 'A lot of casting for me is in the eyes because 50% of acting is listening and looking. Each character in this film has a certain way of looking and I felt I needed Octavia’s eyes. She has a very powerful gaze. She is so entirely human and represents the best of what it is to be human with her spunk and her strength and her intelligence. When Octavia looks at you, you feel you are forgiven all your sins.',
					author: "- Guillermo del Toro"
				},
			imageSlider1: {
				image1: {
					image: 'sally-and-octavia',
				},
				image2: {
					image: 'octavia-stare',
				},
				image3: {
					image: 'octavia-rain',
				},
				image4: {
					image: 'octavia-timecards',
				}
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