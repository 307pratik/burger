import React, {Component} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';

class orders extends Component {

    state = {

        orders:[],
        loading:true


    }
    componentDidMount()
    {

        axios.get('/orders.json')
        
        .then(res =>{

            const fetchedOrders = [];
            for(let key in res.data){

                fetchedOrders.push({

                    ...res.data[key],
                    id:key
                });
            }
           this.setState({loading:false, orders:fetchedOrders});
        }

        );
    }

    render()
    {

        return (
            <div>
                
                    {this.state.orders.map(order => (

                        <Order
                        key = {order.id}
                        price = {order.price}
                        incred = {order.incred} />
                    ))}
                 
            </div>
              
               
        );
    }
}

export default orders;