import Rellax from "rellax";
import React, { useEffect } from "react";

export default function Hero({
  style,
  title,
  logo,
  logoAlt,
  image,
  imageAlt,
  rellaxCentering,
}) {
  useEffect(() => {
    var rellax = new Rellax(".rellax", {
      // center: true,
    });
  });
  return (
    <section className={"block hero " + style}>
      <div className="component-wrapper">
        <div className="row">
          <div className="col content">
            {logo && <img className="logo" src={logo} alt={logoAlt} />}
            <h1 className="title">{title}</h1>
          </div>
          <div className="col image">
            <img
              className="rellax"
              src={image}
              alt={imageAlt}
              data-rellax-percentage={rellaxCentering}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
