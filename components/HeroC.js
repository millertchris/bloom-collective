import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _subheadline from "./layout/_subheadline";
import _pageTitle from "./layout/_pageTitle";
import _paragraph from "./layout/_paragraph";
import Rellax from "rellax";
import React, { useEffect } from "react";

export default function HeroC(props) {
  useEffect(() => {
    const rellax = new Rellax(".rellax", {
      center: true,
    });
  });
  return (
    <section className="block hero-c">
      <_wrapper>
        <div className="row pt-32 pb-10">
          <div className="col">
            <_pageTitle>{props.headline}</_pageTitle>
          </div>
        </div>
        <div className="row">
          <div className="col h-500 overflow-hidden">
            <img
              src={props.image}
              className="w-full h-full object-center object-cover rellax overflow-hidden"
            />
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
