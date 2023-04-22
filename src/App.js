import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { ItemCount } from "./components/ItemCount/ItemCount";

function App(){
    return(
        <div className="App">
            <main>
                <NavBar/>
                <ItemListContainer saludo = "Bienvenido!"/>
                <ItemCount/>
            </main>
        </div>
    );
}

export default App;