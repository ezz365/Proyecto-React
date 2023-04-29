import React from 'react'
import { productos } from '../../data/stock'
import { Item } from '../Item/Item'

export const ItemList = ({productos=[]}) => {
  return (
    <div>
        <h3>Productos</h3>
        {productos.map((producto) => <Item{...producto} key={producto.id}/>)}




    </div>
  )
}
