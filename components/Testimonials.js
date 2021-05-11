import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _paragraph from "./layout/_paragraph";

export default function Testimonials(props) {
  return (
    <section className="block testimonials">
      <_wrapper>
        <div className="row">
          <div className="col flex flex-col justify-center">
            <_headline>{props.headline}</_headline>
            {props.children}
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
