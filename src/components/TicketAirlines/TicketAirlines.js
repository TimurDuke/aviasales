import React from 'react';
import PropTypes from 'prop-types';

const TicketAirlines = ({ carrier }) => (
    <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="#" />
);

export default TicketAirlines;

TicketAirlines.propTypes = {
    carrier: PropTypes.string.isRequired,
};
