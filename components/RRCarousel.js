import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel>
        <div>hello</div>
        <div>hi again </div>
        <div>is it working </div>
      </Carousel>
    </div>
  );
}
