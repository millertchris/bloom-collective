import _wrapper from "./layout/_wrapper";
import _subheadline from "./layout/_subheadline";

export default function Clients(props) {
  return (
    <section className="block clients">
      <_wrapper>
        <div
          className="row
        flex flex-col place-items-center gap-4
        sm:flex-row sm:justify-between
        "
        >
          <div className="col">
            <_subheadline>{props.headline}</_subheadline>
          </div>
          <div className="col">
            <img src={props.logoOne} />
          </div>
          <div className="col">
            <img src={props.logoTwo} />
          </div>
          <div className="col">
            <img src={props.logoThree} />
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
