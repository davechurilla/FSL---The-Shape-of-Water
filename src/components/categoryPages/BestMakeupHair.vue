<template>
	<div>
		<hero :content="heroContent" @hamburger="hamburgerClicked"></hero>
		<div class="clearfix">
			<div class="banner laurels hideme">
			    <div class="awards-container">
			    	<div class="award-wrapper">
						<div class="awards-inner hideme">
							<img src="../../assets/lockups/SOW_MUAH_NOMINATION_GRAPHIC_LOCKUP.png" alt="Awards Tout" />
						</div>
				    </div>
		    	</div>
			</div>
			<voters class="voters col-xs-12"></voters>
		</div>
		<div class="clearfix topper">
			<critic-quote :criticSliderContent="criticSlider1" class="col-xs-12 no-pad"></critic-quote>
			<div class="col-xs-12 col-md-8 col-md-offset-2 video no-pad hideme">
				<video class="video-js vjs-default-skin" controls preload="none" data-setup='{"fluid": true}' poster="../../assets/video/best_makeup_hair_1.jpg">
					<source src="http://videos.davechurilla.com/tsow/best_makeup_hair_1.mp4" type='video/mp4' />
				</video>
			</div>
		</div>
		<div class="clearfix">
			<production-quote id="bestMakeupHairProdQuote1" :prodQuote="productionQuote1" class="col-xs-12"></production-quote>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_makeup_hair_block_1.jpg" alt="The Shape of Water"></div>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_makeup_hair_block_2.jpg" alt="The Shape of Water"></div>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_makeup_hair_block_3.jpg" alt="The Shape of Water"></div>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_makeup_hair_block_4.jpg" alt="The Shape of Water"></div>
			<production-quote id="bestMakeupHairProdQuote2" :prodQuote="productionQuote2" class="col-xs-12"></production-quote>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_makeup_hair_block_5.jpg" alt="The Shape of Water"></div>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_makeup_hair_block_6.jpg" alt="The Shape of Water"></div>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_makeup_hair_block_7.jpg" alt="The Shape of Water"></div>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_makeup_hair_block_8.jpg" alt="The Shape of Water"></div>
			<production-quote id="bestMakeupHairProdQuote3" :prodQuote="productionQuote3" class="col-xs-12"></production-quote>
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
	name: 'best-makeup-hair',
	data: function() {
		return {
			heroContent: {
				"image": "best_makeup_lg",
				"mobileImage": "best_makeup_mob",
				"superHeader": "For Your Consideration",
				"header": "BEST MAKEUP AND HAIRSTYLING",
				"subHeader": ['MIKE HILL', 'SHANE MAHAN', 'JORDAN SAMUEL', 'PAULA FLEET'],
				"isSubPage": true
			},
			clickThru: {
				superHeader: 'Next Category',
				mainText: 'Best Original Score',
				clickThruPath: ''
			},
			criticSlider1: [{
				text: "’The Shape of Water’ looks amazing. There’s not a detail unconsidered or design element unrefined.",
				author: '- RogerEbert.com'
			}],
			productionQuote1: {
				text: "It was the longest design I’ve ever done. The difficulty with this creature is that we were not just sculpting a creature – we were sculpting a leading man. Mike Hill has a way to not sculpt figures but sculpt living things. We started sculpting many, many busts and figures, trying to see what made an amphibian man an amphibian man, trying to find the essence of that. For me, a creative is not one single design. It’s drafts, like a screenplay.",
				author: "- Guillermo del Toro"
			},
			productionQuote2: {
				text: "He said he wanted me to give the creature a soul. He wanted it to be something a woman could fall head over heels for in every way. So I started sketching a handsome looking version of a fish man, giving him kissable lips, a square jaw and doe eyes and I went from there.",
				author: "- Mike Hill"
			},
			productionQuote3: {
				text: "These days you’re very rarely given the opportunity to create something this unique. We live in the digital age when it would be very easy for other directors or producers to say, ‘ just make it a guy in a motion capture suit, and we’ll do it all CGI.’ The compelling fact is that when you’ve got something real on set, and the actors can really sense it and feel it and the cinematographer can light it, there is something to be said for that.",
				author: "- Shane Mahan"
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