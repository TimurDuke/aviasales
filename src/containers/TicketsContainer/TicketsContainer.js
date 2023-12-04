import React from 'react';
import Logo from '../../components/Logo';
import FiltersComponent from '../../components/FiltersComponent';
import TabsComponent from '../../components/TabsComponent';
import TicketsComponent from '../../components/TicketsComponent';
import './TicketsContainer.scss';

const TicketsContainer = () => {
    console.log('asd');
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
