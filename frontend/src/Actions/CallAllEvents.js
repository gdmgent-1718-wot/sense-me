import * as ActionTypes from './ActionTypes';
import { connect } from 'react-redux';
import axios from 'axios';
import EventList from '../Components/EventList/index';
import { Actions } from 'react-native-router-flux'; 

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
        axios.get('http://192.168.1.155:3000/api/events')
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
      return axios.get(`http://192.168.1.155:3000/api/events/${event}`)
        .then(
          response => dispatch(receiveEvent(response.data)),
          error => console.log('An error occurred.', error)
        )
        .then(Actions.event())
    }
  }

  
export default connect(mapStateToProps, mapDispatchToProps)(EventList);