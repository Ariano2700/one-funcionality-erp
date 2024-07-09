import { useWarehouseStore } from "@/store/useWarehouseStore";
import { useState } from "react";
import {
  warehouseListAOTC,
  warehouseListIHC,
  warehouseListMDC,
} from "@/data/warehouses";

export interface Warehouse {
  codigo: number;
  nombre?: string;
  direccion?: string;
}
export interface WarehouseProps {
  // warehouses: Warehouse[];
  onClickOut?: () => void;
  setOpenDialog?: (open: boolean) => void;
  getProviderId?: string;
  handleWarehouseSelect?: (warehouse: any) => void;
}
const WarehouseTable = ({
  getProviderId,
  // warehouses,
  onClickOut,
  setOpenDialog,
  handleWarehouseSelect
}: WarehouseProps) => {
  let switchWarehouse: Warehouse[] = [];
  switch (getProviderId) {
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

  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);

  const setWarehouse = useWarehouseStore((state) => state.setWarehouse);

  const handleRowClick = (index: number) => {
    setSelectedRowIndex(index);
  };

  const handleRowDoubleClick = (proveedor: Warehouse) => {
    if (getProviderId !== undefined)
      setWarehouse({ codigo: proveedor.codigo }, getProviderId);
    if (setOpenDialog) setOpenDialog(false);
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLTableRowElement>,
    warehouse: Warehouse
  ) => {
    if (event.key === "Enter") {
      if (getProviderId !== undefined)
        setWarehouse({ codigo: warehouse.codigo }, getProviderId);
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
              <th className="w-1/4 py-2">Código</th>
              <th className="w-1/3 py-2">Nombre</th>
              <th className="w-1/4 py-2">Ciudad</th>
            </tr>
          </thead>
          <tbody>
            {switchWarehouse.map((warehouse, index) => (
              <tr
                key={index}
                className={`text-center ${
                  selectedRowIndex === index ? "bg-blue-400" : ""
                }`}
                onClick={() => handleRowClick(index)}
                onDoubleClick={() => handleRowDoubleClick(warehouse)}
                onKeyDown={(event) => handleKeyPress(event, warehouse)}
                tabIndex={0}
              >
                <td className="border px-4 py-2">{warehouse.codigo}</td>
                <td className="border px-4 py-2">{warehouse.nombre}</td>
                <td className="border px-4 py-2">{warehouse.direccion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default WarehouseTable;
