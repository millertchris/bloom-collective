import Rellax from "rellax";
import React, { useEffect } from "react";

export default function Hero(props) {
  useEffect(() => {
    const rellax = new Rellax(".rellax", {});
  });
  return (
    <section className="block hero">
      <div className="component-wrapper">
        <div className="row">
          <div className="col content">
            <img className="logo" src={props.logo} alt={props.logoAltText} />
            <h1 className="title">{props.title}</h1>
          </div>
          <div className="col image rellax">
            <img src={props.background} alt={props.backgroundAltText} />
          </div>
        </div>
      </div>
    </section>
  );
}
