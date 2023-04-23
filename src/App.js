import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { productos } from "./data/stock";
import { ItemCount } from "./components/ItemCount/ItemCount";
import {
    BrowserRouter as Router, 
    Routes,
    Navigate,
    Route,
} from "react-router-dom";

function App(){
    return(
        <><div>
            
        </div><div className="App">
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/counter" element={<ItemCount />} />
                        <Route path="*" element={<Navigate />} />
                    </Routes>
                </Router>
            </div></>
    );
}

export default App;