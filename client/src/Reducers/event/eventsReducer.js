import * as Actions from '../../Actions/ActionTypes';


const eventsReducer = (state = { isLoading: false, error: undefined, data: {} }, action) => {
    switch (action.type) {
        case Actions.EVENTS_PENDING:
            return Object.assign({}, 
                state, {
                isLoading: true,
            });
        case Actions.EVENTS_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.EVENTS_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.data
            }); 
        default:
            return state;
    }
}

export default eventsReducer;