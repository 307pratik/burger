import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerInc.module.css';

class BurgerInc extends Component{ 

    render()
    {
        let inc = null;

    switch(this.props.type){
 
       case('bread-bottom'):
       inc = <div className = {styles.BreadBottom}></div>;
       break;
 
       case('bread-top'):
       inc = <div className = {styles.BreadTop}>
 
                 <div className = {styles.Seeds1}></div>
                 <div className = {styles.Seeds2}></div>
             
       </div>;
       break;
 
       case('meat'):
       inc = <div className = {styles.Meat}></div>;
       break;
 
 
       case('cheese'):
       inc = <div className = {styles.Cheese}></div>;
       break;
 
 
       case('salad'):
       inc = <div className = {styles.Salad}></div>;
       break;
 
       case('bacon'):
       inc = <div className = {styles.Bacon}></div>;
       break;
 
     default:inc=null;

    }
        return inc;

    }

}
BurgerInc.propTypes = {

    type:PropTypes.string.isRequired
};

export default BurgerInc;