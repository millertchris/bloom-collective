import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _subheadline from "./layout/_subheadline";
import _pageTitle from "./layout/_pageTitle";
import _paragraph from "./layout/_paragraph";

export default function ImageGrid(props) {
  return (
    <section className="block image-grid">
      <_wrapper>
        <div className="row grid gap-6 md:grid-cols-2">
          <div className="image">
            <img
              src={props.imageOne}
              className="object-cover object-center w-full h-96"
            />
          </div>
          <div className="image">
            <img
              src={props.imageTwo}
              className="object-cover object-center w-full h-96"
            />
          </div>
          <div className="image">
            <img
              src={props.imageThree}
              className="object-cover object-center w-full h-96"
            />
          </div>
          <div className="image">
            <img
              src={props.imageFour}
              className="object-cover object-center w-full h-96"
            />
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
