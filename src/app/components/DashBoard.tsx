import GraphicsChartJs from "@/components/graphics/Graphics";
import BiArrowUpCircleFill from "@/components/icons/bootstrap_icons/BiArrowUpCircleFill";
import { motion } from "framer-motion";
import Image from "next/image";

const ComponentDashBoard = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex-grow lg:p-6">
        <div className="grid grid-cols-1 xl lg:grid-cols-3 gap-6 p-4 ">
          <motion.div
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
            className="p-6 bg-white rounded-3xl shadow-lg flex flex-row min-w-60 dark:bg-[#202528]"
          >
            <div className=" w-1/2">
              <h2 className="text-xl font-bold mb-4 text-nowrap">Ingresos totales</h2>
              <p className="text-3xl font-semibold text-green-500">S/115,000</p>
            </div>
          </motion.div>

          <motion.div
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
            className="p-6 bg-white rounded-3xl  shadow-lg flex flex-row min-w-60 dark:bg-[#202528]"
          >
            <div className="w-1/2">
              <h2 className="text-xl font-bold mb-4">Gastos </h2>
              <p className="text-3xl font-semibold text-red-500">S/68,000</p>
            </div>
          </motion.div>

          <motion.div
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
            className="p-6 bg-white rounded-3xl  shadow-lg flex flex-row min-w-60 dark:bg-[#202528] "
          >
            <div className=" w-1/2">
              <h2 className="text-xl font-bold mb-4 text-nowrap">Beneficio Neto</h2>
              <p className="text-3xl font-semibold text-blue-500">S/47,000</p>
            </div>
          </motion.div>

          <motion.div
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
            className="bg-white dark:bg-[#202528] lg:col-span-3 rounded-3xl flex flex-col items-start shadow-xl"
          >
            <h1 className="mt-4 ml-4 text-2xl font-bold">Graficas 2023</h1>
            <div className="flex flex-col w-full p-8">
              <GraphicsChartJs />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.4,
              ease: "easeIn",
            }}
            className="lg:col-span-3 grid grid-cols-1  w-full gap-4  "
          >
            <div className="max-lg:col-span-1 lg:col-span-2 h-96 dark:text-black bg-white flex flex-col dark:bg-[#202528]  items-center shadow-xl p-8 rounded-3xl overflow-y-auto">
              <div className="flex flex-col w-full h-full p-4 space-y-4">
                <div className="flex items-start">
                  <Image
                    src="/assets/chatgptlogo.png"
                    alt="chatgpt"
                    width={32}
                    height={32}
                    className="rounded-full mr-2"
                  />
                  <div className="bg-gray-200 rounded-lg p-2">
                    <p className="text-sm">
                      ¡Hola! Soy ChatGPT. ¿En qué puedo ayudarte hoy?
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Image
                    src="/assets/chatgptlogo.png"
                    alt="chatgpt"
                    width={32}
                    height={32}
                    className="rounded-full mr-2"
                  />
                  <div className="bg-gray-200 rounded-lg p-2">
                    <p className="text-sm">¿Cómo puedo ayudarte hoy?</p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" max-h-32 flex items-center justify-center bg-white  rounded-3xl">
              <form className="p-6 rounded-md w-full bg-blue-50  ">
                <div className="relative flex items-center border border-gray-300 rounded-md">
                  <input
                    className="flex-grow p-2 border-none focus:ring-0 focus:outline-none"
                    placeholder="Envía un mensaje a ChatGPT..."
                    type="text"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-p500">
                    <BiArrowUpCircleFill className="text-[#a8aebb] text-2xl" />
                  </span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ComponentDashBoard;
