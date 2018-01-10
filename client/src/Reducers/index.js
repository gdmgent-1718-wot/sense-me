import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import authReducer from './login/authReducer';
import eventsReducer from './event/eventsReducer';
import eventReducer from './event/eventReducer';

const AppReducers = combineReducers({
    auth: authReducer,
    events: eventsReducer,
    event: eventReducer,
});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

const logger = createLogger();

export default store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));
