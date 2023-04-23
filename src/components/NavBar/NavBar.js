import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = ({saludo}) => {

    return (
        <main>
            <Link to="/">Logo</Link>
            <Link to="/">Inicio</Link>
            <Link to="/counter">Contador</Link>
            <Link to="/cart">Carrito</Link>
            <CartWidget />
        </main>
    );
};



export default NavBar;

