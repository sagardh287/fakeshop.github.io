import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { selectedproductReducer } from "./productReducer";
export const reducers =combineReducers({
    allProducts:productReducer,
    product :selectedproductReducer,
});

