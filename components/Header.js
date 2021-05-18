import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header(props) {
  function clickHandler(event) {
    event.preventDefault();
    document.querySelector(".hamburger").classList.toggle("is-active");
    document.querySelector("nav").classList.toggle("is-active");
  }

  return (
    <header
      className={props.theme}
      data-aos={props.aos}
      data-aos-delay={props.aosDelay}
      data-aos-duration={props.aosDuration}
    >
      <div className="component-wrapper">
        <div className="row">
          <div className="col">
            <Link href="/">
              <a>
                <Image
                  width="120px"
                  height="100%"
                  src={props.logo}
                  alt="Bloom Co"
                  className="logo cursor-pointer"
                />
              </a>
            </Link>
          </div>
          <div className="col">
            <button
              className="hamburger hamburger--squeeze"
              onClick={clickHandler}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>

            <nav>
              <ul>
                <li>
                  <Link href="/about">About us</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
