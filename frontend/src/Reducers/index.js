import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import serviceReducer from './serviceReducer';
import eventReducer from './eventReducer';
import routeReducer from './routes';

const AppReducers = combineReducers({
   router: routeReducer,
   events: serviceReducer,
   event: eventReducer

});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

const logger = createLogger();

let store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));

export default store;
