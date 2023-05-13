import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {ItemCount} from "../ItemCount/ItemCount"

const ItemDetail = ({id, description, price, image, category, stock}) => {
 
  const navigate = useNavigate()

  const volver = ()=>{
    navigate(-1)
  }

  const [counter, setCounter] = useState(0)

  return (
    <div>
        <h3>Id:{id}</h3>
        <p>Descripcion:{description}</p>
        <p>Precio: ${price}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid commodi inventore! Nulla dicta fugiat enim sequi ea, voluptatum tempora quod ut soluta, dignissimos doloribus facilis quo esse, perspiciatis minus?</p>
        <p>Categoria: {category}</p>
        <img src={image} alt={image} />
        <ItemCount max={stock} modify={setCounter} cantidad={counter}/>
        <Link to={`/detail/${id}`}><button>Comprar</button></Link>
        <button onClick={volver}>Volver</button> 
    </div>
  )
}



export default ItemDetail