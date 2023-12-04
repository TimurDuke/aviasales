import axiosApi from '../../axiosApi';

export const FETCH_TICKETS_REQUEST = 'FETCH_TICKETS_REQUEST';
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';
export const FETCH_TICKETS_FAILURE = 'FETCH_TICKETS_FAILURE';

const fetchTicketsRequest = () => ({ type: FETCH_TICKETS_REQUEST });
const fetchTicketsSuccess = tickets => ({
    type: FETCH_TICKETS_SUCCESS,
    payload: tickets,
});
const fetchTicketsFailure = error => ({
    type: FETCH_TICKETS_FAILURE,
    payload: error,
});

export const fetchTickets = () => async dispatch => {
    try {
        dispatch(fetchTicketsRequest());

        const { data } = await axiosApi.get('tickets');

        if (data) {
            dispatch(fetchTicketsSuccess(data.tickets));
        }
    } catch (e) {
        if (e.response) {
            dispatch(fetchTicketsFailure(e.response.data));
        }
    }
};
