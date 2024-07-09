"use client";
import getTimeFormated from "@/hooks/useGetTimeFormate";
import { useEffect, useState } from "react";
import ProductTable from "./Products";
import { FolioI, Product, randomFolios } from "@/data/products";
import ProvidersTable from "./ProvidersTable";
import { providersArray } from "./Providers";
import { useProviderStore } from "@/store/useProviderStore";
import { useWarehouseStore } from "@/store/useWarehouseStore";
import WarehouseTable from "./Warehouse";
import { Row } from "@/store/useCompraStore";
import { PrevSaleI, usePrevSaleStore } from "@/store/usePrevSaleStore";
import { useRouter } from "next/navigation";
type handleChange = (
  index: number,
  field: string,
  value: string | number
) => void;

const PrevCompra = () => {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState<Boolean>(false);
  const [providerDialog, setProviderDialog] = useState<boolean>(false);
  const [warehouseDialog, setWarehouseDialog] = useState<boolean>(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);
  const [randomFolio, setRandomFolio] = useState<FolioI>();

  const [rows, setRows] = useState<Row[]>([
    {
      cantidad: 0,
      articulo: "",
      descripcion: "",
      costo: 0.0,
    },
  ]);

  const setProviderNull = useProviderStore((state) => state.setNullProvider);
  const setWarehouseNull = useWarehouseStore((state) => state.setNullWarehouse);

  const setPrevSale = usePrevSaleStore((state) => state.setPrevSale);
  const prevSale = usePrevSaleStore((state) => state.prevSale);

  const provider = useProviderStore((state) => state.provider);
  const warehouse = useWarehouseStore((state) => state.warehouse);

  const handleRestPrevSale = () => {
    setProviderNull();
    setWarehouseNull();
    setRows([
      {
        cantidad: 0,
        articulo: "",
        descripcion: "",
        costo: 0.0,
      },
    ]);
  };

  const handleOpenDialog = (index: number) => {
    setSelectedRowIndex(index);
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleCloseProvider = () => {
    setProviderDialog(false);
  };

  const handleOpenProvider = () => {
    setProviderDialog(true);
  };

  const handleCloseWarehouse = () => {
    setWarehouseDialog(false);
  };

  const handleOpenWarehouse = () => {
    setWarehouseDialog(true);
  };

  const handleChange: handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index] = {
      ...updatedRows[index],
      [field]: value,
    };
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        cantidad: 0,
        articulo: "",
        descripcion: "",
        costo: 0.0,
      },
    ]);
  };

  const handleProductSelect = (product: Product) => {
    if (selectedRowIndex !== null) {
      const updatedRows = [...rows];
      updatedRows[selectedRowIndex] = {
        ...updatedRows[selectedRowIndex],
        articulo: product.codigo.toString(),
        descripcion: product.description ?? "",
        costo: product.precio ?? 0.0,
      };
      setRows(updatedRows);
      setOpenDialog(false);
    }
  };

  const SubTotIVG = () => {
    let subTotal = 0;
    let ivg = 0;
    let total = 0;
    rows.forEach((row) => {
      const importe = row.costo * row.cantidad;
      subTotal += importe;
      ivg = subTotal * 0.18;
      total = subTotal + ivg;
    });
    return { subTotal, ivg, total };
  };

  const getRandomFolio = () => {
    const usedFolios = new Set(prevSale.map((sale) => sale.folio?.folioId));
    const availableFolio = randomFolios.find((f) => !usedFolios.has(f.folioId));

    availableFolio
      ? setRandomFolio(availableFolio)
      : console.error("No available folios.");
  };
  const savePrevSale = () => {
    const data: PrevSaleI = {
      prevCompra: rows,
      provedor: provider,
      almacen: warehouse,
      fecha: getTimeFormated().dayFormated,
      subTotal: SubTotIVG().subTotal,
      ivg: SubTotIVG().ivg,
      total: SubTotIVG().total,
      folio: randomFolio,
    };
    setPrevSale(data);
    console.log(data);
    router.push("/compras");
  };

  return (
    <section className="p-4 border border-gray-300 rounded-lg w-full mx-auto font-sans">
      <h2 className="text-red-500 uppercase font-bold text-2xl">
        Previo de compra
      </h2>
      <div className="mt-4 font-bold flex justify-between items-center w-3/4">
        <div className="flex flex-col gap-5">
          <p className="flex gap-5">
            Folio:
            <span className="font-normal">
              <input
                value={randomFolio?.folioId}
                onKeyDown={() => getRandomFolio()}
                onClick={() => getRandomFolio()}
                className="bg-transparent"
                type="text"
              />
            </span>
          </p>
          <div className="flex gap-2">
            <p>Prov:</p>
            <input
              value={provider?.codigo}
              onKeyDown={() => handleOpenProvider()}
              onClick={() => handleOpenProvider()}
              type="text"
              className="bg-transparent w-32 font-normal"
            />
            <p className="font-normal">{provider?.nombre}</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p>{getTimeFormated().dayFormated}</p>
          <div className="flex gap-2">
            <p>Almacen:</p>
            <input
              value={warehouse?.codigo}
              onKeyDown={() => handleOpenWarehouse()}
              onClick={() => handleOpenWarehouse()}
              type="text"
              className="bg-transparent w-32 font-normal"
            />
            <p className="font-normal">{warehouse?.nombre}</p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <table className="w-full">
          <thead className="bg-blue-600 text-white font-bold">
            <tr>
              <th className="py-2 px-4 text-left">Cantidad</th>
              <th className="py-2 px-4 text-left">Articulo</th>
              <th className="py-2 px-10 text-left">Descripción</th>
              <th className="py-2 px-4 text-left">Costo</th>
              <th className="py-2 px-4 text-left">Importe</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2">
                  <input
                    value={row.cantidad}
                    onChange={(e) =>
                      handleChange(index, "cantidad", e.target.value)
                    }
                    className="bg-transparent w-20"
                    type="text"
                    name="cantidad"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    onKeyDown={() => handleOpenDialog(index)}
                    onClick={() => handleOpenDialog(index)}
                    value={row.articulo}
                    onChange={(e) =>
                      handleChange(index, "articulo", e.target.value)
                    }
                    className="bg-transparent w-20"
                    type="text"
                    name="articulo"
                  />
                </td>
                <td className="px-10 py-2">{row.descripcion}</td>
                <td className="px-4 py-2">S/{row.costo.toFixed(2)}</td>
                <td className="px-4 py-2">
                  S/{(row.cantidad * row.costo).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full p-5 flex items-center text-end">
          <div className="w-full p-2 flex flex-col font-bold">
            <p>Subtotal: S/{SubTotIVG().subTotal}</p>
            <p>I.G.V: S/{SubTotIVG().ivg}</p>
            <p>Total: S/{SubTotIVG().total}</p>
          </div>
        </div>
        <div className="flex gap-5 w-full justify-between">
          <button
            className="transition-all duration-300 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
            onClick={handleAddRow}
          >
            Agregar
          </button>
          <div className="flex gap-8">
            <button
              className="transition-all duration-300 mt-4 bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-6 rounded"
              onClick={handleRestPrevSale}
            >
              Restaurar
            </button>
            <button
              className="transition-all duration-300 mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
              onClick={savePrevSale}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
      {openDialog && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <ProductTable
            getProviderId={provider?.codigo}
            onProductSelect={handleProductSelect}
            setOpenDialog={() => setOpenDialog(false)}
            onClickOut={handleClose}
          />
        </div>
      )}
      {providerDialog && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <ProvidersTable
            setOpenDialog={() => setProviderDialog(false)}
            onClickOut={handleCloseProvider}
            proveedores={providersArray}
          />
        </div>
      )}
      {warehouseDialog && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <WarehouseTable
            setOpenDialog={() => setWarehouseDialog(false)}
            onClickOut={handleCloseWarehouse}
            getProviderId={provider?.codigo}
          />
        </div>
      )}
    </section>
  );
};

export default PrevCompra;
