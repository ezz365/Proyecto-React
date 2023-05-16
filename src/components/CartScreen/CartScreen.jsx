import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

export const CartScreen = () => {

    const {carrito, totalPrecio, borrarProducto, vaciarCarrito} = useContext(CartContext)

    return (
    <div className='container'>
    {
        carrito.length === 0
        ? 
        <>
            <h3>Carrito vacio</h3>
            <Link to="/">Volver a comprar</Link>
        </>
        : 
        <>
        <h3>Detalle de la compra</h3>
        {
            carrito.map((productos) =>(
            <>
            <div>
            <hr/>
            <div className='listado'>
                <p>Producto {productos.description}</p>
                <img src={productos.image} alt={productos.image} />
                <p>$ {productos.price}</p>
                <p>Cantidad: {productos.counter}</p>
                <button onClick={()=> borrarProducto(productos.id)}>Borrar</button>
            </div>
            </div>
            <hr/>

            </>
            ))
        }
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
        <hr/>
        <strong>PRECIO: ${totalPrecio()}</strong>
        <hr/>
        <Link to={"/checkout"}><button>Finalizar compra</button></Link>
        </>
    }
    </div>
  )
}
