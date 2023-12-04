import React from 'react';
import PropTypes from 'prop-types';

import './TabItem.scss';

const TabItem = ({ tabText, isSelected }) => (
    <button
        type="button"
        className={`tab ${isSelected ? 'tab--selected' : ''}`}
    >
        {tabText}
    </button>
);

export default TabItem;

TabItem.propTypes = {
    tabText: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
};
