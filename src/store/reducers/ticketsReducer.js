import {
    FETCH_TICKETS_FAILURE,
    FETCH_TICKETS_REQUEST,
    FETCH_TICKETS_SUCCESS,
} from '../actions/ticketsActions';

const initialState = {
    tickets: [],
    isLoading: false,
    error: '',
};

const ticketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TICKETS_REQUEST:
            return { ...state, isLoading: true };
        case FETCH_TICKETS_SUCCESS:
            return { ...state, tickets: action.payload, isLoading: false };
        case FETCH_TICKETS_FAILURE:
            return { ...state, error: action.payload, isLoading: false };
        default:
            return state;
    }
};

export default ticketsReducer;
