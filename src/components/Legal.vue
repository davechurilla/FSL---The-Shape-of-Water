<template>
	<div class="legal" :class="{'open': footerOpen}">
		<div class="footer-trigger" v-on:click="triggerFooterExpand"></div>
		<div class="footer-content">
			<p class="copyright">
			&trade; AND &copy; TWENTIETH CENTURY FOX FILM CORPORATION. ALL RIGHTS RESERVED. PROPERTY OF FOX.
			</p>
			<ul class="footer-menu">
				<li>
					<a href="https://www.foxprivacy.com/us/terms_whatsnew.html" target="_blank">NEW TERMS AND CONDITIONS (WHAT’S CHANGED?)</a>
				</li>
				<li>
					<a href="https://www.foxprivacy.com/us/privacy.html" target="_blank">NEW PRIVACY POLICY</a>
				</li>
				<li>
					<a href="https://www.foxprivacy.com/us/privacy.html#section2" target="_blank">AD CHOICES</a>
				</li>
			</ul>
		</div>
		<!-- <p>
			&trade; AND &copy; TWENTIETH CENTURY FOX FILM CORPORATION.<br />
			ALL RIGHTS RESERVED. PROPERTY OF FOX.
		</p>
		<p>
			<a href="https://www.foxprivacy.com/us/terms_whatsnew.html" target="_blank">NEW TERMS AND CONDITIONS (WHAT’S CHANGED?)</a><br />
			<a href="https://www.foxprivacy.com/us/privacy.html" target="_blank">NEW PRIVACY POLICY</a><br />
			<a href="https://www.foxprivacy.com/us/privacy.html#section2" target="_blank">AD CHOICES</a>
		</p> -->
	</div>
</template>

<script>
	export default {
		name: 'legal',
		data: function() {
			return {
				footerOpen: false
			}
		},
		methods: {
			triggerFooterExpand: function() {
				this.footerOpen = !this.footerOpen;
			}
		},
		mounted() {
		}
	}
</script>