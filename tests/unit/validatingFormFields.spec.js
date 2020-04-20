import { mount } from '@vue/test-utils'
import MailForm from '@/components/MailForm.vue'

// Test 1 (guestPhone): has a minimum of 7 characters long.
describe('MailForm', () => {
	it('the user name is more than 2 characters long', () => {
		const wrapper = mount(MailForm, {

        })
		expect(wrapper.find('#guestEmail').html()).toBeTruthy()
	})
})

// Test 2 (guestPhone): it only contains valid characters, no letters or symbols.

// Test 3 (guestEmail): it should have two parts either side of the '@' sign.

// Notes:
//  Use: a values array, then split around @ with element 0 and element 1 referenced.
//  Consider: start and end for those element names.


// Test 4 (guestEmail): part 2, it should include a '.'



