import { Proveedor } from "@/app/components/ProvidersTable";
import { Warehouse } from "@/app/components/Warehouse";
import { create } from "zustand";

export interface Row {
  cantidad: number;
  articulo: string;
  descripcion: string;
  costo: number;
}
interface CompraState {
  rows: Row[];
  provider: Proveedor | null;
  warehouse: Warehouse | null;
}

interface CompraStore {
  compraState: CompraState;
  setCompraState: (state: Partial<CompraState>) => void;
  resetCompraState: () => void;
}

const useCompraStore = create<CompraStore>((set) => ({
  compraState: {
    rows: [
      {
        cantidad: 0,
        articulo: "",
        descripcion: "",
        costo: 0.0,
      },
    ],
    provider: null,
    warehouse: null,
  },
  setCompraState: (state) =>
    set((prevState) => ({
      compraState: {
        ...prevState.compraState,
        ...state,
      },
    })),
  resetCompraState: () =>
    set({
      compraState: {
        rows: [
          {
            cantidad: 0,
            articulo: "",
            descripcion: "",
            costo: 0.0,
          },
        ],
        provider: null,
        warehouse: null,
      },
    }),
}));

export default useCompraStore;
