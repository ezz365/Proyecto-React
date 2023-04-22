import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App(){
    return(
        <div className="App">
            <main>
                <NavBar/>
                <ItemListContainer saludo = "Bienvenido!"/>
            </main>
        </div>
    );
}

export default App;