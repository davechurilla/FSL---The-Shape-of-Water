<template>
	<div id="app" :class="{'hide-global-menu category-open' : activeCategory != '', 'menu-open' : showModal}">
		<hero class="home-hero" :content="heroContent" @hamburger="hamburgerClicked"></hero>
<!-- 		<div class="banner laurels clearfix">
		    <div class="awards-container">
		    	<div class="award-wrapper hideme">
			        <div class="awards-inner hideme">
			            <img src="./assets/lockups/GG_Winner_LockUp.png" alt="Awards Tout" />
			        </div>
			        <div class="awards-inner hideme">
			            <img src="./assets/lockups/BAFTA_lockup.png" alt="Awards Tout" />
			        </div>
			    </div>
		    	<div class="award-wrapper hideme">
			        <div class="awards-inner hideme">
			            <img src="./assets/lockups/CC_lockup.png" alt="Awards Tout" />
			        </div>
			        <div class="awards-inner hideme">
			            <img src="./assets/lockups/PGA_lockup.png" alt="Awards Tout" />
			        </div>
			    </div>
	    	</div>
		</div> -->
		<div class="laurels rotate">
			<div class="carousel slide carousel-fade" data-ride="carousel">
				<div class="carousel-inner">
					<div class="item" v-for="(group, idx) in lockupGroups" :class="{'active': idx == 0}">
						<img v-for="(lockup, idx) in group" v-if="lockup.image && lockup.fileType" :src="exportLockupPath(lockup.image, lockup.fileType)" class="hideme" alt="The Shape of Water" :style="{maxWidth: lockup.maxWidth}">
					</div>
				</div>
			</div>
		</div>
		<voters class="voters clearfix"></voters>
		<div class="intro hideme">
			<!-- <h1>The Shape of Water </h1> -->
			<img src="./assets/SOW_Logo_w1.1.png" alt="The Shape of Water" />
			<p>A powerful vision of a creative master feeling totally, joyously free.</p>
			<div class="byline home">- INDIEWIRE</div>
		</div>
		<modal v-show="showModal" :modaltype="modalType" :categories="categories" @clicked="categoryClicked" @hamburger="hamburgerClicked"></modal>
		<categories :categories="categories" @clicked="categoryClicked"></categories>
		<click-thru :clickThru="clickThru" @clickThru="nextCategory"></click-thru>
		<social></social>
		<legal></legal>
		<category-pages id="categoryPages" :categories="categories" :activeCategory="activeCategory" :previousCategory="previousCategory" @hamburger="hamburgerClicked" @clickThru="nextCategory"></category-pages>
		<back-to-top></back-to-top>
		<header id="stickyHeader"></header>
	</div>
</template>

<script>

import Hero from './components/Hero';
import Modal from './components/Modal';
import Voters from './components/Voters';
import Categories from './components/Categories';
import ClickThru from './components/ClickThru';
import Social from './components/Social';
import Legal from './components/Legal';
import CategoryPages from './components/CategoryPages';
import BackToTop from './components/BackToTop';

export default {
	// el: '#app',
	name: 'app',
	components: {
		Hero,
		Modal,
		Voters,
		Categories,
		ClickThru,
		Social,
		Legal,
		CategoryPages,
		BackToTop
	},
	data: function() {
		return {
			showModal: false,
			modalType: '',
			videoURL: 'https://www.youtube.com/embed/xjS6SftYQaQ',
			heroContent: {
				"image": "fox_sow_header_img",
				"mobileImage": "fox_sow_header_img_mob"
			},
			categories: {
				'bestPicture': { 'friendly': 'Best Picture', 'class': 'col-sm-6', 'fileName': 'bg-best-picture' },
				'bestDirector': { 'friendly': 'Best Director', 'class': 'col-sm-6', 'fileName': 'bg-best-director' },
				'bestOriginalScreenplay': { 'friendly': 'Best Original Screenplay', 'class': 'col-sm-6', 'fileName': 'bg-best-original-screenplay' },
				'bestActress': { 'friendly': 'Best Actress', 'class': 'col-sm-6', 'fileName': 'bg-best-actress' },
				'bestActor': { 'friendly': 'Best Actor', 'class': 'col-sm-6', 'fileName': 'bg-best-actor' },
				'bestSupportingActor': { 'friendly': 'Best Supporting Actor', 'class': 'col-sm-6', 'fileName': 'bg-best-supporting-actor' },
				'bestSupportingActress': { 'friendly': 'Best Supporting Actress', 'class': 'col-sm-6', 'fileName': 'bg-best-supporting-actress' },
				'bestFilmEditing': { 'friendly': 'Best Film Editing', 'class': 'col-sm-6', 'fileName': 'bg-best-film-editing' },
				'bestCinematography': { 'friendly': 'Best Cinematography', 'class': 'col-sm-6', 'fileName': 'bg-best-cinematography' },
				'bestProductionDesign': { 'friendly': 'Best Production Design', 'class': 'col-sm-6', 'fileName': 'bg-best-production-design' },
				'bestCostumeDesign': { 'friendly': 'Best Costume Design', 'class': 'col-sm-6', 'fileName': 'bg-best-costume-design' },
				'bestSoundMixing': { 'friendly': 'Best Sound Mixing', 'class': 'col-sm-6', 'fileName': 'bg-best-sound-mixing' },
				'bestSoundEditing': { 'friendly': 'Best Sound Editing', 'class': 'col-sm-6', 'fileName': 'bg-best-sound-editing' },
				'bestMakeupHair': { 'friendly': 'Best Makeup & Hairstyling ', 'class': 'col-sm-6', 'fileName': 'bg-best-makeup-hair' },
				'bestOriginalScore': { 'friendly': 'Best Original Score', 'class': 'col-sm-6', 'fileName': 'bg-best-original-score' },
				'bestVisualEffects': { 'friendly': 'Best Visual Effects', 'class': 'col-sm-6', 'fileName': 'bg-best-visual-effects' }
			},
			activeCategory: '',
			previousCategory: '',
			clickThru: {
				superHeader: 'Next Category',
				mainText: 'Best Picture',
				clickThruPath: ''
			},
			isMobile: false,
			lockupGroups: [
				[
					{
						image: 'GG_Winner_LockUp',
						fileType: 'png'
					},
					{
						image: 'CC_Winner_LockUp',
						fileType: 'png'
					}
				],
				[
					{
						image: 'BAFTA_lockup',
						fileType: 'png'
					},
					{
						image: 'PGA_lockup',
						fileType: 'png'
					}
				],
				[
					{
						image: 'DGA_lockup',
						fileType: 'png'
					},
					{
						image: 'SAG_lockup',
						fileType: 'png'
					}
				],
			]
		}
	},
	methods: {
		categoryClicked: function(value) {
			// $('.categoryPage').animate({scrollTop:$('.categoryPage').position().top }, 0);
			this.changeCategory(value);
		},
		hamburgerClicked: function() {
			this.showModal = !this.showModal;
			this.modalType = this.showModal ? 'menu' : '';
			$('body').toggleClass('hide-global-menu', this.activeCategory != '');
			$('body').toggleClass('menu-open', this.showModal);
		},
		nextCategory: function() {
			var categoryTitles = Object.keys(this.categories);
			var nextCategoryTitle = '';
			if (this.activeCategory == '') {
				nextCategoryTitle = categoryTitles[0];
			} else if (categoryTitles.indexOf(this.activeCategory) + 1 >= categoryTitles.length) {
				nextCategoryTitle = '';
			} else {
				nextCategoryTitle = categoryTitles[categoryTitles.indexOf(this.activeCategory) + 1];
			}
			this.changeCategory(nextCategoryTitle);
		},
		resetHides: function() {
			$('#stickyHeader').empty();
			$('.showme').removeClass('showme');
		},
		changeCategory: function(category) {
			this.resetHides();
			if (this.activeCategory) {
				var videojsContainer = $('.' + this.activeCategory).find('.video-js');
				for (var i = 0; i < videojsContainer.length; i ++) {
					if (videojsContainer[i]) {
						var vid = videojs(videojsContainer[i].id);
						vid.pause();
						vid.posterImage.show();
						vid.bigPlayButton.show();
						vid.currentTime(0);
					}
				}
			}
			this.previousCategory = category == '' ? '' : this.activeCategory;
			this.activeCategory = category;
			this.showModal = false;

			$('body').toggleClass('hide-global-menu', this.activeCategory != '');
			$('body').toggleClass('menu-open', this.showModal);
			setTimeout(function() {
				$('.categoryPage').animate({scrollTop:$('.categoryPage').position().top }, 0);
			}, 1000);
		},
		exportLockupPath: function(fileName, fileType) {
			return require('./assets/lockups/' + fileName + '.' + fileType);
		}
	},
	beforeMount: function() {
		var url_string = window.location.href;
		var url_path = new URL(url_string);
		var queryParams = window.location.search.substr(1).split('&').reduce(function (q, query) {
			var chunks = query.split('=');
			var key = chunks[0];
			var value = chunks[1];
			return (q[key] = value, q);
		}, {});
		var page = queryParams['page'];
		this.activeCategory = page?page:'';
		// device detection
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
		    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) this.isMobile = true;
		if (this.isMobile) {
			$('body').toggleClass('isMobile', true);
		} else {
			$('body').toggleClass('isDesktop', true);
		}
	}
};
</script>

<style lang="scss">
   @import 'scss/main.scss';
</style>