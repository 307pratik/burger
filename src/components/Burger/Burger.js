import React from 'react';
import BurgerInc from './BurgerInc/BurgerInc';
import styles from './Burger.module.css';

const burger = (props) => {

    let transIncred = Object.keys(props.incred)
    .map(igKey => {

         return [...Array(props.incred[igKey])].map((_,i)=>{

            return <BurgerInc key = {igKey + i} type = {igKey} />
         } )

    })
   .reduce((arr,el) => {
    
             return arr.concat(el)
   }, []);

console.log(transIncred);

if(transIncred.length === 0)
{

   transIncred = <p>Please add incrediations</p>
}

return(
<div  className = {styles.Burger}>

<BurgerInc type = "bread-top" />
{transIncred}
<BurgerInc type = "bread-bottom" />


</div>

);

}

export default burger;