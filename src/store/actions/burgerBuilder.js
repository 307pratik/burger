import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIncred = (name)=>{

    return {

        type:actionTypes.ADD_INCRED,
        incredName:name
    }
}

export const removeIncred = (name)=>{

    return {

        type:actionTypes.REMOVE_INCRED,
        incredName:name
    };
};


export const setIncred = (incred)=>{

    return {

        type:actionTypes.SET_INCRED,
        incred:incred
    };
};

export const initIncred = ()=>{

    return dispatch=>{
   axios.get('https://burger-eb5f8-default-rtdb.firebaseio.com/incred.json')

   .then(response => {
       
       dispatch(setIncred(response.data)); 
   })

    };
};