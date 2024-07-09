"use client";
import getTimeFormated from "@/hooks/useGetTimeFormate";
import { useEffect, useState } from "react";
import { FolioI, randomFoliosOrden } from "@/data/products";
import { useProviderStore } from "@/store/useProviderStore";
import { useWarehouseStore } from "@/store/useWarehouseStore";
import { Row } from "@/store/useCompraStore";
import { PrevSaleI } from "@/store/usePrevSaleStore";
import {
  PurchaseOrderI,
  usePurchaseOrderStore,
} from "@/store/usaePurcOrderStore";
import PrevSaleFolio from "./PrevSaleFolio";
import { Proveedor } from "./ProvidersTable";
import { Warehouse } from "./Warehouse";
import { useRouter } from "next/router";
type handleChange = (
  index: number,
  field: string,
  value: string | number
) => void;

const PurchaseOrder = () => {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);
  const [ordenFolio, setOrdenFolio] = useState<FolioI>();
  const [prevSaleData, setPrevSaleData] = useState<PrevSaleI>();

  const [providerState, setProviderState] = useState<Proveedor | null>(null); // Estado para el proveedor seleccionado
  const [warehouseState, setWarehouseState] = useState<Warehouse | null>(null); // Estado para el almacén seleccionado

  useEffect(() => {
    if (openDialog) {
      setOpenDialog(false);
    }
  }, [prevSaleData]);

  const [rows, setRows] = useState<Row[]>([
    {
      cantidad: 0,
      articulo: "",
      descripcion: "",
      costo: 0.0,
    },
  ]);

  const purchaseOrder = usePurchaseOrderStore((state) => state.purchaseOrder);
  const setPurchaseOrder = usePurchaseOrderStore(
    (state) => state.setPurchaseOrder
  );
  const provider = useProviderStore((state) => state.provider);
  const warehouse = useWarehouseStore((state) => state.warehouse);

  // const handleOpenDialog = (index: number) => {
  //   setSelectedRowIndex(index);
  //   setOpenDialog(true);
  // };

  const handleClose = () => {
    setOpenDialog(false);
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

  const handlePurchaseOrderSelect = (selectedPrevSale: PrevSaleI) => {
    // Actualizar el estado de las filas con los datos de prevCompra
    const newRows: Row[] = selectedPrevSale.prevCompra.map((item) => ({
      cantidad: item.cantidad, // Convertir a número
      articulo: item.articulo,
      descripcion: item.descripcion,
      costo: item.costo, // Convertir a número decimal
    }));

    setRows(newRows); // Actualizar el estado de las filas
    setOrdenFolio(selectedPrevSale.folio); // Actualizar el folio de la orden
    setProviderState(selectedPrevSale.provedor); // Actualizar el proveedor
    setWarehouseState(selectedPrevSale.almacen); // Actualizar el almacén
    setOpenDialog(false); // Cerrar el diálogo
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

  const getOrdenFolio = () => {
    const usedFolios = new Set(purchaseOrder.map((sale) => sale.folio));
    const availableFolio = randomFoliosOrden.find(
      (f) => !usedFolios.has(f.folioId)
    );

    availableFolio
      ? setOrdenFolio(availableFolio)
      : console.error("No available folios.");
  };

  const savePurchaseOrden = () => {
    const data: PurchaseOrderI = {
      purchaseOrder: rows,
      provedor: provider,
      almacen: warehouse,
      fecha: getTimeFormated().dayFormated,
      subTotal: SubTotIVG().subTotal,
      ivg: SubTotIVG().ivg,
      total: SubTotIVG().total,
      folio: ordenFolio?.folioId,
    };
    setPurchaseOrder(data);
    console.log(data);
    router.push("/inventarios");
  };

  return (
    <section className="p-4 border border-gray-300 rounded-lg w-full mx-auto font-sans">
      <h2 className="text-red-500 uppercase font-bold text-2xl">
        Orden de compra
      </h2>
      <div className="mt-4 font-bold flex justify-between items-center w-3/4">
        <div className="flex flex-col gap-5">
          <p className="flex gap-5">
            Folio:
            <span className="font-normal">
              <input
                value={ordenFolio?.folioId}
                onKeyDown={getOrdenFolio}
                onClick={getOrdenFolio}
                className="bg-transparent"
                type="text"
              />
            </span>
          </p>
          <p className="flex gap-5">
            Ref:
            <span className="font-normal">
              <input
                value={
                  prevSaleData?.folio !== undefined
                    ? String(prevSaleData?.folio.folioId)
                    : ""
                }
                onKeyDown={() => setOpenDialog(true)}
                onClick={() => setOpenDialog(true)}
                className="bg-transparent"
                type="text"
              />
            </span>
          </p>
          <div className="flex gap-2">
            <p>Prov:</p>
            <input
              value={
                prevSaleData?.provedor !== undefined
                  ? String(prevSaleData?.provedor?.codigo)
                  : ""
              }
              type="text"
              className="bg-transparent w-32 font-normal"
            />
            <p className="font-normal">
              {prevSaleData?.provedor !== undefined
                ? String(prevSaleData?.provedor?.nombre)
                : ""}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p>{getTimeFormated().dayFormated}</p>
          <p className="flex gap-3">
            Ref:
            <span className="font-normal">
              {prevSaleData?.fecha !== undefined
                ? String(prevSaleData?.fecha)
                : ""}
            </span>
          </p>
          <div className="flex gap-2">
            <p>Almacen:</p>
            <input
              value={
                prevSaleData?.almacen !== undefined
                  ? String(prevSaleData?.almacen?.codigo)
                  : ""
              }
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
        <div className="flex gap-5 w-full justify-end">
          <button
            className="transition-all duration-300 mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
            onClick={savePurchaseOrden}
          >
            Comprar
          </button>
        </div>
      </div>
      {openDialog && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <PrevSaleFolio
            onPrevSaleSelect={handlePurchaseOrderSelect}
            onClickOut={() => handleClose()}
            setOpenDialog={() => setOpenDialog(true)}
            setPrevSaleData={setPrevSaleData}
          />
        </div>
      )}
    </section>
  );
};

export default PurchaseOrder;
