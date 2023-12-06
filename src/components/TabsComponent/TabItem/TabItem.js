import React from 'react';
import PropTypes from 'prop-types';

import './TabItem.scss';

const TabItem = ({ tabName, isSelected, onClick, disabled }) => (
    <button
        type="button"
        className={`tab ${isSelected ? 'tab--selected' : ''}`}
        onClick={onClick}
        disabled={disabled}
    >
        {tabName}
    </button>
);

export default TabItem;

TabItem.propTypes = {
    tabName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isSelected: PropTypes.bool,
    disabled: PropTypes.bool,
};
