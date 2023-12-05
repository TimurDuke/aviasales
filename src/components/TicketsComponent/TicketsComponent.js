import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TicketItem from './TicketItem';
import {
    getMoreTickets,
    setRenderTickets,
} from '../../store/actions/ticketsActions';

const TicketsComponent = () => {
    const dispatch = useDispatch();
    const { tickets, renderTickets, stacksCount } = useSelector(
        state => state.tickets
    );

    useEffect(() => {
        if (!!tickets.length) {
            dispatch(setRenderTickets());
        }
    }, [dispatch, tickets, stacksCount]);

    useEffect(() => {
        if (stacksCount > 1) {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [renderTickets, stacksCount]);

    return (
        <>
            {!!renderTickets.length &&
                renderTickets.map((ticket, index) => (
                    <TicketItem key={index} ticket={ticket} />
                ))}
            {!!renderTickets.length && (
                <button
                    type="button"
                    className="tickets__inner__content__more-button"
                    onClick={() => dispatch(getMoreTickets())}
                >
                    Показать еще 5 билетов!
                </button>
            )}
        </>
    );
};

export default TicketsComponent;
