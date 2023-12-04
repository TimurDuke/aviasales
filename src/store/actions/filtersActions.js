export const TOGGLE_ALL_FILTERS = 'TOGGLE_ALL_FILTERS';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';

export const toggleAllFilters = () => ({ type: TOGGLE_ALL_FILTERS });
export const toggleFilter = filterKey => ({
    type: TOGGLE_FILTER,
    payload: filterKey,
});
