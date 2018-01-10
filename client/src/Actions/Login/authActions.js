import * as ActionTypes from '../ActionTypes';
import axios from 'axios';
import LoginService from '../../Components/Login/index';

import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({   
    isLoading: state.auth.isLoading,
    error: state.auth.error,
    token: state.auth.token
});

const mapDispatchToProps = (dispatch) => ({
    login: (credentials) => dispatch(login(credentials))
})

export const login =(credentials) => { 
    return dispatch => {
        dispatch(loginPending());
        axios.post(
            'http://192.168.0.109:3000/api/login', 
            credentials, 
            { headers: {'Content-Type': 'application/json'}}
        ) 
        .then(
            response => { 
                if(response.data != 'Invalid password'){
                    dispatch(loginSuccess(response.data)),
                    this.saveCredentials(credentials.email, credentials.password, response.data.token, response.data.user).then(Actions.sense()); 
                }
            })
        .catch(error => {
            console.log("ERROR: ", error.response.data.message);
            dispatch(loginError(error.response.data.message))
        });
    }
}
saveCredentials = (email, password, token, user_id) => {
        let user = {
            usern: email, 
            password: password, 
            token: token, 
            user_id: user_id
        } 
        return AsyncStorage.setItem('user', JSON.stringify(user)); 
}

export const loginPending = () => ({
    type: ActionTypes.LOGGING_IN
})

export const loginSuccess = (data) => ({
    type: ActionTypes.LOGIN_SUCCESS,
    data: data
})

export const loginError = (error) => ({
    type: ActionTypes.LOGIN_ERROR,
    error: error
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginService);