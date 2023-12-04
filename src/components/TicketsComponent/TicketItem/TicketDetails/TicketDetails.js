import React from 'react';
import TicketDetailsItem from './TicketDetailsItem';

import './TicketDetails.scss';

const TicketDetails = () => (
    <div className="ticket-details">
        <div className="ticket-details__item-container">
            <TicketDetailsItem title="MOW – HKT" text="10:45 – 08:00" />
            <TicketDetailsItem title="MOW – HKT" text="11:20 – 00:50" />
        </div>
        <div className="ticket-details__item-container">
            <TicketDetailsItem title="В пути" text="21ч 15м" />
            <TicketDetailsItem title="В пути" text="13ч 30м" />
        </div>
        <div className="ticket-details__item-container">
            <TicketDetailsItem title="2 пересадки" text="HKG, JNB" />
            <TicketDetailsItem title="1 пересадка" text="HKG" />
        </div>
    </div>
);

export default TicketDetails;
