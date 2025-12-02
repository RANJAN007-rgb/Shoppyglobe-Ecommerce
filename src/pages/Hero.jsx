import React from "react";
import sofa from "../assets/sofa.jpg"; // your uploaded image

export default function HeroBanner() {
  return (
    <div
      className="w-full h-[320px] md:h-[420px] bg-cover bg-center relative rounded-xl overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url(${sofa})`,
      }}
    >
      {/* AMAZON-STYLE DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

      {/* TEXT */}
      <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-10 text-white">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          Trending Products
        </h1>
        <p className="mt-3 text-lg md:text-xl font-light drop-shadow">
          Handpicked products from dummyjson which look good.
        </p>
      </div>
    </div>
  );
}
