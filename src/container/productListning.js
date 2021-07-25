import React ,{useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./productComponent";
import {setProducts} from "../redux/action/productActions";


const ProductListning=() =>{
    const products=useSelector((state)=>state);
    const dispatch = useDispatch();
    const fetchProduct = async ()=>{
        const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
            console.log(err);
        });
        dispatch(setProducts(response.data));
       };
       
       useEffect(()=>{
           fetchProduct();
       },[]);
    console.log("products",products);       
    return(
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListning;               