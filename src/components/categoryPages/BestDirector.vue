<template>
	<div>
		<hero :content="heroContent" @hamburger="hamburgerClicked"></hero>
		<div class="clearfix">
			<div class="banner laurels hideme">
			    <div class="awards-container">
			    	<div class="award-wrapper">
						<div class="awards-inner hideme">
							<img src="../../assets/lockups/SOW_GOLDENGLOBES_WIN_BESTDIRECTOR_GRAPHIC_LOCKUP.png" alt="Awards Tout" />
						</div>
						<div class="awards-inner hideme">
							<img src="../../assets/lockups/CC_Winner_LockUp.png" alt="Awards Tout" />
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
			<critic-quote id="bestDirectorCriticSlider1" :criticSliderContent="criticSlider1" class="col-xs-12 no-pad"></critic-quote>
			<div class="col-xs-12 col-md-8 col-md-offset-2 video no-pad hideme">
				<video class="video-js vjs-default-skin" controls preload="none" data-setup='{"fluid": true}' poster="../../assets/DIRECTOR_TheShapOfWater_BTS_Trailer_GDT_TEXTED-01.jpg">
					<source src="../../assets/video/DIRECTOR_TheShapOfWater_BTS_Trailer_GDT_TEXTED.mp4" type='video/mp4' />
				</video>
			</div>
		</div>
		<div class="clearfix">
		</div>
		<div class="clearfix grid">
			<production-quote id="bestDirectorQuote2" :prodQuote="prodQuoteContent2" class="col-xs-12 col-md-6"></production-quote>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/gdt-and-sally.jpg" alt="The Shape of Water"></div>
		</div>
		<div class="clearfix grid">
			<production-quote id="bestDirectorQuote3" :prodQuote="prodQuoteContent3" class="col-xs-12 col-md-6 col-md-push-6"></production-quote>
			<div class="col-xs-12 col-md-6 col-md-pull-6 image hideme"><img src="../../assets/gdt-and-truck.jpg" alt="The Shape of Water"></div>
		</div>
		<div class="clearfix grid">
			<production-quote id="bestDirectorQuote4" :prodQuote="prodQuoteContent4" class="col-xs-12 col-md-6"></production-quote>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/michael-and-gdt.jpg" alt="The Shape of Water"></div>
		</div>
		<div class="clearfix grid">
			<production-quote id="bestDirectorQuote5" :prodQuote="prodQuoteContent5" class="col-xs-12 col-md-6 col-md-push-6"></production-quote>
			<div class="col-xs-12 col-md-6 col-md-pull-6 image hideme"><img src="../../assets/octavia-and-gdt.jpg" alt="The Shape of Water"></div>
		</div>
		<div class="clearfix grid">
			<production-quote id="bestDirectorQuote6" :prodQuote="prodQuoteContent6" class="col-xs-12 col-md-6"></production-quote>
			<div class="col-xs-12 col-md-6 image hideme"><img src="../../assets/best_director_block_5.jpg" alt="The Shape of Water"></div>
		</div>
		<div class="clearfix grid">
			<production-quote id="bestDirectorQuote7" :prodQuote="prodQuoteContent7" class="col-xs-12 col-md-6 col-md-push-6"></production-quote>
			<div class="col-xs-12 col-md-6 col-md-pull-6 image hideme"><img src="../../assets/desplat-and-gdt.jpg" alt="The Shape of Water"></div>
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
	name: 'best-director',
	data: function() {
		return {
			heroContent: {
				"image": "best_director_lg",
				"mobileImage": "best_director_mob",
				"superHeader": "For Your Consideration",
				"header": "Best Director",
				"subHeader": ['GUILLERMO DEL TORO'],
				"isSubPage": true
			},
			clickThru: {
				superHeader: 'Next Category',
				mainText: 'Best Original Screenplay',
				clickThruPath: ''
			},
			criticSlider1: [
				{
					text: "A powerful vision by a creative master feeling totally, joyously free.",
					author: '- INDIEWIRE'
				},
				{
					text: "A marvelous film, richly realized and uniquely captivating. Del Toro’s devotion to this labor of love shows in every frame.",
					author: '- VANITY FAIR'
				},
				{
					text: "Del Toro imagines a whole world, one that has never existed before, and then creates it with meticulousness and fidelity that can inspire awe.",
					author: '- San Francisco Chronicle'
				}

			],
			quoteSlider1: [
				{
					text: "GUILLERMO DEL TORO IS A WORLD-CLASS FILM ARTIST. JUST DIVE INTO THE EXPERIENCE AND LET YOURSELF GO.",
					author: '- ROLLINGSTONE'
				},
				{
					text: "A POWERFUL VISION OF A CREATIVE MASTER FEELING TOTALLY, JOYOUSLY FREE.",
					author: '- Indiewire'
				}
			],
			quoteSlider2: [
				{
					text: 'He is a genius. I know that word is bandied around, but he truly is.',
					author: 'SALLY HAWKINS'
				},
				{
					text: "If the devil is in the details, then he\'s Satan",
					author: 'Octavia Spencer'
				}
			],
			prodQuoteContent1:
				{
					text: 'I wanted this story to take the form of a fairy tale in that you have a humble human being who stumbles into something grander and more transcendental than anything else in her life.',
					author: "- Guillermo del Toro"
				},
			prodQuoteContent2:
				{
					text: "Unless Guillermo can feel your heart, he won't be satisfied. He wants to be moved in every frame. I think that is a gift to an actor. He invites you to rise to the very high level of his imagination.",
					author: "- Sally Hawkins"
				},
			prodQuoteContent3:
				{

					text: 'To me, he\’s like an old master with a vocabulary all his own. He creates stories that feel real but also have something more going on, something that speaks to life and art and love. He\’s totally singular and that\’s why all of us on set were ready to go to the wall for him.' ,
					author: "- Richard Jenkins"
				},
			prodQuoteContent4:
				{
					text: "When I met with Guillermo, he said this film was his dream project -- and I thought it would be foolish to pass up an opportunity to be part of his dream project because he is such a big dreamer.",
					author: "- Michael Shannon"
				},
			prodQuoteContent5:
				{
					text: "As a filmmaker, he’s just an alchemist. He turns human themes into something otherworldly.",
					author: "- Octavia Spencer"
				},
			prodQuoteContent6:
			    {
			        text: "After reading the script I thought, ‘How are we ever going to shoot this?’ But then I talked to Guillermo and his vision was so strong, I started to believe it was possible. This film was both a big challenge and a fantastic experience for me.",
			        author: "- Cinematographer Dan Laustsen"
			    },
			prodQuoteContent7:
			    {
			        text: "For me, Guillermo is as much an artist as a director. It is the way in which those two things combine in him that makes his work so magical.",
			        author: "- Composer Alexandre Desplat"
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
		}
	}
}
</script>