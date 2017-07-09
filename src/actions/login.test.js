import nock  from 'nock';

import login   from './login.js';
import config  from '../config';

import { createTestStore } from '../store';

window.localStorage = {
	setItem: jest.fn(),
};

const user = {
	email: "jhon@mail.com",
	password: "123",
	token: 'atok3n'
}

describe('Login action ', () => {
	beforeEach(() => {
		nock(config.API_URL)
			.post('/auth', {email: user.email, password: user.password})
			.reply(200, {user, token: user.token})

		jest.clearAllMocks();
	})

	describe('With Store', () => {

		const { store, flushThunks } = createTestStore();

		beforeEach( async () => {
			store.dispatch(login(user.email, user.password));
			await flushThunks.flush();
		})

		it('calls the localStorage.setItem with a token', () => {
			//user should have user.token
			expect(localStorage.setItem).toHaveBeenCalledWith('user', user);
		})

		it('stores the user on redux store', () => {
			expect(store.getState()).toEqual({
				user
			})
		})
	})
})
