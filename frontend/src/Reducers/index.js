import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import eventsReducer from './event/eventsReducer';
import eventReducer from './event/eventReducer';

const AppReducers = combineReducers({
   events: eventsReducer,
   event: eventReducer

});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

const logger = createLogger();

let store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));

export default store;
