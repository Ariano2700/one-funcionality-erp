"use client";
import MdiFolderSearchOutline from "@/components/icons/material_design_icons/MdiFolderSearchOutline";
import MaterialSymbolsSearch from "@/components/icons/material_symbols/MaterialSymbolsSearch";
import PhPencil from "@/components/icons/phosphor/PhPencil";
import TablerCheck from "@/components/icons/tabler_icons/TablerCheck";
import TablerMinus from "@/components/icons/tabler_icons/TablerMinus";
import TablerPlus from "@/components/icons/tabler_icons/TablerPlus";
import useGetTimeFormated from "@/hooks/useGetTimeFormate";
import { useEffect, useState } from "react";
import ProvidersTable, { Proveedor } from "./ProvidersTable";
import { useProviderStore } from "@/store/useProviderStore";

const ProveedoresForm = () => {
  const [openDialog, setOpenDialog] = useState<Boolean>(false);

  const provider = useProviderStore((state) => state.provider);
  useEffect(() => {
    if (provider) {
      console.log(provider);
    } else {
      console.log("no proveider");
    }
  }, [provider]);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <div className="p-4 border border-gray-300 rounded-lg w-full mx-auto font-sans">
      <h1 className="text-2xl font-bold">Proveedores</h1>
      <div className="text-right mb-4">
        <button
          onClick={handleOpenDialog}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          EXISTENTE
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1">Código</label>
          <input
            value={provider !== null ? provider.codigo : ""}
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Nombre</label>
          <input
            value={provider !== null ? provider.nombre : ""}
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1">C. Postal</label>
          <input
            value={provider !== null ? provider.cPostal : ""}
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Calle</label>
          <input
            value={provider !== null ? provider.calle : ""}
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1">N. Ext</label>
          <input
            value={provider !== null ? provider.nExt : ""}
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">N. Int</label>
          <input
            value={provider !== null ? provider.nInt : ""}
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1">Municipio</label>
          <input
            value={provider !== null ? provider.municipio : ""}
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Colonia</label>
          <input
            value={provider !== null ? provider.colonia : ""}
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1">Estado</label>
          <input
            value={provider !== null ? provider.estado : ""}
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Ciudad</label>
          <input
            value={provider !== null ? provider.ciudad : ""}
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1">Persona física?</label>
          <input
            type="checkbox"
            className="mt-2"
            checked={provider !== null ? provider.personaFisica : false}
          />
        </div>
        <div>
          <label className="block mb-1">RFC</label>
          <input
            value={provider !== null ? provider.rfc : ""}
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1">País</label>
          <input
            value={provider !== null ? provider.pais : ""}
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">CURP</label>
          <input
            value={provider !== null ? provider.curp : ""}
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1">Contactos</label>
          <input
            value={provider !== null ? provider.contactos : ""}
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Teléfonos</label>
          <input
            value={provider !== null ? provider.telefono : ""}
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <div className="flex justify-between py-4 items-center">
        <div className="flex justify-between w-1/2">
          <button className="text-2xl p-2 bg-green-600 hover:bg-green-700 rounded-full transition-all duration-300 text-white">
            <TablerPlus />
          </button>
          <button className="text-2xl p-2 bg-red-400 hover:bg-red-600 rounded-full transition-all duration-300 text-white">
            <TablerMinus />
          </button>
          <button className="text-2xl p-2 hover:bg-slate-200 transition-all duration-300 rounded-md">
            <PhPencil />
          </button>
          <button className="text-2xl p-2 hover:bg-slate-200 rounded-md transition-all duration-300">
            <MaterialSymbolsSearch />
          </button>
          <button className="text-2xl p-2 hover:bg-slate-200 rounded-md transition-all duration-300 text-lime-600">
            <TablerCheck className="font-bold text-2xl" />
          </button>
          <button className="text-2xl p-2 hover:bg-slate-200 rounded-md transition-all duration-300 text-yellow-500">
            <MdiFolderSearchOutline />
          </button>
        </div>
        <div className="">{useGetTimeFormated().dayFormated}</div>
      </div>
      {openDialog && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <ProvidersTable
            setOpenDialog={() => setOpenDialog(false)}
            onClickOut={handleClose}
            proveedores={providersArray}
          />
        </div>
      )}
    </div>
  );
};
export const providersArray: Proveedor[] = [
  {
    nombre: "AMERICAN OVERSEAS TRANDING CORP.",
    codigo: "AOTC",
    ciudad: "Nueva orleans",
    telefono: 4881311,
    cPostal: "70112",
    calle: "Canal St",
    nExt: "123",
    nInt: "A",
    municipio: "Orleans Parish",
    colonia: "Central Business District",
    estado: "Louisiana",
    personaFisica: false,
    rfc: "AOTC700101XXX",
    pais: "USA",
    curp: "AOTC700101HNTRRR01",
    contactos: "John Doe",
  },
  {
    nombre: "INTERNATIONAL HEARING COMPONENTS",
    codigo: "IHC",
    cPostal: "55125",
    calle: "Hudson Rd",
    nExt: "456",
    nInt: "B",
    municipio: "Washington County",
    colonia: "Oakdale",
    estado: "Minnesota",
    personaFisica: true,
    rfc: "IHC750101XXX",
    pais: "USA",
    curp: "IHC750101HWTXXX02",
    contactos: "Jane Smith",
  },
  {
    nombre: "MANUFACTURERA CONTINENTAL S.A DE",
    codigo: "MDC",
    ciudad: "ZOPONAN",
    cPostal: "45110",
    calle: "Av. Patria",
    nExt: "789",
    nInt: "C",
    municipio: "Zapopan",
    colonia: "Jardines del Sol",
    estado: "Jalisco",
    personaFisica: false,
    rfc: "MDC800101XXX",
    pais: "México",
    curp: "MDC800101HJZXXX03",
    contactos: "Carlos Perez",
  },
];
export default ProveedoresForm;
