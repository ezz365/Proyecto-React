import React, { useState } from 'react'
import { useEffect } from 'react'
//import {getProducts} from '../../helpers/getProducts'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFirestore } from '../../firebase/config'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {

    const[producto, setProducto] = useState(null)

    const[loading, setLoading] = useState(false)

    const {productoId} = useParams()

     /*  setLoading(true)
            getProducts()
                .then(res => {
                    setProducto(res.find(prod => prod.id === Number(productoId)))
                })
                .catch((error) => console.log(error))
                .finally(()=>{
                    setLoading(false)

                })*/

    useEffect(()=>{ 

        const db = getFirestore()
        const productos = db.collection("productos")
        const producto = productos.doc(productoId)

        producto.get()
            .then((doc)=>{
                setProducto({
                    id: doc.id, ...doc.data()
                    })
            })
            .catch((error)=>console.log(error))
            .finally(()=>{
                setLoading(false)
            })
        },[productoId])

  return (
    <div>
        {
            loading
            ?<h3>Loading..</h3>
            :<ItemDetail{...producto}/>
        }

    </div>
  )
}

export default ItemDetailContainer