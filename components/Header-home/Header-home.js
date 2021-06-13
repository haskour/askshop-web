import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MegaMenuItem from "../MegaMenuItem/MegaMenuItem";
export default function HeaderHome(props) {
  const [isMenuOpened, toggleMenu] = useState(false);

  return (
    <header className="border-b border-gray-200">
      <div className="max-w-screen-xl py-6 xl:py-0 w-full mx-auto">
        <div className="flex px-6 items-center">
          <a
            href="javascript:void(0);"
            className="font-bold uppercase text-lg tracking-widest"
          >
            askshop
          </a>

          {/* Desktop menuItems */}
          <ul className="hidden xl:flex ml-12">
            {props.items.map((item) => (
              <li className="mx-3" key={item.id}>
                <MegaMenuItem item={item} />
              </li>
            ))}
          </ul>
          <div className="ml-auto">
            <a href="javascript:void(0);" className="inline-block mx-2">
              <Image
                src="/icons/search.svg"
                alt="search"
                width={24}
                height={24}
              />
            </a>
            <a href="javascript:void(0);" className="inline-block mx-2">
              <Image
                src="/icons/shop.svg"
                alt="search"
                width={24}
                height={24}
                className="mx-2"
              />
            </a>
            <a
              onClick={() => toggleMenu(!isMenuOpened)}
              href="javascript:void(0);"
              className="inline-block xl:hidden ml-2"
            >
              <Image
                src="/icons/menu.svg"
                alt="search"
                width={24}
                height={24}
                className="mx-2"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menuItems */}
      <div
        className={`fixed inset-0 transform transition-opacity duration-300 ${
          isMenuOpened
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <div className="bg-black opacity-50 inset-0 absolute"></div>

        {/* className={`fixed inset-0 transition-all duration-200 transform ${
          isMenuOpened
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"
        }` */}
        <div
          className={`w-11/12 bg-white h-full absolute z-10 right-0 transform transition-all duration-300 ease-linear ${
            isMenuOpened ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            className="py-6 flex justify-end px-6"
            onClick={() => toggleMenu(!isMenuOpened)}
          >
            <a href="javascript:void(0);">
              <Image
                src="/icons/close.svg"
                alt="search"
                width={24}
                height={24}
                className="mx-2"
              />
            </a>
          </div>

          <div className="px-6 mt-2">
            <ul>
              {props.items.map((item) => (
                <li key={item.id}>
                  <Link href={item.to}>
                    <a className="text-xl tracking-wider inline-block my-3 text-gray-700 font-light">
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
