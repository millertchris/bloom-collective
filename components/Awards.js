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
        <div className="grid grid-cols-2 place-items-center gap-4 sm:grid-cols-3 md:grid-cols-6">
          {props.children}
        </div>
      </_wrapper>
    </section>
  );
}
