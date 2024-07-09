import ProductManagementPage from "../components/ProductManagementPage";

const Inventarios = () => {
  return (
    <section className="w-[85%]">
      <div className="py-10 flex flex-col gap-5 justify-center">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Inventarios
        </h1>
        <ProductManagementPage />
      </div>
    </section>
  );
};
export default Inventarios;
