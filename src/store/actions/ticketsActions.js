import axiosApi from '../../axiosApi';
import { TICKETS_COUNT_IN_REQUEST } from '../../constants';

export const FETCH_TICKETS_REQUEST = 'FETCH_TICKETS_REQUEST';
export const FETCH_ALL_TICKETS_REQUEST = 'FETCH_ALL_TICKETS_REQUEST';
export const FETCH_FIRST_TICKETS_SUCCESS = 'FETCH_FIRST_TICKETS_SUCCESS';
export const FETCH_ALL_TICKETS_SUCCESS = 'FETCH_ALL_TICKETS_SUCCESS';
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';
export const FETCH_TICKETS_FAILURE = 'FETCH_TICKETS_FAILURE';

const fetchTicketsRequest = () => ({ type: FETCH_TICKETS_REQUEST });
const fetchAllTicketsRequest = () => ({ type: FETCH_ALL_TICKETS_REQUEST });
const fetchFirstTicketsSuccess = () => ({ type: FETCH_FIRST_TICKETS_SUCCESS });
const fetchAllTicketsSuccess = () => ({ type: FETCH_ALL_TICKETS_SUCCESS });
const fetchTicketsSuccess = tickets => ({
    type: FETCH_TICKETS_SUCCESS,
    payload: tickets,
});

const fetchTicketsFailure = error => ({
    type: FETCH_TICKETS_FAILURE,
    payload: error,
});

export const fetchTickets = () => async (dispatch, getState) => {
    try {
        const state = getState();

        if (state.tickets.tickets.length === 0) {
            dispatch(fetchTicketsRequest());
            dispatch(fetchAllTicketsRequest());
        }

        if (
            state.tickets.tickets.length === TICKETS_COUNT_IN_REQUEST &&
            state.tickets.tickets.length !== 0
        ) {
            dispatch(fetchFirstTicketsSuccess());
        }

        const { data } = await axiosApi.get('tickets');

        dispatch(fetchTicketsSuccess(data.tickets));

        if (!data.stop) {
            await fetchTickets()(dispatch, getState);
        } else {
            dispatch(fetchAllTicketsSuccess());
        }
    } catch (e) {
        if (e.response && e.response.status === 500) {
            await fetchTickets()(dispatch, getState);
        } else if (e.response) {
            dispatch(fetchTicketsFailure(e.response.data));
        }
    }
};

export const INCREASE_STACKS_COUNT = 'INCREASE_STACKS_COUNT';
export const increaseStacksCount = () => ({ type: INCREASE_STACKS_COUNT });

export const GET_MORE_TICKETS = 'GET_MORE_TICKETS';
export const getMoreTickets = () => ({ type: GET_MORE_TICKETS });

export const SORT_TICKETS_BY_FILTER = 'SORT_TICKETS_BY_FILTER';

export const sortTicketsByFilter = filteredTickets => ({
    type: SORT_TICKETS_BY_FILTER,
    payload: filteredTickets,
});
