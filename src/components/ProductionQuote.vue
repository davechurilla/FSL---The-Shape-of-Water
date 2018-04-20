<template>
	<section class="production-quote hideme">
		<div class="item">
			<div class="quote top"><img src="../assets/icon-quote-top.png" alt="quote"></div>
			<div>
				<p style="text-align: center">{{prodQuote.text}}</p>
			</div>
			<div class="quote bottom"><img src="../assets/icon-quote-bottom.png" alt="quote"></div>
			<div class="byline">{{prodQuote.author}}</div>
		</div>
	</section>
</template>


<script>
	export default {
		name:'production-quote',
		props: {
			prodQuote: {
				required: false,
				type: Object
			}
		},
		data: function() {
			return {}
		},
		methods: {
		},
		mounted: function() {
		}
	}
</script>