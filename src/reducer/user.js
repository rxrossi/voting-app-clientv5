export default (state = {}, action) => {
	switch (action.type) {
		case 'LOGIN_USER_RECEIVED':
			return {
				...state,
				...action.user
			};
		default:
			return state;
	}
}
