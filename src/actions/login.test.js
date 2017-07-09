import thunk from 'redux-thunk';
import nock  from 'nock';

import { createStore, applyMiddleware } from 'redux';
import { FlushThunks }                  from 'redux-testkit';

import login   from './login.js';
import config  from '../config';
import reducer from '../reducer';

const flushThunks = FlushThunks.createMiddleware();

window.localStorage = {
	setItem: jest.fn(),
};

const user = {
	email: "jhon@mail.com",
	password: "123",
	token: 'atok3n'
}

const store = createStore(reducer, applyMiddleware(flushThunks, thunk));

describe('Login action ', () => {
	describe('With Store', () => {
		beforeEach( async () => {
			nock(config.API_URL)
				.post('/auth', {email: user.email, password: user.password})
				.reply(200, {user, token: user.token})

			jest.clearAllMocks();
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
