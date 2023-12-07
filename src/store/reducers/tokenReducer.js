import {
    SET_TOKEN_REQUEST,
    SET_TOKEN_SUCCESS,
    SET_TOKEN_FAILURE,
} from '../actions/tokenAcitons';

const initialState = {
    searchToken: '',
    isLoading: false,
    error: null,
};

const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN_REQUEST:
            return { ...state, isLoading: true };
        case SET_TOKEN_SUCCESS:
            return { ...state, searchToken: action.payload, isLoading: false };
        case SET_TOKEN_FAILURE:
            return { ...state, error: action.payload, isLoading: false };
        default:
            return state;
    }
};

export default tokenReducer;
