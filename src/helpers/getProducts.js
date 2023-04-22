import { productos } from "../data/stock"

export const getProducts = () =>{
    return new Promise ((resolve, reject)=>{
        setTimeout(() =>{
            resolve(productos)
            reject("Rechazado")
        },2000)
    })
}