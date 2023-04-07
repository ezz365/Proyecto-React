import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App(){
    return(
        <div className="App">
            <main>
                <NavBar/>
                <ItemListContainer saludo = {"Bienvenido!"} />
            </main>
        </div>
    );
}

export default App;