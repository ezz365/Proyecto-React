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


function App(){
    return(
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
    );
}

export default App;