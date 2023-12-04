import React from 'react';
import PropTypes from 'prop-types';

import './FilterItem.scss';

const FilterItem = ({ filterName, isChecked, handleChange }) => (
    <div className="filter_item" onClick={handleChange}>
        <input
            className="filter_item__checkbox"
            type="checkbox"
            checked={isChecked}
            readOnly
        />
        <label className="filter_item__label">{filterName}</label>
    </div>
);

export default FilterItem;

FilterItem.propTypes = {
    filterName: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
};
