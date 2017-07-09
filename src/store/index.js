import { createStore, applyMiddleware } from 'redux';
import { FlushThunks }                  from 'redux-testkit';
import thunk from 'redux-thunk';

import reducer from '../reducer';

export const createTestStore = () => {
	const flushThunks = FlushThunks.createMiddleware();
	const store = createStore(reducer, applyMiddleware(flushThunks, thunk));
	return {
		flushThunks,
		store
	}
}
