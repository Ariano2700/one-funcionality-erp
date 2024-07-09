import {
  Product,
  productsAOTC,
  gamingProductsIHC,
  regularProductsMDC,
} from "@/data/products";
import { create } from "zustand";

interface ProductStore {
  product: Product | null;
  setProdcut: ({ codigo }: Product, providerId: string) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  product: null,
  setProdcut({ codigo }, providerId) {
    let switchProd: Product[] = [];
    switch (providerId) {
      case "AOTC":
        switchProd = productsAOTC;
        break;
      case "IHC":
        switchProd = gamingProductsIHC;
        break;
      case "MDC":
        switchProd = regularProductsMDC;
        break;
    }
    const producFound = switchProd.find(
      (products) => products.codigo === codigo
    );
    set({ product: producFound || null });
  },
}));
