import React from 'react';
import PropTypes, { object } from 'prop-types';
import TicketDetailsItem from './TicketDetailsItem';
import {
    formattedFlightTime,
    formattedStopsCount,
    formattedTotalTime,
    formattedTransfers,
} from '../../../../utils/ticketUtils';

import './TicketDetails.scss';

const TicketDetails = ({ segments }) => {
    const [goingRoute, comingBackRoute] = segments;

    const goingRouteFlightTime = formattedFlightTime(
        goingRoute.date,
        goingRoute.duration
    );
    const comingBackRouteFlightTime = formattedFlightTime(
        comingBackRoute.date,
        comingBackRoute.duration
    );

    const goingRoutePoints = formattedTransfers(
        goingRoute.origin,
        goingRoute.destination
    );
    const comingBackRoutePoints = formattedTransfers(
        comingBackRoute.origin,
        comingBackRoute.destination
    );

    const goingRouteDuration = formattedTotalTime(goingRoute.duration);
    const comingBackRouteDuration = formattedTotalTime(
        comingBackRoute.duration
    );

    const goingRoutStopsCount = formattedStopsCount(goingRoute.stops);
    const comingBackRouteStopsCount = formattedStopsCount(
        comingBackRoute.stops
    );

    const goingRouteStops = goingRoute.stops.join(', ');
    const comingBackRouteStops = comingBackRoute.stops.join(', ');

    return (
        <div className="ticket-details">
            <div className="ticket-details__item-container">
                <TicketDetailsItem
                    title={goingRoutePoints}
                    text={goingRouteFlightTime}
                />
                <TicketDetailsItem
                    title={comingBackRoutePoints}
                    text={comingBackRouteFlightTime}
                />
            </div>
            <div className="ticket-details__item-container">
                <TicketDetailsItem title="В пути" text={goingRouteDuration} />
                <TicketDetailsItem
                    title="В пути"
                    text={comingBackRouteDuration}
                />
            </div>
            <div className="ticket-details__item-container">
                <TicketDetailsItem
                    title={goingRoutStopsCount}
                    text={goingRouteStops}
                />
                <TicketDetailsItem
                    title={comingBackRouteStopsCount}
                    text={comingBackRouteStops}
                />
            </div>
        </div>
    );
};

export default TicketDetails;

TicketDetails.propTypes = {
    segments: PropTypes.arrayOf(object).isRequired,
};
