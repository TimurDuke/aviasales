import React from 'react';
import PropTypes from 'prop-types';

import './TicketDetailsItem.scss';

const TicketDetailsItem = ({ title, text }) => (
    <div className="ticket-details-item">
        <p className="ticket-details-item__title">{title}</p>
        <p className="ticket-details-item__text">{text}</p>
    </div>
);

export default TicketDetailsItem;

TicketDetailsItem.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
