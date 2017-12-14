import * as ActionTypes from './ActionTypes';
import { connect } from 'react-redux';
import axios from 'axios';
import EventList from '../Components/EventList/index';

const mapStateToProps = (state) => ({
    isLoading: state.serviceReducer.isLoading,
    error: state.serviceReducer.error,
    data: state.serviceReducer.data
});

const mapDispatchToProps = (dispatch) => ({
    callService: () => dispatch(callWebservice())
})

export const callWebservice = () => {
    return dispatch => {
        dispatch(serviceActionPending())
        axios.get('http://192.168.1.155:3000/api/events')
        .then(response => {
            console.log(response.data);
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

export default connect(mapStateToProps, mapDispatchToProps)(EventList);