import { motion } from "framer-motion";
const Reminders = () => {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.4,
        delay: 0.3,
        ease: "easeInOut",
      }}
      className="p-6 h-56 bg-white rounded-xl shadow-lg flex flex-row min-w-52 dark:bg-[#202528] "
    >
      <div className="">
        <h2 className="text-xl font-bold mb-4">Recordatorios</h2>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <span className="w-1  bg-blue-700 text-blue-700">.</span>
            <div className="">
              <p className="font-bold text-2xl">1</p>
              <p className="text-sm font-semibold text-blue-500">
                Ventas por aprobar
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="w-1  bg-orange-400 text-orange-400">.</span>
            <div className="">
              <p className="font-bold text-2xl">52</p>
              <p className="text-sm font-semibold text-blue-500">
                Nuevos clientes
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Reminders;
