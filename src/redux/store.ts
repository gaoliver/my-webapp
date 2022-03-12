import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { reducer } from './reducer';

export type SiteState = ReturnType<typeof reducer>;

const store = createStore(reducer, applyMiddleware(thunk));

export { store };
