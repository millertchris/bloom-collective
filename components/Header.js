import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header(props) {
  useEffect(() => {
    function headerBackground() {
      const header = document.querySelector("header");
      window.onscroll = function (e) {
        console.log(window.scrollY); // Value of scroll Y in px

        if (window.scrollY >= 100) {
          console.log("yes");
          header.classList.add("header-fixed");
        } else {
          console.log("no");
          header.classList.remove("header-fixed");
        }
      };
    }

    headerBackground();
  });

  function clickHandler(event) {
    event.preventDefault();
    document.querySelector(".hamburger").classList.toggle("is-active");
    document.querySelector("nav").classList.toggle("is-active");
  }

  function pageTransition(event) {
    const mainWrapper = document.querySelector("body");
    mainWrapper.classList.add("transition");

    setTimeout(function () {
      mainWrapper.classList.remove("transition");
    }, 1000);
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
                <img className="logo" src={props.logo} alt="Bloom Collective" />
              </a>
            </Link>
          </div>
          <div className={props.menuButtonColor}>
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
                  <Link href="/about">
                    <a onClick={pageTransition}>About us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a onClick={pageTransition}>Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio">
                    <a onClick={pageTransition}>Portfolio</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a onClick={pageTransition}>Contact us</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
