import { ActionType } from "../contacts/action-types";

const initialstate={
    product: [],
}

export const productReducer=(state =initialstate, action)=>{
        switch (action.type) {
            case ActionType.SET_PRODUCTS:
                return {...state,product:action.payload};
        
            default:
                return state;
        }
}

export const selectedproductReducer=(state =initialstate, action)=>{
    switch (action.type) {
        case ActionType.SELECTED_PRODUCT:
            return {...state,...action.payload};
        default:
            return state;
    }
}