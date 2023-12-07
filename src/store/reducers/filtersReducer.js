import {
    RESET_FILTER_BY_BUTTON,
    TOGGLE_ALL_FILTERS,
    TOGGLE_FILTER,
    TOGGLE_FILTER_BY_BUTTON,
    FILTERED_ONCE,
} from '../actions/filtersActions';

const initialState = {
    filters: {
        all: false,
        noStops: false,
        oneStop: false,
        twoStops: false,
        threeStops: false,
    },
    filtersByButton: {
        cheapest: false,
        fastest: false,
        optimal: false,
    },
    isFilterSelectedOnes: false,
};
const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ALL_FILTERS:
            const areAllEnabled = !state.filters.all;

            return {
                ...state,
                filters: {
                    all: areAllEnabled,
                    noStops: areAllEnabled,
                    oneStop: areAllEnabled,
                    twoStops: areAllEnabled,
                    threeStops: areAllEnabled,
                },
            };

        case TOGGLE_FILTER:
            const filterName = action.payload;

            const newFilters = {
                ...state.filters,
                [filterName]: !state.filters[filterName],
            };

            const areAllFiltersActive = Object.keys(newFilters)
                .filter(key => key !== 'all')
                .every(key => newFilters[key]);

            return {
                ...state,
                filters: {
                    ...newFilters,
                    all: areAllFiltersActive,
                },
            };

        case TOGGLE_FILTER_BY_BUTTON:
            const filterByButtonName = action.payload;

            const newFiltersByButton = {
                ...initialState.filtersByButton,
                [filterByButtonName]:
                    !state.filtersByButton[filterByButtonName],
            };

            return { ...state, filtersByButton: newFiltersByButton };

        case RESET_FILTER_BY_BUTTON:
            return { ...state, filtersByButton: initialState.filtersByButton };

        case FILTERED_ONCE:
            return { ...state, isFilterSelectedOnes: true };

        default:
            return state;
    }
};

export default filtersReducer;
