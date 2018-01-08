import axios from 'axios';
import EventList from '../../Components/EventList/index';
import { Actions } from 'react-native-router-flux'; 
import { connect } from 'react-redux';
import * as ActionTypes from './../ActionTypes';


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

/*** ALL EVENTS ***/


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

export const callEvents = () => {
    return dispatch => {
        dispatch(eventsPending()) 
        axios.get('http://192.168.0.107:3000/api/events')
            .then(response => {
                dispatch(eventsSuccess(response.data))
            })
            .catch(error => {
                dispatch(eventsError(error))
            });
    }
}

/*** EVENT DETAIL ***/

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

export const fetchEventDetail = (event) => {
    return function (dispatch) {
      dispatch(requestEvent(event))
      return axios.get(`http://192.168.0.107:3000/api/events/${event}`)
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