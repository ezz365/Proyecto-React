import React, {useState} from "react";

export const ItemCount = () =>{

    const [counter, setCounter] = useState(0)

    const sumar = () =>{
        setCounter (counter +1)
    }
    const restar = () =>{
        if(counter >0){
            setCounter(counter -1)
        }
    }
    const resetear =()=>{
        setCounter(0)
    }

    return(
        <>
        <h3>Cantidad: {counter}</h3>
        <div className= "btn">
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={resetear}>Reset</button>

        </div>
        </>
    )
}