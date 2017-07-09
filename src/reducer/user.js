import { AUTH_SUCCESS } from '../actions/auth';

export default (state = {}, action) => {
	switch (action.type) {
		case AUTH_SUCCESS:
			return {
				...state,
				...action.user
			};
		default:
			return state;
	}
}
