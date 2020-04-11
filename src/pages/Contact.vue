<template>
	<Layout>
		<div id="background-cover">
			<g-image
				class="absolute min-h-screen min-w-screen object-cover z-10"
				src="~/assets/images/contact.jpg"
			></g-image>
			<div class="absolute bg-teal-900 opacity-75 min-h-screen min-w-full text-white z-20"></div>
		</div>
		<div class="h-56 relative"></div>

		<div
			id="corporate-address"
			class="inline-block relative z-30 font-sans font-display font-normal text-white text-lg leading-relaxed text-right px-12 mt-8 w-screen "
		>
			<div>Corporate Name Pty Ltd</div>
			<div>+61 8 8981 5555</div>
			<div>GPO Box 1000</div>
			<div>Darwin, Northern Territory</div>
			<div>ABN: 12 345 6789</div>
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
			imagePath: '~/assets/images/home.jpg'
		}
	}
}
</script>

<style></style>
