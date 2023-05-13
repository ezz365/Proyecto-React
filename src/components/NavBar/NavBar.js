import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {

    return (
        <main>
            <Link to="/">Inicio</Link>
            <Link to="/productos/pantalones">Pantalones</Link>
            <Link to="/productos/remeras">Remeras</Link>
            <Link to="/productos/camperas">Camperas</Link>
            <Link to="/cart"><CartWidget/></Link>
        </main>
    );
};



export default NavBar;

