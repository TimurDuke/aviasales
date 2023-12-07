import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FiltersComponent from '../../components/FiltersComponent';
import TabsComponent from '../../components/TabsComponent';
import TicketsComponent from '../../components/TicketsComponent';
import { fetchTickets } from '../../store/actions/ticketsActions';
import LineLoading from '../../components/UI/LineLoading/LineLoading';
import TemporaryMessage from '../../components/UI/TemporaryMessage/TemporaryMessage';
import Error from '../../components/UI/Error/Error';
import Logo from '../../components/Logo';
import './TicketsContainer.scss';

const TicketsContainer = () => {
    const dispatch = useDispatch();
    const searchToken = useSelector(state => state.token.searchToken);
    const isTicketsLoading = useSelector(state => state.tickets.isLoading);
    const isAllTicketsLoading = useSelector(
        state => state.tickets.isAllLoading
    );
    const isTokenLoading = useSelector(state => state.token.isLoading);
    const tokenRequestError = useSelector(state => state.token.error);
    const ticketsRequestError = useSelector(state => state.tickets.error);

    const [error, setError] = useState(null);

    useEffect(() => {
        if (searchToken) {
            dispatch(fetchTickets());
        }
    }, [dispatch, searchToken]);

    useEffect(() => {
        if (tokenRequestError) {
            setError(tokenRequestError);
        } else if (ticketsRequestError) {
            setError(ticketsRequestError);
        }
    }, [tokenRequestError, ticketsRequestError]);

    return (
        <div className="tickets">
            <Logo />
            {!error ? (
                <>
                    {isAllTicketsLoading && <LineLoading />}
                    {!isTokenLoading &&
                        !isTicketsLoading &&
                        !isAllTicketsLoading && (
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
                </>
            ) : (
                <Error message={error.message} status={error?.status} />
            )}
        </div>
    );
};

export default TicketsContainer;
