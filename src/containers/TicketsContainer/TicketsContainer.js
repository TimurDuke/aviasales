import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../components/Logo';
import FiltersComponent from '../../components/FiltersComponent';
import TabsComponent from '../../components/TabsComponent';
import TicketsComponent from '../../components/TicketsComponent';
import { fetchTickets } from '../../store/actions/ticketsActions';
import './TicketsContainer.scss';

const TicketsContainer = () => {
    const dispatch = useDispatch();
    const searchToken = useSelector(state => state.token.searchToken);

    useEffect(() => {
        if (searchToken) {
            dispatch(fetchTickets());
        }
    }, [dispatch, searchToken]);

    return (
        <div className="tickets">
            <Logo />
            <div className="tickets__inner">
                <div className="tickets__inner__filters">
                    <FiltersComponent />
                </div>
                <div className="tickets__inner__content">
                    <TabsComponent />
                    <TicketsComponent />
                </div>
            </div>
        </div>
    );
};

export default TicketsContainer;
