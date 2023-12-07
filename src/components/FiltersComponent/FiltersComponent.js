import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    filteredOnce,
    toggleAllFilters,
    toggleFilter,
} from '../../store/actions/filtersActions';
import { FILTER_NAMES } from '../../constants';
import FilterItem from './FilterItem';

import './FilterComponent.scss';

const FiltersComponent = () => {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filters.filters);
    const isTokenLoading = useSelector(state => state.token.isLoading);
    const isTicketsLoading = useSelector(state => state.tickets.isLoading);
    const isFilterSelectedOnes = useSelector(
        state => state.filters.isFilterSelectedOnes
    );

    const handleChange = filterKey => {
        if (filterKey === 'all') {
            if (!isFilterSelectedOnes) dispatch(filteredOnce());
            dispatch(toggleAllFilters());
        } else {
            if (!isFilterSelectedOnes) dispatch(filteredOnce());
            dispatch(toggleFilter(filterKey));
        }
    };

    return (
        <div
            className={`filter ${
                isTicketsLoading || isTokenLoading ? 'filter--loading' : ''
            }`}
        >
            <p className="filter__title">Количество пересадок</p>
            <div className="filter__content">
                {Object.entries(FILTER_NAMES).map(([filterKey, filterName]) => (
                    <FilterItem
                        key={filterKey}
                        filterName={filterName}
                        isChecked={filters[filterKey]}
                        handleChange={() => handleChange(filterKey)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FiltersComponent;
