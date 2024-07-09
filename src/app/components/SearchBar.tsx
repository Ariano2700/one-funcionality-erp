import LsUser from "@/components/icons/ligature_symbols/LsUser";
import MaterialSymbolsCommentRounded from "@/components/icons/material_symbols/MaterialSymbolsCommentRounded";
import { MaterialSymbolsHelp } from "@/components/icons/material_symbols/MaterialSymbolsHelp";
import MaterialSymbolsSearch from "@/components/icons/material_symbols/MaterialSymbolsSearch";
import Image from "next/image";

const SearchBar = () => {
  return (
    <nav className="bg-[#F1F2F5] w-full flex justify-between py-2 px-8 items-center">
      {/* <h2 className="font-bold text-black">EmpresaXD</h2> */}
      <Image
      alt="cycLogo"
      src="/assets/logo cyc.jpg"
      width={250}
      height={150}
      />
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar"
          className="w-[450px] py-2 px-3 border"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-p500">
          <MaterialSymbolsSearch className="text-black text-2xl" />
        </span>
      </div>
      <div className="flex items-center justify-center text-[#232B35]">
        <ul className="flex gap-6 h-full">
          <li className="flex gap-1 items-center hover:bg-[#c3c4c9] py-4 px-2 rounded-md">
            <a className="flex gap-1 items-center" href="#">
              <MaterialSymbolsHelp className="text-xl"/> Ayuda
            </a>
          </li>
          <li className="flex gap-1 items-center hover:bg-[#c3c4c9] py-4 px-2 rounded-md">
            <a className="flex gap-1 items-center" href="#">
              <MaterialSymbolsCommentRounded className="text-xl"/>
              Feedback
            </a>
          </li>

          <li className="flex gap-1 items-center hover:bg-[#c3c4c9] py-4 px-2 rounded-md">
            <LsUser className="text-xl"/>
            <div className="flex flex-col">
              <a className="flex gap-1 items-center text-sm" href="#">
                Ariano Alban
              </a>
              <a href="#" className="text-gray-400 text-xs">
                ariano@example.com
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default SearchBar;
