import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _paragraph from "./layout/_paragraph";

export default function Testimonials(props) {
  return (
    <section className="block testimonials py-10">
      <_wrapper>
        <div className="row max-w-5xl mx-auto">
          <div className="col text-center mx-auto">
            <_headline>{props.headline}</_headline>
            {props.children}
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
