import Rellax from "rellax";
import React, { useEffect, useState } from "react";

export default function Hero({
  style,
  title,
  logo,
  logoAlt,
  image,
  imageAlt,
  rellaxCentering,
  randomizeImage = false
}) {
  const [randomIndex, setRandomIndex] = useState(-1);
  const bannerURLs = [
    "banner-1.jpg",
    "banner-2.jpg",
    "banner-3.jpg",
    "banner-4.jpg",
    "banner-5.jpg",
    "banner-6.jpg",
    "banner-7.jpg",
    "banner-8.jpg",
  ];
  const renderRandomBanner = () => {
    return randomIndex > -1 && `/portfolio-banners/${bannerURLs[randomIndex]}`;
  };
  const renderBanner = () => {
    return (!randomizeImage || randomIndex > -1) && (
      <img
        className="rellax"
        src={randomizeImage ? renderRandomBanner() : image}
        alt={imageAlt}
        data-rellax-percentage={rellaxCentering}
      />
    );
  }
  useEffect(() => {
    const random = Math.floor(Math.random() * bannerURLs.length);
    setRandomIndex(random);
    var rellax = new Rellax(".rellax", {
      // center: true,
    });
  }, []);
  return (
    <section className={"block hero " + style}>
      <div className="component-wrapper">
        <div className="row">
          <div className="col content">
            {logo && <img className="logo" src={logo} alt={logoAlt} />}
            <h1 className="title">{title}</h1>
          </div>
          <div className="col image">
            {renderBanner()}
          </div>
        </div>
      </div>
    </section>
  );
}
