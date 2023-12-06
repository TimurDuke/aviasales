import React from 'react';
import './LineLoading.scss';

const LineLoading = () => (
    <div className="loading_line">
        <div className="loading_line__text-block">
            <p className="loading_line__text-block__text">
                Ищем больше билетов
            </p>
            <p className="loading_line__text-block__dot loading_line__text-block__dot--1">
                .
            </p>
            <p className="loading_line__text-block__dot loading_line__text-block__dot--2">
                .
            </p>
            <p className="loading_line__text-block__dot loading_line__text-block__dot--3">
                .
            </p>
        </div>
        <div className="loading_line__wrapper">
            <div className="loading_line__wrapper__line">
                <div className="loading_line__wrapper__line__inner loading_line__wrapper__line__inner--1" />
                <div className="loading_line__wrapper__line__inner loading_line__wrapper__line__inner--2" />
            </div>
        </div>
    </div>
);

export default LineLoading;
