import React from 'react'
import {Link} from "react-router-dom"

export const Item = ({id, description, price, image, category}) => {
  return (
    <div>
        <h3>Id:{id}</h3>
        <p>Descripcion:{description}</p>
        <p>Precio: ${price}</p>
        <p>Categoria: {category}</p>
        <img src={image} alt={image} />
        <Link to={`/detail/${id}`}><button>Comprar</button></Link> 
    </div>
  )
}
