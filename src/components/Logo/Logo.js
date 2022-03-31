import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import style from './Logo.module.css';

const logo = (props) => (

    <div className={style.Logo}>

<img src = {burgerLogo} />

    </div>
);

export default logo;  