import React, { useContext } from "react";
import logo from "../../assets/logo.jpg"
import { CartContext } from "../context/CartContext";


export const CartWidget = () =>{

    const {calculoCantidad} = useContext(CartContext)


    return(
        <div>
            <img src={logo} />
            <h6>{calculoCantidad()}</h6>
        </div>
    ) 
};

export default CartWidget;