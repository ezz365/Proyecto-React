import React, { useContext } from "react";
import logo from "../../assets/logo.png"
import { CartContext } from "../context/CartContext";


export const CartWidget = () =>{

    const {calculoCantidad} = useContext(CartContext)


    return(
        <div>
            <img src={logo} />
            <span>{calculoCantidad()}</span>
        </div>
    ) 
};

export default CartWidget;