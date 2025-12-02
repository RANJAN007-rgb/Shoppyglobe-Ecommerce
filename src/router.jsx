import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const AppLayout = lazy(() => import('./pages/AppLayout'))
const Home = lazy(() => import('./pages/Home'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const Cart = lazy(() => import('./pages/Cart'))
const Checkout = lazy(() => import('./pages/Checkout'))
const NotFound = lazy(() => import('./pages/NotFound'))

const router = createBrowserRouter([
  { path: '/', element: <Suspense fallback={<div>Loading...</div>}><AppLayout/></Suspense>, children: [
    { index: true, element: <Suspense fallback={<div>Loading...</div>}><Home/></Suspense> },
    { path: 'product/:id', element: <Suspense fallback={<div>Loading...</div>}><ProductDetail/></Suspense> },
    { path: 'cart', element: <Suspense fallback={<div>Loading...</div>}><Cart/></Suspense> },
    { path: 'checkout', element: <Suspense fallback={<div>Loading...</div>}><Checkout/></Suspense> },
    { path: '*', element: <Suspense fallback={<div>Loading...</div>}><NotFound/></Suspense> },
  ] }
])

export default router
