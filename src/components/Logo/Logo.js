import React from 'react';
import logoSrc from '../../assets/images/logo.svg';

import './Logo.scss';

const Logo = () => (
    <div className="logo">
        <img className="logo__image" src={logoSrc} alt="Logo" />
    </div>
);

export default Logo;
