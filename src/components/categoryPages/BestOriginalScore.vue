<template>
	<div>
		<hero :content="heroContent" @hamburger="hamburgerClicked"></hero>
		<div class="clearfix">
			<div class="banner laurels clearfix">
				<div class="awards-container">
					<div class="award-wrapper">
						<div class="awards-inner hideme">
							<img src="../../assets/lockups/SOW_GOLDENGLOBES_WIN_BESTSCORE_GRAPHIC.png" alt="Awards Tout" />
						</div>
					</div>
				</div>
			</div>
			<voters class="voters col-xs-12"></voters>
		</div>
		<div class="clearfix topper">
			<critic-quote :criticSliderContent="criticSlider1" class="col-xs-12 no-pad"></critic-quote>
			<div class="cta-wrapper col-xs-12">
				<div class="hideme cta">
					<div class="cta-top"></div>
					<div class="cta-middle" @click="goToUrl">Click Here to Listen To The Score</div>
					<div class="cta-bottom"><img src="../../assets/fancy-frame-lg.png" alt="fancy-frame" style="width:100%;"></div>
				</div>
			</div>
		</div>
		<div class="clearfix grid">
			<production-quote id="bestOriginalScoreProdQuote1" :prodQuote="prodQuoteContent1" class="col-xs-12 col-md-6"></production-quote>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_score_block01.jpg" alt="The Shape of Water"></div>
		</div>
		<div class="clearfix">
			<production-quote id="bestOriginalScoreProdQuote2" :prodQuote="prodQuoteContent2" class="col-xs-12 nofloat"></production-quote>
			<slider-image :sliderContent="imageSlider1"></slider-image>
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
	name: 'best-original-score',
	data: function() {
		return {
			heroContent: {
				"image": "best_original_score_lg",
				"mobileImage": "best_original_score_mob",
				"superHeader": "For Your Consideration",
				"header": "Best Original Score",
				"subHeader": ['ALEXANDRE DESPLAT'],
				"isSubPage": true
			},
			clickThru: {
				superHeader: 'Next Category',
				mainText: 'BEST VISUAL EFFECTS',
				clickThruPath: ''
			},
			criticSlider1: [
				{
					text: "ALEXANDRE DESPLAT’S SCORE IS LUSH AND ROMANTIC, PERFECTLY UNDERSCORING THE FILM’S TONE.",
					author: '- SLASHFILM.com'
				},
				{
					text: "It's full-hearted sincerity and warmth is reflected in every aspect of its craft, including Alexandre Desplat’s elegantly swooning score.",
					author: '- TELEGRAPH'
				},
				{
					text: "Tender, funny, romantic, and flat-out breathtaking. Like Nothing you've ever seen before — or dreamed that you ever wanted to see. It's pure movie magic.",
					author: '- Entertainment Weekly'
				}
			],
			prodQuoteContent1:
				{
					text: "Alexandre truly understood the movie and its essence. A good composer flows with the camera moves and the emotion of the moment — and I find Alexandre’s punctuation of those things is impeccable. Great scoring always adds another layer to the story, and Alexandre knows how to integrate music with dialogue, action and sound design.",
					author: "- Guillermo del Toro"
				},
			prodQuoteContent2:
				{
					text: "I think it’s a beautiful love story. But the crucial thing for me creatively is that I was really stunned by the fluidity of the camera. It's always in motion so you have a sensation like water in the flow of the movie. There’s nothing more inspiring for music than a story that flows because you can just surf on it. This story was very special on that level.",
					author: "- Alexandre Desplat"
				},
			imageSlider1: {
				image1: {
					image: 'best-score-slider01',
				},
				image2: {
					image: 'best-score-slider02',
				},
				image3: {
					image: 'best-score-slider03',
				},
				image4: {
					image: 'best-score-slider04',
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
		},
		goToUrl: function() {
			window.open('http://www.foxsearchlight.com/fyc/film/the-shape-of-water/soundtrack/');
		}
	}
}
</script>
<style lang="scss">
	#bestOriginalScoreProdQuote1 {
		p {
			@media (min-width: 992px) {
				line-height: 2vw !important;
				padding: 0 5px !important;
			}
		}
	}
	.cta-wrapper {
		display: table;
		@media (max-width: 992px) {
			margin: 80px 0;
		}
		.cta {
			color: #afb886;
			font-size: 20px !important;
			text-transform: uppercase;
			margin: 0 auto;
			text-align: center;
			display: table-cell;
			vertical-align: middle;
			.cta-top {
				font-family: 'barlowthin', Helvetica, Arial, sans-serif;
				border-bottom: 1px solid #eae7c5;
				padding-bottom: 5px;
				font-size: 18px;
				color: #afb886 !important;
				letter-spacing: 0.2em;
				text-transform: uppercase;
				width: 80%;
				max-width: 420px;
				margin: 0 auto;
			}
			.cta-middle {
				width: 100%;
				margin-top: 15px;
				display: block;
				position: relative;
				font-family: 'ropasans', Helvetica, Arial, sans-serif;
				font-size: 0.8em;
				letter-spacing: 0.1em;
				color: #eae7c5;
				cursor: pointer;
				width: 80%;
				max-width: 420px;
				margin: 15px auto 0;
				a {
					color: #eae7c5;
				}
			}
			.cta-bottom {
				width: 80%;
				max-width: 420px;
			margin: 0 auto;
			}
		}
	}
</style>