import React, { useState, useRef } from "react";
import { useOnClickOutside } from "./hooks";
import Link from "next/link";
import Image from "next/image";
import _wrapper from "./layout/_wrapper";

function NavItem({ location, label }) {
  return (
    <li
      className="inline-block nav-item px-2 py-1 hover:text-yellow-300"
    >
      <Link href={location}>{label}</Link>
    </li>
  );
}

function Nav({ textColor, logoColor }) {
  const [isOpen, setOpen] = useState(false);
  const mobileRef = useRef();
  useOnClickOutside(mobileRef, () => setOpen(false));
  return (
    <header
      className="absolute top-0 left-0 w-full z-50      
      text-inherit"
    >
      <_wrapper>
        <div className="row flex justify-between items-center">
          <div className="col">
            <Link href="/">
              <a>
                <Image
                  width="160px"
                  height="100%"
                  src={logoColor}
                  alt="Bloom Co"
                  className="logo cursor-pointer"
                />
              </a>
            </Link>
          </div>
          <nav className={textColor}>
            {/* wide nav - row */}
            <div className="hidden md:block">
              <ul className="flex justify-between gap-6">
                <NavItem location="/about" label="About us" />
                <NavItem location="/services" label="Services" />
                <NavItem location="/portfolio" label="Portfolio" />
                <NavItem location="/contact" label="Contact Us" />
              </ul>
            </div>

            {/* mobile nav - column */}
            <div className="md:hidden">
              {isOpen ? (
                <ul
                  ref={mobileRef}
                  className="absolute top-40 left-0 z-50 w-full
                  flex flex-col gap-6
                  px-5 py-10
                  bg-black 
                  text-white text-center text-3xl"
                  onClick={() => setOpen(false)}
                >
                  <NavItem location="/about" label="About us" />
                  <NavItem location="/services" label="Services" />
                  <NavItem location="/portfolio" label="Portfolio" />
                  <NavItem location="/contact" label="Contact Us" />
                </ul>
              ) : (
                <button
                  onClick={() => setOpen(true)}
                  className="transition duration-400 ease-in
              transform hover:text-yellow-300"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="bars"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-8 h-8 svg-inline--fa fa-bars fa-w-14 fa-3x"
                  >
                    <path
                      fill="currentColor"
                      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                    ></path>
                  </svg>
                </button>
              )}
            </div>
          </nav>
        </div>
      </_wrapper>
    </header>
  );
}

export default Nav;
