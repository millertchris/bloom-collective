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
  randomizeImage = false
}) {
  const bannerURLs = [
    "/portfolio-banners/gray-concrete-wall.jpg",
    "/portfolio-banners/greyscale-shot-facade-modern-building-with-dark-grey-walls.jpg",
    "/portfolio-banners/greyscale-shot-man-waiting-train-station-blurred-train-motion.jpg",
    "/portfolio-banners/greyscale-shot-old-building-with-wide-windows.jpg",
    "/portfolio-banners/greyscale-shot-unique-piece-architecture-perfect-creative-background.jpg",
    "/portfolio-banners/hirshhorn.jpg",
    "/portfolio-banners/looking-up.jpg",
    "/portfolio-banners/low-angle-shot-creative-modern-building-with-outstanding-architectural-twists.jpg",
    "/portfolio-banners/residential-building-facades-rotterdam-netherlands.jpg"
  ];
  const getRandomBanner = () => {
    const randomIndex = Math.floor(Math.random() * bannerURLs.length);
    return bannerURLs[randomIndex];
  };
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
              src={randomizeImage ? getRandomBanner() : image}
              alt={imageAlt}
              data-rellax-percentage={rellaxCentering}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
