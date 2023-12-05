import React from 'react';
import PropTypes, { object } from 'prop-types';
import TicketDetailsItem from './TicketDetailsItem';
import {
    formatedFlightTime,
    formatedStopsCount,
    formatedTotalTime,
    formatedTransfers,
} from '../../../../utils/ticketUtils';

import './TicketDetails.scss';

const TicketDetails = ({ segments }) => {
    const [goingRoute, comingBackRoute] = segments;

    const goingRouteFlightTime = formatedFlightTime(
        goingRoute.date,
        goingRoute.duration
    );
    const comingBackRouteFlightTime = formatedFlightTime(
        comingBackRoute.date,
        comingBackRoute.duration
    );

    const goingRoutePoints = formatedTransfers(
        goingRoute.origin,
        goingRoute.destination
    );
    const comingBackRoutePoints = formatedTransfers(
        comingBackRoute.origin,
        comingBackRoute.destination
    );

    const goingRouteDuration = formatedTotalTime(goingRoute.duration);
    const comingBackRouteDuration = formatedTotalTime(comingBackRoute.duration);

    const goingRoutStopsCount = formatedStopsCount(goingRoute.stops);
    const comingBackRouteStopsCount = formatedStopsCount(comingBackRoute.stops);

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
