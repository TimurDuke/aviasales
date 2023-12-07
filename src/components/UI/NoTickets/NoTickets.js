import React from 'react';
import { useSelector } from 'react-redux';
import notFoundImage from '../../../assets/images/not-found.png';
import './NoTickets.scss';

const NoTickets = () => {
    const isFilterSelectedOnes = useSelector(
        state => state.filters.isFilterSelectedOnes
    );
    return (
        <div className="content">
            {!isFilterSelectedOnes ? (
                <div className="content__container_choose">
                    <ul className="content__container_choose__list">
                        <li className="content__container_choose__list__item">
                            Выбери фильтр
                        </li>
                        <li className="content__container_choose__list__item">
                            Билеты загружены
                        </li>
                    </ul>
                </div>
            ) : (
                <div className="content__container_not-found">
                    <p className="content__container_not-found__text">
                        Рейсов, подходящих под заданные фильтры, не найдено
                    </p>
                    <div className="content__container_not-found__image-block">
                        <img
                            className="content__container_not-found__image-block__image"
                            src={notFoundImage}
                            alt="Tickets not found"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default NoTickets;
