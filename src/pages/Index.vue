<template>
	<Layout>
		<div id="background-cover">
			<g-image
				class="absolute min-h-screen min-w-screen object-cover z-10"
				src="~/assets/images/home.jpg"
			></g-image>
			<div class="absolute bg-teal-900 opacity-75 min-h-screen min-w-full text-white z-20"></div>
		</div>
		<div class="h-56 relative"></div>
		<div>
			<h2
				class=" inline-block relative z-30 mt-8 px-8 w-screen font-sans font-display text-white font-bold text-3xl tracking-wider text-right"
			>
				{{ heading1 }}
			</h2>
			<h3
				class=" inline-block relative z-30 mt-8 px-8 w-screen font-sans font-display text-white font-semibold text-2xl  text-right leading-loose"
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
			heading1: 'Our Mission Is Great',
			subHeading: 'Let us tell you why. It begins with a great website.'
		}
	}
}
</script>

<style></style>
