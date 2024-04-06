"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

import {
  phone,
  email,
  search,
  twitter,
  instagram,
  linkedin,
  youtube,
  language,
  menu,
} from "../images/icons";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Logo from "../public/aramico-Logo.png";
import Image from "next/image";

const links = [
  {
    name: "News",
    slug: "/news",
    activated: false,
    dropdown: [
      { name: "News", slug: "/news", activated: true },
      { name: "Events", slug: "/events", activated: true },
    ],
  },
  {
    name: "About Us",
    slug: "/about-us",
    activated: false,
    dropdown: [
      { name: "Company", slug: "/about-us", activated: false },
      { name: "History", slug: "#g", activated: true },
      { name: "Sustainability", slug: "#d", activated: true },
    ],
  },
  {
    name: "Fields of work",
    slug: "#g",
    activated: true,
    dropdown: [
      {
        name: "Metallurgical Industry",
        slug: "#asdab",
        activated: true,
        dropdownb: [
          { name: "Magnesium Ignot", slug: "#asdab", activated: true },
          { name: "Copper Cathode", slug: "#asdab", activated: true },
          { name: "Sponge Iron", slug: "#asdab", activated: true },
          { name: "Centrifugal Casting", slug: "#asdab", activated: true },
        ],
      },
      {
        name: "Mining Industry",
        slug: "#g",
        activated: true,
        dropdownb: [
          {
            name: "Minerals calcination and roasting",
            slug: "#asdab",
            activated: true,
          },
          {
            name: "Crushing, milling and material handling equipment",
            slug: "#asdab",
            activated: true,
          },
          {
            name: "Concentration of minerals",
            slug: "#asdab",
            activated: true,
          },
        ],
      },
      {
        name: "Renewable Energy",
        slug: "#d",
        activated: true,
        dropdownb: [
          { name: "Wind Energy", slug: "#asdab", activated: true },
          { name: "Solar Energy", slug: "#asdab", activated: true },
          { name: "Hydro Energy", slug: "#asdab", activated: true },
        ],
      },
    ],
  },
  {
    name: "R&D",
    slug: "#d",
    activated: true,
    dropdown: [
      { name: "Our Approach", slug: "#asdab", activated: true },
      { name: "R&D Projects", slug: "#g", activated: true },
    ],
  },
  {
    name: "Projects",
    slug: "#e",
    activated: true,
    dropdown: [
      { name: "Magnesium Plant", slug: "/contact", activated: true },
      { name: "Calcination Plants", slug: "#g", activated: true },
      { name: "Copper Cathode Production Line", slug: "#a", activated: true },
      { name: "Calcined Alumina (Alpha) Plant", slug: "#a", activated: true },
      { name: "Electrofused Minerals Plant", slug: "#a", activated: true },
      { name: "Ammonium Sulfate Production Line", slug: "#a", activated: true },
      {
        name: "Fluidized bed Mineral Roasting plants",
        slug: "#a",
        activated: true,
      },
      { name: "Briquetting Plants", slug: "#a", activated: true },
    ],
  },
  { name: "Career", slug: "#f", activated: true },
  { name: "Contact Us", slug: "/contact", activated: false },
];

const Navbar = () => {
  const [isScrolled, setisScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [hidden, setHidden] = useState(false);

  const linkDeactivate = "pointer-events-none text-gray-400";

  const changeStyle = () => {
    setisScrolled(window.scrollY);
  };

  const mobileMenu = () => {
    setOpenMenu(!openMenu);
  };

  const hiddenDropdown = () => {
    setHidden(!hidden);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeStyle);
    return () => {
      window.removeEventListener("scroll", changeStyle);
    };
  }, []);

  return (
    <header className="w-full fixed top-0 z-30 bg-white">
      <nav className="mx-auto lg:flex justify-center shadow-md py-5">
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
                  <ul className="bg-white border-b-4 border-primary drop-shadow-lg scale-0 group-hover:scale-100 py-1 -ml-6 z-30 absolute text-[0.9rem] text-text">
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
                <li key={item.name} className="group/dropdown inline-block">
                  <Link href={item.slug} scroll={false} legacyBehavior>
                    <span
                      className={`group-hover:text-primary cursor-pointer min-w-max ${
                        item.activated ? linkDeactivate : ""
                      }`}>
                      {item.name}
                    </span>
                  </Link>
                  <ul
                    className={`${
                      !item?.dropdown && "hidden"
                    } bg-white drop-shadow-lg scale-0 group-hover/dropdown:scale-100 py-1 absolute -ml-4 w-32 min-w-max`}>
                    {item?.dropdown?.map((dropdown) => (
                      <li
                        className="relative group/dropdownb"
                        key={dropdown.name}>
                        <Link
                          className={`w-full flex items-center outline-none focus:outline-none px-4 hover:text-primary ${
                            dropdown.activated ? linkDeactivate : ""
                          }`}
                          href={dropdown.slug}>
                          {dropdown.name}
                        </Link>
                        <ul
                          className={`${
                            !dropdown?.dropdownb && "hidden"
                          } bg-white drop-shadow-lg scale-0 group-hover/dropdownb:scale-100 absolute left-[10.7rem] top-0 min-w-max`}>
                          {dropdown?.dropdownb?.map((dropdownb) => (
                            <li key={dropdownb.name} className="relative">
                              <Link
                                href={dropdownb.slug}
                                className={`px-4 hover:text-primary ${
                                  dropdownb.activated ? linkDeactivate : ""
                                }`}>
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
        <div className="lg:hidden mx-5">
          <div className="flex justify-between -mt-2">
            <Image src={phone} alt="phone" className="w-5 h-5" />
            <Image src={email} alt="email" className="w-5 h-5" />
            <Image src={search} alt="search" className="w-5 h-5" />
            <Image src={language} alt="language" className="w-5 h-5" />
          </div>
          <div className="grid grid-cols-2 mt-4">
            <div>
              <Link href={"/"}>
                <Image
                  src={Logo}
                  alt="logo"
                  className="object-contain duration-300 w-40"
                />
              </Link>
            </div>
            <div className="flex justify-end items-center">
              <Image
                onClick={mobileMenu}
                src={menu}
                alt="menu"
                className="w-5 h-5"
              />
            </div>
          </div>

          {openMenu && (
            <div
              style={{
                overflowY: "auto",
                maxHeight: "100vh",
              }}>
              <ul className="mt-4">
                <li>
                  {links.map((item) => (
                    <Accordion
                      style={{ boxShadow: "none", padding: "0", margin: "0" }}
                      key={links.name}>
                      <AccordionSummary
                        className="hover:bg-primary hover:text-white"
                        style={{ paddingBlock: "0" }}
                        expandIcon={item.dropdown ? <ExpandMoreIcon /> : null}>
                        <Link
                          href={item.slug}
                          className={`text-[16px] ${
                            item.activated ? linkDeactivate : ""
                          }`}>
                          {item.name}
                        </Link>
                      </AccordionSummary>
                      <AccordionDetails style={{ paddingBlock: "0" }}>
                        {item?.dropdown?.map((subItem) => (
                          <Accordion
                            key={subItem.name}
                            style={{
                              boxShadow: "none",
                              padding: "0",
                              margin: "0",
                            }}>
                            <AccordionSummary
                              style={{ padding: "0" }}
                              expandIcon={
                                subItem.dropdownb ? <ExpandMoreIcon /> : null
                              }>
                              <Link
                                href={subItem.slug}
                                className={`text-[16px] ${
                                  subItem.activated ? linkDeactivate : ""
                                }`}>
                                {subItem.name}
                              </Link>
                            </AccordionSummary>
                            <AccordionDetails style={{ paddingBlock: "0" }}>
                              {subItem?.dropdownb?.map((secSubItem) => (
                                <Accordion
                                  key={secSubItem.name}
                                  style={{ boxShadow: "none" }}>
                                  <AccordionSummary style={{ padding: "0" }}>
                                    <Link
                                      href={secSubItem.slug}
                                      className={`text-[16px] ${
                                        secSubItem.activated
                                          ? linkDeactivate
                                          : ""
                                      }`}>
                                      {secSubItem.name}
                                    </Link>
                                  </AccordionSummary>
                                </Accordion>
                              ))}
                            </AccordionDetails>
                          </Accordion>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

/*
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";

const nodes = {
  id: 1,
  name: "de Volksbank",
  children: [
    {
      id: 2,
      name: "dVb",
      children: [
        {
          id: 4,
          name: "Level",
          children: [
            { id: 6, name: "Level 13.3" },
            { id: 7, name: "Level 14.1" }
          ]
        },
        {
          id: 5,
          name: "VIS",
          children: [
            { id: 8, name: "Audascan" },
            { id: 9, name: "RDW" }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "ASN",
      children: [
        {
          id: 10,
          name: "Level",
          children: [
            { id: 11, name: "Level 13.3" },
            { id: 12, name: "Level 14.1" }
          ]
        },
        {
          id: 13,
          name: "VIS",
          children: [
            { id: 14, name: "Audascan" },
            { id: 15, name: "RDW" }
          ]
        }
      ]
    }
  ]
};

  { Mobile Menu }
  <div className="lg:hidden mx-5">
    <div className="flex justify-between">
      <Image src={phone} alt="phone" className="w-5 h-5" />
      <Image src={email} alt="email" className="w-5 h-5" />
      <Image src={search} alt="search" className="w-5 h-5" />
      <Image src={language} alt="language" className="w-5 h-5" />
    </div>
    <div className="grid grid-cols-2 mt-4">
      <div>
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="logo"
            className="object-contain duration-300 w-40"
          />
        </Link>
      </div>
      <div className="flex justify-end items-center">
        <Image onClick={mobileMenu} src={menu} alt="menu" className="w-5 h-5" />
      </div>
    </div>

    {openMenu && (
      <ul className="mt-4">
        <li>
          <Accordion style={{ boxShadow: 'none' }} key={nodes.id}>
            <AccordionSummary style={{ padding: '0' }} key={nodes.id}>
              <Typography>{nodes.name}</Typography>
            </AccordionSummary>
            <AccordionDetails key={nodes.id}>
              <Accordion>
                {nodes.children.map((c) => (
                  <>
                    <AccordionSummary key={c.id}>
                      <Typography key={c.id}>{c.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails key={c.id}></AccordionDetails>
                  </>
                ))}
              </Accordion>
            </AccordionDetails>
          </Accordion>
        </li>
      </ul>
    )}
  </div>
*/

/*

{openMenu && (
            <ul className="mt-4">
              {links.map((item) => (
                // LEVEL 1
                <li key={item.slug}>
                  <Link
                    href={item.slug}
                    scroll={false}
                    legacyBehavior
                  >
                    <li
                      onClick={hiddenDropdown}
                      className="flex gap-2 py-2 text-base"
                    >
                      <span>{item.name}</span>
                      {item?.dropdown && <span>▾</span>}
                    </li>
                  </Link>
                  <ul className='w-0'>
                    {item?.dropdown?.map((dropdown) => (
                      // LEVEL 2
                      <li key={dropdown.slug}>
                        <Link
                          className={!hidden ? 'hidden' : 'flex w-0'}
                          // className={`flex px-4`}
                          href={dropdown.slug}
                        >
                          {dropdown.name}
                        </Link>
                        <ul className="">
                          {dropdown?.dropdownb?.map((dropdownb) => (
                            // LEVEL 3
                            <li key={dropdownb.slug} className="">
                              <Link
                                href={dropdownb.slug}
                                className="flex"
                              >
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
              )}

*/
