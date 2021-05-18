import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _paragraph from "./layout/_paragraph";
import Flickity from "react-flickity-component";

const flickityOptions = {
  initialIndex: 2,
  wrapAround: true,
};

export default function Testimonials(props) {
  return (
    <section className="block testimonials">
      <div className="component-wrapper">
        <div className="row">
          <div className="col">
            <h2 className="title">{props.headline}</h2>
            <Flickity
              className={"carousel"} // default ''
              elementType={"div"} // default 'div'
              options={flickityOptions} // takes flickity options {}
              disableImagesLoaded={false} // default false
              reloadOnUpdate // default false
              static // default false
            >
              {props.children}
            </Flickity>
          </div>
        </div>
      </div>
    </section>
  );
}
