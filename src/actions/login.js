import API from '../api';

export default (email, password) => async dispatch => {

	const user = await API.auth(email, password)
	localStorage.setItem('user', user);

	dispatch({
		type: 'LOGIN_USER_RECEIVED',
		user
	})
}

