import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './TemporaryMessage.scss';

const TemporaryMessage = ({ text }) => {
    const [showMessage, setShowMessage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessage(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return <>{showMessage && <div className="message fade-up">{text}</div>}</>;
};

export default TemporaryMessage;

TemporaryMessage.propTypes = {
    text: PropTypes.string.isRequired,
};
