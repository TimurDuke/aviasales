import React from 'react';

import './TabsComponent.scss';
import { TAB_NAMES } from '../../constants';
import TabItem from './TabItem';

const TabsComponent = () => (
    <div className="tabs">
        {TAB_NAMES.map(tabName => (
            <TabItem
                key={Math.random() * 99}
                tabText={tabName}
                isSelected={tabName === 'Самый дешевый'}
            />
        ))}
    </div>
);

export default TabsComponent;
