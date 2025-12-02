import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../store/cartSlice'
import { useNavigate } from 'react-router-dom'

export default function Checkout(){
  const items = useSelector(s=>s.cart.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')

  const handlePlace = (e)=>{
    e.preventDefault()
    alert('Order placed')
    dispatch(clearCart())
    navigate('/')
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handlePlace} className="space-y-3">
        <div>
          <label className="block">Name</label>
          <input value={name} onChange={e=>setName(e.target.value)} className="w-full border p-2" required/>
        </div>
        <div>
          <label className="block">Address</label>
          <textarea value={address} onChange={e=>setAddress(e.target.value)} className="w-full border p-2" required/>
        </div>
        <div>
          <h3 className="font-bold">Summary</h3>
          <ul className="list-disc list-inside">
            {items.map(i=> <li key={i.id}>{i.title} x {i.quantity}</li>)}
          </ul>
        </div>
        <button type="submit" className="px-4 py-2 bg-primary text-white rounded">Place Order</button>
      </form>
    </div>
  )
}
