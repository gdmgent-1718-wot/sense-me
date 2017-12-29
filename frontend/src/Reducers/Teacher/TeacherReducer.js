import * as Actions from '../../Actions/ActionTypes'

const teacherReducer = (state = { isLoading: false, error: undefined, data: {} }, action) => {
    switch (action.type) {
        case Actions.TEACHER_PENDING:
            return Object.assign({}, 
                state, {
                isLoading: true,
            });
        case Actions.TEACHER_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.TEACHER_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.data
            }); 
        default:
            return state;
    }
}

export default teacherReducer;