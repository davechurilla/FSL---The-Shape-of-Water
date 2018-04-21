<template>
	<div>
		<hero :content="heroContent" @hamburger="hamburgerClicked"></hero>
		<div class="clearfix">
			<div class="banner laurels hideme">
			    <div class="awards-container">
			    	<div class="award-wrapper">
						<div class="awards-inner hideme">
							<img src="../../assets/lockups/SAG_lockup.png" alt="Awards Tout" />
						</div>
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
				<video class="video-js vjs-default-skin" controls preload="none" data-setup='{"fluid": true}' poster="../../assets/video/best_actress_01.jpg">
					<source src="http://videos.davechurilla.com/tsow/best_actress_01.mp4" type='video/mp4' />
				</video>
			</div>
		</div>
		<div class="clearfix grid">
			<production-quote id="bestActressProdQuote1" :prodQuote="productionQuote1" class="col-xs-12 col-md-6"></production-quote>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_actress_block_1.jpg" alt="The Shape of Water"></div>
			<production-quote id="bestActressProdQuote2" :prodQuote="productionQuote2" class="col-xs-12 col-md-6 col-md-push-6"></production-quote>
			<div class="col-xs-12 col-md-6 col-md-pull-6 video no-pad hideme">
				<video class="video-js vjs-default-skin" controls preload="none" data-setup='{"fluid": true}' poster="../../assets/video/best_actress_02.jpg">
					<source src="http://videos.davechurilla.com/tsow/best_actress_02.mp4" type='video/mp4' />
				</video>
			</div>
			<production-quote id="bestActressProdQuote3" :prodQuote="productionQuote3" class="col-xs-12 col-md-6"></production-quote>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_actress_block_2.jpg" alt="The Shape of Water"></div>
			<production-quote id="bestActressProdQuote4" :prodQuote="productionQuote4" class="col-xs-12 col-md-6 col-md-push-6"></production-quote>
			<div class="col-xs-12 col-md-6 col-md-pull-6 image hideme"><img src="../../assets/best_actress_block_3.jpg" alt="The Shape of Water"></div>
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
import ClickThru from '../../components/ClickThru';
import Social from '../../components/Social';
import Legal from '../../components/Legal';

export default {
	name: 'best-actress',
	data: function() {
		return {
			heroContent: {
				"image": "best_actress_lg",
				"mobileImage": "best_actress_mob",
				"superHeader": "For Your Consideration",
				"header": "Best Actress",
				"subHeader": ['SALLY HAWKINS'],
				"isSubPage": true
			},
			clickThru: {
				superHeader: 'Next Category',
				mainText: 'Best Actor',
				clickThruPath: ''
			},
			criticSlider1: [{
				text: "An exquisite performance from Sally Hawkins that conveys both delicacy and strength.",
				author: '- The Hollywood Reporter'
			}, {
				text: "Sally Hawkins conveys immense arcs of emotion through gesture and bearing alone. This is the kind of acting that makes you grateful you get to tag along and watch.",
				author: '- Boston Globe'
			}, {
				text: "Sally Hawkins gives the best performance of her career.",
				author: '- The Wall Street Journal'
			}, {
				text: "Hawkins says more with her soulful eyes than she ever could with mere words.",
				author: '- Entertainment Weekly'
			}],
			productionQuote1: {
				text: "I needed someone whose face is able to express every hue without a word. Sally has that kind of unique energy, so that is why I wrote [the role] for her. Sally is the most genuine, unaffected person and I don’t think she is capable of doing anything that isn’t emotionally real.",
				author: "- Guillermo del Toro"
			},
			productionQuote2: {
				text: "It’s so rare that you get a role that asks you to put it all out there, where it’s about unadulterated expression and words are not needed, and you have the freedom to express so much through your eyes, breath and body.",
				author: "- Sally Hawkins"
			},
			productionQuote3: {
				text: "With Sally, it's all about what's going on behind the eyes. Guillermo knew he needed an incredibly instinctual actor to pull this off, and Sally is able to do so much with the smallest of expressions or gestures, with the way she moves and even the tone of her silence.",
				author: "- Producer J. Miles Dale"
			},
			productionQuote4: {
				text: "This is her movie, and I can't think of anyone else who could have played this part.",
				author: "- Richard Jenkins"
			}

		}
	},
	components: {
		Hero,
		Voters,
		CriticQuote,
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
	#bestActressProdQuote1 {
		p {
			@media (min-width: 992px) {
				line-height: 2vw !important;
				padding: 0 5px !important;
			}
		}
	}
	#bestActressProdQuote2 {
		p {
			@media (min-width: 992px) {
				line-height: 2vw !important;
				padding: 0 5px !important;
			}
		}
	}
	#bestActressProdQuote3 {
		p {
			@media (min-width: 992px) {
				line-height: 2vw !important;
				padding: 0 5px !important;
			}
		}
	}
</style>