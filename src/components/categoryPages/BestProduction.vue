<template>
	<div>
		<hero :content="heroContent" @hamburger="hamburgerClicked"></hero>
		<div class="clearfix">
			<div class="banner laurels hideme">
			    <div class="awards-container">
			    	<div class="award-wrapper">
						<div class="awards-inner hideme">
							<img src="../../assets/lockups/CC_Winner_LockUp.png" alt="Awards Tout" />
						</div>
						<div class="awards-inner hideme">
							<img src="../../assets/lockups/SOW_ARTDIRECTORSGUILD_GRAPHIC_LOCKUP.png" alt="Awards Tout" />
						</div>
				    </div>
		    	</div>
			</div>
			<voters class="voters col-xs-12"></voters>
		</div>
		<div class="clearfix topper">
			<critic-quote id="bestProductionSlider1" :criticSliderContent="criticSlider1" class="col-xs-12 no-pad"></critic-quote>
			<div id="video-pad" class="col-xs-12 col-md-8 col-md-offset-2 video no-pad hideme">
				<video class="video-js vjs-default-skin" controls preload="none" data-setup='{"fluid": true}' poster="../../assets/video/best_production_design_video_01.jpg">
					<source src="http://videos.davechurilla.com/tsow/best_production_design_video_01.mp4" type='video/mp4' />
				</video>
			</div>
		</div>
		<div class="clearfix grid">
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_production_block_1.jpg" alt="The Shape of Water"></div>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_production_block_2.jpg" alt="The Shape of Water"></div>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_production_block_3.jpg" alt="The Shape of Water"></div>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_production_block_4.jpg" alt="The Shape of Water"></div>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_production_block_5.jpg" alt="The Shape of Water"></div>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_production_block_6.jpg" alt="The Shape of Water"></div>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_production_block_7.jpg" alt="The Shape of Water"></div>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_production_block_8.jpg" alt="The Shape of Water"></div>
		</div>
		<!-- <slider-image id="bestProductionSlider1" :sliderContent="imageSlider1"></slider-image> -->
		<div class="clearfix">
			<production-quote id="bestProductionQuote1" :prodQuote="prodQuoteContent1" class="col-xs-12"></production-quote>
		</div>
		<slider-image :sliderContent="imageSlider2"></slider-image>
		<div class="clearfix grid">
			<production-quote id="bestProductionQuote2" :prodQuote="prodQuoteContent2" class="col-xs-12 col-md-6"></production-quote>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/office.jpg" alt="The Shape of Water"></div>
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
	name: 'best-production',
	data: function() {
		return {
			heroContent: {
				"image": "fox_sow_best_production_design",
				"mobileImage": "fox_sow_best_production_design_mob",
				"superHeader": "For Your Consideration",
				"header": "Best Production Design",
				"crewtitle": "Produced By",
				"subHeader": ['Paul Denham Austerberry', 'Shane Vieau', 'Jeff Melvin'],
				"isSubPage": true
			},
			clickThru: {
				superHeader: 'Next Category',
				mainText: 'Best Costume Design',
				clickThruPath: ''
			},
			criticSlider1: [
				{
					text: "Paul D. Austerberry’s production design is a triumph.",
					author: '- VARIETY'
				},
				{
					text: "Visually and Stylistically, 'The Shape of Water' is a rapture.",
					author: '- VANITY FAIR'
				},
				{
					text: "★★★★★ This is the most beautiful film of the year, both in body and spirit, and it is not to be missed.",
					author: '- Cinemablend'
				}
			],
			imageSlider1: {
				image1: {
					image: 'best_production_slider_1_1',
				},
				image2: {
					image: 'best_production_slider_1_2',
				},
				image3: {
					image: 'best_production_slider_1_3',
				}
			},
			imageSlider2: {
				image1: {
					image: 'best_production_slider_2_1',
				},
				image2: {
					image: 'best_production_slider_2_2',
				},
				image3: {
					image: 'best_production_slider_2_3',
				}
			},
			prodQuoteContent1:
				{
					text: 'I fell in love with the fact that Paul has a very strong opinion of design, meaning he could counter anything I talked about with new ideas. But even though Paul has great ideas, he’s also very practical and that was important because this film had such a big scope, with complex sets and underwater shooting. He had to be able to orchestrate and manage all that.',
					author: "- Guillermo del Toro"
				},
			prodQuoteContent2:
				{
					text: 'Guillermo always says you first need to make a place grounded in reality in order for it to become fantastical, so we were as authentic to the period as we could be in the story.',
					author: "- Paul Austerberry"
				}
		}
	},
	components: {
		Hero,
		Voters,
		CriticQuote,
		SliderImage,
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
	#bestProductionSlider1 {
		margin-top: 50px;
	}
</style>