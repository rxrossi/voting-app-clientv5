import config from '../config';
import request from 'superagent';

export const loginRoute = config.API_URL+'/auth';

export default (email, password) => dispatch => {

	return request
		.post(loginRoute)
		.send({email, password})
		.then(res => {
			let { token, user } = res.body;
			user = { ...user, token };
			localStorage.setItem('user', user);
		})
		.catch(err => console.log(err.message))


	// return false;
}
