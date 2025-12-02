import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart } from "./icons";
import logo from "../assets/logo.png"; // <-- Your logo

export default function Header() {
  const cartCount = useSelector((s) => s.cart.items.length);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md">
      
      {/* TOP NAV (Logo + Search + Cart) */}
      <div className="bg-[#131921] text-white">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">

          {/* Left section: Logo + Hamburger (mobile) */}
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-white text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img 
                src={logo} 
                alt="Shoppy Logo" 
                className="w-10 h-10 object-contain drop-shadow-lg"
              />
              <span className="text-[1.8rem] font-semibold tracking-wide">
                <span className="text-white">shoppy</span>
                <span className="text-[#ff5252]">Globe</span>
              </span>
            </Link>
          </div>

          {/* SEARCH BAR: Desktop Only */}
          <div className="hidden md:flex flex-1 mx-6">
            <div className="flex items-center w-full bg-white rounded overflow-hidden shadow">
              <div className="px-3 bg-gray-100 text-black font-medium">All</div>
              <input
                type="text"
                className="w-full px-3 py-2 text-black outline-none"
                placeholder="Search for products..."
              />
              <button className="bg-[#febd69] px-4 py-2 text-black font-bold">
                🔍
              </button>
            </div>
          </div>

          {/* Right section: Cart */}
          <div className="flex items-center gap-6">
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-7 h-7 text-white" />
              <span className="absolute -top-2 -right-3 bg-[#ff5252] text-white text-xs px-2 rounded-full">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* SECOND NAV BAR (Categories) */}
      <div className="bg-[#232f3e] text-white hidden md:flex gap-6 px-4 py-2">
        <Link to="/" className="hover:text-[#ff5252]">Home</Link>

        <div className="relative group">
          <button className="hover:text-[#ff5252]">Categories ▾</button>
          <div className="absolute hidden group-hover:block bg-white text-black shadow-lg mt-2 rounded p-3 w-40 space-y-2">
            <Link className="block hover:text-primary" to="/category/beauty">Beauty</Link>
            <Link className="block hover:text-primary" to="/category/health">Health</Link>
            <Link className="block hover:text-primary" to="/category/grocery">Grocery</Link>
          </div>
        </div>

        <Link to="/checkout" className="hover:text-[#ff5252]">Checkout</Link>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#232f3e] text-white p-4 space-y-4">

          <input
            className="w-full bg-white text-black rounded px-3 py-2"
            placeholder="Search products..."
          />

          <details className="border border-gray-700 rounded p-3">
            <summary className="cursor-pointer">Categories</summary>
            <div className="mt-2 space-y-2 pl-3">
              <Link to="/category/beauty" className="block hover:text-[#ff5252]">
                Beauty
              </Link>
              <Link to="/category/health" className="block hover:text-[#ff5252]">
                Health
              </Link>
              <Link to="/category/grocery" className="block hover:text-[#ff5252]">
                Grocery
              </Link>
            </div>
          </details>

          <Link className="block hover:text-[#ff5252]" to="/">Home</Link>
          <Link className="block hover:text-[#ff5252]" to="/cart">Cart ({cartCount})</Link>
          <Link className="block hover:text-[#ff5252]" to="/checkout">Checkout</Link>

        </div>
      )}
    </header>
  );
}

