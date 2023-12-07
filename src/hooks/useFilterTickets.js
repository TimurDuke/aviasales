import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortTicketsByFilter } from '../store/actions/ticketsActions';
import {
    sortByDuration,
    sortByPrice,
    sortByStopsCountAndPrice,
} from '../utils/ticketUtils';
import { resetFilterByButton } from '../store/actions/filtersActions';

// Хук useFilterTickets автоматически фильтрует билеты на основе текущего состояния фильтров.
// Без надобности его вызова

const useFilterTickets = () => {
    const dispatch = useDispatch();
    const tickets = useSelector(state => state.tickets.tickets);
    const filters = useSelector(state => state.filters.filters);
    const filtersByButton = useSelector(state => state.filters.filtersByButton);

    const filterTickets = useCallback(() => {
        let filteredTickets = tickets.filter(ticket =>
            ticket.segments.some(segment => {
                const stopsCount = segment.stops.length;
                if (filters.all) return true;
                if (filters.noStops && stopsCount === 0) return true;
                if (filters.oneStop && stopsCount === 1) return true;
                if (filters.twoStops && stopsCount === 2) return true;
                if (filters.threeStops && stopsCount === 3) return true;

                return false;
            })
        );

        const activeFilter = Object.entries(filtersByButton).find(
            ([, value]) => value
        );
        if (activeFilter) {
            switch (activeFilter[0]) {
                case 'cheapest':
                    filteredTickets = sortByPrice(filteredTickets);
                    break;
                case 'fastest':
                    filteredTickets = sortByDuration(filteredTickets);
                    break;
                case 'optimal':
                    filteredTickets = sortByStopsCountAndPrice(filteredTickets);
                    break;
                default:
                    break;
            }
        }

        if (!filteredTickets.length && !!tickets.length)
            dispatch(resetFilterByButton());

        if (!!!!tickets.length) dispatch(sortTicketsByFilter(filteredTickets));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, filters]);

    useEffect(() => {
        filterTickets();
    }, [filterTickets, filters]);
};

export default useFilterTickets;
