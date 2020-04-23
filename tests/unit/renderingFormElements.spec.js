import { mount } from '@vue/test-utils'
import MailForm from '@/components/MailForm.vue'

// Test 1 (guestEmail): field is rendered.
describe('MailForm', () => {
	it('renders the guestEmail element.', () => {
		const wrapper = mount(MailForm, {})
		expect(wrapper.find('#guestEmail').html()).toBeTruthy()
	})
})

// Test 2 (guestPhone): field is rendered.
describe('MailForm', () => {
	it('renders the guestPhone element.', () => {
		const wrapper = mount(MailForm, {})
		// console.log(wrapper.html())
		expect(wrapper.find('#guestPhone').html()).toBeTruthy()
	})
})

// Test 3: a button should be rendered.
describe('MailForm', () => {
	it("renders the 'next' button", () => {
		const wrapper = mount(MailForm, {})
		// console.log(wrapper.html())
		expect(wrapper.find('#nextButton').html()).toBeTruthy()
	})
})

// Test 4: after clicking button, a new modal should fill the screen.
// Test 5: if you click outside the modal, the screen should minimise but the values remain in memory.
// Test 6: another 'send' button should start an action (in this case console.log - later Netlify Form).
// Test 7: when in error state, the field should retain focus & shake & have error styling.


// Test 1 (guestPhone): has a minimum of 7 characters long.
// Test 2 (guestPhone): it only contains valid characters, no letters or symbols.
// Test 3 (guestEmail): it should have two parts either side of the '@' sign.
// Test 4 (guestEmail): part 2, it should include a '.'