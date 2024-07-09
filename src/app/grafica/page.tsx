import BarChart from "../components/BarChartCustomers";
import SalesCard, { SalesCardProps } from "../components/SalesCards";

const TopCustomers = () => {
  const dataCards: SalesCardProps[] = [
    {
      percentage: 13.5,
      title: "Ventas",
      colorRed: false,
      rotateArrow: false,
    },
    {
      percentage: 3.5,
      title: "Gastos",
      colorRed: true,
      rotateArrow: false,
    },
    {
      percentage: 6.0,
      title: "Saldo bancario",
      colorRed: false,
      rotateArrow: false,
    },
    {
      percentage: 3.5,
      title: "Acreedores",
      rotateArrow: true,
      colorRed: false,
    },
  ];
  return (
    <section className="flex justify-center items-center w-[80%]">
      <BarChart />
      {dataCards.map((data, index) => (
        <SalesCard
          key={index}
          percentage={data.percentage}
          colorRed={data.colorRed}
          title={data.title}
          rotateArrow={data.rotateArrow}
        />
      ))}
    </section>
  );
};
export default TopCustomers;
