import config from '../config';
import request from 'superagent';

export const loginRoute = config.API_URL+'/auth';

const auth = async (email, password) => {
	return request
		.post(loginRoute)
		.send({email, password})
		.then(res => {
			let { token, user } = res.body;
			user = { ...user, token };
			return user;
		})
		.catch(err => console.log(err.message))
};

//TODO:
// Plan to padronize awnsers with {err, res}, on success err should be undefined
export default {
	auth
}
