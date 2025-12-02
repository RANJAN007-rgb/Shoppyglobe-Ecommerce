import React from 'react'
import ProductList from '../components/ProductList'
import HeroBanner from './Hero'
export default function Home(){
  return (
    <div>
  <div className="container mx-auto space-y-10">

    {/* AMAZON STYLE HERO BANNER */}
    <HeroBanner />
      {/* <div className="mb-6">
        <h1 className="text-3xl font-bold">Trending Products</h1>
        <p className="text-gray-600 mt-1">Handpicked products from dummyjson for demonstration.</p>
      </div> */}
      <ProductList />
    </div>
    </div>
    
  )
}
