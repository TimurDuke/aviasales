import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    toggleAllFilters,
    toggleFilter,
} from '../../store/actions/filtersActions';
import { FILTER_NAMES } from '../../constants';
import FilterItem from './FilterItem';
import './FilterComponent.scss';

const FiltersComponent = () => {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filters.filters);

    const handleChange = filterKey => {
        if (filterKey === 'all') {
            dispatch(toggleAllFilters());
        } else {
            dispatch(toggleFilter(filterKey));
        }
    };

    return (
        <div className="filter">
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
