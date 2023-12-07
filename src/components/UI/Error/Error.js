import React from 'react';
import './Error.scss';
import PropTypes from 'prop-types';

const Error = ({ status, message }) => (
    <div className="error">
        <h2 className="error__status">{status}</h2>
        <p className="error__message">{message}</p>
        <button
            className="error__button"
            type="button"
            onClick={() => window.location.reload()}
        >
            Попробуйте обновить страницу
        </button>
    </div>
);

export default Error;

Error.defaultProps = {
    status: 500,
};

Error.propTypes = {
    status: PropTypes.number,
    message: PropTypes.string.isRequired,
};
