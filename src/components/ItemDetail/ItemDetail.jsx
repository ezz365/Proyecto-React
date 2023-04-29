import React from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, description, price, image, category}) => {
  return (
    <div>
        <h3>Id:{id}</h3>
        <p>Descripcion:{description}</p>
        <p>Precio: ${price}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid commodi inventore! Nulla dicta fugiat enim sequi ea, voluptatum tempora quod ut soluta, dignissimos doloribus facilis quo esse, perspiciatis minus?</p>
        <p>Categoria: {category}</p>
        <img src={image} alt={image} />
        <Link to={`/detail/${id}`}><button>Comprar</button></Link> 
    </div>
  )
}

export default ItemDetail