import React, { Component } from 'react';
import {connect} from 'react-redux';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import Auxillary from '../../hoc/Auxillary';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

import Spinner from '../../components/UI/Spinner/Spinner';
import * as bbActions from '../../store/actions/index'; 




class BurgerBuilder extends Component{

state = {
      ordernow:false,
     loading:false

}

componentDidMount(){
    console.log(this.props);
    this.props.onInItIncred();
 
}


   



ordernowHandler = () => {

    return (this.setState({ordernow:true}));
}
modalcloseHandler = ()=>{

    return (this.setState({ordernow:false}));
}
purchaseContinueHandler= ()=>{


    //alert (" order has been placed");


this.props.history.push('/checkout');

}

render(){


let burger = <Spinner />;
let ordersummary = null;    
if (this.props.ings)
{
 burger=(

    <Auxillary>
    <Burger
    incred = {this.props.ings}
    />
    <BuildControls 
    AddIncred = {this.props.onIncredAdded}
    DeleteIncred = {this.props.onIncredRemoved}
    Price = {this.props.price}
    Ordered = {this.ordernowHandler}
    
    />

</Auxillary>
 );
 
ordersummary  = <OrderSummary
incred = {this.props.ings}
purchaseCancelled = {this.modalcloseHandler}
purchaseContinued = {this.purchaseContinueHandler}
totalprice = {this.props.price}>
</OrderSummary>

 }
 if(this.state.loading){

    ordersummary = <Spinner />
 }

    return (
<Auxillary>

             <Modal show = {this.state.ordernow} 
                    modalclosed = {this.modalcloseHandler}    >
                 {ordersummary}
             </Modal>
             {burger}
           
</Auxillary>
            
    );
}


}

const mapStateToProps = state=>{

     return{

        ings:state.incred,
        price:state.totalprice
     }
}

const mapDispatchToProps = dispatch=>{

    return {

        onIncredAdded : (ingName)=> dispatch (bbActions.addIncred(ingName)),
        onIncredRemoved : (ingName)=> dispatch (bbActions.removeIncred(ingName)),
        onInItIncred: () => dispatch(bbActions.initIncred())   
    }


}

export default connect(mapStateToProps,mapDispatchToProps)( BurgerBuilder);