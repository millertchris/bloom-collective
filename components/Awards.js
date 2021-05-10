import _wrapper from "./layout/_wrapper";
import _subheadline from "./layout/_subheadline";

export default function Awards(props) {
  return (
    <section className="block awards">
      <_wrapper>
        <div className="row text-center py-10">
          <div className="col">
            <_subheadline>{props.headline}</_subheadline>
          </div>
        </div>
        <div>{props.children}</div>
      </_wrapper>
    </section>
  );
}
