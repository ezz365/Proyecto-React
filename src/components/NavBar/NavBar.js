import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = ({saludo}) => {

    return (
        <main>
            <Link to="/">Logo</Link>
            <Link to="/productos/pantalones">Pantalones</Link>
            <Link to="/productos/remeras">Remeras</Link>
            <Link to="/productos/camperas">Camperas</Link>
            <Link to="/counter">Contador</Link>
            <Link to="/cart">Carrito</Link>
            
            <CartWidget />
        </main>
    );
};



export default NavBar;

