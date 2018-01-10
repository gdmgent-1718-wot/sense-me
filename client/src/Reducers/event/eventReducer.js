import * as Actions from '../../Actions/ActionTypes';
import { combineReducers } from 'redux';

function selectedEvent(state = 'event', action) {
    switch (action.type) {
      case Actions.SELECT_EVENT:
        return action.event
      default:
        return state
    }
}

function event(
    state = {isFetching: false, error: false,event: {}}, action ) {
    switch (action.type) {
      case Actions.REQUEST_EVENT:
        return Object.assign({}, state, {
          isFetching: true,
          error: false,
        })
      case Actions.RECEIVE_EVENT:
        return Object.assign({}, state, {
          isFetching: false,
          error: false,
          event: action.data,
        })
        case Actions.SERVICE_RESET:
        return Object.assign({}, state, {
          isFetching: false,
          error: false,
          event: {}
        })
      default:
        return state
    }
}
   
const eventReducer = combineReducers({
    event: event,
    selected: selectedEvent
})
  
  export default eventReducer