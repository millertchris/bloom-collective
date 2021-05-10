import _wrapper from "./layout/_wrapper";
import _subheadline from "./layout/_subheadline";

<<<<<<< HEAD
export default function Clients() {
=======
export default function Clients(props) {
>>>>>>> sam-bloom/dev
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
<<<<<<< HEAD
            <_subheadline>Clients who trust us.</_subheadline>
          </div>
          <div className="col">
          <img src="logo-breakthrough.svg" />
          </div>
          <div className="col">
          <img src="logo-dbs.svg" />
          </div>
          <div className="col">
            <img src="logo-majid.svg" />
=======
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
>>>>>>> sam-bloom/dev
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
