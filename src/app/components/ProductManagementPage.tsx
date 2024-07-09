"use client";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import {
  productsAOTC,
  gamingProductsIHC,
  regularProductsMDC,
  Product,
} from "@/data/products"; // Ajusta la ruta según tu proyecto
import useUpdateInventory from "@/hooks/useUpdateInventory";
import { usePurchaseOrderStore } from "@/store/usaePurcOrderStore";

const ProductManagementPage = () => {
  const purchaseOrder = usePurchaseOrderStore((state) => state.purchaseOrder);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedSupplier, setSelectedSupplier] = useState<string>("");
  useEffect(() => {
    purchaseOrder.forEach((order) => {
      useUpdateInventory(order.purchaseOrder);
    });
  }, [purchaseOrder]);
  // Función para filtrar los productos según el término de búsqueda y el proveedor seleccionado
  const filterProducts = (products: Product[]) => {
    let filteredProducts = [...products];

    // Filtrar por término de búsqueda en la descripción
    if (searchTerm.trim() !== "") {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.description &&
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredProducts;
  };

  // Obtener la lista de productos filtrados
  const filteredProducts = filterProducts([
    ...productsAOTC,
    ...gamingProductsIHC,
    ...regularProductsMDC,
  ]);

  return (
    <div className="w-full flex gap-10 flex-col">
      <div className="">
        <h1>Gestión de Productos</h1>

        {/* Controles de búsqueda y filtro */}
        <div className="w-full flex justify-between">
          <input
            type="text"
            placeholder="Buscar por descripción"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[450px] py-2 px-3 border"
          />
          <select
            value={selectedSupplier}
            onChange={(e) => setSelectedSupplier(e.target.value)}
            className="w-[450px] py-2 px-3 border"
          >
            <option value="">Todos los proveedores</option>
            <option value="AOTC">
              AMERICAN OVERSEAS TRANDING CORP. (AOTC)
            </option>
            <option value="IHC">INTERNATIONAL HEARING COMPONENTS. (IHC)</option>
            <option value="MDC">MANUFACTURERA CONTINENTAL S.A DE. (MDC)</option>
          </select>
        </div>
      </div>

      {/* Mostrar la lista de productos filtrados en la tabla */}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ProductManagementPage;
