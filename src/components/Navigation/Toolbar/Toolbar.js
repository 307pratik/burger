import React from 'react';
import style from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import Navigationitems from '../NavigationItems/NavigationItems';

const toolbar = (props)=>(

<header className={style.Toolbar} >

<div>Menu</div>
<Logo/>
<nav>
<Navigationitems />
</nav>
</header>

);

export default toolbar;