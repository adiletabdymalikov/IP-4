import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './products';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p><strong>Цена:</strong> {product.price} руб.</p>
      <p><strong>Категория:</strong> {product.category}</p>
      <p><strong>Бренд:</strong> {product.brand}</p>
      <p><strong>На складе:</strong> {product.stock} шт.</p>
    </div>
  );
};

export default ProductDetails;