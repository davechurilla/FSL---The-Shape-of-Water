<template>
<div v-if="!isHidden" class="hideme">
	<div class="voters-outer">
		<div class="voters-wrapper">
			<div class="voters-inner clearfix">
				<div class="voters-container">
					<div class="voters-top"></div>
					<div class="voters-middle"><a href="http://www.foxsearchlight.com/awards/the-shape-of-water/" target="_blank">FIND A SCREENING</a></div>
					<img class="voters-bottom" src="../assets/fancy-frame.png" alt="fancy-frame">
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'voters',
	data: function() {
		return {
			isHidden: false,
		}
	}
}

</script>