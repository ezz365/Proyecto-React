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
                if(categoryId){
                setProducts(res.filter(productos => productos.category === categoryId))
            }else{
                setProducts(res)
            }
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
        </div>
    )}

export default ItemListContainer;