import * as actionTypes from '../actions/actionTypes';
import { setIncred } from '../actions/index';

const initialState = {

    incred: null,
    totalprice: 5
}

const INCRED_PRICES = {

    salad:0.5,
    bacon:0.3,
    cheese:0.7,
    meat:0.9
}

const reducer = (state=initialState, action)=>{

    switch (action.type) {
        case actionTypes.ADD_INCRED:
            
        return{
                     ...state,
                     incred:{

                        ...state.incred,
                        [action.incredName]:state.incred[action.incredName] + 1

                     },
                     totalprice: state.totalprice + INCRED_PRICES[action.incredName]
    
        };
        case actionTypes.REMOVE_INCRED:
            
        return{
            ...state,
            incred:{

               ...state.incred,
               [action.incredName]:state.incred[action.incredName] - 1

            },
            totalprice: state.totalprice - INCRED_PRICES[action.incredName]

        };
        case actionTypes.SET_INCRED:
            return{

                ...state,
                incred:action.incred
            }
            
            
    
        default:
            return state;
        
    }


}

export default reducer;
