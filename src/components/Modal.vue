<template> 
	<transition name="modal">
		<div class="modal modal-mask" style="display: block">
			<hamburger @hamburger="hamburgerClicked"></hamburger>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header" v-on:click="categoryClicked">
						<p>For Your Consideration</p>
						<img src="../assets/SOW_Logo_Superheader.png" class="superheader" alt="A Guillermo Del Toro Film">
						<img src="../assets/SOW_Logo_w1.1.png" class="title" alt="The Shape of Water">
					</div>
					<div class="modal-body">
						<slot name="body">
							<categories data="test" v-if="modaltype == 'menu'" :categories="categories" @clicked="categoryClicked"></categories>
						</slot>
					</div>
					<div class="modal-footer">
						<slot name="footer"></slot>
					</div>
				</div>
			</div>
		</div>
	</transition> 
</template>

<script>
import Hamburger from './Hamburger';
import Categories from './Categories';

export default {
	name: 'modal',
	props: {
		modaltype: {
			required: false,
			type: String
		},
		categories: {
			required: true,
			type: Object
		}
	},
	data() { 
		return { 
			showModal: false 
		} 
	}, 
	components: {
		Categories,
		Hamburger
	},
	methods: {
		categoryClicked(value) {
			if(typeof(value) !== 'string') { value = ''; }
			this.$emit('clicked', value);
		},
		hamburgerClicked: function() {
			this.$emit('hamburger');
		}
	}
}
</script>