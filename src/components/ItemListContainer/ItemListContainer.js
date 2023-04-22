import React, { useEffect, useState} from "react"
import { productos } from "../../data/stock"
import { getProducts } from "../../helpers/getProducts"
import { ItemList } from "../ItemList/ItemList"

const ItemListContainer = (props) => 
{
    const [items, setItems] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(() =>{
    // iniciamos el efecto montaje, con un loading en "true"    
        setLoading(true)
        getProducts()
            .then((res)=>{
                //imprimimos la respuesta y la guardamos en el hook
                setItems(res)
                console.log(res)
            })
            //imprimimos los errores
            .catch((error)=> console.log(error))
            .finally(() =>{setLoading(false)})
    }, [])



    return (
        <div>
            {
                loading 
                ?(<h2>Loading...</h2>)
                :<ItemList productos={productos}/>
            }
            <h3>{props.saludo}</h3>
        </div>
    );
}

export default ItemListContainer;