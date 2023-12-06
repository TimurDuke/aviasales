import React from 'react';
import PropTypes from 'prop-types';
import TicketAirlines from '../../TicketAirlines';
import TicketDetails from './TicketDetails';
import { formattedPrice } from '../../../utils/ticketUtils';
import './TicketItem.scss';

const TicketItem = ({ ticket }) => {
    const { price, carrier, segments } = ticket;

    return (
        <div className="ticket-item">
            <div className="ticket-item__header">
                <p className="ticket-item__header__price">
                    {formattedPrice(price)}
                </p>
                <TicketAirlines carrier={carrier} />
            </div>
            <div className="ticket-item__body">
                <TicketDetails segments={segments} />
            </div>
        </div>
    );
};

export default TicketItem;

TicketItem.propTypes = {
    ticket: PropTypes.object.isRequired,
};
