import React, { useEffect } from 'react';
import _wrapper from "./layout/_wrapper";
import _paragraph from "./layout/_paragraph";
import _pageTitle from "./layout/_pageTitle";
import Rellax from "rellax";

export default function HeroB(props) {
 useEffect(() => {
  const rellax = new Rellax('.rellax', {
    center:true,
  }); 
 });

  return (
    <section className="block hero-b overflow-x-hidden">
      <_wrapper>
        <div className="row max-w-xl mx-auto pt-40 pb-10">
          <div className="col flex flex-col justify-end items-center">
            <_pageTitle>
              <span className="line-yellow text-yellow-300 inline-block">
                {props.headlineUnderline}
              </span>{" "}
              {props.headlineNoUnderline}
            </_pageTitle>
            <p className="py-5 text-center">{props.text}</p>
          </div>
        </div>
        <div className="row">
          <div className="col full-width h-500 overflow-hidden">
            <img
              className="object-cover object-center w-full h-full rellax overflow-hidden"
              src={props.photo}
            />
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
