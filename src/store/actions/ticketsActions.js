import axiosApi from '../../axiosApi';
import { TICKETS_COUNT_IN_REQUEST } from '../../constants';

export const FETCH_TICKETS_REQUEST = 'FETCH_TICKETS_REQUEST';
export const FETCH_FIRST_TICKETS_SUCCESS = 'FETCH_FIRST_TICKETS_SUCCESS';
export const FETCH_ALL_TICKETS_SUCCESS = 'FETCH_ALL_TICKETS_SUCCESS';
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';
export const FETCH_TICKETS_FAILURE = 'FETCH_TICKETS_FAILURE';

const fetchTicketsRequest = () => ({ type: FETCH_TICKETS_REQUEST });
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
            dispatch(
                fetchTicketsFailure({
                    status: e.response.status,
                    message: e.message,
                })
            );
        } else {
            dispatch(fetchTicketsFailure({ message: 'Что-то пошло не так' }));
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

export const SORT_TICKETS_BY_PRICE = 'SORT_TICKETS_BY_PRICE';
export const SORT_TICKETS_BY_DURATION = 'SORT_TICKETS_BY_DURATION';
export const SORT_TICKETS_BY_OPTIMAL = 'SORT_TICKETS_BY_OPTIMAL';

export const sortTicketsByPrice = tickets => ({
    type: SORT_TICKETS_BY_PRICE,
    payload: tickets,
});

export const sortTicketsByDuration = tickets => ({
    type: SORT_TICKETS_BY_DURATION,
    payload: tickets,
});

export const sortTicketsByOptimal = tickets => ({
    type: SORT_TICKETS_BY_OPTIMAL,
    payload: tickets,
});
