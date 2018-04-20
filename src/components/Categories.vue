<template>
<div class="categories">
	<div class="cat-panel clearfix hideme" v-for="(category, key) in categories" :class="category.class" v-on:click="buildRipple(key, $event)">
		<img :src="loadImage(category.fileName)" :alt="category.friendly" :class="{'col-xs-12 hidden-sm hidden-md hidden-lg nopadding' : category.fileNameLarge}">
		<img v-if="category.fileNameLarge" :src="loadImage(category.fileNameLarge)" :alt="category.friendly" class="hidden-xs col-sm-12 col-md-12 col-lg-12 nopadding">
		<div class="cat-title">{{category.friendly}}</div>
	</div>
</div>
</template>

<script>

export default {
	name: 'categories',
	props: {
		categories: {
			required: true,
			type: Object
		}
	},
	data: function() {
		return {
			imageCount: 50,
			index: 0,
			rippleSize: 100,
			rippleAnimation: '',
			categoryId: ''
		}
	},
	methods: {
		loadImage(img) {
			return require('../assets/' + img + '.jpg')
		},
		openCategory() {
			if (!this.categoryId) { return; }
			this.$emit('clicked', this.categoryId);
		},
		buildRipple: function buildRipple(categoryId, event) {
			this.categoryId = categoryId;
			this.resetRipple();
			var ripple = document.createElement('div')
			ripple.className = "ripple-animate";
			ripple.style.background = this.getImage();
			ripple.style.top = (event.pageY - (this.rippleSize /2)) + $('#app').scrollTop() + 'px';
			ripple.style.left = (event.pageX - (this.rippleSize /2)) + $('#app').scrollLeft() + 'px';
			// ripple.style.top = (event.clientY - (this.rippleSize /2)) + 'px';
			// ripple.style.left = (event.clientX - (this.rippleSize /2)) + 'px';
			ripple.style.width = this.rippleSize + 'px';
			ripple.style.height = this.rippleSize + 'px';
			document.getElementsByTagName('body')[0].appendChild(ripple);
			this.playRipple(ripple);
		},
		playRipple(ripple) {
			var self = this;
			this.rippleAnimation = setInterval(function() {
				ripple.style.backgroundPosition = (-100 * self.index) + 'px 100px';
				ripple.style
				self.index++;
				if (self.index >= self.imageCount) {
					self.resetRipple();
					self.openCategory();
				}
			},20);
		},
		getImage() {
			return 'url(' + require('../assets/sow_sprite_50.png');
		},
		resetRipple() {
			clearInterval(this.rippleAnimation);
			this.index = 0;
			$('.ripple-animate').remove();
		}
	}
}
</script>