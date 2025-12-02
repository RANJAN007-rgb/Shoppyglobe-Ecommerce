import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NotFound(){
  const loc = useLocation()
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2 text-gray-600">No match for <code className="bg-gray-100 px-2 py-1 rounded">{loc.pathname}</code></p>
      <div className="mt-4">
        <Link to="/" className="text-primary">Go to Home</Link>
      </div>
    </div>
  )
}
