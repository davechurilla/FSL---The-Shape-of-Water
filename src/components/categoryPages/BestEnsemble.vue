<template>
	<div>
		<hero :content="heroContent" @hamburger="hamburgerClicked"></hero>
		<voters class="voters col-xs-12"></voters>
		<slider-quote id="bestEnsembleSlider1" :sliderContent="quoteSlider1" class="col-xs-12 no-pad"></slider-quote>
		<slider-image :sliderContent="imageSlider1"></slider-image>
		<click-thru :clickThru="clickThru" @clickThru="nextCategory"></click-thru>
		<social></social>
		<legal></legal>
	</div>
</template>
<script>
import Hero from '../../components/Hero';
import Voters from '../../components/Voters';
import SliderQuote from '../../components/SliderQuote';
import SliderImage from '../../components/SliderImage';
import ClickThru from '../../components/ClickThru';
import Social from '../../components/Social';
import Legal from '../../components/Legal';

export default {
	name: 'best-ensemble',
	data: function() {
		return {
			heroContent: {
				"image": "best_ensemble_lg",
				"mobileImage": "best_ensemble_mob",
				"superHeader": "For Your Consideration",
				"header": "Best Ensemble",
				"subHeader": ['<td>SALLY HAWKINS</td><td>MICHAEL SHANNON</td>', '<td>RICHARD JENKINS</td><td>DOUG JONES</td>', '<td>MICHAEL STUHLBARG</td><td>OCTAVIA SPENCER</td>'],
				"isSubPage": true
			},
			clickThru: {
				superHeader: 'Next Category',
				mainText: 'Best Original Screenplay',
				clickThruPath: ''
			},
			quoteSlider1: [
				{
					text: "It's a love story that reveals itself little by little, but it's about two characters that don't quite belong in this world.",
					author: '- guillermo del toro'
				}
			],
			imageSlider1: {
				image1: {
					image: 'be_lg_slider_1',
				},
				image2: {
					image: 'be_lg_slider_2',
				},
				image3: {
					image: 'be_lg_slider_3',
				},
				image4: {
					image: 'be_lg_slider_4',
				},
				image5: {
					image: 'be_lg_slider_5',
				}
			}
		}
	},
	components: {
		Hero,
		Voters,
		SliderQuote,
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