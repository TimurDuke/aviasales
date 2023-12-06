import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TicketItem from './TicketItem';
import {
    getMoreTickets,
    increaseStacksCount,
} from '../../store/actions/ticketsActions';
import usePrevious from '../../hooks/usePrevious';
import NoTickets from '../UI/NoTickets/NoTickets';
import TicketsLoading from '../UI/TicketsLoading/TicketsLoading';

const TicketsComponent = () => {
    const dispatch = useDispatch();
    const renderTickets = useSelector(state => state.tickets.renderTickets);
    const stacksCount = useSelector(state => state.tickets.stacksCount);
    const isTokenLoading = useSelector(state => state.token.isLoading);
    const isTicketsLoading = useSelector(state => state.tickets.isLoading);

    const prevRenderTickets = usePrevious(renderTickets);

    useEffect(() => {
        if (
            stacksCount > 1 &&
            !!renderTickets.length &&
            !!prevRenderTickets?.length
        ) {
            if (renderTickets.length !== prevRenderTickets.length) {
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth',
                });
            }
        }
    }, [prevRenderTickets, renderTickets, stacksCount]);

    const getMoreTicketsHandler = () => {
        dispatch(increaseStacksCount());
        dispatch(getMoreTickets());
    };

    return (
        <>
            {!!renderTickets.length &&
                renderTickets.map((ticket, index) => (
                    <TicketItem key={index} ticket={ticket} />
                ))}
            {!renderTickets.length && !isTokenLoading && !isTicketsLoading && (
                <NoTickets />
            )}
            {(isTokenLoading || isTicketsLoading) && <TicketsLoading />}
            {!!renderTickets.length && (
                <button
                    type="button"
                    className="tickets__inner__content__more-button"
                    onClick={getMoreTicketsHandler}
                >
                    Показать еще 5 билетов!
                </button>
            )}
        </>
    );
};

export default TicketsComponent;
