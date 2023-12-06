import {
    FETCH_ALL_TICKETS_REQUEST,
    FETCH_ALL_TICKETS_SUCCESS,
    FETCH_FIRST_TICKETS_SUCCESS,
    FETCH_TICKETS_FAILURE,
    FETCH_TICKETS_REQUEST,
    FETCH_TICKETS_SUCCESS,
    GET_MORE_TICKETS,
    INCREASE_STACKS_COUNT,
    SORT_TICKETS_BY_FILTER,
} from '../actions/ticketsActions';

const initialState = {
    tickets: [],
    filteredTickets: [],
    renderTickets: [],
    stacksCount: 1,
    isLoading: false,
    isAllLoading: false,
    error: '',
};

const ticketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TICKETS_REQUEST:
            return { ...state, isLoading: true };

        case FETCH_ALL_TICKETS_REQUEST:
            return { ...state, isAllLoading: true };

        case FETCH_FIRST_TICKETS_SUCCESS:
            return { ...state, isLoading: false };

        case FETCH_ALL_TICKETS_SUCCESS:
            return { ...state, isAllLoading: false };

        case FETCH_TICKETS_SUCCESS:
            return { ...state, tickets: [...state.tickets, ...action.payload] };

        case FETCH_TICKETS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
                isAllLoading: false,
            };

        case GET_MORE_TICKETS:
            let tickets;

            if (state.filteredTickets.length !== 0) {
                tickets = [...state.filteredTickets];
            } else {
                tickets = [...state.tickets];
            }

            const renderTickets = tickets.slice(0, state.stacksCount * 5);
            return { ...state, renderTickets };

        case INCREASE_STACKS_COUNT:
            let currentCount = state.stacksCount;
            return { ...state, stacksCount: ++currentCount };

        case SORT_TICKETS_BY_FILTER:
            const filteredRenderTickets = action.payload.slice(0, 5);
            return {
                ...state,
                filteredTickets: action.payload,
                renderTickets: filteredRenderTickets,
                stacksCount: 1,
            };
        default:
            return state;
    }
};

export default ticketsReducer;
