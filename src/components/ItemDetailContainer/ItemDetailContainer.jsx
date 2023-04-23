import React, { useState } from 'react'
import {getProducts} from '../../helpers/getProducts'
import ItemDetail from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {

    const[item, setItem] = useState(null)

    const[loading, setLoading] = useState(false)

    useEffect(()=>{ 
            setLoading(true)
            getProducts()
                .then(res => {
                    setItem(res)
                })
                .catch((error) => console.log(error))
                .finally(()=>{
                    setLoading(false)

                })
        })  

  return (
    <div>
        {
            loading
            ?<h3>Loading..</h3>
            :<ItemDetail/>
        }

    </div>
  )
}

export default ItemDetailContainer