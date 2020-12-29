import { FILTER_PRODUCTS } from "./types";

export const filterProducts = (filterKey,payload)  => ({  
    type: FILTER_PRODUCTS,  
    key:filterKey,
    value:payload
});