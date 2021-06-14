import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import {} from "../MegaMenuItem/MegaMenuItem";

export default function MegaMenuItem(props) {
  const [isMenuOpened, toggleMenuItem] = useState(false);

  return (
    <div
      className="relative"
      onMouseOver={() => toggleMenuItem(!isMenuOpened)}
      onMouseOut={() => toggleMenuItem(!isMenuOpened)}
    >
      <Link href={props.item.to}>
        <a className="tracking-wider inline-flex items-center py-9 text-black font-light text-sm">
          <span className="font-medium">{props.item.name}</span>

          {props.item.subMenu ? (
            <span className="inline-flex items-center ml-3">
              <Image
                src="/icons/arrow-down.svg"
                alt="search"
                width={16}
                height={16}
              />
            </span>
          ) : (
            <></>
          )}
        </a>
      </Link>

      {props.item.subMenu ? (
        <div
          className={`absolute p-6 bg-white border-l-5 border-black shadow-lg left-0 transition-all duration-400 ease-in transform ${
            isMenuOpened ? "opacity-100" : "opacity-0"
          }`}
          style={{ minWidth: 400 }}
        >
          <div className="flex">
            <div className="w-1/2">
              <span className="uppercase text-xs text-gray-400 inline-block mb-2 font-medium">
                category
              </span>
              <ul>
                {props.item.subMenu.map((item, key) => (
                  <li key={key}>
                    <Link href={props.item.to}>
                      <a className="tracking-wider inline-block my-2 text-black font-medium text-sm">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/2">
              <span className="uppercase text-xs text-gray-400 inline-block mb-2 font-medium">
                test category
              </span>
              <ul>
                {props.item.subMenu.map((item, key) => (
                  <li key={key}>
                    <Link href={props.item.to}>
                      <a className="tracking-wider inline-block my-2 text-black font-medium text-sm">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
