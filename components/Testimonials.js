import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _paragraph from "./layout/_paragraph";

export default function Testimonials(props) {
  return (
    <section className="block testimonials">
      <_wrapper>
        <div className="row flex place-items-center gap-2 mx-auto max-w-4xl">
          <div className="col py-10 flex flex-col items-center justify-center">
            <_headline>{props.headline}</_headline>
            {props.children}
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
