import { Proveedor } from "@/app/components/ProvidersTable";
import { create } from "zustand";
import { Row } from "./useCompraStore";
import { Warehouse } from "@/app/components/Warehouse";
import { persist } from "zustand/middleware";

export interface PurchaseOrderI {
  purchaseOrder: Row[];
  provedor: Proveedor | null;
  almacen: Warehouse | null;
  fecha: string;
  subTotal: number;
  ivg: number;
  total: number;
  folio: string | undefined;
}

interface PurchaseOrderStore {
  purchaseOrder: PurchaseOrderI[];
  setPurchaseOrder: (data: PurchaseOrderI) => void;
  setNullPurchaseOrder: () => void;
}
export const usePurchaseOrderStore = create<PurchaseOrderStore>()(
  persist(
    (set) => ({
      purchaseOrder: [],
      setPurchaseOrder(data) {
        set((state) => ({ purchaseOrder: [...state.purchaseOrder, data] }));
      },
      setNullPurchaseOrder() {
        set({ purchaseOrder: [] });
      },
    }),
    {
      name: "purc-sale-store",
    }
  )
);
