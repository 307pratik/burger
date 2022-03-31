import React from 'react';
import Auxillary from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

const ordersummary = (props)=>{  
    
const incredsummary  =  Object.keys(props.incred)

        .map(igkey => {

         return <li>{igkey}:{props.incred[igkey]}</li>
         });    
    
    return(
<Auxillary>
    <div>

        <h3> Your Order </h3>
        <p>You are one step away to get your buruger</p>
        <ul>

{incredsummary}
        </ul>
    <p>Totalprice:{props.totalprice}</p>
        <p>Do you want to continue...?</p>

    </div>

    
    <Button btnType = "Danger" clicked ={props.purchaseCancelled}>CANCEL</Button>
        <Button btnType = "Success" clicked = {props.purchaseContinued}>CONTINUE</Button>
    </Auxillary>
);
}
export default ordersummary;