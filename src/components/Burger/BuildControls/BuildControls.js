import React from 'react';
import style from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [

    {label:'Salad' ,type: 'salad'},
    {label:'Bacon' ,type: 'bacon'},
    {label:'Cheese' ,type: 'cheese'},
    {label:'Meat' ,type: 'meat'}
];

const BuildControls = (props) => {

    return (

        <div className = {style.BuildControls}> 

    <p>Current Price:{props.Price}</p>
        {controls.map(ctrl => (

<BuildControl 
key = {ctrl.label} 
Lable = {ctrl.label}
Added = {()=>props.AddIncred(ctrl.type)}
Deleted = {()=>props.DeleteIncred(ctrl.type)}
/>

        ))}
            <button className = {style.OrderButton} onClick ={props.Ordered}>ORDER NOW</button>
            
             </div>
    );

}

export default BuildControls;