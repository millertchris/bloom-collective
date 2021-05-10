import _wrapper from "./layout/_wrapper";
import _subheadline from "./layout/_subheadline";

<<<<<<< HEAD
export default function Clients() {
  return (
    <section className="block clients">
      <_wrapper>
        <div className="row text-center py-10">
          <div className="col">
            <_subheadline>We are an award-winning agency.</_subheadline>
          </div>
        </div>
        <div
          className="row
        flex flex-col place-items-center gap-4
        sm:flex-row sm:justify-between"
        >
          <div className="col flex flex-col justify-center">
            <img src="logo-marcom.svg" />
            <span className="font-bold text-center">2020 MarCom Award </span>
          </div>
          <div className="col flex flex-col justify-center">
            <img src="logo-marcom.svg" />
            <span className="font-bold text-center">2020 MarCom Award </span>
          </div>
          <div className="col flex flex-col justify-center">
            <img src="logo-summit.svg" />
            <span className="font-bold text-center">2020 Summit Creative Award </span>
          </div>
          <div className="col flex flex-col justify-center">
            <img src="logo-summit.svg" />
            <span className="font-bold text-center">2020 Summit Creative Award </span>
          </div>
          <div className="col flex flex-col justify-center">
            <img src="logo-marcom.svg" />
            <span className="font-bold text-center">2020 MarCom Award </span>
          </div>
          <div className="col flex flex-col justify-center">
            <img src="logo-marcom.svg" />
            <span className="font-bold text-center">2020 MarCom Award </span>
          </div>
        </div>
=======
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
>>>>>>> sam-bloom/dev
      </_wrapper>
    </section>
  );
}
