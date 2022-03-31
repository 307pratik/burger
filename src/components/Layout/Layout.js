import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import style from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (

    <Auxillary>

    <Toolbar />

    <main className = {style.content}>
        {props.children}
        </main>

    </Auxillary>

);

export default layout;