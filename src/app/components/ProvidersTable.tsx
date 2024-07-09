"use client";

import { useProviderStore } from "@/store/useProviderStore";
import { useState } from "react";

export interface Proveedor {
  nombre: string;
  codigo: string;
  ciudad?: string;
  telefono?: number;
  cPostal?: string;
  calle?: string;
  nExt?: string;
  nInt?: string;
  municipio?: string;
  colonia?: string;
  estado?: string;
  personaFisica?: boolean;
  rfc?: string;
  pais?: string;
  curp?: string;
  contactos?: string;
}

interface ProvidersTableProps {
  proveedores: Proveedor[];
  onClickOut?: () => void;
  setOpenDialog?: (open: boolean) => void;
}

const ProvidersTable = ({
  proveedores,
  onClickOut,
  setOpenDialog,
}: ProvidersTableProps) => {
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);

  const setProvider = useProviderStore((state) => state.setProvider);

  const handleRowClick = (index: number) => {
    setSelectedRowIndex(index);
  };

  const handleRowDoubleClick = (proveedor: Proveedor) => {
    setProvider({ codigo: proveedor.codigo, nombre: proveedor.nombre });
    if (setOpenDialog) setOpenDialog(false);
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLTableRowElement>,
    proveedor: Proveedor
  ) => {
    if (event.key === "Enter") {
      setProvider({ codigo: proveedor.codigo, nombre: proveedor.nombre });
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
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/3 py-2">Nombre</th>
              <th className="w-1/4 py-2">Código</th>
              <th className="w-1/4 py-2">Ciudad</th>
              <th className="w-1/4 py-2">Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {proveedores.map((proveedor, index) => (
              <tr
                key={index}
                className={`text-center ${
                  selectedRowIndex === index ? "bg-blue-400" : ""
                }`}
                onClick={() => handleRowClick(index)}
                onDoubleClick={() => handleRowDoubleClick(proveedor)}
                onKeyDown={(event) => handleKeyPress(event, proveedor)}
                tabIndex={0}
              >
                <td className="border px-4 py-2">{proveedor.nombre}</td>
                <td className="border px-4 py-2">{proveedor.codigo}</td>
                <td className="border px-4 py-2">{proveedor.ciudad || ""}</td>
                <td className="border px-4 py-2">{proveedor.telefono || ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProvidersTable;
