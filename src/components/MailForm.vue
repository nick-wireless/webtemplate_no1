<template>
	<div id="sending-form" class="md:inline-block my-4 flex justify-around md:flex-none ">
		<div id="address-to-from" class=" ml-4 mr-4 bg-teal-200 h-56 rounded-md relative">
			<div class="absolute inline-block right-0"> <SendingIcon class=" w-12 h-12 p-2"></SendingIcon></div>
			<form action="" class="mt-2">
				<div id="guestEmail" class="flex text-blue-800 font-sans font-display font-semibold">
					<label class="inline-block self-center ml-6 mt-6 w-16">To:</label>
					<div
						class="inline-block self-center mt-6 w-48 font-serif font-headings font-light text-lg italic text-teal-700 "
						>Dear Corporate,</div
					>
				</div>
				<div id="guestEmail" class="flex text-blue-800 font-sans font-display font-semibold">
					<label class="inline-block self-center ml-6 mt-4 w-16" for="guestEmail">From:</label>
					<input
						class="inline-block mt-4 pl-2 mr-3 w-48 h-10 rounded"
						v-model="guestEmail"
						type="email"
						autocomplete="email"
						placeholder="Your email here ..."
					/>
				</div>
				<div id="guestPhone" class="flex align-center text-blue-800 font-sans font-display font-semibold">
					<label class="inline-block self-center ml-6 mt-4 w-16" for="guestPhone">Phone:</label>
					<input
						class="inline-block mt-4 pl-2 w-48 h-10 rounded"
						v-model="guestPhone"
						type="number"
						autocomplete="tel"
						placeholder="Your phone here ..."
					/>
				</div>
				<div class="flex items-center justify-end">
					<div class="inline-block h-12 p-3 font-display text-purple-500 ">
						Next
					</div>
					<NextIcon class="inline-block w-8 h-8 primary pt-3"></NextIcon>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import SendingIcon from '~/assets/svgs/Sending.vue'
import NextIcon from '~/assets/svgs/Next.vue'

export default {
	components: { SendingIcon, NextIcon },
	data() {
		return {
			guestEmail: '',
			guestPhone: ''
			// guestPhone: Number
		}
	}
}
</script>

<style>
.primary {
	@apply fill-current text-gray-600;
}
</style>
