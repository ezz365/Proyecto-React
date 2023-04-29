import React, { useEffect, useState} from "react"
import { productos } from "../../data/stock"
import { getProducts } from "../../helpers/getProducts"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = (props) => 
{
    const [productos, setProducts] = useState([])

    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams()
    

    useEffect(() =>{
    // iniciamos el efecto montaje, con un loading en "true"    
        setLoading(true)
        getProducts()
            .then((res)=>{
                //imprimimos la respuesta y la guardamos en el hook
                setProducts(res.filter(prod => prod.category === categoryId))
                console.log(res)
            })
            //imprimimos los errores
            .catch((error)=> console.log(error))
            .finally(() =>{setLoading(false)})
    }, [categoryId])



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