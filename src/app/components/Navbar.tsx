"use client";
import FaHome from "@/components/icons/font_awesome/FaHome";
import MaterialSymbolsArrowBackIos from "@/components/icons/material_symbols/MaterialSymbolsArrowBackIos";
import PhClockClockwise from "@/components/icons/phosphor/PhClockClockwise";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
interface navbarDataI {
  icon?: React.ReactNode;
  title?: string;
  children?: navbarDataI[];
  path?: string;
}
const navbarData: navbarDataI[] = [
  // { icon: <PhClockClockwise className="text-xl" /> },
  { icon: <FaHome />, path: "/" },
  { title: "Finanzas" },
  { title: "Servicio" },
  {
    title: "Operaciones",
    icon: <MaterialSymbolsArrowBackIos />,
    children: [
      { title: "Ventas", path: "ventas" },
      {
        title: "Compras",
        path: "compras",
        children: [{ title: "Proveedores", path: "proveedores" }],
      },
      { title: "Inventarios", path: "inventarios" },
      { title: "Puntos de venta", path: "puntos-de-venta" },
    ],
  },
  { title: "Contabilidad" },
  { title: "Nomina" },
  { title: "Clientes" },
  { title: "Recursos humanos" },
  { title: "Consultas" },
  { title: "Analiticas" },
  { title: "Documentos" },
];

const Navbar = () => {
  const router = useRouter();
  const [isActive, setisActive] = useState<Boolean>(false);
  const handleIsActive = () => {
    isActive === true ? setisActive(false) : setisActive(true);
  };

  const menuRef = useRef<HTMLLIElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setisActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#232B35] w-full p-3">
      <ul className="flex gap-3 items-center justify-center">
        <li
          onClick={() => router.back()}
          className="font-bold text-white hover:bg-[#427461] p-4 rounded-md transition-all duration-300 text-xs cursor-pointer"
        >
          <PhClockClockwise className="text-xl" />{" "}
        </li>
        {navbarData.map((item, index) =>
          item.children ? (
            <li
              className={
                isActive
                  ? "font-bold text-white bg-[#427461] p-4 rounded-md transition-all duration-300 text-xs cursor-pointer"
                  : "font-bold text-white hover:bg-[#427461] p-4 rounded-md transition-all duration-300 text-xs cursor-pointer"
              }
              key={index}
              ref={menuRef}
            >
              <div className="relative">
                <button
                  onClick={() => handleIsActive()}
                  className={
                    isActive ? "flex gap-1" : "flex items-center gap-1"
                  }
                >
                  {item.title}
                  <span
                    className={
                      isActive
                        ? "transition-all duration-300 -rotate-90"
                        : "transition-all duration-300 rotate-180"
                    }
                  >
                    {item.icon}
                  </span>
                </button>
                <ul
                  className={
                    isActive
                      ? "absolute w-36 bg-[#232B35] flex flex-col gap-2 top-10 rounded-xl text-center left-7"
                      : "hidden"
                  }
                >
                  {item.children.map((child, index) => (
                    <Link
                    key={912}
                      onClick={() => setisActive(false)}
                      href={`/${child.path}`}
                    >
                      <li
                        key={index}
                        className={
                          isActive
                            ? "text-white p-2 hover:bg-[#427461] rounded-xl"
                            : ""
                        }
                      >
                        {child.title}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </li>
          ) : (
            <Link key={123} href={item.path ? `/${item.path}` : ""}>
              <li
                className="font-bold text-white hover:bg-[#427461] p-4 rounded-md transition-all duration-300 text-xs cursor-pointer"
                key={index}
              >
                {item.title} {item.icon}
              </li>
            </Link>
          )
        )}
      </ul>
    </nav>
  );
};
export default Navbar;
