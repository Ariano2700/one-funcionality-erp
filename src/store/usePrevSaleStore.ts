import { Proveedor } from "@/app/components/ProvidersTable";
import { create } from "zustand";
import { Row } from "./useCompraStore";
import { Warehouse } from "@/app/components/Warehouse";
import { persist } from "zustand/middleware";
import { FolioI } from "@/data/products";

export interface PrevSaleI {
  prevCompra: Row[];
  provedor: Proveedor | null;
  almacen: Warehouse | null;
  fecha: string;
  subTotal: number;
  ivg: number;
  total: number;
  folio: FolioI | undefined;
}

interface PrevSaleStore {
  prevSale: PrevSaleI[];
  setPrevSale: (data: PrevSaleI) => void;
  setNullPrevSale: () => void;
}
export const usePrevSaleStore = create<PrevSaleStore>()(
  persist((set) => ({
    prevSale: [],
    setPrevSale(data) {
      set((state) => ({ prevSale: [...state.prevSale, data] }));
    },
    setNullPrevSale: () => set({ prevSale: [] }),
  }),
{
  name: "prev-sale-store",
}  
)
);
