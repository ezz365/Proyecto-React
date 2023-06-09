import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ItemCount } from "../ItemCount/ItemCount"
import { CartContext } from '../context/CartContext'

const ItemDetail = ({id, name, description, price, image, category, stock}) => {

  const navigate = useNavigate()

  const volver = ()=>{
    navigate(-1)
  }

  const {añadirCarrito} = useContext(CartContext)

  const [counter, setCounter] = useState(0)

  const sumarAlCarrito = () =>{
    const nuevoItem = {
      id, 
      name,
      description, 
      image, 
      price, 
      category, 
      counter
    }
    console.log(nuevoItem)
    añadirCarrito(nuevoItem)
    }
  

  return (
    <div>
        <h3>Id: {name}</h3>
        <p>Descripcion: {description}</p>
        <p>Precio: ${price}</p>
        <p>Categoria: {category}</p>
        <img src={image} alt={image} />
        <ItemCount max={stock} modify={setCounter} cantidad={counter}/>
        <Link to={`/detail/${id}`}><button onClick={sumarAlCarrito}>Comprar</button></Link>
        <Link to={`/cart`}><button>Ir al carrito</button></Link>
        <button onClick={volver}>Volver</button> 
    </div>
  )
}



export default ItemDetail