"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  phone,
  email,
  search,
  twitter,
  instagram,
  linkedin,
  youtube,
  language,
} from "../images/icons";
import Logo from "../public/aramico-Logo.png";
import Image from "next/image";

const links = [
  {
    name: "News",
    slug: "#a",
    dropdown: [
      { name: "News", slug: "/news" },
      { name: "Events", slug: "/events" },
    ],
  },
  {
    name: "About Us",
    slug: "#b",
    dropdown: [
      { name: "Company", slug: "#asdab" },
      { name: "History", slug: "#g" },
      { name: "Sustainability", slug: "#d" },
    ],
  },
  {
    name: "Fields of work",
    slug: "#g",
    dropdown: [
      {
        name: "Metallurgical Industry",
        slug: "#asdab",
        dropdownb: [
          { name: "Magnesium Ignot", slug: "#asdab" },
          { name: "Copper Cathode", slug: "#asdab" },
          { name: "Sponge Iron", slug: "#asdab" },
          { name: "Centrifugal Casting", slug: "#asdab" },
        ],
      },
      {
        name: "Mining Industry",
        slug: "#g",
        dropdownb: [
          { name: "Minerals calcination and roasting", slug: "#asdab" },
          {
            name: "Crushing, milling and material handling equipment",
            slug: "#asdab",
          },
          { name: "Concentration of minerals", slug: "#asdab" },
        ],
      },
      {
        name: "Renewable Energy",
        slug: "#d",
        dropdownb: [
          { name: "Wind Energy", slug: "#asdab" },
          { name: "Solar Energy", slug: "#asdab" },
          { name: "Hydro Energy", slug: "#asdab" },
        ],
      },
    ],
  },
  {
    name: "R&D",
    slug: "#d",
    dropdown: [
      { name: "Our Approach", slug: "#asdab" },
      { name: "R&D Projects", slug: "#g" },
    ],
  },
  {
    name: "Projects",
    slug: "#e",
    dropdown: [
      { name: "Magnesium Plant", slug: "/contact" },
      { name: "Calcination Plants", slug: "#g" },
      { name: "Copper Cathode Production Line", slug: "#a" },
      { name: "Calcined Alumina (Alpha) Plant", slug: "#a" },
      { name: "Electrofused Minerals Plant", slug: "#a" },
      { name: "Ammonium Sulfate Production Line", slug: "#a" },
      { name: "Fluidized bed Mineral Roasting plants", slug: "#a" },
      { name: "Briquetting Plants", slug: "#a" },
    ],
  },
  { name: "Career", slug: "#f" },
  { name: "Contact Us", slug: "/contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isScrolled, setisScrolled] = useState(false);

  const changeStyle = () => {
    setisScrolled(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeStyle);
    return () => {
      window.removeEventListener("scroll", changeStyle);
    };
  }, []);

  return (
    <header className="w-full fixed top-0 z-10 bg-white">
      <nav className="mx-auto flex justify-center shadow-lg py-5">
        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <div className="grid relative grid-rows-2 grid-flow-col">
            <Link href={"/"} className="grid content-center row-span-3 mr-20">
              <Image
                src={Logo}
                alt="logo"
                className={`object-contain justify-end duration-300  ${
                  isScrolled ? "w-40" : "w-56"
                }`}
              />
            </Link>

            <div className="text-[0.85rem] text-text font-light flex items-start gap-6 mt-[2px]">
              <span className="flex gap-1">
                <Image src={phone} width={15} alt="phone" />
                <Link href={"tel:02142167000"}>021-42167000</Link>
              </span>
              <span className="flex gap-1">
                <Image src={email} width={15} alt="email" />
                <Link href={"mailto:info@arami-co.com"}>info@arami-co.com</Link>
              </span>
            </div>

            <hr className={`mt-1 ${isScrolled ? "hidden" : ""}`} />

            <div className="absolute flex items-center gap-2 right-0">
              <Image src={search} width={13} alt="search" />
              <input
                type="search"
                id="default-search"
                className="w-44 h-5 text-xs text-gray-900 border border-gray-300"
                // placeholder="Search Mockups, Logos..."
              />
              <span className="flex items-center gap-4 pl-6">
                <Link href={"#"}>
                  <Image src={twitter} width={13} alt="twitter" />
                </Link>
                <Link href={"#"}>
                  <Image src={instagram} width={13} alt="instagram" />
                </Link>
                <Link href={"#"}>
                  <Image src={linkedin} width={15} alt="linkedin" />
                </Link>
                <Link href={"#"}>
                  <Image src={youtube} width={16} alt="youtube" />
                </Link>
                <span className="group">
                  <Image
                    src={language}
                    width={16}
                    alt="language"
                    className="cursor-pointer"
                  />
                  <ul className="bg-white border-b-4 border-primary drop-shadow-lg scale-0 group-hover:scale-100 py-1 -ml-6 z-10 absolute text-[0.9rem] text-text">
                    <li className="py-1 relative">
                      <Link href={"#"} className="hover:text-primary px-6">
                        English
                      </Link>
                    </li>
                    <li className="py-1 relative">
                      <Link href={"#"} className="hover:text-primary px-6">
                        Persian
                      </Link>
                    </li>
                  </ul>
                </span>
              </span>
            </div>

            <ul
              className={`hidden lg:flex gap-10 pr-20 text-[14px] text-text font-light leading-[30px] z-[2] ${
                isScrolled ? "pt-1" : ""
              }`}>
              {links.map((item) => (
                <li key={item.slug} className="group inline-block">
                  <Link href={item.slug} scroll={false} legacyBehavior>
                    <span className="group-hover:text-primary cursor-pointer min-w-max">
                      {item.name}
                    </span>
                  </Link>
                  <ul className="bg-white drop-shadow-lg scale-0 group-hover:scale-100 py-1 absolute origin-top -ml-4 w-32 min-w-max">
                    {item?.dropdown?.map((dropdown) => (
                      <li className="relative" key={dropdown.slug}>
                        <Link
                          className="w-full flex items-center outline-none focus:outline-none px-4 hover:text-primary"
                          href={dropdown.slug}>
                          {dropdown.name}
                        </Link>
                        <ul className="bg-white drop-shadow-lg py-1 absolute top-0 right-1 origin-top-left min-w-max">
                          {dropdown?.dropdownb?.map((dropdownb) => (
                            <li key={dropdownb.slug} className="relative">
                              <Link
                                href={dropdownb.slug}
                                className="px-4 hover:text-primary">
                                {dropdownb.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center mx-auto gap-[200px] lg:hidden z-[20]">
          <div className="grid grid-cols-4 gap-4">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
            <div className="col-span-2">05</div>
            <div className="col-span-2 flex justify-end">06</div>
          </div>

          {/* Logo */}
          {/* <Link href="/#top" className="z-10">
                        <Image src={Logo} alt="logo" className="w-60 md:w-[90px] object-contain" />
                    </Link>
                    <Image src="/menu.svg" width={100} height={100} alt="menu" onClick={() => setNav(true)} className="w-[24px] h-[24px] object-contain" /> */}

          {nav && (
            <div
              className={
                nav
                  ? "fixed right-0 top-0 w-[85%] z-20 h-full border-r border-r-gray-900 bg-[#000300] opacity-[85%]"
                  : "fixed right-[-100%]"
              }>
              <div
                onClick={() => setNav(false)}
                className="flex justify-end m-6">
                <Link href="/">
                  <Image
                    src="/close.svg"
                    alt="close"
                    className="w-[50px] h-[50px]"
                  />
                </Link>
              </div>
              <ul className="mt-6">
                {links.map((item) => (
                  <Link
                    key={item.slug}
                    href={item.slug}
                    scroll={false}
                    legacyBehavior>
                    <li
                      className="text-xl p-4 border-b border-gray-600 cursor-pointer"
                      onClick={() => setNav(false)}>
                      {item.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
