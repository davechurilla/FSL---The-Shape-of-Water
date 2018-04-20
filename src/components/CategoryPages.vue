<template>
	<div>
		
		<best-picture class="categoryPage bestPicture" v-bind:class="{ active: activeCategory == 'bestPicture', 'closing': previousCategory == 'bestPicture' }" @hamburger="hamburgerClicked" @clickThru="nextCategory"></best-picture>
		<best-director class="categoryPage bestDirector" v-bind:class="{ active: activeCategory == 'bestDirector', 'closing': previousCategory == 'bestDirector' }" @hamburger="hamburgerClicked" @clickThru="nextCategory"></best-director>
		<!-- <best-ensemble class="categoryPage bestEnsemble" v-bind:class="{ active: activeCategory == 'bestEnsemble', 'closing': previousCategory == 'bestEnsemble' }" @hamburger="hamburgerClicked" @clickThru="nextCategory"></best-ensemble> -->
		<best-screenplay class="categoryPage bestOriginalScreenplay" v-bind:class="{ active: activeCategory == 'bestOriginalScreenplay', 'closing': previousCategory == 'bestOriginalScreenplay' }" @hamburger="hamburgerClicked" @clickThru="nextCategory"></best-screenplay>
		<best-actress class="categoryPage bestActress" v-bind:class="{ active: activeCategory == 'bestActress', 'closing': previousCategory == 'bestActress' }" @hamburger="hamburgerClicked" @clickThru="nextCategory"></best-actress>
		<best-actor class="categoryPage bestActor" v-bind:class="{ active: activeCategory == 'bestActor', 'closing': previousCategory == 'bestActor' }" @hamburger="hamburgerClicked" @clickThru="nextCategory"></best-actor>
		<best-supporting-actor class="categoryPage bestSupportingActor" v-bind:class="{ active: activeCategory == 'bestSupportingActor', 'closing': previousCategory == 'bestSupportingActor' }" @hamburger="hamburgerClicked" @clickThru="nextCategory"></best-supporting-actor>
		<best-supporting-actress class="categoryPage bestSupportingActress" v-bind:class="{ active: activeCategory == 'bestSupportingActress', 'closing': previousCategory == 'bestSupportingActress' }" @hamburger="hamburgerClicked" @clickThru="nextCategory"></best-supporting-actress>
		<best-film-editing class="categoryPage bestFilmEditing" v-bind:class="{ active: activeCategory == 'bestFilmEditing', 'closing': previousCategory == 'bestFilmEditing' }" @hamburger="hamburgerClicked" @clickThru="nextCategory"></best-film-editing>
		<best-cinematography class="categoryPage bestCinematography" v-bind:class="{ active: activeCategory == 'bestCinematography', 'closing': previousCategory == 'bestCinematography' }" @hamburger="hamburgerClicked" @clickThru="nextCategory"></best-cinematography>
		<best-production class="categoryPage bestProductionDesign" v-bind:class="{ active: activeCategory == 'bestProductionDesign', 'closing': previousCategory == 'bestProductionDesign' }" @hamburger="hamburgerClicked" @clickThru="nextCategory"></best-production>
		<best-costume-design class="categoryPage bestCostumeDesign" v-bind:class="{ active: activeCategory == 'bestCostumeDesign', 'closing': previousCategory == 'bestCostumeDesign' }" @hamburger="hamburgerClicked" @clickThru="nextCategory"></best-costume-design>
		<best-makeup-hair class="categoryPage bestMakeupHair" v-bind:class="{ active: activeCategory == 'bestMakeupHair', 'closing': previousCategory == 'bestMakeupHair' }" @hamburger="hamburgerClicked" @clickThru="nextCategory"></best-makeup-hair>
		<best-sound-mixing class="categoryPage bestSoundMixing" v-bind:class="{ active: activeCategory == 'bestSoundMixing', 'closing': previousCategory == 'bestSoundMixing' }" @hamburger="hamburgerClicked" @clickThru="nextCategory"></best-sound-mixing>
		<best-sound-editing class="categoryPage bestSoundEditing" v-bind:class="{ active: activeCategory == 'bestSoundEditing', 'closing': previousCategory == 'bestSoundEditing' }" @hamburger="hamburgerClicked" @clickThru="nextCategory"></best-sound-editing>
		<best-original-score class="categoryPage bestOriginalScore" v-bind:class="{ active: activeCategory == 'bestOriginalScore', 'closing': previousCategory == 'bestOriginalScore' }" @hamburger="hamburgerClicked" @clickThru="nextCategory"></best-original-score>
		<best-visual-effects class="categoryPage bestVisualEffects" v-bind:class="{ active: activeCategory == 'bestVisualEffects', 'closing': previousCategory == 'bestVisualEffects' }" @hamburger="hamburgerClicked" @clickThru="nextCategory"></best-visual-effects>

	</div>
</template>
<script>

import BestPicture from '../components/categoryPages/BestPicture';
import BestDirector from '../components/categoryPages/BestDirector';
import BestProduction from '../components/categoryPages/BestProduction';
import BestEnsemble from '../components/categoryPages/BestEnsemble';
import BestScreenplay from '../components/categoryPages/BestScreenplay';
import BestActress from '../components/categoryPages/BestActress';
import BestActor from '../components/categoryPages/BestActor';
import BestSupportingActor from '../components/categoryPages/BestSupportingActor';
import BestSupportingActress from '../components/categoryPages/BestSupportingActress';
import BestCostumeDesign from '../components/categoryPages/BestCostumeDesign';
import BestMakeupHair from '../components/categoryPages/BestMakeupHair';
import BestFilmEditing from '../components/categoryPages/BestFilmEditing';
import BestCinematography from '../components/categoryPages/BestCinematography';
import BestSoundMixing from '../components/categoryPages/BestSoundMixing';
import BestSoundEditing from '../components/categoryPages/BestSoundEditing';
import BestVisualEffects from '../components/categoryPages/BestVisualEffects';
import BestOriginalScore from '../components/categoryPages/BestOriginalScore';

export default {
	name: 'category-pages',
	props: {
		categories: {
			required: true,
			type: Object
		},
		activeCategory: {
			required: false,
			type: String
		},
		previousCategory: {
			required: false,
			type: String
		}
	},
	components: {
		BestPicture,
		BestDirector,
		BestProduction,
		BestEnsemble,
		BestScreenplay,
		BestActress,
		BestActor,
		BestSupportingActress,
		BestCostumeDesign,
		BestMakeupHair,
		BestSupportingActor,
		BestSupportingActress,
		BestFilmEditing,
		BestCinematography,
		BestSoundMixing,
		BestSoundEditing,
		BestVisualEffects,
		BestOriginalScore
	},
    methods: {
        hamburgerClicked: function() {
            this.$emit('hamburger');
        },
        nextCategory: function() {
        	this.$emit('clickThru')
        }
    },
    mounted() {
    	var catTop = 0;
    	$('.categoryPage').scroll(function(e) {
    	// console.log($('.category-title').offset())
    		var scrollerTop = $(e.target).find('.category-title').offset().top;
    		var scrollerAnchor = $(e.target).find('.scroller-anchor').offset().top;
    		var scrollerHeight = $(e.target).find('.category-title').height();
    		// var catTop = $('.category-title').offset().top;
    		if (catTop == 0) {
    			catTop = $(this).find('.category-title').offset().top;
    		}
    		// console.log($(this).scrollTop(), scrollerHeight, catTop);
    		// if ($(this).scrollTop() >= scrollerHeight && scrollerTop <= 0) {
    		if  ($(this).scrollTop() > catTop && $(e.target).find('.category-title').hasClass('sticky') == false) {
    			// console.log('a');
    			$(e.target).find('.scroller-anchor').height(scrollerHeight);
    			$(e.target).find('.category-title').addClass('sticky');
    			$(e.target).find('.category-title').clone().appendTo('#stickyHeader')
    		} else if ($(this).scrollTop() <= catTop && $(e.target).find('.category-title').hasClass('sticky')) {
    			// console.log('c');
    			$(e.target).find('.category-title').removeClass('sticky')
    			$(e.target).find('.category-title').attr('style', '');
    			$('#stickyHeader').empty();
    		} else {
    			// console.log('d');
    			// $(e.target).find('.category-title').removeClass('sticky')

    		}
    	});
        var ua = window.navigator.userAgent;
        var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i) || !!ua.match(/iPod/i);
        var webkit = !!ua.match(/WebKit/i);
        var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

        function doOnOrientationChange() {
            var orientationLabel
            if (Math.abs(window.orientation) === 90) {
                // Landscape
                orientationLabel = "LANDSCAPE " + window.orientation;
                $('#categoryPages .categoryPage').css('padding-bottom', '0');
            } else {
                // Portrait
                orientationLabel = "PORTRAIT " + window.orientation;
                $('#categoryPages .categoryPage').css('padding-bottom', '18%');
            }            
        }

            if (iOSSafari) {
                window.onorientationchange = function() { setTimeout(doOnOrientationChange, 250); };
                doOnOrientationChange();            
            } else {
        }    	
    }
}
</script>