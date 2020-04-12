<template>
	<div id="sending-form">
		<div id="address-to-from">
			<form action="">
				<label for="guestEmail">From:</label>
				<input v-model="guestEmail" type="email" autocomplete="email" placeholder="Enter your email here ..." />
				<label for="guestPhone">Phone:</label>
				<input
					v-model="guestPhone"
					type="number"
					autocomplete="tel"
					placeholder="Enter your phone no. here ..."
				/>
			</form>
		</div>
		<div id="written-message"> </div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			guestEmail: '',
			guestPhone: Number
		}
	}
}
</script>

<style></style>
