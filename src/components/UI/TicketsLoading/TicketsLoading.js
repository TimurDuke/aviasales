import React from 'react';
import { NO_TICKETS_IMG } from '../../../constants';

import './TicketsLoading.scss';

const TicketsLoading = () => (
    <div className="empty-icon-container">
        <div className="animation-container">
            <div
                className="bounce"
                style={{ backgroundImage: `url(${NO_TICKETS_IMG})` }}
            />
            <div className="pebble1" />
            <div className="pebble2" />
            <div className="pebble3" />
        </div>
    </div>
);

export default TicketsLoading;
