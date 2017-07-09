import { createStore, combineReducers } from 'redux';
import nock from 'nock';
import login from './login.js';
import config from '../config';

const userReducer = (state = {}, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

const reducer = combineReducers({
	user: userReducer
})

window.localStorage = {
	setItem: jest.fn(),
};

const user = {
	email: "alex@email.com",
	password: "123",
	token: 'atok3n'
}

const store = createStore(reducer);

describe('login action', () => {

	nock(config.API_URL)
		.post('/auth', {email: user.email, password: user.password})
		.reply(200, {user, token: user.token})

	beforeEach( async () => {
		jest.clearAllMocks();
		await login(user.email, user.password);
	})

	it('calls the localStorage.setItem with a token', () => {
		//user should have user.token
		expect(localStorage.setItem).toHaveBeenCalledWith('user', user);
	})

	it('stores the user on redux store', () => {
		expect(store.getState()).toBe({
			user
		})
	})
})
