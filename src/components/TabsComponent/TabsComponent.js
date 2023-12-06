import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TAB_NAMES } from '../../constants';
import {
    sortByPrice,
    sortByDuration,
    sortByStopsCountAndPrice,
} from '../../utils/ticketUtils';
import {
    sortTicketsByDuration,
    sortTicketsByOptimal,
    sortTicketsByPrice,
} from '../../store/actions/ticketsActions';
import { toggleFilterByButton } from '../../store/actions/filtersActions';
import TabItem from './TabItem';
import './TabsComponent.scss';

const TabsComponent = () => {
    const dispatch = useDispatch();

    const filteredTickets = useSelector(state => state.tickets.filteredTickets);
    const filtersByButton = useSelector(state => state.filters.filtersByButton);

    const handleClick = tabKey => {
        const sortedByPrice = sortByPrice(filteredTickets);
        const sortedByDuration = sortByDuration(filteredTickets);
        const sortedByStopsCountAndPrice =
            sortByStopsCountAndPrice(filteredTickets);

        switch (tabKey) {
            case 'cheapest':
                dispatch(toggleFilterByButton(tabKey));
                dispatch(sortTicketsByPrice(sortedByPrice));
                break;
            case 'fastest':
                dispatch(toggleFilterByButton(tabKey));
                dispatch(sortTicketsByDuration(sortedByDuration));
                break;
            case 'optimal':
                dispatch(toggleFilterByButton(tabKey));
                dispatch(sortTicketsByOptimal(sortedByStopsCountAndPrice));
                break;
            default:
                break;
        }
    };

    return (
        <div className="tabs">
            {Object.entries(TAB_NAMES).map(([tabKey, tabName]) => (
                <TabItem
                    key={tabKey}
                    tabName={tabName}
                    disabled={!filteredTickets.length}
                    isSelected={filtersByButton[tabKey]}
                    onClick={() => handleClick(tabKey)}
                />
            ))}
        </div>
    );
};

export default TabsComponent;
