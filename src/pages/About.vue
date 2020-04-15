<template>
	<Layout>
		<div id="background-cover" class="flex w-screen max-w-md ">
			<g-image
				class="absolute h-screen min-w-screen object-cover z-10 "
				src="~/assets/images/people.jpg"
			></g-image>
			<div class="absolute min-h-screen min-w-full bg-teal-900 opacity-75 text-white z-20"></div>
		</div>
		<div class="h-56 relative"></div>
		<div>
			<h2
				class=" inline-block relative z-30 mt-8 px-8 md:px-16 w-screen font-sans font-display text-white font-bold text-3xl tracking-wider text-left"
			>
				{{ heading1 }}
			</h2>
			<h3
				class=" inline-block relative z-30 mt-8 px-8 md:px-16 w-screen font-sans font-display text-white font-semibold text-2xl tracking-wide text-left leading-loose"
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
		title: 'About, people, biography, team.'
	},
	data() {
		return {
			imagePath: '~/assets/images/people.jpg',
			heading1: 'Our Business Is People',
			subHeading: 'Assisting people, nurturing tallent and growing a prosporous future for the next generation.'
		}
	}
}
</script>

<style></style>
