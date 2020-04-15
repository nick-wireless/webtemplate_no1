<template>
	<Layout>
		<div id="background-cover" class="flex w-screen max-w-md ">
			<g-image class="absolute h-screen min-w-screen object-cover z-10 " src="~/assets/images/home.jpg"></g-image>
			<div class="absolute min-h-screen min-w-full bg-teal-900 opacity-75 text-white z-20"></div>
		</div>
		<div class="h-56 relative"></div>
		<div>
			<div
				class=" inline-block relative z-30 mt-8 px-8 md:px-16 w-screen font-sans font-display text-white font-bold text-3xl tracking-wider text-right"
			>
				{{ heading1 }}
			</div>
			<h3
				class=" inline-block relative z-30 mt-8 px-8 md:px-16 w-screen font-sans font-display text-white font-semibold text-2xl tracking-wide text-right leading-loose"
			>
				{{ subHeading }}
			</h3>
		</div>
	</Layout>
</template>

<static-query>
  query {
    metadata {
      siteDescription
    }
  }
</static-query>

<script>
export default {
	metaInfo: {
		title: 'Home'
	},
	data() {
		return {
			imagePath: '~/assets/images/home.jpg',
			heading1: 'Our Mission Is Great',
			subHeading: 'Let us tell you why. It begins with a great website.'
		}
	}
}
</script>

<style></style>
