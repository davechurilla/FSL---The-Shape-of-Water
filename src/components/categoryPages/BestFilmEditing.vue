<template>
	<div>
		<hero :content="heroContent" @hamburger="hamburgerClicked"></hero>
		<div class="clearfix">
			<div class="banner laurels hideme">
			    <div class="awards-container">
			    	<div class="award-wrapper">
						<div class="awards-inner hideme">
							<img src="../../assets/lockups/SOW_ACE_NOM_GRAPHIC_LOCKUP.png" alt="Awards Tout" />
						</div>
				    </div>
		    	</div>
			</div>
			<voters class="voters col-xs-12"></voters>
		</div>
		<div class="clearfix">
			<critic-quote id="bestFilmEditingSlider1" :criticSliderContent="criticSlider1" class="col-xs-12 no-pad"></critic-quote>
			<div class="col-xs-12 image hideme"><img src="../../assets/best_film_editing_block_1.jpg" alt="The Shape of Water"></div>
			<production-quote id="bestFilmEditingQuote1" :prodQuote="prodQuoteContent1" class="col-xs-12"></production-quote>
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
	name: 'best-film-editing',
	data: function() {
		return {
			heroContent: {
				"image": "best_film_editing_lg",
				"mobileImage": "best_film_editing_mob",
				"superHeader": "For Your Consideration",
				"header": "Best Film Editing",
				"subHeader": ['SIDNEY WOLINSKY, ACE'],
				"isSubPage": true
			},
			clickThru: {
				superHeader: 'Next Category',
				mainText: 'Best <br class="hidden-sm hidden-md hidden-lg" />Cinematography',
				clickThruPath: ''
			},
			criticSlider1: [
				{
					text: "Pure enchantment. 'The Shape of Water' is a visually and emotionally ravishing outsider tale of love and friendship molded by a master storyteller and lovingly steeped in vintage movie magic.",
					author: '- The Hollywood Reporter'
				},
			],
			prodQuoteContent1:
				{
					text: "Guillermo created that language and he moves the camera. You can see where the transitions are planned. We’ll go from Michael Shannon in the car, cut to the water on the windshield and dissolve to the bathtub. It’s the same on the bus. Other scenes, we could find transitions and make them work on their own level. I didn’t do a watery cut to it because that’s all Guillermo.",
					author: '- Sidney Wolkinsky'
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