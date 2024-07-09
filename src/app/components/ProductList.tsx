import { Product } from '@/data/products';
import React from 'react';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list">
      <table className="w-full">
        <thead className="bg-blue-600 text-white font-bold">
          <tr>
            <th className="py-2 px-4">Código</th>
            <th className="py-2 px-4">Descripción</th>
            <th className="py-2 px-4">Precio</th>
            <th className="py-2 px-4">Existencia</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="text-center">
              <td className="px-4 py-2">{product.codigo}</td>
              <td className="px-4 py-2">{product.description}</td>
              <td className="px-4 py-2">{product.precio}</td>
              <td className="px-4 py-2">{product.existencia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
