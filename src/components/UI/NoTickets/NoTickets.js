import React from 'react';
import './NoTickets.scss';

const NoTickets = () => (
    <div className="content">
        <div className="content__container">
            <ul className="content__container__list">
                <li className="content__container__list__item">
                    Выбери фильтр
                </li>
                <li className="content__container__list__item">
                    Билеты загружены
                </li>
            </ul>
        </div>
    </div>
);

export default NoTickets;
