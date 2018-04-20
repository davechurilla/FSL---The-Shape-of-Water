<template>
	<div class="hero-wrapper clearfix">
		<hamburger @hamburger="hamburgerClicked"></hamburger>
		<div class="header-img-container col-xs-12 hidden-sm hidden-md hidden-lg">
			<img :src="exportImagePath(content.mobileImage)"  alt="The Shape of Water" width="100%" class="header-img" />
		</div>
		<div class="header-img-container hidden-xs col-sm-12 col-md-12 col-lg-12">
			<img :src="exportImagePath(content.image)"  alt="The Shape of Water" width="100%" class="header-img" />
		</div>
		<div class="scroller-anchor"></div>
		<div class="category-title">
			<div class="scroller-target">
				<h3 v-if="content.superHeader">{{content.superHeader}}</h3>
				<h1 v-if="content.header">{{content.header}}</h1>
			</div>
		</div>
		<div class="category-crew">
				<h3 v-if="content.crewTitle">{{content.crewTitle}}</h3>
				<table>
					<tr v-for="subheader in content.subHeader" v-html="subheader"></tr>
				</table>
		</div>
	</div>
</template>

<script>
import Hamburger from './Hamburger';
export default {
	name: 'hero',
	props: {
		content: {
			required: false,
			type: Object,
		}
	},
	methods: {
		exportImagePath: function(data) {
			return require('../assets/hero/' + data + '.jpg');
		},
		hamburgerClicked: function() {
			this.$emit('hamburger');
		}
	},
	data: function() {
		return {
			showModal: '',
			modalType: ''
		}
	},
	components: {
		Hamburger
	}
}
</script>
  