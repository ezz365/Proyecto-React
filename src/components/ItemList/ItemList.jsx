import React from 'react'
import lionhardsLogo from "../../assets/lionhards.jpg"
import { Item } from '../Item/Item'
import "./ItemList.css"

export const ItemList = ({productos=[]}) => {
  return (
    <div className='flexing'>
        <img src={lionhardsLogo}/>
        {productos.map((producto) => <Item{...producto} key={producto.id}/>)}
    </div>
  )
}
