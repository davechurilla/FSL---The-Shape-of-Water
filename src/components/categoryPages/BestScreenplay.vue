<template>
	<div>
		<hero :content="heroContent" @hamburger="hamburgerClicked"></hero>
		<div class="clearfix">
			<div class="banner laurels hideme">
			    <div class="awards-container">
			    	<div class="award-wrapper">
						<div class="awards-inner hideme">
							<img src="../../assets/lockups/WGA_lockup.png" alt="Awards Tout" />
						</div>
				    </div>
		    	</div>
			</div>
			<voters class="voters col-xs-12"></voters>
		</div>
		<div class="clearfix topper">
			<critic-quote :criticSliderContent="criticSlider1" class="col-xs-12 no-pad"></critic-quote>
			<div class="col-xs-12 col-md-8 col-md-offset-2 video no-pad hideme">
				<video class="video-js vjs-default-skin" controls preload="none" data-setup='{"fluid": true}' poster="../../assets/video/best_original_screenplay_01.jpg">
					<source src="../../assets/video/best_original_screenplay_01.mp4" type='video/mp4' />
				</video>
			</div>
		</div>
		<div class="clearfix">
			<production-quote id="bestOriginalScreenplayProdQuote1" :prodQuote="prodQuoteContent1" class="col-xs-12 nofloat"></production-quote>
			<slider-image :sliderContent="imageSlider1"></slider-image>
			<production-quote id="bestOriginalScreenplayProdQuote2" :prodQuote="prodQuoteContent2" class="col-xs-12"></production-quote>
		</div>
		<div class="clearfix grid">
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_original_screenplay_block_1.jpg" alt="The Shape of Water"></div>
			<div class="col-xs-12 col-md-6 cta-wrapper">
				<div class="hideme cta">
				    <div class="cta-top"></div>
					<div class="cta-middle" @click="goToUrl">Click Here To Read the Screenplay</div>
				    <div class="cta-bottom"><img src="../../assets/fancy-frame-lg.png" alt="fancy-frame" style="width:100%;"></div>
				</div>
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
import ProductionQuote from '../../components/ProductionQuote';
import SliderImage from '../../components/SliderImage';
import ClickThru from '../../components/ClickThru';
import Social from '../../components/Social';
import Legal from '../../components/Legal';

export default {
	name: 'best-screenplay',
	data: function() {
		return {
			heroContent: {
				"image": "best_screenplay_lg",
				"mobileImage": "best_screenplay_mob",
				"superHeader": "For Your Consideration",
				"header": "Best Original Screenplay",
				"subHeader": ['GUILLERMO DEL TORO','VANESSA TAYLOR'],
				"isSubPage": true
			},
			clickThru: {
				superHeader: 'Next Category',
				mainText: 'Best Actress',
				clickThruPath: ''
			},
			criticSlider1: [{
				text: "With a poetry and rhythm that flows as strong as the currents of the world, Guillermo del Toro and co-writer Vanessa Taylor bring us a story of romance crossing boundaries, of the outsiders teaming up to defeat the status quo, and of the true beauty of life available to all.",
				author: '- CINEMABLEND'
			}, {
				text: "Del Toro tells his story with such gushing enthusiasm…engulfing the viewer with intricate subplots and grandly poetic dialogue co-written by Vanessa Taylor.",
				author: '- BBC'
			}, {
				text: "A sensual and fantastical fairy tale with moral overtones, it’s a film that plays by all the rules and none of them, going its own way with fierce abandon.",
				author: '- Los Angeles Times'
			}],
			prodQuoteContent1:
				{
					text: "I wanted this story to take the form of a fairytale in that you have a humble human who stumbles into something grander and more transcendental than anything else in her life.",
					author: "- Guillermo del Toro"
			},
			prodQuoteContent2:
				{
					text: "The idea of the movie is that love has no shape. You can fall in love with any person. You find a soul. Water has no shape until you put it in a container and it’s the strongest element on Earth. It’s the most malleable. I thought, 'that’s exactly what love is.' We are containers and water. You live in the shape love gives you. The glass of water or the pitcher or the cup or the bowl, the water perfectly fills that container, and I thought that was a great metaphor for love.",
					author: "- Guillermo del Toro"
			},
			imageSlider1: {
				image1: {
					image: 'best_screenplay_slider_1_1',
				},
				image2: {
					image: 'best_screenplay_slider_1_2',
				},
				image3: {
					image: 'best_screenplay_slider_1_3',
				},
				image4: {
					image: 'best_screenplay_slider_1_4',
				}
			},
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
		Legal,
	},
	methods: {
		hamburgerClicked: function() {
			this.$emit('hamburger');
		},
		nextCategory: function() {
			this.$emit('clickThru')
		},
		exportPDFPath: function() {
			return require('../../assets/film_scripts-SOW.pdf');
		},
		goToUrl: function() {
			window.open(this.exportPDFPath());
		}
	}
}
</script>
<style lang="scss">
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