import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import authReducer from './auth';
import eventsReducer from './event/eventsReducer';
import eventReducer from './event/eventReducer';
import teacherReducer from './Teacher/TeacherReducer';

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

let store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));

export default store;
