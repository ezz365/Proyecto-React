import {createContext, useEffect} from "react";
import { useState } from "react";

export const CartContext = createContext()

const init = (() => {
    try {
      return JSON.parse(localStorage.getItem("carrito")) || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  })();
  
export const CartProvider = ({children})=>{

    const[carrito, setCarrito] = useState(init)

    useEffect(()=>{
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])


    console.log(carrito)

    const añadirCarrito = (productos) =>{
        setCarrito([...carrito, productos])
    }

    const calculoCantidad = () =>{
        return carrito.reduce((acc, productos) => acc + productos.counter, 0)
    }

    const totalPrecio = () =>{
        return carrito.reduce((acc, productos) => acc + productos.price * productos.counter, 0)         
    }

    const borrarProducto = (productoId)=>{
        const nuevoCarrito = carrito.filter((productos)=> productos.id !== productoId)
        setCarrito(nuevoCarrito)
    }
    
    const vaciarCarrito = () =>{
        setCarrito([])
    }

    return(
        <CartContext.Provider value={{
            añadirCarrito,
            calculoCantidad,
            borrarProducto,
            totalPrecio,
            carrito,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}