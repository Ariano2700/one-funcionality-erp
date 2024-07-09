"use client";
import { useState } from "react";
import { PrevSaleI, usePrevSaleStore } from "@/store/usePrevSaleStore";
interface PrevSaleFolioProps {
  onClickOut?: () => void;
  setOpenDialog?: (open: boolean) => void;
  onPrevSaleSelect: (prevSale: PrevSaleI) => void;
  setPrevSaleData: (prevSale: PrevSaleI) => void;
}

const PrevSaleFolio = ({
  onClickOut,
  setOpenDialog,
  onPrevSaleSelect,
  setPrevSaleData,
}: PrevSaleFolioProps) => {
  const prevSale = usePrevSaleStore((state) => state.prevSale);

  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);

  const handleRowClick = (index: number) => {
    setSelectedRowIndex(index);
  };

  const handleRowDoubleClick = (prevSale: PrevSaleI) => {
    console.log("Double-clicked row:", prevSale);
    onPrevSaleSelect(prevSale);
    if (setOpenDialog) {
      setOpenDialog(false);
      setPrevSaleData(prevSale);
    }
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLTableRowElement>,
    prevSale: PrevSaleI
  ) => {
    if (event.key === "Enter") {
      console.log("Enter pressed on row:", prevSale);
      onPrevSaleSelect(prevSale);
      if (setOpenDialog) {
        setOpenDialog(false);
        setPrevSaleData(prevSale);
      }
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

        <table className="w-full">
          <thead className="bg-blue-600 text-white font-bold">
            <tr>
              <th className="py-2 px-4">Folio</th>
              <th className="py-2 px-4">Fecha</th>
              <th className="py-2 px-4">Proveedor</th>
              <th className="py-2 px-4">Importe</th>
            </tr>
          </thead>
          <tbody>
            {prevSale.map((prevSale, index) => (
              <tr
                key={index}
                className={`text-center ${
                  selectedRowIndex === index ? "bg-blue-400" : ""
                }`}
                onClick={() => handleRowClick(index)}
                onDoubleClick={() => handleRowDoubleClick(prevSale)}
                onKeyDown={(event) => handleKeyPress(event, prevSale)}
                tabIndex={0}
              >
                <td className="px-4 py-2">{prevSale.folio?.folioId}</td>
                <td className="px-4 py-2">{prevSale.fecha}</td>
                <td className="px-4 py-2"> {prevSale.provedor?.nombre}</td>
                <td className="px-4 py-2">S/{prevSale.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PrevSaleFolio;
