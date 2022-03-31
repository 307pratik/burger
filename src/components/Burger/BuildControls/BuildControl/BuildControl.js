import React from 'react';
import style from './BuildControl.module.css';

const BuildControl = (props) => (

    <div className = {style.BuildControl}>

<div className = {style.Label}>{props.Lable}</div>
<button className = {style.Less} onClick = {props.Deleted}>Less</button>
<button className = {style.More} onClick = {props.Added} >More</button>
    </div>
);

export default BuildControl;