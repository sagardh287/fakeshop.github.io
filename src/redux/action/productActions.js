import {ActionType} from "../contacts/action-types"
export const setProducts=(products)=>{
    return{
        type:ActionType.SET_PRODUCTS,
        payload:products,
    };
};

export const selectedProduct=(product)=>{
    return{
        type:ActionType.SELECTED_PRODUCT,
        payload:product,
    };
};
export const removeselectedProduct=()=>{
    return{
        type:ActionType.REMOVE_SELECTED_PRODUCT,
       
    };
};