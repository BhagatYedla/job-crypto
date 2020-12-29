import { FILTER_PRODUCTS } from '../actions/types';
  
const initalState = {}

export default  function (state = initalState, action)  {  
  switch (action.type) {  
    case FILTER_PRODUCTS: 
      return { 
        ...state,  
        filterKey:action.key,
        filteredData:action.value.items.filter((item) => item === action.key)
      };  
    default:  
      return false  
  }  
}  