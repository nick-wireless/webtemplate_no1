import { mount } from '@vue/test-utils'
import MailForm from '@/components/MailForm.vue'

describe('MailForm', () => {
	it('renders the guestEmail element.', () => {
		const wrapper = mount(MailForm, {})
		expect(wrapper.find('#guestEmail').html()).toBeTruthy()
	})
})

describe('MailForm', () => {
	it('renders the guestPhone element.', () => {
		const wrapper = mount(MailForm, {})
		// console.log(wrapper.html())
		expect(wrapper.find('#guestPhone').html()).toBeTruthy()
	})
})

describe('MailForm', () => {
	it("renders the 'next' button", () => {
		const wrapper = mount(MailForm, {})
		// console.log(wrapper.html())
		expect(wrapper.find('#nextButton').html()).toBeTruthy()
	})
})
