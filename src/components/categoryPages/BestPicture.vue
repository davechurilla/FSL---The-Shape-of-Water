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
							<img src="../../assets/lockups/PGA_lockup.png" alt="Awards Tout" />
						</div>
				    </div>
			    	<div class="award-wrapper">
						<div class="awards-inner hideme">
							<img src="../../assets/lockups/BAFTA_lockup.png" alt="Awards Tout" />
						</div>
			    	</div>
		    	</div>
			</div>
			<voters class="voters col-xs-12"></voters>
		</div>
		<div class="clearfix topper">
			<critic-quote :criticSliderContent="criticSlider1" class="col-xs-12 no-pad"></critic-quote>
			<div class="col-xs-12 col-md-8 col-md-offset-2 video no-pad hideme">
				<video class="video-js vjs-default-skin" controls preload="none" data-setup='{"fluid": true}' poster="../../assets/video/best_picture_01.jpg">
					<source src="../../assets/video/best_picture_01.mp4" type='video/mp4' />
				</video>
			</div>
		</div>
		<div class="col-xs-12 image hideme"><img src="../../assets/best_picture_block_1.jpg" alt="The Shape of Water"></div>
		<div class="clearfix grid">
			<!-- <production-quote id="bestPictureProdQuote1" class="col-xs-12 col-md-6 no-pad" :prodQuote="productionQuote1"></production-quote> -->
			<production-quote id="bestPictureProdQuote2" class="col-xs-12 col-md-6 col-md-push-6 no-pad" :prodQuote="productionQuote2"></production-quote>
			<div class="col-xs-12 col-md-6 col-md-pull-6 image hideme"><img src="../../assets/best_picture_block_2.jpg" alt="The Shape of Water"></div>
			<production-quote id="bestPictureProdQuote3" class="col-xs-12 col-md-6 no-pad" :prodQuote="productionQuote3"></production-quote>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_picture_block_3.jpg" alt="The Shape of Water"></div>
			<production-quote id="bestPictureProdQuote4" class="col-xs-12 no-pad" :prodQuote="productionQuote4"></production-quote>
		</div>
		<slider-image class="" :sliderContent="imageSlider1"></slider-image>
		<div class="clearfix grid">
			<production-quote id="bestPictureProdQuote5" class="col-xs-12 col-md-6 no-pad" :prodQuote="productionQuote5"></production-quote>
			<div class="col-md-6 col-xs-12 video no-pad hideme">
				<video class="video-js vjs-default-skin" controls preload="none" data-setup='{"fluid": true}' poster="../../assets/video/best_picture_02.jpg">
					<source src="../../assets/video/best_picture_02.mp4" type='video/mp4' />
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
import ProductionQuote from '../../components/ProductionQuote';
import SliderImage from '../../components/SliderImage';
import ClickThru from '../../components/ClickThru';
import Social from '../../components/Social';
import Legal from '../../components/Legal';

export default {
	name: 'best-picture',
	data: function() {
		return {
			heroContent: {
				"image": "best_picture_lg",
				"mobileImage": "best_picture_mob",
				"superHeader": "For Your Consideration",
				"header": "Best Picture",
				"crewTitle": "Produced By",
				"subHeader": ['J. MILES DALE,  p.g.a.', 'GUILLERMO DEL TORO,  p.g.a.'],
				"isSubPage": true
			},
			clickThru: {
				superHeader: 'Next Category',
				mainText: 'Best Director',
				clickThruPath: ''
			},
			criticSlider1: [{
				text: 'A wonder to behold. Magical, thrilling and romantic to the core.',
				author: '- Los Angeles Times'
			}, {
				text: 'One of the finest movies of the year.',
				author: '- TIME'
			}, {
				text: 'A Bold Romantic Masterpiece.',
				author: '- Boston Globe'
			}, {
				text: 'The Shape of Water is pure movie magic. It’s poignant, tender, funny, romantic, and flat-out breathtaking.',
				author: '- Entertainment Weekly'
			}, {
				text: 'A Dazzling Dive into the Fantastic.',
				author: '- The Wall Street Journal'
			}, {
				text: 'Altogether Wonderful!',
				author: '- The New York Times'
			}],
			productionQuote1: {
				text: "QUOTE PLACEHOLDER",
				author: "- Guillermo del Toro"
			},
			productionQuote2: {
				text: "Guillermo has a unique ability to go straight to the heart of things. He grabs you by the heart and doesn’t let you go. That’s the experience I went through making the film and I hope that’s the experience people have watching it.",
				author: "- Actress Sally Hawkins"
			},
			productionQuote3: {
				text: "That’s the beauty of film — when the costumes combine with the hair, makeup, lighting, sets and the actors it becomes something magical.",
				author: "- Costume Designer Luis Sequeira"
			},
			productionQuote4: {
				text: "Guillermo has a love for our craft that is infectious. He would meet with us anytime, late on a Friday night or on a Sunday, and he was involved at every turn. It’s very rare that you find that kind of interest in being so super refined and for us, that kind of obsession is inspiring. We all wanted it to be the best it could possibly be. These days you’re very rarely given the opportunity to create something this unique.",
				author: "- Creature Designer Shane Mahan"
			},
			productionQuote5: {
				text: "Guillermo has a unique ability to communicate what he wants based on stuff that he's seen and also what’s in his mind. He gives you magical inspiration, then challenges you to bring your own ideas to the table, which is so rewarding.",
				author: "- Visual Effects Dennis Berardi"
			},
			imageSlider1: {
				image1: {
					image: 'best_picture_slider_1_1',
				},
				image2: {
					image: 'best_picture_slider_1_2',
				},
				image3: {
					image: 'best_picture_slider_1_3',
				},
				image4: {
					image: 'best_picture_slider_1_4',
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