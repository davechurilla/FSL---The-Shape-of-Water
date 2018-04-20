<template>
	<div class="hamburger">
		<div class="menu-btn" v-on:click="toggleMenu">
			<div class="menu-global menu-top"></div>
			<div class="menu-global menu-middle"></div>
			<div class="menu-global menu-bottom"></div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'hamburger',
	data: function() {
		return {
			testvariable: true,
			showModal: '',
			modalType: ''
		}
	},
	methods: {
		toggleMenu: function() {
			this.$emit('hamburger');
		}
	}
}
</script>