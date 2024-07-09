import { providersArray } from "@/app/components/Providers";
import { Proveedor } from "@/app/components/ProvidersTable";
import { create } from "zustand";

interface ProviderStore {
  provider: Proveedor | null;
  setProvider: ({ codigo }: Proveedor) => void;
  setNullProvider:() => void;
}
export const useProviderStore = create<ProviderStore>((set) => ({
  provider: null,
  setProvider: ({ codigo }) => {
    const providerFound = providersArray.find(
      (provider) => provider.codigo === codigo
    );
    set({ provider: providerFound || null });
  },
  setNullProvider() {
      set({ provider: null });
  },
}));
