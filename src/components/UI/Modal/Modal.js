import React from 'react';
import Auxillary from '../../../hoc/Auxillary';
import Backdrop from '../Backdrop/Backdrop';
import style from './Modal.module.css';

const modal = (props)=>(
    <Auxillary>
<Backdrop show = {props.show}
          clicked={props.modalclosed}
></Backdrop>

<div className = {style.Modal}
style = {{

    transform:props.show? 'translateY(0)' : 'translate(-100vh)',
    opacity : props.show? '1' : '0'
}}

>
{props.children}
</div>
</Auxillary>
);

export default modal;