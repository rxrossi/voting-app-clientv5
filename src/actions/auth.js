import API from '../api';

export const AUTH_SUCCESS = 'AUTH_SUCCESS';

const login = (email, password) => async dispatch => {
	const user = await API.auth(email, password)
	localStorage.setItem('user', user);
	dispatch(authSuccess(user));
}

export {
	login
}

const authSuccess = (user) => ({
	type: AUTH_SUCCESS,
	user
});
