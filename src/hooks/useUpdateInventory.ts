import {
  Product,
  productsAOTC,
  gamingProductsIHC,
  regularProductsMDC,
} from "@/data/products"; // Asegúrate de importar correctamente
import { PurchaseOrderI } from "@/store/usaePurcOrderStore";
const updateInventory = (ordenCompra: PurchaseOrderI["purchaseOrder"]) => {
  ordenCompra.forEach((item) => {
    const codigoProducto = item.articulo.toString(); // Suponiendo que 'articulo' es el código del producto
    const cantidadComprada = item.cantidad;

    // Determinar en qué array de productos está el producto comprado
    let productosArray: Product[];
    if (codigoProducto.startsWith("1")) {
      productosArray = productsAOTC;
    } else if (codigoProducto.startsWith("2")) {
      productosArray = gamingProductsIHC;
    } else if (codigoProducto.startsWith("3")) {
      productosArray = regularProductsMDC;
    } else {
      return; // Manejar caso no encontrado o agregar más condiciones según necesidad
    }

    // Actualizar la existencia del producto
    const producto = productosArray.find(
      (prod) => prod.codigo === parseInt(codigoProducto, 10)
    );

    // Verificar si se encontró el producto
    if (producto) {
      // Asegurar que existencia sea un número
      if (typeof producto.existencia === "number") {
        // Sumar la cantidad comprada, asegurándote de que existencia sea tratado como número
        producto.existencia = Number(producto.existencia) + cantidadComprada;
      } else {
        // Si existencia no es un número, manejar el caso según sea necesario
        console.error(`Existencia no es un número para el producto:`, producto);
      }
    } else {
      console.error(`Producto no encontrado con código:`, codigoProducto);
    }
  });
};

export default updateInventory;
