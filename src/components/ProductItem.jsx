import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../store/cartSlice'

export default function ProductItem({product}){
  const dispatch = useDispatch()
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition p-4 flex flex-col">
      <Link to={`/product/${product.id}`} className="block">
        <img loading="lazy" src={product.thumbnail} alt={product.title} className="w-full h-44 object-cover rounded-md"/>
      </Link>
      <div className="mt-3 flex-1">
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">{product.description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-primary font-bold">₹{product.price}</div>
        <button onClick={()=>dispatch(addItem({id:product.id, title:product.title, price:product.price, thumbnail:product.thumbnail}))} className="px-3 py-1 bg-primary text-white rounded">Add</button>
      </div>
    </div>
  )
}
