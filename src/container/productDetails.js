import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {selectedProduct , removeselectedProduct} from "../redux/action/productActions";


const ProductDetails =() =>{

const product =useSelector((state)=>state.product);
const{image,title,price,category,description} = product;
    const { productid }=useParams();
    const dispatch=useDispatch()
    console.log(product);
    
    const fetchProductdetails=async ()=>{
    const response = await axios.get(`https://fakestoreapi.com/products/${productid}`)
    .catch((err)=>{
            console.log(err);
        });
        dispatch(selectedProduct(response.data));
       };

    useEffect(()=>{
        if(productid && productid!=="")fetchProductdetails();
        return()=>{
            dispatch(removeselectedProduct);
        }
    },[productid]);

    return(
        <div className="ui grid container">
        <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
                <div className="ui vertical divider">and</div>
                <div className="middle aligned row"></div>
                <div className="column lp">
                    <img className="ui fluid image" src={image} alt=""></img>
                </div>
                <div className="column rp ">
                <h1>{title}</h1>
                <h2>
                    <a className="ui teal tag label">$ {price}</a></h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                        <i className="shop icon"></i>
                    </div>
                    <div className="visible content">add to card</div>
                </div>
                </div>

            </div>
            </div>
        </div>
    )
}

export default ProductDetails;