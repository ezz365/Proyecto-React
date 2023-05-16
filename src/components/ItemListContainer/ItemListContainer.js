import React, { useEffect, useState} from "react"
//import { getProducts } from "../../helpers/getProducts"
import { getFirestore } from "../../firebase/config"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = (props) => 
{
    const [productos, setProducts] = useState([])

    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams()

     // iniciamos el efecto montaje, con un loading en "true"    
        //setLoading(true)
        //getProducts()
           /* .then((res)=>{
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
    */
    

    useEffect(() =>{
        setLoading(true)
   
        const db = getFirestore();

        const productos = db.collection("productos")

        if(categoryId){
            const filtrar = productos.where("category", "==", categoryId)
            filtrar.get()
                .then((res)=>{
                    const newProduct = res.docs.map((doc)=>{
                        return{id: doc.id, ...doc.data()}
                    })
                    setProducts(newProduct)
                })
                .catch((error)=>console.log(error))
                .finally(()=>{
                    setLoading(false)
                })
        }else{
            productos.get()
        .then((res) =>{
            const newProduct = res.docs.map((doc) =>{
                return {id: doc.id, ...doc.data()}
            })
            console.table(newProduct)
            setProducts(newProduct)
        })
        .catch((error)=> console.log(error))
        .finally(()=>{
            setLoading(false)
        })
        }

        

    }, [categoryId])




    return (
        <div>
            {
                loading 
                ?(<h2>Loading...</h2>)
                :<ItemList productos={productos}/>
            }
        </div>
    );
}

export default ItemListContainer;