import CartWidget from "../CartWidget/CartWidget";

const NavBar = ({saludo}) => {

    return (
        <main>
            <CartWidget />
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Tienda Universal</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Inicio <span className="sr-only"></span></a>
                </li>
                <hr/>
                <li className="nav-item">
                    <a className="nav-link" href="#">Ofertas</a>
                </li>
                <hr/>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categorias
                    </a>
                    <hr/>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Electrodomesticos</a>
                        <hr/>
                        <a className="dropdown-item" href="#">Ropa</a>
                        <hr/>
                        <a className="dropdown-item" href="#">Productos de cocina</a>
                    </div>
                </li>
                </ul>
            </div>
            </nav>
        </main>
    );
};



export default NavBar;

