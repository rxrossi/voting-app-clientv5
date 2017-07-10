import request from 'superagent';

import config from '../config';

import auth from './auth';

export const loginRoute = config.API_URL+'/auth';


//TODO:
// Plan to padronize awnsers with {err, res}, on success err should be undefined
export default {
	auth
}
