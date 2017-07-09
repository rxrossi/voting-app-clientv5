import { LOGIN_SUCCESS } from '../actions/auth';

export default (state = {}, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				...action.user
			};
		default:
			return state;
	}
}
