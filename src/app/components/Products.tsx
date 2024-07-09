"use client";
import { Product } from "@/data/products";
import {
  productsAOTC,
  gamingProductsIHC,
  regularProductsMDC,
} from "@/data/products";
import { useState } from "react";
interface ProductTableProps {
  onClickOut?: () => void;
  setOpenDialog?: (open: boolean) => void;
  getProviderId?: string;
  onProductSelect: (product: Product) => void;
}

const ProductTable = ({
  onClickOut,
  setOpenDialog,
  onProductSelect,
  getProviderId,
  }: ProductTableProps) => {
  let switchProducts: Product[] = [];

  switch (getProviderId) {
    case "AOTC":
      switchProducts = productsAOTC;
      break;
    case "IHC":
      switchProducts = gamingProductsIHC;
      break;
    case "MDC":
      switchProducts = regularProductsMDC;

      break;
  }

  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);

  const handleRowClick = (index: number) => {
    setSelectedRowIndex(index);
  };

  const handleRowDoubleClick = (product: Product) => {
    onProductSelect(product);
    if (setOpenDialog) setOpenDialog(false);
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLTableRowElement>,
    product: Product
  ) => {
    if (event.key === "Enter") {
      onProductSelect(product);
      if (setOpenDialog) setOpenDialog(false);
    }
  };

  return (
    <div className="p-4 rounded-lg w-3/4 mx-auto font-sans">
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="w-full bg-white border border-gray p-5 rounded-lg shadow-lg text-black relative z-10">
        <div className="text-right mb-4">
          <button
            onClick={onClickOut}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Salir
          </button>
        </div>

        <table className="w-full">
          <thead className="bg-blue-600 text-white font-bold">
            <tr>
              <th className="py-2 px-4">Descripción</th>
              <th className="py-2 px-4">Código</th>
              <th className="py-2 px-4">Precio</th>
              <th className="py-2 px-4">Existencia</th>
            </tr>
          </thead>
          <tbody>
            {switchProducts.map((product, index) => (
              <tr
                key={index}
                className={`text-center ${
                  selectedRowIndex === index ? "bg-blue-400" : ""
                }`}
                onClick={() => handleRowClick(index)}
                onDoubleClick={() => handleRowDoubleClick(product)}
                onKeyDown={(event) => handleKeyPress(event, product)}
                tabIndex={0}
              >
                <td className="px-4 py-2">{product.description}</td>
                <td className="px-4 py-2">{product.codigo}</td>
                <td className="px-4 py-2">
                  S/
                  {product.precio !== undefined
                    ? product.precio.toFixed(2)
                    : product.precio}
                </td>
                <td className="px-4 py-2">{product.existencia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ProductTable;
