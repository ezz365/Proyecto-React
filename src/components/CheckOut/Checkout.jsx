import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export const Checkout = () => {
  
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
    }
  
    return (
    <div>
        <h3>Finalizar compra</h3>
        <hr/>

        <form onSubmit={controlEnvio}>
        <form>
            <label htmlFor="">Email</label><input onChange={(e)=>setEmail(e.target.value)} value={email}/>
        </form>
        <form>
            <label htmlFor="">Nombre</label><input onChange={(e)=>setNombre(e.target.value)} value={nombre} type='text'/>
        </form>
        <form>
            <label htmlFor="">Apellido</label><input onChange={(e)=>setApellido(e.target.value)} value={apellido} type='text'/>
        </form>
        <form>
            <label htmlFor="">Telefono</label><input onChange={(e)=>setTelefono(e.target.value)} value={telefono} type='number'/>
        </form>
        <button type='submit'>Finalizar</button>
        <Link to={`/cart`}><button>Volver al carrito</button></Link>
        </form>
    </div>
  )
}

export default Checkout