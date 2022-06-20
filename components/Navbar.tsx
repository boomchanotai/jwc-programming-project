import { RefObject, useEffect, useState } from "react";
import type { FunctionComponent } from "react";
import useScrollPosition from "@react-hook/window-scroll";
import Link from "next/link";
import Image from "next/image";

interface Props {
  reference: {
    hero: RefObject<HTMLDivElement>;
    about: RefObject<HTMLDivElement>;
    review: RefObject<HTMLDivElement>;
    contact: RefObject<HTMLDivElement>;
  };
}

const Navbar: FunctionComponent<Props> = ({ reference }: Props) => {
  const menus = [
    {
      name: "เกี่ยวกับหมอหมึก",
      component: reference.about,
    },
    {
      name: "บทความ",
      component: reference.review,
    },
    {
      name: "จองคิว",
      component: reference.hero,
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);
  const scrollY = useScrollPosition(60 /*fps*/);

  useEffect(() => {
    if (scrollY >= 20) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  }, [scrollY]);

  const handleScroll = (element: RefObject<HTMLDivElement>) => {
    element.current?.scrollIntoView();
    setOpenMenu(!openMenu);
  };

  return (
    <div
      className={`sticky top-0 z-50 ${
        navbarBg || openMenu ? "bg-midnight" : ""
      } bg-opacity-70 transition-all duration-200 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between items-center border-b border-white">
        <div className="my-4">หมอหมึก</div>
        <div className="hidden md:flex flex-row">
          {menus.map((menu, i) => (
            <button
              onClick={() => handleScroll(menu.component)}
              key={i}
              className="mx-8 my-4 cursor-pointer outline-none"
            >
              {menu.name}
            </button>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="text-white border border-white flex flex-col justify-center items-center p-1 rounded-lg outline-none"
          >
            {openMenu ? (
              <Image src="/close.svg" alt="menu" width={20} height={20} />
            ) : (
              <Image src="/menu.svg" alt="menu" width={20} height={20} />
            )}
          </button>
        </div>
      </div>
      {openMenu && (
        <div className="absolute md:hidden top-full w-full bg-midnight bg-opacity-70 transition-all duration-200 ease-in-out">
          {menus.map((menu, i) => (
            <div
              onClick={() => handleScroll(menu.component)}
              key={i}
              className="px-8 py-4 hover:bg-white hover:bg-opacity-10 transition-all duration-150"
            >
              {menu.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
