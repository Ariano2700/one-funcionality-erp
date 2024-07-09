"use client";
import ComponentDashBoard from "./components/DashBoard";
import { motion } from "framer-motion";
import Reminders from "./components/Reminders";
import SalesCard, { SalesCardProps } from "./components/SalesCards";
import { useEffect } from "react";
import { usePrevSaleStore} from "@/store/usePrevSaleStore";
function HomePage() {
  const prevSale = usePrevSaleStore(state => state.prevSale)
  useEffect (() => {
    console.log(prevSale)
  },[prevSale])
  return (
    <section className="w-[95%] h-full flex flex-col p-5">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.3,
          ease: "easeInOut",
        }}
        className=""
      >
        <h1 className="text-[#232B35] text-3xl font-bold">Home</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.3,
          ease: "easeInOut",
        }}
        className="mt-8"
      >
        <h2 className="relative left-11 text-2xl font-bold text-black dark:text-white">
          Dashboard
        </h2>
      </motion.div>
      <article className="flex items-baseline">
        <div className="flex flex-col">
          <Reminders />
        </div>
        <ComponentDashBoard />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.3,
            ease: "easeInOut",
          }}
          className="relative top-5 bg-white p-5 rounded-3xl flex flex-col gap-5"
        >
          {dataCards.map((data, index) => (
            <SalesCard
              key={index}
              percentage={data.percentage}
              colorRed={data.colorRed}
              title={data.title}
              rotateArrow={data.rotateArrow}
            />
          ))}
        </motion.div>
      </article>
    </section>
  );
}

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
export default HomePage;
