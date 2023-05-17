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
import { CartProvider } from "./components/context/CartContext";
import { CartScreen } from "./components/CartScreen/CartScreen";
import Checkout from "./components/CheckOut/Checkout";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App(){
    return(
        <CartProvider>
        <div className="App">
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
                        <Route path="/detail/:productoId" element={<ItemDetailContainer/>}/> 
                        <Route path="/counter" element={<ItemCount />} />
                        <Route path="/checkout" element={<Checkout/>} />
                        <Route path="/cart" element={<CartScreen />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Router>
            </div>
        </CartProvider>
    );
}

export default App;