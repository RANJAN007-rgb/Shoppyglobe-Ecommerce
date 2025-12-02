import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, incrementQty, decrementQty } from '../store/cartSlice'
import { Link } from 'react-router-dom'

export default function Cart(){
  const items = useSelector(s=>s.cart.items)
  const dispatch = useDispatch()
  const total = items.reduce((s,i)=>s + i.price * i.quantity,0)
  if(items.length===0) return <div className="text-center py-12">Your cart is empty. <Link to="/" className="text-primary">Go Shopping</Link></div>
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <ul className="space-y-4">
        {items.map(item=>(
          <li key={item.id} className="flex items-center gap-4 bg-white p-4 rounded shadow">
            <img src={item.thumbnail} alt={item.title} className="w-24 h-24 object-cover rounded"/>
            <div className="flex-1">
              <div className="font-semibold">{item.title}</div>
              <div className="text-sm text-gray-500">₹{item.price}</div>
              <div className="mt-2 flex items-center gap-2">
                <button onClick={()=>dispatch(decrementQty(item.id))} className="px-2 border rounded">-</button>
                <span>{item.quantity}</span>
                <button onClick={()=>dispatch(incrementQty(item.id))} className="px-2 border rounded">+</button>
                <button onClick={()=>dispatch(removeItem(item.id))} className="ml-4 text-red-600">Remove</button>
              </div>
            </div>
            <div className="text-right font-bold">₹{item.price * item.quantity}</div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex justify-between items-center">
        <div className="text-xl font-bold">Total: ₹{total}</div>
        <Link to="/checkout" className="px-4 py-2 bg-primary text-white rounded">Checkout</Link>
      </div>
    </div>
  )
}
