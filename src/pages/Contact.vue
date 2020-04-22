<template>
	<Layout>
		<div id="background-cover" class="flex w-screen max-w-md ">
			<g-image class="absolute h-screen min-w-screen object-cover z-10 " src="~/assets/images/home.jpg"></g-image>
			<div class="absolute min-h-screen min-w-full bg-teal-900 opacity-75 text-white z-20"></div>
		</div>
		<div class="h-56 relative"></div>
		<section class=" flex flex-col md:flex-row md:justify-center">
			<!-- Form to collect email & phone number. -->
			<MailForm class="relative z-30"></MailForm>
			<div
				id="corporate-address"
				class="inline-block relative z-30 px-10 mt-4 font-sans font-display font-normal text-white text-lg leading-relaxed text-right  "
			>
				<div>Corporate Name Pty Ltd</div>
				<div>+61 8 8981 5555</div>
				<div>GPO Box 1000</div>
				<div>Darwin, Northern Territory</div>
				<div>ABN: 12 345 6789</div>
			</div>
		</section>
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
import MailForm from '~/components/MailForm.vue'

export default {
	metaInfo: {
		title: 'Home'
	},
	components: { MailForm },
	data() {
		return {
			imagePath: '~/assets/images/home.jpg'
		}
	}
}
</script>

<style></style>
