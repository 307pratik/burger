import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from './Contact.module.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
class Contact extends Component {

    state ={

        name:'',
        email:'',
        loading: false
    }
    

    


orderHandler =(event)=>{

         event.preventDefault();

         this.setState({loading:true});
   const order = {

   incred: this.props.ings,
   price: this.props.price,
   Details:{
           Name:'Pratik',
           Address: 'New Ranip',
           Zip: 382470
   },
   Email:'test@test.com',
   Phone: 1234567890
 

 }

axios.post('/orders.json',order)
 .then(response =>{
     
     this.setState({loading:false});
     this.props.history.push('/');
  } )
 .catch(error => {
     this.setState({loading:false});
 })

 

      }  

render()
{

    return (

        <div className = {style.contact}>

                 <h4>Your Contact Details</h4>
            <form>
            <input type = "text" name = "name" placeholder = "Enter your Name" /> 
            <input type = "email" name = "email" placeholder = "Enter your Email"/> 
            <Button btnType = 'Success' clicked = {this.orderHandler}> Order </Button>

            </form>
            
        </div>

    );
}

}

const mapStateToProps = state => {

    return {
    
        ings:state.incred,
        price:state.totalprice
    }
    
    }
    

export default connect(mapStateToProps) (Contact);