

import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-8">
      <div className="container mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Brand Section */}
        <div>
          <h4 className="font-bold text-lg">ShoppyGlobe</h4>
          <p className="mt-2 text-sm">
            Modern, responsive e-commerce demo built with React, Vite & Tailwind.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h5 className="font-semibold">Quick Links</h5>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link className="hover:text-primary" to="/">Home</Link></li>
            <li><Link className="hover:text-primary" to="/cart">Cart</Link></li>
            <li><Link className="hover:text-primary" to="/checkout">Checkout</Link></li>
          </ul>
        </div>

        {/* Contact and Social */}
        <div>
          <h5 className="font-semibold">Connect</h5>
          
          <ul className="mt-3 space-y-2 text-sm">

            {/* Email */}
            <li>
              <a
                href="mrout2966@gmail.com"
                className="hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                📧 Email: mrout2966@gmail.com
              </a>
            </li>

            {/* LinkedIn */}
            <li>
              <a
                href="https://www.linkedin.com/in/manoranjan-rout-8a3660261/"
                className="hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                💼 LinkedIn Profile
              </a>
            </li>

            {/* GitHub */}
            <li>
              <a
                href="https://github.com/RANJAN007-rgb"
                className="hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                🐙 GitHub Repository
              </a>
            </li>
          </ul>

          <p className="text-xs mt-4 text-gray-400">© {new Date().getFullYear()} ShoppyGlobe</p>
        </div>
      </div>
    </footer>
  );
}
