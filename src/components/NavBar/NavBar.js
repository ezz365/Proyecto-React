import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
    return (
        <main className="menu">
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                    <Link className="enlace" to="/"><h4>Inicio</h4></Link>
                    </div>
                    <div class="col">
                    <Link className="enlace" to="/productos/pantalones"><h4>Pantalones</h4></Link>
                    </div>
                    <div class="col">
                    <Link className="enlace" to="/productos/remeras"><h4>Remeras</h4></Link>
                    </div>
                    <div class="col">
                    <Link className="enlace" to="/productos/camperas"><h4>Camperas</h4></Link>
                    </div>
                    <div class="col">
                    <Link className="link" to="/cart"><CartWidget/></Link>
                    </div>
                </div>
                </div>   
        </main>
    );
};

export default NavBar;

