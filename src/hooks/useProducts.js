import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useProducts(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    let mounted = true
    setLoading(true)
    axios.get('https://dummyjson.com/products')
      .then(res=>{
        if(mounted){
          setProducts(res.data.products || [])
          setLoading(false)
        }
      })
      .catch(err=>{
        if(mounted){
          setError('Failed to load products. Please check your connection.')
          setLoading(false)
        }
      })
    return ()=> mounted = false
  },[])

  return { products, loading, error }
}
