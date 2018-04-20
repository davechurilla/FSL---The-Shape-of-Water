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
				    </div>
		    	</div>
			</div>
			<voters class="voters col-xs-12"></voters>
		</div>
		<div class="clearfix">
			<critic-quote :criticSliderContent="criticSlider1" class="col-xs-12 no-pad"></critic-quote>
			<div class="col-xs-12 col-md-8 col-md-offset-2 video no-pad hideme">
				<video class="video-js vjs-default-skin" controls preload="none" data-setup='{"fluid": true}' poster="../../assets/video/best_supporting_actor_video_01.jpg">
					<source src="../../assets/video/best_supporting_actor_actress_video_01.mp4" type='video/mp4' />
				</video>
			</div>
		</div>
		<div class="clearfix grid">
			<production-quote id="bestSupportingActorProdQuote1" :prodQuote="prodQuoteContent1" class="col-xs-12 no-pad"></production-quote>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_supporting_actor_block_1.jpg" alt="The Shape of Water"></div>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_supporting_actor_block_2.jpg" alt="The Shape of Water"></div>
			<production-quote id="bestSupportingActorProdQuote2" :prodQuote="prodQuoteContent2" class="col-xs-12 no-pad"></production-quote>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_supporting_actor_block_3.jpg" alt="The Shape of Water"></div>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_supporting_actor_block_4.jpg" alt="The Shape of Water"></div>
			<production-quote id="bestSupportingActorProdQuote3" :prodQuote="prodQuoteContent3" class="col-xs-12 no-pad"></production-quote>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_supporting_actor_block_5.jpg" alt="The Shape of Water"></div>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_supporting_actor_block_6.jpg" alt="The Shape of Water"></div>
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
	name: 'best-supporting-actor',
	data: function() {
		return {
			heroContent: {
				"image": "best_supporting_actor_lg",
				"mobileImage": "best_supporting_actor_mob",
				"superHeader": "For Your Consideration",
				"header": "Best Supporting Actor",
				"subHeader": ['RICHARD JENKINS', 'MICHAEL SHANNON', 'MICHAEL STUHLBARG'],
				"isSubPage": true
			},
			clickThru: {
				superHeader: 'Next Category',
				mainText: 'Best Supporting Actress',
				clickThruPath: ''
			},
			criticSlider1: [{
				text: 'Del Toro’s pitch perfect ensemble also hammer home every beat and emotion, too. That’s hardly surprising because in Michael Shannon, Richard Jenkins, Michael Stuhlbarg, and Octavia Spencer he has four of the best American actors working today.',
				author: '- Metro US'
			}, {
				text: 'Richard Jenkins is heartbreakingly good.',
				author: '- Scott Mendelson, FORBES'
			}],
			prodQuoteContent1: {
				text: "I told Richard I wanted Giles to be someone both hiding and defiant, a strong guy in a vulnerable position. Richard was just completely real, completely there, coming apart from the inside out.",
				author: "Guillermo del Toro"
			},
			prodQuoteContent2: {
				text: "Michael Shannon has the incredible precision of a classical English actor and at the same time the impulsiveness and immediacy of an American actor. He’s also capable of giving humanity to the most heinous of villains. I wanted you to see him go through things you wouldn’t normally see a villain go through: self-doubt, reflection and despair.",
				author: "Guillermo del Toro"
			},
			prodQuoteContent3: {
				text: "I saw in [Michael Stulhbarg] the ability to transform from a killer to a saint to a tragic figure and I knew he could create a composite character like Hoffstetler, who is on the one hand a very capable spy and on the other a compassionate, altruistic scientist capable of real sacrifice.",
				author: "Guillermo del Toro"
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