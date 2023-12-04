import React from 'react';
import TicketAirlines from '../../TicketAirlines';
import TicketDetails from './TicketDetails';

import './TicketItem.scss';

const TicketItem = () => (
    <div className="ticket-item">
        <div className="ticket-item__header">
            <p className="ticket-item__header__price">13 400 Р</p>
            <TicketAirlines />
        </div>
        <div className="ticket-item__body">
            <TicketDetails />
        </div>
    </div>
);

export default TicketItem;
