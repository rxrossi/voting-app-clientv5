import API from '../api';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const login = (email, password) => async dispatch => {
	const user = await API.auth(email, password)
	localStorage.setItem('user', user);
	dispatch(authSuccess(user));
}

export {
	login
}

const authSuccess = (user) => ({
	type: LOGIN_SUCCESS,
	user
});

const authRequest = () => ({
	type: LOGIN_REQUEST
});

const authFailure = (message) => ({
	type: LOGIN_FAILURE,
	message
});
