import React from 'react'
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./item.css"

export const Item = ({id, name, description, price, image, category}) => {
  const cardStyle = {
    width: '18rem',
    color: "white",
    background: "#26252d"
  };

  return (
    <main className='flex'>
    <div className="card style" style={cardStyle}>
    <div>
        <h3>{name}</h3>
        <p>Descripcion: {description}</p>
        <p>Precio: ${price}</p>
        <p>Categoria: {category}</p>
        <img src={image} alt={image} />
        <p><Link to={`/detail/${id}`}><button>Comprar</button></Link></p>
    </div></div>
    </main>
  )
}
