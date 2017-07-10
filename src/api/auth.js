import config from '../config';
import request from 'superagent';

export const loginRoute = config.API_URL+'/auth';

export default (email, password) => {
	if (!email || !password ) {
		return {
			err: 'expected email and password as arguments (email, password)'
		}
	}
	return request
		.post(loginRoute)
		.send({email, password})
		.then(res => {
			let { token, user } = res.body;
			user = { ...user, token };
			// console.log(res.body)
			return {
				err: false,
				user
			};
		})
		.catch(err => {
			// console.log(err)
			if (err.status) return {err: err.status}
			return { err: err.code };
		})

}
