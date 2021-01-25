import Actions from '../resourse/Actions';
import {combineReducers} from 'redux'

const initialState = {
  products: [],
  errors: '',
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_ORDER:
      return {
        ...state,
        products: action.data,
        errors: '',
      };
    default:
      return state;
  }
};

const getRootReducer =()=>{
    return combineReducers({
        ProductReducer, 
    })
}

export default getRootReducer;
