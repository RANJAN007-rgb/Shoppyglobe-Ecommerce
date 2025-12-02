import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addItem } from '../store/cartSlice'

export default function ProductDetail(){
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{
    let mounted = true
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res=>{ if(mounted) setProduct(res.data) })
      .catch(err=>{ if(mounted) setError('Failed to load product details.') })
    return ()=> mounted = false
  },[id])

  if(error) return <div className="text-red-600">{error}</div>
  if(!product) return <div>Loading product...</div>

  return (
    <div className="max-w-3xl mx-auto bg-white rounded p-6 shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={product.thumbnail} alt={product.title} className="w-full h-64 object-cover rounded"/>
        <div>
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <div className="mt-4">
            <div className="text-xl font-bold text-primary">₹{product.price}</div>
            <div className="mt-3 flex gap-2">
              <button onClick={()=>{ dispatch(addItem({id:product.id, title:product.title, price:product.price, thumbnail:product.thumbnail})); navigate('/cart') }} className="px-4 py-2 bg-primary text-white rounded">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
