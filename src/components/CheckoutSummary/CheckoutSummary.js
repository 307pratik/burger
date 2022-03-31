import React from 'react';
import Burger from '../Burger/Burger';
import style from './CheckoutSummary.module.css';
import Button from  '../UI/Button/Button';



const checkoutSummary = (props)=>{

return (

    <div className = {style.center}>

<h1 className={style.h1}>Your Burger is one click away!</h1>

  <div>

         <Burger incred = {props.incred}/>

  </div>

     <Button btnType = 'Danger' clicked = {props.checkoutcancelled} >CANCEL</Button>
     <Button btnType = 'Success' clicked = {props.checkoutcontinued}>CONTINUE</Button>
    </div>
);

}

export default checkoutSummary;