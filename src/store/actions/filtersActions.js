export const TOGGLE_ALL_FILTERS = 'TOGGLE_ALL_FILTERS';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';

export const toggleAllFilters = () => ({ type: TOGGLE_ALL_FILTERS });
export const toggleFilter = filterKey => ({
    type: TOGGLE_FILTER,
    payload: filterKey,
});

export const TOGGLE_FILTER_BY_BUTTON = 'TOGGLE_FILTER_BY_BUTTON';
export const toggleFilterByButton = filterKey => ({
    type: TOGGLE_FILTER_BY_BUTTON,
    payload: filterKey,
});

export const RESET_FILTER_BY_BUTTON = 'RESET_FILTER_BY_BUTTON';
export const resetFilterByButton = () => ({ type: RESET_FILTER_BY_BUTTON });
