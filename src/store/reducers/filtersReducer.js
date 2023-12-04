import { TOGGLE_ALL_FILTERS, TOGGLE_FILTER } from '../actions/filtersActions';

const initialState = {
    filters: {
        all: false,
        noStops: false,
        oneStop: false,
        twoStops: false,
        threeStops: false,
    },
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
        default:
            return state;
    }
};

export default filtersReducer;
