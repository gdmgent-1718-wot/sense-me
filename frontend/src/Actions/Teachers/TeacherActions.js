import axios from 'axios';
import TeacherList from '../../Components/TeacherList/index';
import { Actions } from 'react-native-router-flux'; 
import { connect } from 'react-redux';
import * as ActionTypes from './../ActionTypes';
import { URL } from '../../Config/Index';

const mapStateToProps = (state) => ({
    isLoading: state.teacher.isLoading,
    error: state.teacher.error,
    data: state.teacher.data
});

const mapDispatchToProps = (dispatch) => ({
    fetchTeachers: ()  =>  dispatch(fetchTeachers()),
})

export const teacherPending = () => ({
    type: ActionTypes.TEACHER_PENDING
});

export const teacherError = (error) => ({
    type: ActionTypes.TEACHER_ERROR,
    error: error
});

export const teacherSuccess = (data) => ({
    type: ActionTypes.TEACHER_SUCCESS,
    data: data
});

export const fetchTeachers = () => {
    return dispatch => {
        dispatch(teacherPending()) 
        axios.get('http://192.168.0.107:3000/api/users/teacher')
            .then(response => {
                dispatch(teacherSuccess(response.data))
            })
            .catch(error => {
                dispatch(teacherError(error))
            });
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherList);