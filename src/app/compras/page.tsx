import Link from "next/link";

const ComprasPage = () => {
  return (
    <section className="w-[85%]">
      <div className="py-10 flex gap-5 justify-center">
        <Link href={"/compras/previo-compra"}>
          <p className="min-w-40 p-3 rounded-md bg-[#232B35] hover:bg-[#427461] text-white  transition-all duration-300  cursor-pointer text-center">
            Previo de compra
          </p>
        </Link>
        <Link href={"/compras/orden-compra"}>
          <p className="min-w-40 p-3 rounded-md bg-[#232B35] hover:bg-[#427461] text-white  transition-all duration-300  cursor-pointer text-center">
            Orden de compra
          </p>
        </Link>
        <p className="min-w-40 p-3 rounded-md bg-[#232B35] hover:bg-[#427461] text-white  transition-all duration-300  cursor-pointer text-center">
          Remision{" "}
        </p>
        <p className="min-w-40 p-3 rounded-md bg-[#232B35] hover:bg-[#427461] text-white  transition-all duration-300  cursor-pointer text-center">
          Factura
        </p>
      </div>
    </section>
  );
};
export default ComprasPage;
