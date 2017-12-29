import axios from 'axios';
import TeacherList from '../../Components/TeacherList/index';
import { Actions } from 'react-native-router-flux'; 
import { connect } from 'react-redux';
import { TEACHER_PENDING, TEACHER_SUCCESS, TEACHER_ERROR } from './../ActionTypes';
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
    type: TEACHER_PENDING
});

export const teacherError = (error) => ({
    type: TEACHER_ERROR,
    error: error
});

export const teacherSuccess = (data) => ({
    type: TEACHER_SUCCESS,
    data: data
});

export const fetchTeachers = () => {
    console.log( URL + 'users/teacher');
    return dispatch => {
        dispatch(teacherPending()) 
        axios.get( URL + 'users/teacher')
            .then(response => {
                dispatch(teacherSuccess(response.data))
            })
            .catch(error => {
                dispatch(teacherError(error))
            });
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherList);

