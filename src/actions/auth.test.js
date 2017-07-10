import nock  from 'nock';

import { login } from './auth.js';
import config    from '../config';

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

	afterAll(() => {
		nock.cleanAll();
	})

	//TODO:
	// - add with store on failure
	// -- due incorrect credentials (check error code on server)
	// -- another error (a server error)
	// - add tests for states to check dispatch of requests, successes and failures

	describe('With store on success', () => {

		const { store, flushThunks } = createTestStore();

		beforeEach( async () => {
			store.dispatch(login(user.email, user.password));
			await flushThunks.flush();
		})

		it('calls the localStorage.setItem with user object', () => {
			//user should have user.token
			expect(localStorage.setItem).toHaveBeenCalledWith('user', user);
		})

		it('stores the user on redux store', () => {
			expect(store.getState()).toEqual(
				{ user }
			)
		})
	})
})
