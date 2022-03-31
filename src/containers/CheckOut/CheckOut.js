import React, { Component } from 'react';
import {connect} from 'react-redux';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import Contact from './Contact/Contact';

class checkout extends Component{

    

   // componentWillMount(){
    //
      //  const query = new URLSearchParams(this.props.location.search);
        //const incred = {};
    //    let price = 0;
    //    for (let param of query.entries()){

    //        if(param[0] === 'price'){

    //             price = param[1];
    //        }
         //   else{
   //             incred[param[0]] = +param[1];
       //     }
    //        
    //    }
//

      //  this.setState({incred:incred , totalprice:price});
    //}

checkoutCancelledHandler = ()=>{

    this.props.history.goBack();
}    

checkoutContinuedHandler = () =>{

    this.props.history.replace("/checkout/contact");
}


render()
{

    return (
<div>
<CheckoutSummary 
incred = {this.props.ings}
checkoutcancelled ={this.checkoutCancelledHandler}
checkoutcontinued = {this.checkoutContinuedHandler}
/>
<Route path = {'/checkout/contact'} 
 component = {Contact} />
</div>        
 );
}

}

const mapStateToProps = state => {

return {

    ings:state.incred
}

}

export default connect(mapStateToProps)(checkout);
