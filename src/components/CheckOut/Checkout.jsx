import React, {useState, useContext} from 'react'
import {CartContext} from "../context/CartContext"
import { Link } from 'react-router-dom'
import {getFirestore} from "../../firebase/config"
import firebase from 'firebase'
import "firebase/firestore"
import Swal from 'sweetalert2'

export const Checkout = () => {
  
    const {carrito, totalPrecio, vaciarCarrito} = useContext(CartContext)
    const [email, setEmail] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const controlEnvio =(e)=>{
        e.preventDefault()
        console.log("Email: ", email)
        console.log("Nombre: ", nombre)
        console.log("Apellido: ", apellido)
        console.log("Telefono: ", telefono)

        const orden = {
            comprador: {
                email,
                nombre,
                apellido,
                telefono
            },
            producto: carrito,
            total_price: totalPrecio(),
            data: firebase.firestore.Timestamp.fromDate(new Date())
        }
        console.log(orden)

        const db = getFirestore()
        const ordenes = db.collection("ordenes")
        ordenes.add(orden)
            .then((res)=>{
                Swal.fire({
                    title: 'Pedido completado con exito!',
                    text: `Su orden de compra es: ${res.id}`,
                    icon: 'exitoso',
                    willClose: () =>{
                        vaciarCarrito()
                    },
                    confirmButtonText: 'Aceptar'
                  })
            })
            .finally(()=>{
                console.log("Operacion realizada")
            })
            carrito.forEach((producto)=>{
                const docRef = db.collection("productos").doc(producto.id)
                docRef.get()
                    .then((doc)=>{
                    docRef.update({stock: doc.data().stock -producto.counter})
                    })
            })
    }

    return (
    <div>
        <h3>Finalizar compra</h3>
        <hr/>

        <form onSubmit={controlEnvio}>

        <form>
            <label htmlFor="" class="form-control">Email:   <input onChange={(e)=>setEmail(e.target.value)} value={email}/></label>
            <label htmlFor="" class="form-control">Nombre: <input onChange={(e)=>setNombre(e.target.value)} value={nombre} type='text'/></label>
            <label htmlFor="" class="form-control">Apellido: <input onChange={(e)=>setApellido(e.target.value)} value={apellido} type='text'/></label>
            <label htmlFor="" class="form-control">Telefono<input onChange={(e)=>setTelefono(e.target.value)} value={telefono} type='number'/></label>
        </form>
        <button type='submit'>Finalizar</button>
        <Link to={`/cart`}><button>Volver al carrito</button></Link>
        </form>
        
    </div>
  )
}

export default Checkout