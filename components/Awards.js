import _wrapper from "./layout/_wrapper";
import _subheadline from "./layout/_subheadline";

export default function Awards(props) {
  return (
    <section className="block awards py-16">
      <_wrapper>
        <div className="row text-center py-10 w-full">
          <div className="col w-full mx-auto">
            <_subheadline>{props.headline}</_subheadline>
          </div>
        </div>
        <div className="row max-w-6xl mx-auto">
          {props.children}
        </div>
      </_wrapper>
    </section>
  );
}
