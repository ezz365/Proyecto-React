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
import { CartScreen } from "./components/CartScreen/CartScreen";
import { productos } from "./data/stock";

function App(){

    const[carrito, setCarrito] = useState([])

    console.log(carrito)

    const añadirCarrito = (productos) =>{
        setCarrito([...carrito, productos])
    }

    const calculoCantidad = () =>{
        return carrito.reduce((acc, productos) => acc + productos.counter, 0)
    }

    const totalPrecio = () =>{
        return carrito.reduce((acc, productos) => acc + productos.price * productos.counter, 0)         
    }

    const borrarProducto = (productoId)=>{
        const nuevoCarrito = carrito.filter((productos)=> productos.id !== productoId)
        setCarrito(nuevoCarrito)
    }
    
    const vaciarCarrito = () =>{
        setCarrito([])
    }


    return(
        <CartContext.Provider value={{
            añadirCarrito,
            calculoCantidad,
            borrarProducto,
            totalPrecio,
            carrito,
            vaciarCarrito
        }}>
        <div className="App">
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
                        <Route path="/detail/:productoId" element={<ItemDetailContainer/>}/> 
                        <Route path="/counter" element={<ItemCount />} />
                        <Route path="/cart" element={<CartScreen />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Router>
            </div>
        </CartContext.Provider>
    );
}

export default App;