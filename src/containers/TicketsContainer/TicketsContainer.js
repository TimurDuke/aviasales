import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../components/Logo';
import FiltersComponent from '../../components/FiltersComponent';
import TabsComponent from '../../components/TabsComponent';
import TicketsComponent from '../../components/TicketsComponent';
import { fetchTickets } from '../../store/actions/ticketsActions';
import LineLoading from '../../components/UI/LineLoading/LineLoading';
import TemporaryMessage from '../../components/UI/TemporaryMessage/TemporaryMessage';
import './TicketsContainer.scss';

const TicketsContainer = () => {
    const dispatch = useDispatch();
    const searchToken = useSelector(state => state.token.searchToken);
    const isTicketsLoading = useSelector(state => state.tickets.isLoading);
    const isAllTicketsLoading = useSelector(
        state => state.tickets.isAllLoading
    );
    const isTokenLoading = useSelector(state => state.token.isLoading);

    useEffect(() => {
        if (searchToken) {
            dispatch(fetchTickets());
        }
    }, [dispatch, searchToken]);

    return (
        <div className="tickets">
            <Logo />
            {isAllTicketsLoading && <LineLoading />}
            {!isTokenLoading && !isTicketsLoading && !isAllTicketsLoading && (
                <TemporaryMessage text="Все билеты успешно загружены" />
            )}
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
