import {
    FETCH_TICKETS_FAILURE,
    FETCH_TICKETS_REQUEST,
    FETCH_TICKETS_SUCCESS,
    SET_RENDER_TICKETS,
    GET_MORE_TICKETS,
} from '../actions/ticketsActions';

const initialState = {
    tickets: [],
    renderTickets: [],
    stacksCount: 1,
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
        case SET_RENDER_TICKETS:
            const tickets = state.tickets.slice(0, state.stacksCount * 5);
            return { ...state, renderTickets: tickets };
        case GET_MORE_TICKETS:
            let currentCount = state.stacksCount;
            return { ...state, stacksCount: ++currentCount };
        default:
            return state;
    }
};

export default ticketsReducer;
