<template>
	<div>
		<hero :content="heroContent" @hamburger="hamburgerClicked"></hero>
		<div class="clearfix">
			<div class="banner laurels hideme">
			    <div class="awards-container">
			    	<div class="award-wrapper">
						<div class="awards-inner hideme">
							<img src="../../assets/lockups/SOW_COSTUMEGUILD_NOMINATION_GRAPHIC_LOCKUP.png" alt="Awards Tout" />
						</div>
				    </div>
		    	</div>
			</div>
			<voters class="voters col-xs-12"></voters>
		</div>
		<div class="clearfix">
			<critic-quote :criticSliderContent="criticSlider1" class="col-xs-12 no-pad"></critic-quote>
		</div>
		<div class="row">
			<div class="col-xs-12 col-md-6 no-pad">
				<div class="grid">
					<production-quote id="bestCostumeDesignProdQuote1" :prodQuote="productionQuote1" class="col-xs-12"></production-quote>
				</div>
				<div class="grid">
					<div class="col-xs-12 image hideme"><img src="../../assets/best_costume_design_block_1.jpg" alt="The Shape of Water"></div>
				</div>
			</div>
			<div class="col-xs-12 col-md-6 no-pad grid double">
				<div class="col-xs-12 image hideme"><img src="../../assets/best_costume_design_block_2.jpg" alt="The Shape of Water"></div>
			</div>
		</div>
		<div class="clearfix grid">
			<production-quote id="bestCostumeDesignProdQuote2" :prodQuote="productionQuote2" class="col-xs-12 col-md-6 col-md-push-6"></production-quote>
			<div class="col-xs-12 col-md-6 col-md-pull-6 image hideme"><img src="../../assets/best_costume_design_block_3.jpg" alt="The Shape of Water"></div>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_costume_design_block_4.jpg" alt="The Shape of Water"></div>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_costume_design_block_5.jpg" alt="The Shape of Water"></div>
		</div>
		<div class="clearfix">
			<production-quote id="bestCostumeDesignProdQuote3" :prodQuote="productionQuote3" class="col-xs-12 nofloat"></production-quote>
			<slider-image :sliderContent="imageSlider1"></slider-image>
		</div>
		<div class="clearfix">
			<production-quote id="bestCostumeDesignProdQuote4" :prodQuote="productionQuote4" class="col-xs-12"></production-quote>
			<slider-image :sliderContent="imageSlider2"></slider-image>
			<production-quote id="bestCostumeDesignProdQuote5" :prodQuote="productionQuote5" class="col-xs-12"></production-quote>
		</div>
		<div class="clearfix grid">
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_costume_design_block_6.jpg" alt="The Shape of Water"></div>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_costume_design_block_7.jpg" alt="The Shape of Water"></div>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_costume_design_block_8.jpg" alt="The Shape of Water"></div>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_costume_design_block_9.jpg" alt="The Shape of Water"></div>
		</div>
		<div class="clearfix">
			<production-quote id="bestCostumeDesignProdQuote6" :prodQuote="productionQuote6" class="col-xs-12"></production-quote>
		</div>
		<div class="row">
			<div class="col-xs-12 col-md-6 no-pad">
				<div class="grid">
					<div class="col-xs-12 image hideme"><img src="../../assets/best_costume_design_block_10.jpg" alt="The Shape of Water"></div>
				</div>
				<div class="grid">
					<div class="col-xs-12 image hideme"><img src="../../assets/best_costume_design_block_11.jpg" alt="The Shape of Water"></div>
				</div>
			</div>
			<div class="col-xs-12 col-md-6 no-pad grid double">
				<div class="col-xs-12 image hideme"><img src="../../assets/best_costume_design_block_12.jpg" alt="The Shape of Water"></div>
			</div>
		</div>
		<!-- <slider-quote id="bestCostumeSlider1" :sliderContent="quoteSlider1" class="col-xs-12 no-pad"></slider-quote> -->
		<!-- <div class="clearfix grid"> -->
			<!-- <div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best-costume-frame-1.jpg" alt="The Shape of Water"></div> -->
			<!-- <div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best-costume-frame-2.jpg" alt="The Shape of Water"></div> -->
		<!-- </div> -->
		<!-- <slider-quote id="besCostumeSlider2" class="no-pad" :sliderContent="quoteSlider2"></slider-quote> -->
		<!-- <div class="clearfix grid"> -->
			<!-- <div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best-costume-frame-3.jpg" alt="The Shape of Water"></div> -->
			<!-- <div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best-costume-frame-4.jpg" alt="The Shape of Water"></div> -->
		<!-- </div> -->
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
import SliderQuote from '../../components/SliderQuote';
import SliderImage from '../../components/SliderImage';
import ClickThru from '../../components/ClickThru';
import Social from '../../components/Social';
import Legal from '../../components/Legal';

export default {
	name: 'best-costume-design',
	data: function() {
		return {
			heroContent: {
				"image": "best_costume_lg",
				"mobileImage": "best_costume_mob",
				"superHeader": "For Your Consideration",
				"header": "BEST COSTUME DESIGN",
				"subHeader": ['LUIS SEQUEIRA'],
				"isSubPage": true
			},
			clickThru: {
				superHeader: 'Next Category',
				mainText: 'BEST SOUND MIXING',
				clickThruPath: ''
			},
			criticSlider1: [{
				text: "A poetic love letter to misunderstood creatures filled with magic and extraordinary visual imagination.",
				author: '- Time'
			}, {
				text: "A ravishing, eccentric auteur’s imagining, spilling artistry, empathy and sensuality from every open pore.",
				author: '- Variety'
			}],
			productionQuote1: {
				text: "I needed someone whose face is able to express every hue without a word. Sally has that kind of unique energy, so that is why I wrote [the role] for her. Sally is the most genuine, unaffected person and I don’t think she is capable of doing anything that isn’t emotionally real.",
				author: "- Guillermo del Toro"
			},
			productionQuote2: {
				text: "Elisa isn’t a person who has a lot of clothes, so she needed just a few pieces, but very special pieces. She is in blues and greens, watery colors, for the most part. There is a little red only near the end of the film, signifying a shift in her resolve.",
				author: "- Luis Sequeira"
			},
			productionQuote3: {
				text: "I wanted to do a kind of a bruised fruit palette for Octavia so it would feel very different from Sally’s character and different from all the other female characters in the film as well. This underscores the idea of Zelda as a bright, vibrant woman constrained by the pervasive sexism and social prejudice of the day.",
				author: "- Luis Sequeira"
			},
			productionQuote4: {
				text: "Strickland was on the top of the current style notes. In early discussions, we wanted to have the character be imposing, which was not hard given Michael’s height. But I also wanted to broaden him out, so the shoulders of his suits were brought out slightly.",
				author: "- Luis Sequeira"
			},
			productionQuote5: {
				text: "Giles is basically warm tones. The backstory to him was his life kind of stood still, given the fact that he was basically not making a ton of money. A lot of his clothing is clothing from the '50s. Everything of his is worn out.",
				author: "- Luis Sequeira"
			},
			productionQuote6: {
				text: "For Hofstetter’s wardrobe, Sequeira created two slightly different looks to emphasize his double agent status. 'We shifted the color from cool deep tones to warm deep tones depending on where he was. If he’s working at the compound, he was in cool tones. When he saw the Russians, he was moved to brown and green.'",
				author: "- Luis Sequeira"
			},
			imageSlider1: {
				image1: {
					image: 'best_costume_design_slider_1_1',
				},
				image2: {
					image: 'best_costume_design_slider_1_2',
				},
				image3: {
					image: 'best_costume_design_slider_1_3',
				},
				image4: {
					image: 'best_costume_design_slider_1_4',
				}
			},
			imageSlider2: {
				image1: {
					image: 'best_costume_design_slider_2_1',
				},
				image2: {
					image: 'best_costume_design_slider_2_2',
				},
				image3: {
					image: 'best_costume_design_slider_2_3',
				}
			},
		}
	},
	components: {
		Hero,
		Voters,
		CriticQuote,
		ProductionQuote,
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
<style lang="scss">
	.row {
		margin: 0;
	}
	#bestCostumeDesignProdQuote1 {
		p {
			@media (min-width: 992px) {
				line-height: 2vw !important;
				padding: 0 5px !important;
			}
		}
	}
	#bestCostumeDesignProdQuote2 {
		p {
			@media (min-width: 992px) {
				line-height: 2vw !important;
				padding: 0 5px !important;
			}
		}
	}
</style>