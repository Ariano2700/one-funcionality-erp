import { Warehouse } from "@/app/components/Warehouse";
import {
  warehouseListAOTC,
  warehouseListIHC,
  warehouseListMDC,
} from "@/data/warehouses";
import { create } from "zustand";
interface WarehouseStore {
  warehouse: Warehouse | null;
  setWarehouse: ({ codigo }: Warehouse, providerId: string) => void;
  setNullWarehouse: () => void;
}

export const useWarehouseStore = create<WarehouseStore>((set) => ({
  warehouse: null,
  // providerId:null,
  setWarehouse: ({ codigo }, providerId) => {
    let switchWarehouse: Warehouse[] = [];
    switch (providerId) {
      case "AOTC":
        switchWarehouse = warehouseListAOTC;
        break;
      case "IHC":
        switchWarehouse = warehouseListIHC;
        break;
      case "MDC":
        switchWarehouse = warehouseListMDC;
        break;
    }
    const providerFound = switchWarehouse.find(
      (warehouse) => warehouse.codigo === codigo
    );
    set({ warehouse: providerFound || null });
  },
  setNullWarehouse() {
    set({ warehouse: null });
  },
  // setProviderId(id) {
  //     set({ providerId: id });
  // },
}));
