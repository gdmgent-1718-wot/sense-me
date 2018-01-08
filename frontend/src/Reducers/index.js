import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import eventsReducer from './event/eventsReducer';
import eventReducer from './event/eventReducer';
import teacherReducer from './teacher/teacherReducer';
import authReducer from './login/authReducer';

const AppReducers = combineReducers({
    auth: authReducer,
    events: eventsReducer,
    event: eventReducer,
    teacher: teacherReducer,

});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

const logger = createLogger();

export default store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));
