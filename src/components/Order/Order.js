import React from 'react';
import style from './Order.module.css';

const Order = (props) =>{
 
      const incred = [];

     for (let incredName in props.incred){

        incred.push({name:incredName,amout:props.incred[incredName]});


}

     const incredOutput =incred.map(ig =>{

     return <span>{ig.name} ({ig.amout})</span>
     });

    return(
        <div className = {style.Order}>
                   <p>{incredOutput}</p>
                  <p>{props.price}</p>
        </div>
      
      );

}


export default Order;