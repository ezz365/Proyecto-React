import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { ItemCount } from "./components/ItemCount/ItemCount";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import {
    BrowserRouter as Router, 
    Routes,
    Navigate,
    Route,
} from "react-router-dom";
import { CartContext } from "./components/context/CartContext";
import { useState } from "react";

function App(){

    const[carrito, setCarrito] = useState([])

    console.log(carrito)

    const añadirCarrito = (productos) =>{
        setCarrito([...carrito, productos])
    }

    const calculoCantidad = () =>{
        return carrito.reduce((acc, productos) => acc + productos.counter, 0)
    }

    return(
        <CartContext.Provider value={{
            añadirCarrito,
            calculoCantidad
        }}>
        <div className="App">
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
                        <Route path="/detail/:productoId" element={<ItemDetailContainer/>}/> 
                        <Route path="/counter" element={<ItemCount />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Router>
            </div>
        </CartContext.Provider>
    );
}

export default App;