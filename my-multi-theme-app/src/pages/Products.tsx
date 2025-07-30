// src/pages/ProductList.tsx
import React, { useEffect, useState } from 'react';
import './Products.css';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loader">Loading products...</div>;

  return (
    <div className="product-container">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>
            <p className="description">{product.description.slice(0, 100)}...</p>
            <button>View More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
