import * as ActionTypes from './../ActionTypes';
import { connect } from 'react-redux';
import axios from 'axios';
import EventList from '../../Components/EventList/index';
import { Actions } from 'react-native-router-flux'; 
import { URL } from '../../Config/Index';

const mapStateToProps = (state) => ({
    isLoading: state.events.isLoading,
    error: state.events.error,
    data: state.events.data
});

const mapDispatchToProps = (dispatch) => ({
    callEvents: ()  =>  dispatch(callEvents()),
    select: (event) =>  dispatch(selectEvent(event)),
    fetch: (event)  =>  dispatch(fetchEventDetail(event)),
})


export const eventsPending = () => ({
    type: ActionTypes.EVENTS_PENDING
});

export const eventsError = (error) => ({
    type: ActionTypes.EVENTS_ERROR,
    error: error
});

export const eventsSuccess = (data) => ({
    type: ActionTypes.EVENTS_SUCCESS,
    data: data
});

export const selectEvent = (event) => ({
        type: ActionTypes.SELECT_EVENT,
        event
});

export const requestEvent = (event) => ({
        type: ActionTypes.REQUEST_EVENT,
        event
});

export const receiveEvent = (response) => ({
        type: ActionTypes.RECEIVE_EVENT,
        data: response,
});
export const callEvents = () => {
    return dispatch => {
        dispatch(eventsPending()) 
        axios.get( URL + 'events')
            .then(response => {
                dispatch(eventsSuccess(response.data))
            })
            .catch(error => {
                dispatch(eventsError(error))
            });
    }
}

export const fetchEventDetail = (event) => {
    return function (dispatch) {
      dispatch(requestEvent(event))
      return axios.get(`${URL}events/${event}`)
        .then(
            response => { 
                dispatch(receiveEvent(response.data)), 
                Actions.event(response.data) 
            },
            error => console.log('An error occurred.', error)
        )
    }
  }

  
export default connect(mapStateToProps, mapDispatchToProps)(EventList);