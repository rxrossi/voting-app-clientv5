import React from 'react';
import { mount } from 'enzyme';
import Login from './Login';

const mountComponent = () => {
	const component = mount(<Login />);

	const form = component.find('form');
	const inputs = {
		email: form.find('input[name="email"]'),
		password: form.find('input[name="password"]'),
	};
	const submitBtn = form.find('button[type="submit"]');

	return {
		form,
		inputs,
		submitBtn
	}
}

describe('Login page', () => {
	it('mounts', () => {
		mountComponent();
	})

	describe('Structure', () => {
		const { form, inputs, submitBtn } = mountComponent();

		it('has a form', () => {
			expect(form.length).toBe(1);
		})
		it('has a email input', () => {
			expect(inputs.email.length).toBe(1);
		})
		it('has a password input', () => {
			expect(inputs.password.length).toBe(1);
		})
		it('has a submit button', () => {
			expect(submitBtn.length).toBe(1);
		})
	})

	describe('Behaviour (Integration Test)', () => {
		xit('calls the localStorage with correct token', () => {
			
		})
	})
})
