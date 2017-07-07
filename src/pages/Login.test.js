import React from 'react';
import { mount } from 'enzyme';
import Login from './Login';

const user = {
	email: "user@mail.com",
	password: "123",
};

const onSubmit = jest.fn();

const changeInputValue = (input, value) => {
	input.node.value = value;
	input.simulate('change');
};

beforeEach(() => {
	jest.clearAllMocks();
})

const mountComponent = () => {
	const component = mount(<Login onSubmit={onSubmit}/>);

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

	describe('Behaviour', () => {
		const { form, inputs } = mountComponent();

		beforeEach( async () => {
			changeInputValue(inputs.email, user.email);
			changeInputValue(inputs.password, user.password);
		})

		it('calls the onSubmit with correct values', () => {
			form.simulate('submit');
			expect(onSubmit).toHaveBeenCalledTimes(1);
			expect(onSubmit).toHaveBeenCalledWith(user.email, user.password);
		})
	})
})
