import { mount } from '@vue/test-utils'
import MailForm from '@/components/MailForm.vue'

// Test 1 (guestPhone): it should be a number only.
describe('MailForm', () => {
	it('catches texts as an error, when text entered', () => {
		const testPhone = '483xu' // failing, so not valid
		// console.log(MailForm.computed.phoneIsValid.call(testPhone))
		expect(MailForm.computed.phoneIsValid.call(testPhone)).toBeFalsy()
	})
})

// Test 2 (guestPhone): it should have 7 or more characters.
// Test 3 (guestEmail): it should have two parts either side of the '@' sign.
// Test 4 (guestEmail): part 2, it should include a '.'