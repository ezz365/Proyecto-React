import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { productos } from '../../data/stock'

export const CartScreen = () => {

    const {carrito, totalPrecio, borrarProducto, vaciarCarrito} = useContext(CartContext)

    return (
    <div className='container'>
    <h1>Detalle de la compra</h1>
    {
        carrito.map((productos) =>(
        <>
        <div>
        <hr/>
        <div className='listado'>
            <p>Producto {productos.description}</p>
            <p>$ {productos.price}</p>
            <p>Cantidad: {productos.counter}</p>
            <button onClick={()=> borrarProducto(productos.id)}>Borrar</button>
        </div>
        </div>
        <hr></hr>

        </>
        ))
    }
    <button onClick={vaciarCarrito}>Vaciar carrito</button>
    <strong>PRECIO: ${totalPrecio()}</strong>
    </div>
  )
}
