import * as ActionTypes from './ActionTypes';
import { connect } from 'react-redux';
import axios from 'axios';
import EventList from '../Components/EventList/index';
import { Actions } from 'react-native-router-flux'; 
import { URL } from '../Config/Constants';
const mapStateToProps = (state) => ({
    isLoading: state.events.isLoading,
    error: state.events.error,
    data: state.events.data
});

const mapDispatchToProps = (dispatch) => ({
    callService: () => dispatch(callWebservice()),
    select: (event) => dispatch(selectEvent(event)),
    fetch: (event) => { dispatch(fetchEventDetail(event)) },
})

export const callWebservice = () => {
    return dispatch => {
        dispatch(serviceActionPending()) 
        axios.get( URL + 'events')
        .then(response => {
            dispatch(serviceActionSuccess(response.data))
        })
        .catch(error => {
            dispatch(serviceActionError(error))
        });
    }
}

export const serviceActionPending = () => ({
    type: ActionTypes.SERVICE_PENDING
})

export const serviceActionError = (error) => ({
    type: ActionTypes.SERVICE_ERROR,
    error: error
})

export const serviceActionSuccess = (data) => ({
    type: ActionTypes.SERVICE_SUCCESS,
    data: data
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
      event
    }
  }
  
function receiveEvent(response) {
    return {
      type: ActionTypes.RECEIVE_EVENT,
      data: response,
    }
  }
export function fetchEventDetail(event) {
    return function (dispatch) {
      dispatch(requestEvent(event))
      return axios.get(`${URL}events/${event}`)
        .then(
            response => { console.log('EVENT', response.data), dispatch(receiveEvent(response.data)), Actions.event(response.data) },
            error => console.log('An error occurred.', error)
        )
    }
  }

  
export default connect(mapStateToProps, mapDispatchToProps)(EventList);