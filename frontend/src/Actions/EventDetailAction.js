import * as ActionTypes from './ActionTypes';
import axios from 'axios';
import Event from '../Screens/Event';
import { Actions } from 'react-native-navigation-flux';
import { connect } from 'react-redux';
 
const mapStateToProps = (state) => ({
  isLoading: state.event.isLoading,
  error: state.event.error,
  data: state.event.data
});

  const mapDispatchToProps = (dispatch) => ({
    fetchEvent: (event) => { dispatch(fetchEventDetail(event)) },
	  reset: () => { dispatch(resetState()) },
  })

export function selectEvent(event) {
  return {
    type: ActionTypes.SELECT_EVENT,
    event
  }
}

function requestEvent(event) {
  return {
    type: ActionTypes.REQUEST_EVENT,
  }
}

function receiveEvent(response) {
  return {
    type: ActionTypes.RECEIVE_EVENT,
    data: response,
  }
}
export function resetState() {
  return {
    type: ActionTypes.SERVICE_RESET,
  }
}
export function fetchEventDetail(event) {
  return function (dispatch) {
    dispatch(requestEvent(event))
    return axios.get(`http://192.168.20.51:3000/api/events/${event}`)
      .then(
        response => { dispatch(receiveEvent(response.data)), Actions.Event(response.data) },
        error => console.log('An error occurred.', error)
      )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Event);