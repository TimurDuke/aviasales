import React from 'react';
import TicketsContainer from './containers/TicketsContainer';
import useFilterTickets from './hooks/useFilterTickets';

const App = () => {
    useFilterTickets();

    return <TicketsContainer />;
};

export default App;
