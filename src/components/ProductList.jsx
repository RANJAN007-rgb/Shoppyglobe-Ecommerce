import React from "react";
import useProducts from "../hooks/useProducts";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const { products, loading, error } = useProducts();

  if (loading) return <div className="text-center py-16">Loading products...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div>
      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductItem key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
