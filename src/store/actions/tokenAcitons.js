import axiosApi from '../../axiosApi';

export const SET_TOKEN_REQUEST = 'SET_TOKEN_REQUEST';
export const SET_TOKEN_SUCCESS = 'SET_TOKEN_SUCCESS';
export const SET_TOKEN_FAILURE = 'SET_TOKEN_FAILURE';

const setTokenRequest = () => ({ type: SET_TOKEN_REQUEST });
const setTokenSuccess = token => ({ type: SET_TOKEN_SUCCESS, payload: token });
const setTokenFailure = error => ({ type: SET_TOKEN_FAILURE, payload: error });

export const fetchToken = () => async dispatch => {
    try {
        dispatch(setTokenRequest());

        const { data } = await axiosApi.get('search');

        if (data) {
            dispatch(setTokenSuccess(data.searchId));
        }
    } catch (e) {
        if (e.response) {
            dispatch(
                setTokenFailure({
                    status: e.response.status,
                    message: e.message,
                })
            );
        } else if (e.message) {
            dispatch(setTokenFailure({ message: e.message }));
        } else {
            dispatch(setTokenFailure({ message: 'Что-то пошло не так' }));
        }
    }
};
